"use strict";

describe("AuthorizationHeaderInjector responsible for intercepting requests and adding Authorization header", function () {

    // SUT
    var authorizationHeaderInjector;
    var $cookies;

    beforeEach(function() {
        module('taskroo');

        inject(function(_AuthorizationHeaderInjector_, _$cookies_) {
            authorizationHeaderInjector = _AuthorizationHeaderInjector_;
            $cookies = _$cookies_;
        });
    });

    it('should add TaskRooAuth and realm to Authorization header to each HTTP request', function () {
        var config = {headers: {}};
        authorizationHeaderInjector.request(config);
        expect(config.headers.Authorization).toMatch('TaskRooAuth realm="taskroo.com"')
    });

    it('should add tokenKey to Authorization header to HTTP request when sid is set in cookies', function () {
        var config = {headers: {}};

        $cookies.sid = '=SecurityTokenIDString=';
        authorizationHeaderInjector.request(config);
        expect(config.headers.Authorization).toMatch(',tokenKey="=SecurityTokenIDString="');
    });

    it('should not add tokenKey to Authorization header to HTTP request when tokenKey is not set', function () {
        var config = {headers: {}};
        authorizationHeaderInjector.request(config);
        expect(config.headers.Authorization).not.toMatch(',tokenKey=');
    });

    it('should add random value as client nonce to Authorization header to each HTTP request', function () {
        var config = {headers: {}};
        authorizationHeaderInjector.request(config);
        expect(config.headers.Authorization).toMatch(',cnonce="[a-zA-Z0-9_-]{36}"');
    });
});


describe("RememberMeSessionRecoverer responsible for intercepting response and recovering session using rememberMeToken ", function () {

    var $httpBackend;
    var $cookies;
    var $cookieStore;
    var tasksService;

    // SUT
    var rememberMeSessionRecoverer;
    beforeEach(function() {

        module('taskroo', function($provide) {
            $provide.constant('$window', {location:{href:'dummy'}} );
        });

        inject(function(_RememberMeTokenRecoverer_, _TasksService_, _$httpBackend_, _$cookies_, _$cookieStore_) {
            rememberMeSessionRecoverer = _RememberMeTokenRecoverer_;
            tasksService = _TasksService_;
            $httpBackend = _$httpBackend_;
            $cookies = _$cookies_;
            $cookieStore = _$cookieStore_
        });
    });

    it('should send request authenticate using remember me token and resend original request when original request failed with 403', function() {
        // given
        $cookies.rememberMeToken = 'someRememberMeTokenSavedInCookie';
        $httpBackend.whenGET('/api/tasks?finished=false').respond(403);
        // when
        tasksService.service.getUnfinished();
        // then
        $httpBackend.expectPOST('/auth/authToken/loginWithRememberMe', 'someRememberMeTokenSavedInCookie').respond(201);
        $httpBackend.expectGET('/api/tasks?finished=false').respond(200);
        $httpBackend.flush();
    });

    it('should set new sid and rememberMeToken to cookies after successful session recovery', function() {
        // given
        $cookies.rememberMeToken = 'someRememberMeToken';
        $httpBackend.whenGET('/api/tasks?finished=false').respond(403);
        // when
        tasksService.service.getUnfinished();
        $httpBackend.expectPOST('/auth/authToken/loginWithRememberMe').respond(201, {
            "id": "newSecurityId",
            "rememberMeToken": "newRememberMeToken"
        });
        // then
        $httpBackend.expectGET('/api/tasks?finished=false').respond(200);
        $httpBackend.flush();
        expect($cookies.rememberMeToken).toBe('newRememberMeToken');
        expect($cookies.sid).toBe('newSecurityId');
    });

    it('should remove rememberMeToken and sid from cookies when loginWithRememberMeToken fails', function() {
        // given
        $cookies.sid = 'someSid';
        $cookies.rememberMeToken = 'someRememberMeToken';
        // when
        tasksService.service.getUnfinished();
        $httpBackend.whenGET('/api/tasks?finished=false').respond(403);
        $httpBackend.expectPOST('/auth/authToken/loginWithRememberMe').respond(401);
        $httpBackend.flush();
        // then
        expect($cookies.sid).toBe(undefined);
        expect($cookies.rememberMeToken).toBe(undefined);
    });

    it('should not try to authenticate when original request failed and no rememberMeToken is available', function() {
        // given
        $httpBackend.whenGET('/api/tasks?finished=false').respond(403);
        // when
        tasksService.service.getUnfinished();
        $httpBackend.flush();
        // then
        $httpBackend.verifyNoOutstandingRequest()
    });

    it('should second request to queue when request to recreate sid with rememberMeToken is already in progress', function() {
        // given
        $cookies.rememberMeToken = 'someRememberMeTokenSavedInCookie';
        $httpBackend.whenGET('/api/tasks?finished=false').respond(403);
        $httpBackend.whenGET('/api/tasks?finished=true').respond(403);
        // when
        tasksService.service.getUnfinished();
        tasksService.service.getFinished();
        // then
        $httpBackend.expectPOST('/auth/authToken/loginWithRememberMe').respond(201);
        $httpBackend.expectGET('/api/tasks?finished=false').respond(200);
        $httpBackend.expectGET('/api/tasks?finished=true').respond(200);
        $httpBackend.flush();
    });

});

describe('LoginRedirect interceptor responsible for redirecting to login when there is no other way to recover', function() {

    var $httpBackend;
    var $cookies;
    var $window;
    var tasksService;

    // SUT
    var loginRedirect;
    beforeEach(function() {

        module('taskroo', function($provide) {
            $window = {location:{href:'dummy'}};
            $provide.constant('$window', $window );
        });

        inject(function(_LoginRedirect_, _TasksService_, _$httpBackend_, _$cookies_) {
            loginRedirect = _LoginRedirect_;
            tasksService = _TasksService_;
            $httpBackend = _$httpBackend_;
            $cookies = _$cookies_;
        });
    });


    it ('should redirect to login.html when no "sid" or "rememberMeToken" cookies available', function() {
        // given
        $httpBackend.whenGET('/api/tasks?finished=false').respond(403);
        // when
        tasksService.service.getUnfinished();
        $httpBackend.flush();
        // then
        $httpBackend.verifyNoOutstandingRequest();
        expect($window.location.href).toBe('login.html');
    });

});