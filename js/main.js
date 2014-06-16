var app = angular.module("GTWeb", ["TabList", "ui.bootstrap", 'frapontillo.bootstrap-switch', 'ngResource']);


app.factory("TagsService", function ($resource, $log) {
    var tokenId = '225e38ef-4a0f-4d07-83ba-36e3ad7c2ee2';
    var tags = [];
    var service = $resource("http://localhost/tags/:tagId", {}, {
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
    var tokenId = '225e38ef-4a0f-4d07-83ba-36e3ad7c2ee2';
    var tasks = [];
    var service = $resource("http://localhost/tasks/:taskId", {}, {
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
        }
    });

    var subtaskService = $resource("http://localhost/tasks/:taskId/subtasks/:subtaskId", {}, {
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