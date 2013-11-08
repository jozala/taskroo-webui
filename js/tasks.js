function TasksCtrl($scope, TasksService, $modal, $log) {
    $scope.tasks = TasksService;
    $scope.template = '<row children="task.subtasks" row="task" ng-repeat="task in children" ng-class="{\'taskFinished\': row.finished}" >' +
            '<cell class="taskTick" ng-click="task.finished = !task.finished"></cell>' +
            '<cell class="taskTags"><tag-icon ng-repeat="tag in task.tags" color="{{ tag.color }}" name="{{ tag.name }}"></tag-icon></cell>' +
            '<cell class="taskTitle">{{ task.title }}</cell>' +
            '<cell class="taskDueDate">{{ task.dueDate | date: "dd - MM - yyyy" }}</cell>' + 
            '<cell class="taskAction taskEdit"></cell>' + 
            '<cell class="taskAction taskSubtask"></cell>' + 
            '<cell class="taskAction taskDel"></cell>' +
            '</row>';
    
    $scope.taskFinished = function(task) {
        $log.info('Task ' + task.id + ' finished: ' + !task.finished);
        task.finished = !task.finished;
    };
    
    $scope.removeTask = function(task) {
        var removeForSure = confirm("Are you sure to remove this task and all it's subtasks? You cannot undo this.\n" + task.title); 
        if (removeForSure) {
            $log.info('Task ' + task.id + ' removed: ' + task.title);
            var taskToDeleteIndex = jQuery.inArray(task, $scope.tasks);
            $scope.tasks.splice(taskToDeleteIndex, 1);
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

}

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
            
            internalElement.bind('keypress', function(event) {
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