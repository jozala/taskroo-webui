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
        $httpBackend.expectGET('/ws/tasks').respond(testTasks);

        scope = $rootScope.$new();
        tasksCtrl = $controller('TasksCtrl', {$scope: scope, TasksService: TasksService});
    }));

    it("should set tasks from WebService on creation of controller", function() {
        $httpBackend.flush();
        expect(scope.tasks).toEqualData(testTasks)
    });

    it("should set showUnfinishedTasks to true on creation of controller", function() {
        expect(scope.showUnfinished).toBe(true);
    });

    it("should set finished tasks only in scope.tasks when showUnfinished changed to false", function() {
        $httpBackend.flush();
        scope.$apply(function() {
            scope.showUnfinished = false;
        });
        var allTasksOnListAreFinished = scope.tasks.every(function(it) { return it.finished == true });
        expect(scope.tasks.length).toBeGreaterThan(0);
        expect(allTasksOnListAreFinished).toBe(true);
    });

    it("should flatten list of finished task when showUnfinished is changed to false", function () {
        mockRetrievedTasks(threeLevelFinishedTasks);
        $httpBackend.flush();

        scope.$apply(function() {
            scope.showUnfinished = false;
        });
        expect(scope.tasks.length).toBe(3);
    });

    it("tasks should not have any subtasks when displaying finished tasks", function () {
        mockRetrievedTasks(threeLevelFinishedTasks);
        $httpBackend.flush();

        scope.$apply(function() {
            scope.showUnfinished = false;
        });
        var noneOfTheTasksHasSubtasks = scope.tasks.every(function(it) { return it.subtasks.length == 0 });
        expect(noneOfTheTasksHasSubtasks).toBeTruthy();
    });

    it("should replace task with subtasks with data returned by service when task is set as finished", function () {
        mockRetrievedTasks(threeLevelUnfinishedTasks);
        $httpBackend.flush();
        $httpBackend.expectPUT('/ws/tasks/321').respond(threeLevelFinishedTasks[0]);

        scope.$apply(function() {
            scope.taskFinished(scope.tasks[0]);
        });

        $httpBackend.flush();
        expect(scope.tasks[0].finished).toBe(true);
        expect(scope.tasks[0].subtasks[0].finished).toBe(true);
        expect(scope.tasks[0].subtasks[0].subtasks[0].finished).toBe(true);
    });

    var mockRetrievedTasks = function(tasksList) {
        inject(function (_$httpBackend_, $rootScope, $controller, TasksService) {

            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('/ws/tasks').respond(tasksList);

            scope = $rootScope.$new();
            tasksCtrl = $controller('TasksCtrl', {$scope: scope, TasksService: TasksService});
        });
    }
});