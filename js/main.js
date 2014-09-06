"use strict";

var app = angular.module("taskroo", ["angular-tablist", "ui.bootstrap", 'frapontillo.bootstrap-switch', 'ngResource', 'ngCookies', 'ngSanitize', 'growlNotifications']);

app.factory("TagsService", function ($resource) {
    var tags = [];
    var service = $resource("/api/tags/:tagId", {}, {
        query: {
            method:'GET',
            isArray: true
        },
        save: {
            method: 'POST'
        },
        update: {
            method:'PUT'
        },
        delete: {
            method: 'DELETE'
        }
    });

    return {
        tags: tags,
        service: service
    }
});

    app.factory("TasksService", function ($resource) {
    var tasks = [];
    var service = $resource("/api/tasks/:taskId", {}, {
        getUnfinished: {
            method: 'GET',
            isArray: true,
            params: {finished: false}
        },
        getFinished: {
            method: 'GET',
            isArray: true,
            params: {finished: true}
        },
        save: {
            method: 'POST'
        },
        update: {
            method:'PUT'
        },
        delete: {
            method: 'DELETE'
        },
        moveToTopLevel: {
            method: 'POST',
            params: {taskId: '@taskId'}
        }
    });

    var subtaskService = $resource("/api/tasks/:taskId/subtasks/:subtaskId", {}, {
        add: {
            method:'POST',
            params: {taskId: '@taskId', subtaskId: '@subtaskId'}
        }
    });

    return {
        tasks: tasks,
        service: service,
        subtaskService: subtaskService,
        hasUnfinishedTasks: true
    }
});

app.factory("SearchService", function () {
    return {searchString: ''}
});

app.factory("TagsFilteringService", function() {
    return {selectedTag: "ALL"}
});

app.factory("HintsService", function() {
    var hints = ["How about getting some things done?",
            "Would you like to create a new task?",
            "Have you tried Work View? It's awesome!",
            "Be productive. Today.",
            "Please, use me!",
            "You can write \"due:monday\" to set due date of the task to the next monday.",
            "Add \"start:tomorrow\" to task's title to set start date to tomorrow.",
            "Write \"tags:myTag,important\" to add multiple tags to new task at once.",
            "Double click on the existing task title allow quick edit.",
            "Task in the future? Try \"start:YYYYMMDD\" and \"due:YYYYMMDD\"."];

    return {
        getRandom: function() {
            var index = Math.floor(Math.random() * hints.length);
            return hints[index];
        }
    }
});

app.factory('ErrorResponseNotification', ['$q', '$cookies', '$cookieStore', '$log', '$injector', 'growlNotifications',
                                function($q, $cookies, $cookieStore, $log, $injector, growlNotifications) {

    return {
        responseError: function (response) {
            if (response.status != 403) {
                growlNotifications.add(response.status + ': Sorry, we could not handle this request. Please report this if this problem will occur again.', 'danger', 10000);
            }
            return $q.reject(response);
        }
    };
}]);

app.directive("splashScreen", function($log) {
    return {
        restrict: 'C',
        link: function(scope, element) {
            setTimeout(function() {
                $log.debug("Hiding splash screen after timeout");
                element.css("display", "none");
            }, 5000);
            scope.$on("hideSplash", function() {
                $log.debug("Hiding splash screen on hideSplash event");
                element.css("display", "none");
            });
        }
    }
});

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('ErrorResponseNotification');
}]);