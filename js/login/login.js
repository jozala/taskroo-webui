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

function LoginCtrl($scope, LoginService, $log) {
    $scope.form = {};
    $scope.login = function(form) {
        if (form.username == undefined || form.password == undefined) {
            $log.info("Username or password not specified");
            return;
        }
        $log.debug("Sending user credentials to sign in user");
        new LoginService.service(form).$login(function(session) {
            alert(session.sessionId);
        }, function(response) {
            $(".shaker").effect('shake', { times:3 }, 400);
        });

    }

}


