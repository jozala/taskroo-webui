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

function TasksCtrl($scope, TasksService, $modal, $log) {
    $scope.tasks = TasksService;
    $scope.template = '<row children="task.subtasks" row="task" ng-repeat="task in children" ng-class="{\'taskFinished\': row.finished}" >' +
        '<cell class="taskTick" ng-click="functions.taskFinished(task)"></cell>' +
        '<cell class="taskTags"><tag-icon ng-repeat="tag in task.tags" color="{{ tag.color }}" name="{{ tag.name }}"></tag-icon></cell>' +
        '<cell class="taskTitle" quick-edit ng-model="task.title" ng-change="functions.updateTask(task)">{{ task.title }}</cell>' +
        '<cell class="taskDueDate">{{ task.dueDate | date: "dd - MM - yyyy" }}</cell>' +
        '<cell class="taskAction taskEdit" ng-click="functions.openEdit(task)"></cell>' +
        '<cell class="taskAction taskSubtask" ng-click="functions.createSubtask(task)"></cell>' +
        '<cell class="taskAction taskDel" ng-click="functions.removeTask(task)"></cell>' +
        '</row>';

    $scope.taskFinished = function(task) {
        $log.info('Task ' + task.id + ' finished: ' + !task.finished);
        task.finished = !task.finished;
    };

    $scope.removeTask = function(task) {
        var removeForSure = confirm("Are you sure to remove this task and all it's subtasks? You cannot undo this.\n" + task.title);
        if (removeForSure) {
            $log.info('Task ' + task.id + ' removed: ' + task.title);
            removeTaskOrSubtask(task, $scope.tasks);
        }
    };

    var removeTaskOrSubtask = function(task, tasksArray) {
        for (var i in tasksArray) {
            if (tasksArray[i] == task) {
                tasksArray.splice(i, 1);
                return;
            }
            removeTaskOrSubtask(task, tasksArray[i].subtasks);
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

    // TODO create subtask does not work when adding new subtasks to task without subtasks (it is probably correctly added to model but there is no expand button shown)
    $scope.createSubtask = function(task) {
        var subTask = {"title": "test", "subtasks":[]};
        task.subtasks.push(subTask);
    };

    $scope.functions = {
        "updateTask": $scope.updateTask,
        "openEdit": $scope.openEdit,
        "removeTask": $scope.removeTask,
        "taskFinished": $scope.taskFinished,
        "createSubtask": $scope.createSubtask
    };

}
