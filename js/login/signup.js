var app = angular.module("taskroo-signup", ['ngResource']);

app.factory("SignUpService", function ($resource) {
    return function(invitationCode) {
        return $resource("/user/signup", {}, {
            create: {
                method: 'POST',
                headers: { 'Authorization': 'TaskRooAuth realm="taskroo@aetas.pl"', 'X-InvitationCode': invitationCode }
            }
        });
    }
});

function SignUpCtrl($scope, SignUpService, $log) {
    $scope.accountCreated = false;
    $scope.showErrorMessage = false;
    $scope.createAccount = function(form) {
        var user = {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            username: form.username,
            password: form.password
        };

        var service = SignUpService(form.invitationCode);
        new service(user).$create(function(createdUser) {
            $scope.username = createdUser.username;
            $scope.accountCreated = true;
            $scope.showErrorMessage = false;
            $scope.form = {};
        }, function(response) {
            $scope.showErrorMessage = true;
        });
    }
}

