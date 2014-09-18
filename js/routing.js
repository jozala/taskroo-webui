app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/unfinished-tasks-list.html'
        }).
        when('/finishedTasks', {
            templateUrl: 'partials/finished-tasks-list.html'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);