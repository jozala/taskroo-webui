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
        expect(scope.unfinishedTasks).toEqualData(unfinishedTasks)
    });

    it("should set showUnfinishedTasks to true on creation of controller", function() {
        expect(scope.showUnfinished).toBe(true);
    });

    it("should set finishedTasks from WebService(finished=true) in scope.finishedTasks when showUnfinished changed to false", function() {
        $httpBackend.expectGET('/api/tasks?finished=false').respond(200, unfinishedTasks);
        $httpBackend.flush();
        $httpBackend.expectGET('/api/tasks?finished=true').respond(200, threeLevelFinishedTasks);
        scope.$apply(function() {
            scope.showUnfinished = false;
        });
        $httpBackend.flush();
        expect(scope.finishedTasks).toEqualData([
            threeLevelFinishedTasks[0]]);
    });

    it("should remove task from unfinished tasks list when task is set as finished", function () {
        $httpBackend.expectGET('/api/tasks?finished=false').respond(200, threeLevelUnfinishedTasks);
        $httpBackend.flush();
        $httpBackend.expectPUT('/api/tasks/321').respond(threeLevelFinishedTasks[0]);
        var taskToBeFinished = scope.unfinishedTasks[0];

        scope.$apply(function() {
            scope.taskFinished(taskToBeFinished);
        });

        $httpBackend.flush();
        expect(scope.unfinishedTasks).not.toContain(taskToBeFinished);
    });

    it("should remove subtask from unfinished list when it is set as finished", function () {
        $httpBackend.expectGET('/api/tasks?finished=false').respond(200, threeLevelUnfinishedTasks);
        $httpBackend.flush();
        $httpBackend.expectPUT('/api/tasks/1023').respond(threeLevelFinishedTasks[0].subtasks[0]);

        var taskToBeFinished = scope.unfinishedTasks[0].subtasks[0];

        scope.$apply(function() {
            scope.taskFinished(taskToBeFinished);
        });
        $httpBackend.flush();
        expect(scope.unfinishedTasks[0].subtasks).not.toContain(taskToBeFinished);
    });
});