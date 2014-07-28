describe("TasksService responsible for managing tasks in the scope", function() {

    // SUT
    var tasksCtrl;
    var scope;

    beforeEach(function(){
        this.addMatchers({
            toEqualData: function(expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    beforeEach(module("taskroo"));



    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller, TasksService) {
            $httpBackend = _$httpBackend_;

            scope = $rootScope.$new();
            tasksCtrl = $controller('TasksCtrl', {$scope: scope, TasksService: TasksService});
        })
    );


    it("should set tasks from WebService (unfinished) on creation of controller", function() {
        $httpBackend.expectGET('/api/tasks?finished=false').respond(200, unfinishedTasks);
        $httpBackend.flush();
        expect(scope.tasks).toEqualData(unfinishedTasks)
    });

    it("should set showUnfinishedTasks to true on creation of controller", function() {
        expect(scope.showUnfinished).toBe(true);
    });

    it("should set tasks from WebService(finished=true) in scope.tasks when showUnfinished changed to false", function() {
        $httpBackend.expectGET('/api/tasks?finished=false').respond(200, unfinishedTasks);
        $httpBackend.flush();
        $httpBackend.expectGET('/api/tasks?finished=true').respond(200, finishedTasks);
        scope.$apply(function() {
            scope.showUnfinished = false;
        });
        $httpBackend.flush();
        expect(scope.tasks).toEqualData(scope.tasksFilter(finishedTasks))
    });

    it("should flatten list of finished task when showUnfinished is changed to false", function () {
        $httpBackend.expectGET('/api/tasks?finished=false').respond(200, unfinishedTasks);
        $httpBackend.flush();
        $httpBackend.expectGET('/api/tasks?finished=true').respond(200, threeLevelFinishedTasks);
        scope.$apply(function() {
            scope.showUnfinished = false;
        });
        $httpBackend.flush();
        expect(scope.tasks.length).toBe(3);
    });

    it("tasks should not have any subtasks when displaying finished tasks", function () {
        $httpBackend.expectGET('/api/tasks?finished=false').respond(200, unfinishedTasks);
        $httpBackend.flush();
        $httpBackend.expectGET('/api/tasks?finished=true').respond(200, threeLevelFinishedTasks);
        scope.$apply(function() {
            scope.showUnfinished = false;
        });
        $httpBackend.flush();
        var noneOfTheTasksHasSubtasks = scope.tasks.every(function(it) { return it.subtasks.length == 0 });
        expect(noneOfTheTasksHasSubtasks).toBeTruthy();
    });

    it("should replace task with subtasks with data returned by service when task is set as finished", function () {
        $httpBackend.expectGET('/api/tasks?finished=false').respond(200, threeLevelUnfinishedTasks);
        $httpBackend.flush();
        $httpBackend.expectPUT('/api/tasks/321').respond(threeLevelFinishedTasks[0]);

        scope.$apply(function() {
            scope.taskFinished(scope.tasks[0]);
        });

        $httpBackend.flush();
        expect(scope.tasks[0].finished).toBe(true);
        expect(scope.tasks[0].subtasks[0].finished).toBe(true);
        expect(scope.tasks[0].subtasks[0].subtasks[0].finished).toBe(true);
    });
});