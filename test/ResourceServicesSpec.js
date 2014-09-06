"use strict";

var httpProvider;

describe("TaskRoo services responsible for sending HTTP requests to manage resources", function () {

    describe("TasksService responsible for sending HTTP requests to get and modify tasks", function () {

        // SUT
        var tasksService;

        beforeEach(function () {
            module('taskroo', function ($httpProvider) {
                httpProvider = $httpProvider;
            });

            inject(function (_TasksService_) {
                tasksService = _TasksService_;
            })
        });

        it('should have authorization interceptor registered', function () {
            expect(httpProvider.interceptors).toContain('AuthorizationHeaderInjector');
        });

        it('should have rememberMeTokenRecoverer interceptor registered', function () {
            expect(httpProvider.interceptors).toContain('RememberMeTokenRecoverer');
        });

        it('should have loginRedirect interceptor registered', function () {
            expect(httpProvider.interceptors).toContain('LoginRedirect');
        });

        it('should have error response notification interceptor registered', function () {
            expect(httpProvider.interceptors).toContain('ErrorResponseNotification');
        });
    });

    describe("TagsService responsible for sending HTTP requests to get and modify tasks", function () {
        // SUT
        var tagsService;

        beforeEach(function () {
            module('taskroo', function ($httpProvider) {
                httpProvider = $httpProvider;
            });

            inject(function (_TagsService_) {
                tagsService = _TagsService_;
            })
        });

        it('should have authorization interceptor registered', function () {
            expect(httpProvider.interceptors).toContain('AuthorizationHeaderInjector');
        });

        it('should have rememberMeTokenRecoverer interceptor registered', function () {
            expect(httpProvider.interceptors).toContain('RememberMeTokenRecoverer');
        });

        it('should have loginRedirect interceptor registered', function () {
            expect(httpProvider.interceptors).toContain('LoginRedirect');
        });

        it('should have error response notification interceptor registered', function () {
            expect(httpProvider.interceptors).toContain('ErrorResponseNotification');
        });
    });

});

describe('ErrorResponseNotification responsible for displaying notification in case of errors', function () {

    var tasksService;
    var growlNotifications;
    var $httpBackend;

    // SUT
    var loginRedirect;
    beforeEach(function () {

        module('taskroo', function($provide) {
            $provide.constant('$window', {location:{href:'dummy'}});
        });

        inject(function (_LoginRedirect_, _TasksService_, _$httpBackend_, _growlNotifications_) {
            loginRedirect = _LoginRedirect_;
            tasksService = _TasksService_;
            growlNotifications = _growlNotifications_;
            $httpBackend = _$httpBackend_;
        });
    });


    it('should display growl notification when error is returned in response', function () {
        // given
        spyOn(growlNotifications, 'add');
        $httpBackend.whenGET('/api/tasks?finished=false').respond(404);
        // when
        tasksService.service.getUnfinished();
        $httpBackend.flush();
        // then
        expect(growlNotifications.add)
            .toHaveBeenCalledWith(jasmine.any(String), 'danger', 10000)
    });

    it('should not display growl notification when 403 is returned in response', function () {
        // given
        spyOn(growlNotifications, 'add');
        $httpBackend.whenGET('/api/tasks?finished=false').respond(403);
        // when
        tasksService.service.getUnfinished();
        $httpBackend.flush();
        // then
        expect(growlNotifications.add).not
            .toHaveBeenCalled()
    });

    it('should not display growl notification when 401 is returned in response', function () {
        // given
        spyOn(growlNotifications, 'add');
        $httpBackend.whenGET('/api/tasks?finished=false').respond(401);
        // when
        tasksService.service.getUnfinished();
        $httpBackend.flush();
        // then
        expect(growlNotifications.add).not
            .toHaveBeenCalled()
    });

});