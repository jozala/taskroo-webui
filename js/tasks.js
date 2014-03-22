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
});

app.directive('focusElement', function ($timeout) {
    return {
        link: function (scope, element) {
            $timeout(function () {
                element[0].focus();
            });
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

app.directive('droppable', function () {
    return {
        link: function (scope, element, attrs) {
            var droppableChildrenList = scope.$eval(attrs.droppable);
            element.droppable({
                accept: function(draggable) {
                    return draggable.hasClass("row")
                        && droppableChildrenList.indexOf(scope.draggedTask) < 0
                        && draggable != element;
                },
                hoverClass: "drop-hover",
                greedy: true,
                drop: function(event,ui) {
                    scope.$apply(function() {
                        droppableChildrenList.push(scope.draggedTask);
                        scope.removeDraggedTaskFromPreviousPosition();
                    });
                }
            });
        }
    }
});

var EditTaskModalCtrl = function($scope, $modalInstance, task) {
    $scope.task = angular.copy(task);

    var tags = "";
    $scope.task.tags.forEach(function(tag) {
        tags += tag.name + " ";
    });
    $scope.task.tags = tags;

    var ngDateFilter = angular.injector(["ng"]).get("dateFilter");
    $scope.task.startingOn = ngDateFilter(task.startingOn, "yyyy-MM-dd");
    $scope.task.dueDate = ngDateFilter(task.dueDate, 'yyyy-MM-dd');

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
        originalTask.startingOn = changedTask.startingOn;
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

function TasksCtrl($scope, TasksService, $modal, $log) {
    $scope.tasks = TasksService;

    $scope.taskFinished = function(task) {
        $log.info('Task ' + task.id + ' finished: ' + !task.finished);
        task.finished = !task.finished;
    };

    $scope.removeTask = function(task) {
        var removeForSure = confirm("Are you sure to remove this task and all it's subtasks? You cannot undo this.\n" + task.title);
        if (removeForSure) {
            $log.info('Task ' + task.id + ' removed: ' + task.title);
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
        $log.info('Task ' + task.id + ' updated: ' + task.title);
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

    $scope.createSubtask = function(task) {
        var createSubtaskModalInstance = $modal.open({
            templateUrl: 'createSubtaskModalContent.html',
            backdrop: 'static',
            controller: CreateSubtaskModalCtrl
        });
        createSubtaskModalInstance.result.then(function(newSubtaskContent) {
            var subTask = createTaskFromMagicField(newSubtaskContent);
            $log.info("Subtask " + subTask.title + " created");
            task.subtasks = task.subtasks.concat([subTask]);
        });
    };

    var createTaskFromMagicField = function(content) {
        return {"id": 666, "title": content, "subtasks": [], "tags": []};
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
    }

}
