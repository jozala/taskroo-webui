app.directive("quickEdit", function() {
    return {
        restrict: 'A',
        require: "?ngModel",
        link: function(scope, element, attrs, ngModel) {
            var internalElement = element.find(".cell-content");
            ngModel.$render = function() {
                internalElement.html(ngModel.$viewValue || '');
            };

            internalElement.dblclick(function() {
                $(this).attr("contentEditable", "true");
                $(this).focus();

            });

            internalElement.bind('keydown', function(event) {
                var keycode = (event.keyCode ? event.keyCode : event.which);
                if (keycode === 13) { // ENTER
                    $(this).attr("contentEditable", "false");
                    $(this).blur();
                    event.preventDefault();
                    scope.$apply(read);
                }
                if (keycode === 27) { // ESCAPE
                    internalElement.html(ngModel.$viewValue);
                    $(this).attr("contentEditable", "false");
                    $(this).blur();
                }
            });

            function read() {
                var html = internalElement.html();
                ngModel.$setViewValue(html);
            }
        }
    };
    // TODO magic input nie działa w szybkiej edycji ?!?! Feature or bug?
});

app.directive('focusElement', function ($timeout) {
    return {
        link: function (scope, element) {
            $timeout(function () {
                element[0].focus();
            }, 50);
        }
    };
});

app.directive('draggable', function () {
    return {
        link: function (scope, element, attrs) {
            element.draggable({
                revert: "invalid",
                start: function(event, ui) {
                    scope.setDraggedTask(scope.$eval(attrs.draggable));
                    element.css("z-index", 1000);
                },
                stop: function(event, ui) {
                    element.css("z-index", 0);
                }
            });
        }
    }
});

app.directive('droppable', function ($log) {
    return {
        link: function (scope, element, attrs) {
            var droppableValues = scope.$eval(attrs.droppable);
            element.droppable({
                accept: function(draggable) {
                    return draggable.hasClass("row")
                        &&
                        ((droppableValues.targetCollection == null && draggable.parents('.subtasks').length != 0)
                          ||
                          (droppableValues.targetCollection != null
                          && droppableValues.targetCollection.indexOf(scope.draggedTask) < 0
                          && draggable != element)
                        );
                },
                hoverClass: "drop-hover",
                greedy: true,
                drop: function(event,ui) {
                    droppableValues.onDrop(scope.draggedTask, droppableValues.target);
                }
            });
        }
    }
});

app.directive('dateInput', function (dateFilter) {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ngModelCtrl) {
            ngModelCtrl.$formatters.push(function (modelValue) {
                return new Date(modelValue);
            });

            ngModelCtrl.$parsers.push(function (viewValue) {
                if (moment(new Date(viewValue).valueOf()).isValid()) {
                    return new Date(viewValue).valueOf();
                }
                return null;
            });
        }
    };
});

// TODO startDate and dueDate is not correctly displayed in edit modal window when set
var EditTaskModalCtrl = function($scope, $modalInstance, task, dateFilter) {
    $scope.task = angular.copy(task);

    var tags = "";
    $scope.task.tags.forEach(function(tag) {
        tags += tag.name + " ";
    });
    $scope.task.tags = tags;

    $scope.ok = function(changedTask) {
        updateTaskWithData(task, changedTask);
        $modalInstance.close(task);
    };

    $scope.cancel = function() {
        $modalInstance.dismiss();
    };

    var updateTaskWithData = function(originalTask, changedTask) {
        originalTask.title = changedTask.title;
        originalTask.description = changedTask.description;
        originalTask.startDate = changedTask.startDate;
        originalTask.dueDate = changedTask.dueDate;
        var tagsNames = changedTask.tags.split(" ");
        originalTask.tags = [];

        tagsNames.forEach(function(tagName) {
            if (!isBlank(tagName)) {
                originalTask.tags.push({"name": tagName.replace("/\\s*/g", "")});
            }
        });

        function isBlank(str) {
            return (!str || /^\s*$/.test(str));
        }

    };

};

var CreateSubtaskModalCtrl = function($scope, $modalInstance) {
    $scope.ok = function(newSubtaskContent) {
        $modalInstance.close(newSubtaskContent);
    };

    $scope.cancel = function() {
        $modalInstance.dismiss();
    };
};

