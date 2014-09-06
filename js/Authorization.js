"use strict";

app.factory("AuthenticationService", function ($resource) {
    return $resource("", {}, {
        loginWithRememberMeToken: {
            url: '/auth/authToken/loginWithRememberMe',
            method:'POST',
            headers: {'Content-Type': 'text/plain;charset=utf-8'}
        }
    });
});

app.factory('AuthorizationHeaderInjector', ['$cookies', function($cookies) {

    var generateUUID = function(){
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x7|0x8)).toString(16);
        });
        return uuid;
    };

    var request = function(config) {
        var tokenKey = $cookies.sid;
        config.headers['Authorization'] = 'TaskRooAuth realm="taskroo.com"';
        if (tokenKey != null) {
            config.headers['Authorization'] += ',tokenKey="' + tokenKey + '"';
        }
        config.headers['Authorization'] += ',cnonce="' + generateUUID() + '"';
        return config;
    };
    return {
        request: request
    };
}]);

app.factory('RememberMeTokenRecoverer', ['$injector', '$q', '$cookies', '$cookieStore', function($injector, $q, $cookies, $cookieStore) {
    var recoveryInProgress = false;
    var deferred;
    var responseError = function(response) {
        if (response.status == 403 && $cookies.rememberMeToken) {
            var $http = $injector.get('$http');
            if (recoveryInProgress) {
                return deferred.promise.then(function() {return $http(response.config);})
            }
            recoveryInProgress = true;

            deferred = $q.defer();
            var authenticationService = $injector.get('AuthenticationService');
            authenticationService.loginWithRememberMeToken($cookies.rememberMeToken, deferred.resolve, deferred.reject);

            return deferred.promise.then(function (newSecurityToken) {
                $cookies.sid = newSecurityToken.id;
                $cookies.rememberMeToken = newSecurityToken.rememberMeToken;
                recoveryInProgress = false;
                return $http(response.config);
            }, function() {
                $cookieStore.remove("sid");
                $cookieStore.remove("rememberMeToken");
                recoveryInProgress = false;
                return $q.reject(response);
            });
        }
        return $q.reject(response);
    };

    return {
        responseError : responseError
    };
}]);

app.factory('LoginRedirect', ['$q', '$cookieStore', '$window', function($q, $cookieStore, $window) {
    return {
        responseError: function(response) {
            if (response.status == 403) {
                $cookieStore.remove("sid");
                $cookieStore.remove("rememberMeToken");
                $window.location.href = 'login.html';
                return $q.reject(response);
            }
            return $q.reject(response);
        }
    };
}]);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoginRedirect');
    $httpProvider.interceptors.push('RememberMeTokenRecoverer');
    $httpProvider.interceptors.push('AuthorizationHeaderInjector');
}]);