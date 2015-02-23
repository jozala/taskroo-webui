app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'html/partials/unfinished-tasks-list.html'
        }).
        when('/finishedTasks', {
            templateUrl: 'html/partials/finished-tasks-list.html'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);