var app = angular.module("GTWeb", ["TabList", "ui.bootstrap", 'frapontillo.bootstrap-switch']);


app.factory("TagsService", function () {
    var tags = testTags;
    return tags;
});

app.factory("TasksService", function () {
    var tasks = testTasks;
    var finishedTasks = testFinishedTasks;


    return tasks.concat(finishedTasks);

});

app.factory("SearchService", function () {
    return {searchString: ''}
});

app.factory("TagsFilteringService", function() {
    return {selectedTag: "ALL"}
});