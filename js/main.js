"use strict";

var app = angular.module("taskroo", ["TabList", "ui.bootstrap", 'frapontillo.bootstrap-switch', 'ngResource', 'ngCookies']);

app.factory("TagsService", function ($resource, $cookies, $log) {
    var tokenId = $cookies.sid;
    var tags = [];
    var service = $resource("/ws/tags/:tagId", {}, {
        query: {
            method:'GET',
            isArray: true,
            headers: { 'Authorization': 'GTWebAuth realm="gtweb@aetas.pl",tokenKey="' + tokenId + '"'}
        },
        save: {
            method: 'POST',
            headers: { 'Authorization': 'GTWebAuth realm="gtweb@aetas.pl",tokenKey="' + tokenId + '"'}
        },
        update: {
            method:'PUT',
            headers: { 'Authorization': 'GTWebAuth realm="gtweb@aetas.pl",tokenKey="' + tokenId + '"'}
        },
        delete: {
            method: 'DELETE',
            headers: { 'Authorization': 'GTWebAuth realm="gtweb@aetas.pl",tokenKey="' + tokenId + '"'}
        }
    });

    return {
        tags: tags,
        service: service
    }
});

app.factory("TasksService", function ($resource, $cookies) {
    var tokenId = $cookies.sid;
    var tasks = [];
    var service = $resource("/ws/tasks/:taskId", {}, {
        query: {
            method: 'GET',
            isArray: true,
            headers: { 'Authorization': 'GTWebAuth realm="gtweb@aetas.pl",tokenKey="' + tokenId + '"'}
        },
        save: {
            method: 'POST',
            headers: { 'Authorization': 'GTWebAuth realm="gtweb@aetas.pl",tokenKey="' + tokenId + '"'}
        },
        update: {
            method:'PUT',
            headers: { 'Authorization': 'GTWebAuth realm="gtweb@aetas.pl",tokenKey="' + tokenId + '"'}
        },
        delete: {
            method: 'DELETE',
            headers: { 'Authorization': 'GTWebAuth realm="gtweb@aetas.pl",tokenKey="' + tokenId + '"'}
        },
        moveToTopLevel: {
            method: 'POST',
            headers: { 'Authorization': 'GTWebAuth realm="gtweb@aetas.pl",tokenKey="' + tokenId + '"'},
            params: {taskId: '@taskId'}
        }
    });

    var subtaskService = $resource("/ws/tasks/:taskId/subtasks/:subtaskId", {}, {
        add: {
            method:'POST',
            headers: { 'Authorization': 'GTWebAuth realm="gtweb@aetas.pl",tokenKey="' + tokenId + '"'},
            params: {taskId: '@taskId', subtaskId: '@subtaskId'}
        }
    });

    return {
        tasks: tasks,
        service: service,
        subtaskService: subtaskService
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
            "Double click on the existing task title allow quick edit."];

    return {
        getRandom: function() {
            var index = Math.floor(Math.random() * hints.length);
            return hints[index];
        }
    }
});

// error handling
app.factory('unauthorizedInterceptor', ['$q', '$cookies', '$log', function($q, $cookies, $log) {
    return {
        responseError: function (response) {
            if (response.status == 403) {
                $cookies.sid = "";
                $log.info("Authorization failed. Redirecting to login page.");
                window.location.href = "login.html"
            }
            return $q.reject(response);
        }
    };
}]);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('unauthorizedInterceptor');
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