function TasksCtrl($scope, TasksService, TagsService, SearchService, TagsFilteringService, $modal, $log) {
    TasksService.service.query(function(result) {TasksService.tasks = result; $scope.tasks = TasksService.tasks});
    $scope.search = SearchService;
    $scope.tagFilter = TagsFilteringService;
    $scope.workview = false;
    $scope.showUnfinished = true;
    $scope.tasksOrderPredicate = "dueDate";

    $scope.searchTask = function(task) {
        return searchInTaskAndSubtasks(task, $scope.search.searchString.toLowerCase());
    };

    var searchInTaskAndSubtasks = function(task, searchPhrase) {
        if (task.finished == $scope.showUnfinished) return false;
        if (task.title.toLowerCase().indexOf(searchPhrase) != -1 ||
            (task.description != null && task.description.toLowerCase().indexOf(searchPhrase) != -1)) {
            return true;
        }
        if (task.subtasks.length == 0) return false;
        return task.subtasks.some(function(task) {return searchInTaskAndSubtasks(task, searchPhrase)})
    };


    var filterTasksByTag = function(tasks, tagToFilter) {
        return tasks.reduce(function(previousValue, currentTask) {
            if (currentTask.tags.some(function(taskTag) {return taskTag.id == tagToFilter.id})) {
                return previousValue.concat(currentTask);
            }
            return previousValue.concat(filterTasksByTag(currentTask.subtasks, tagToFilter));
        }, []);
    };

    var filterTasksWithNoTag = function(tasks) {
        return tasks.reduce(function(previousValue, currentTask) {
            if (currentTask.tags.length == 0) {
                return previousValue.concat(currentTask);
            }
            return previousValue.concat(filterTasksWithNoTag(currentTask.subtasks));
        }, []);
    };

    $scope.$watch('workview', function(workViewValue) {
        if (workViewValue) {
            $scope.tasks = getWorkViewTasks($scope.tasks);
        } else {
            $scope.tasks = TasksService.tasks;
        }
    });

    $scope.$watch('tagFilter.selectedTag', function(newSelectedTag) {
        if (newSelectedTag === "ALL") {
            $scope.tasks = TasksService.tasks;
        } else if (newSelectedTag == "NONE") {
            $scope.tasks = filterTasksWithNoTag(TasksService.tasks);
        } else {
            $scope.tasks = filterTasksByTag(TasksService.tasks, newSelectedTag);
        }
    });

    var getWorkViewTasks = function (tasks) {
        return tasks.reduce(function(previousValue, currentTask) {
            if (currentTask.subtasks.length == 0 && currentTask.tags.some(function(tag) {return tag.visibleInWorkView})) {
                return previousValue.concat(currentTask);
            }
            return previousValue.concat(getWorkViewTasks(currentTask.subtasks));
        }, []);
    };

    var getFinishedTasks = function(tasks) {
        return tasks.reduce(function(previousValue, currentTask) {
            if (currentTask.finished) {
                previousValue.push(currentTask);
                return previousValue.concat(currentTask.subtasks);
            }
            return previousValue.concat(getFinishedTasks(currentTask.subtasks));
        }, []);
    };

    $scope.$watch("showUnfinished", function(newShowUnfinished) {
       if (newShowUnfinished) {
           $scope.tasksOrderPredicate = ["dueDate", "createdDate"];
           $scope.tasks = TasksService.tasks;
       } else {
           $scope.tasksOrderPredicate = "-closedDate";
           $scope.tasks = getFinishedTasks(TasksService.tasks);
       }
    });

    $scope.taskFinished = function(task) {
        $log.info('Task ' + task.id + ' finished: ' + !task.finished);
        task.finished = !task.finished;
        task.closedDate = moment().startOf('day').valueOf();
        new TasksService.service(task).$update({taskId: task.id})
    };

    $scope.removeTask = function(task) {
        var removeForSure = confirm("Are you sure to remove this task and all it's subtasks? You cannot undo this.\n" + task.title);
        if (removeForSure) {
            $log.info('Task ' + task.id + ' removed: ' + task.title);
            TasksService.service.delete({taskId: task.id});
            findTaskRecursivelyAndRemoveIt(task, $scope.tasks);
        }
    };

    var findTaskRecursivelyAndRemoveIt = function(task, tasksArray) {
        for (var i in tasksArray) {
            if (tasksArray[i] == task) {
                tasksArray.splice(i, 1);
                return;
            }
            findTaskRecursivelyAndRemoveIt(task, tasksArray[i].subtasks);
        }
    };

    $scope.updateTask = function(task) {
        var updatedTask = new TasksService.service(task);
        updatedTask.$update({taskId: task.id}, function(taskAfterUpdate) {
            var index = $scope.tasks.indexOf(task);
            if (index != -1) {
                $log.debug("Replacing task with id: " + task.id + " with updated data task")
                $scope.tasks[index] = taskAfterUpdate;
            }
        });
        $log.info('Task ' + task.id + ' updated: ' + task.title);
    };

    $scope.addNewTask = function (task) {
        $log.debug("Task with title: " + task.title + " added");
        var newTask = new TasksService.service(task);
        newTask.$save(function(addedTask) {
            $scope.tasks.push(addedTask);
            $scope.magicInput = "";
        });

    };

    $scope.createSubtask = function(task, subtask) {
        new TasksService.service(subtask).$save(function(subtaskResult) {
            TasksService.subtaskService.add({taskId: task.id, subtaskId: subtaskResult.id}, function() {
                task.subtasks = task.subtasks.concat([subtaskResult]);
                $log.info('Subtask ' + subtaskResult.title + ' id=(' + subtaskResult.id + ') created for task: ' + task.title + " id=(" + task.id + ")");
            });
        });
    };

    var findNonExistingTags = function(tags) {
        var existingTagsNames = TagsService.tags.map(function(it) {return it.name});

        var nonExistingTags = [];
        tags.forEach(function(tagFromTask) {
            if (existingTagsNames.indexOf(tagFromTask.name) == -1) {
                var newTag = new TagsService.service(tagFromTask);
                nonExistingTags.push(newTag);
            }
        });
        return nonExistingTags;
    };

    $scope.openEdit = function(task) {
        var editTaskModalInstance = $modal.open({
            templateUrl: 'editTaskModalContent.html',
            backdrop: 'static',
            controller: EditTaskModalCtrl,
            resolve: {
                task: function() {
                    return task;
                }
            }
        });
        editTaskModalInstance.result.then(function(originalTask) {
            $scope.updateTask(originalTask);
        });
    };

    $scope.openCreateSubtask = function(task) {
        var createSubtaskModalInstance = $modal.open({
            templateUrl: 'createSubtaskModalContent.html',
            backdrop: 'static',
            controller: CreateSubtaskModalCtrl
        });
        createSubtaskModalInstance.result.then(function(newSubtaskContent) {
            var subTask =  new MagicInputParser().parse(newSubtaskContent);

            var tagsToAdd = findNonExistingTags(subTask.tags);
            var addSubtaskAfterTagsAdded = new MultitaskRunner(
                tagsToAdd.map( function(it) {return function(param) {return it.$save(param)}} ),
                function () { $scope.createSubtask(task, subTask) });

            addSubtaskAfterTagsAdded.start();
        });
    };


    $scope.draggedTask = null;
    $scope.draggedTaskIndex = null;
    $scope.setDraggedTask = function(task) {
        $scope.draggedTask = task;
        $scope.draggedTaskPosition = findTaskPosition(task, $scope.tasks);
        if ($scope.draggedTaskPosition == -1) {
            throw "Dragged task's position not found" + task;
        }
    };

    var findTaskPosition = function(task, tasksArray) {
        for (var i in tasksArray) {
            if (tasksArray[i] == task) {
                return [i];
            }
            var inResult = findTaskPosition(task, tasksArray[i].subtasks);
            if (inResult != -1) {
                inResult.push(i);
                return inResult;
            }
        }
        return -1;
    };

    var removeTaskOnPosition = function(draggedTaskPosition, tasksArray) {
        if (draggedTaskPosition.length == 1) {
            tasksArray.splice($scope.draggedTaskPosition.pop(), 1);
            return;
        }
        var positionOnThisLevel = draggedTaskPosition.pop();
        removeTaskOnPosition(draggedTaskPosition, tasksArray[positionOnThisLevel].subtasks);
    };

    $scope.removeDraggedTaskFromPreviousPosition = function() {
        removeTaskOnPosition($scope.draggedTaskPosition, $scope.tasks);
    };

    $scope.magicInputSubmit = function() {
        $log.debug('Magic input submitted: ' + $scope.magicInput);
        var task = new MagicInputParser().parse($scope.magicInput);

        var tagsToAdd = findNonExistingTags(task.tags);
        var addTaskAfterTagsAdded = new MultitaskRunner(
            tagsToAdd.map( function(it) {return function(param) {return it.$save(param)}} ),
            function () { $scope.addNewTask(task) });

        addTaskAfterTagsAdded.start();

    };

    var MultitaskRunner = function(tasksToRunWithCallback, onFinishedFunction) {

        this.start = function() {
            $log.debug("MultitaskRunner started");
            checkIfAllFinished();
            tasksToRunWithCallback.forEach(function(fun) {fun(function() {counter++; checkIfAllFinished()})});
        };

        var counter = 0;
        var checkIfAllFinished = function() {
            $log.debug("Check if actual counter (" + counter + ") is same as the number of tasks to run (" + tasksToRunWithCallback.length + ")");
            if (counter == tasksToRunWithCallback.length) {
                onFinishedFunction();
            }
        }
    };

    $scope.moveSubtaskToTask = function(movedTask, newParentTask) {
        $log.debug("Task " + movedTask.id + " moved to new parent task " + newParentTask.id);
        TasksService.subtaskService.add({taskId: newParentTask.id, subtaskId: movedTask.id}, function() {
            newParentTask.subtasks.push($scope.draggedTask);
            $scope.removeDraggedTaskFromPreviousPosition();
        });
    };

    $scope.moveSubtaskTopLevel = function(movedTask) {
        $log.debug("Task " + movedTask.id + " moved to top level");
        TasksService.service.moveToTopLevel({taskId: movedTask.id}, function() {
            $scope.tasks.push($scope.draggedTask);
            $scope.removeDraggedTaskFromPreviousPosition();
        });
    };
}
