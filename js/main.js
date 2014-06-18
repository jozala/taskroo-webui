var app = angular.module("GTWeb", ["TabList", "ui.bootstrap", 'frapontillo.bootstrap-switch', 'ngResource']);


app.factory("TagsService", function ($resource, $log) {
    var tokenId = '87115322-1c4d-4f59-90d2-b3da0f60dd39';
    var tags = [];
    var service = $resource("http://taskroo.local/ws/tags/:tagId", {}, {
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
    var tokenId = '87115322-1c4d-4f59-90d2-b3da0f60dd39';
    var tasks = [];
    var service = $resource("http://taskroo.local/ws/tasks/:taskId", {}, {
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

    var subtaskService = $resource("http://taskroo.local/ws/tasks/:taskId/subtasks/:subtaskId", {}, {
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