var app = angular.module("taskroo-login", ['ngResource', 'ngCookies', 'growlNotifications', 'ngSanitize']);

app.factory("LoginService", function ($resource) {
    var service = $resource("/auth/authToken/login", {}, {
        login: {
            method: 'POST',
            headers: { 'Authorization': 'TaskRooAuth realm="taskroo@aetas.pl"' }
        }
    });

    return {
        service: service
    }
});

app.directive("autofill", function () {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ngModel) {
            scope.$on("autofill:update", function() {
                ngModel.$setViewValue(element.val());
            });
        }
    }
});

app.directive("shaker", function ($log) {
    return {
        link: function(scope, element) {
            scope.$on("login:failure", function() {
                element.effect('shake', { times:3 }, 400);
            });
        }
    };
});


function LoginCtrl($scope, LoginService, $cookies, $cookieStore, $http, growlNotifications, $log) {
    $scope.form = {};
    if ($cookies.rememberMeToken) {
        loginWithRememberMeToken();
    }

    $scope.login = function(form) {
        $scope.$broadcast("autofill:update");
        if (form.username == undefined || form.password == undefined) {
            $log.info("Username or password not specified");
            return;
        }
        $log.debug("Sending user credentials to sign in user");
        new LoginService.service(form).$login(function(securityToken) {
            $cookies.sid = securityToken.id;
            if (securityToken.rememberMeToken) {
                $cookies.rememberMeToken = securityToken.rememberMeToken;
            }
            window.location.href="/";
        }, function(response) {
            growlNotifications.add('The login or password you entered is incorrect.', 'danger', 10000);
            $scope.$broadcast("login:failure");
        });

    };

    function loginWithRememberMeToken() {
        $http.post("/auth/authToken/loginWithRememberMe", $cookies.rememberMeToken, {headers: {"Content-Type": "text/plain;charset=utf-8"}})
            .success(function (securityToken, status, headers, config) {
                $cookies.sid = securityToken.id;
                $cookies.rememberMeToken = securityToken.rememberMeToken;
                window.location.href = "/";
            })
            .error(function (data, status, headers, config) {
                $log.debug("Sign in using remember me token failed. RememberMe token is no longer valid.");
                $cookieStore.remove('sid');
                $cookieStore.remove('rememberMeToken');
            });
    }

}


