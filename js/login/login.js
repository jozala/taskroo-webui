var app = angular.module("taskroo-login", ['ngResource']);

app.factory("LoginService", function ($resource) {
    var service = $resource("/auth/authToken/login", {}, {
        login: {
            method: 'POST',
            headers: { 'Authorization': 'GTWebAuth realm="gtweb@aetas.pl"' }
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


function LoginCtrl($scope, LoginService, $log) {
    $scope.form = {};
    $scope.login = function(form) {
        $scope.$broadcast("autofill:update");
        if (form.username == undefined || form.password == undefined) {
            $log.info("Username or password not specified");
            return;
        }
        $log.debug("Sending user credentials to sign in user");
        new LoginService.service(form).$login(function(session) {
            alert(session.sessionId);
        }, function(response) {
            $scope.$broadcast("login:failure");
        });

    }

}


