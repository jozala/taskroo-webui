function TasksCtrl($scope, TasksService) {
    $scope.tasks = TasksService;
    $scope.template = '<row children="task.subtasks" row="task" ng-repeat="task in children" ng-class="{\'taskFinished\': task.finished}" >' +
            '<cell class="taskTick"></cell>' +
            '<cell class="taskTags"><tag-icon ng-repeat="tag in task.tags" color="{{ tag.color }}" name="{{ tag.name }}"></tag-icon></cell>' +
            '<cell class="taskTitle">{{ task.title }}</cell>' +
            '<cell class="taskDueDate"></cell>' + 
            '<cell class="taskAction taskEdit"></cell>' + 
            '<cell class="taskAction taskSubtask"></cell>' + 
            '<cell class="taskAction taskDel"></cell>' +
            '</row>';
    
    /*
     * $scope.template = '<row children="task.subtasks" row="task" ng-repeat="task in children"><cell class="taskTick"></cell><cell>{{ row.title }}</cell></row>';
     */

}
//app.directive("taskRow", function ($compile) {
//    return {
//        restrict: "A",
//        replace: true,
//        scope: {
//            task: "=",
//            ttId: "@",
//            ttParentId: "@",
//            taskId: "@"
//        },
//        template: "<tr class='treeTableItem' data-id='{{ taskId }}' data-tt-id='{{ ttId }}'>" +
//            "<td class='taskTick' />" +
//            "<td class='taskTags'>" +
//            "   <tag-icon ng-repeat='tag in task.tags' color='{{ tag.color }}' name='{{ tag.name }}' />" +
//            "</td>" +
//            "<td class='taskContent'><span class='taskTitle'>{{ task.title }}</span></td>" +
//            "<td class='taskDueDate'/>" +
//            "<td class='taskEdit taskAction'/>" +
//            "<td class='taskSubtask taskAction'/>" +
//            "<td class='taskDel taskAction'/>" +
//            "</tr>",// +
////            "<tr task-row ng-repeat='subtask in task.subtasks' task='subtask' data-tt-parent-id='{{ ttId }}' data-tt-id='{{ ttId }}-{{ $index+1 }}' task-id='{{ subtask.id }}'></tr>",
//        link: function(scope, element, attrs) {
//            var html = "<tbody task-row ng-repeat='subtask in task.subtasks' task='subtask' data-tt-parent-id='{{ ttId }}' data-tt-id='{{ ttId }}-{{ $index+1 }}' task-id='{{ subtask.id }}'></tbody>";
////            console.log(element.get(0).tagName);
////            if(element.get(0).tagName == "TBODY") {
////                element.append(html)
////                $compile(element.contents())(scope)
////            } else {
////                element.after(html)
////                $compile(element.after().contents())(scope)
////            }
//
//        }
//    }
//});
//
//app.directive("tasksCollection", function ($timeout) {
//    return {
//        restrict: "E",
//        replace: true,
//        scope: {
//            data: "="
//        },
//        template: "<table id='tasksTable'>" +
//            "<tbody task-row ng-repeat='task in data track by $index' task='task' data-tt-id='{{ $index + 1 }}' task-id='{{ task.id }}'>" +
//            "</tbody>" +
//            "<tfoot id='taskTableFooter'><tr><td colspan='7'></td></tr></tfoot>" +
//            "</table>",
//        link: function (scope, element) {
//            $timeout(function() {
//                $(element).treetable({
//                    column: 2,
//                    expandable: true,
//                    expanderTemplate: "<a href='#'></a>"
//                });
//            });
//        }
//    }
//});

// TODO zrob to od nowa na ul li (listach) jednak zeby bylo latwo tak jak powinno tylko trzeba bedzie jakos podszlifowac do tego layout