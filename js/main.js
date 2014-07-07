var app = angular.module("taskroo", ["TabList", "ui.bootstrap", 'frapontillo.bootstrap-switch', 'ngResource']);

var tokenId = '83c16449-ed03-485d-a551-48ea1bfe08f5';

app.factory("TagsService", function ($resource, $log) {
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

app.factory("TasksService", function ($resource) {
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
            "Try \"start:tomorrow\" to set task's start date to tomorrow.",
            "Write \"tags:myTag,important\" to add multiple tags to new task at once."]

    return {
        getRandom: function() {
            var index = Math.floor(Math.random() * hints.length);
            return hints[index];
        }
    }
});
