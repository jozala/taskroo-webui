"use strict";

describe("Tasks", function() {

    it("should return list of all task's ancestors", function() {
        var ancestors = Tasks.findTaskAncestors(threeLevelUnfinishedTasks, 1024);
        expect(ancestors.length).toBe(2);
        var ancestorsIds = ancestors.map(function (it) { return it.id });
        expect(ancestorsIds).toContain(321);
        expect(ancestorsIds).toContain(1023);
    });

    it("should replace top-level task with given new task", function () {
        var updatedTask = {id: "200", title: "updatedTask"};
        Tasks.replaceTaskOrSubtask(threeTopLevelTasks, threeTopLevelTasks[1], updatedTask);
        expect(threeTopLevelTasks[1]).toBe(updatedTask);
    });

    it("should replace lower level tasks with given new task", function () {
        var updatedTask = {id: "200", title: "updatedTask"};
        Tasks.replaceTaskOrSubtask(threeLevelUnfinishedTasks, threeLevelUnfinishedTasks[0].subtasks[0], updatedTask);
        expect(threeLevelUnfinishedTasks[0].subtasks[0]).toBe(updatedTask);
    });

    describe('Checking if task match search phrase', function() {
        it('should always return true when when search phrase is empty', function () {
            var match = Tasks.doesTaskMatchSearchPhrase({id: 100, titie: 'test task'}, '');
            expect(match).toBeTruthy();
        });

        it("should return true when task's title contains string from search phrase independently of case", function () {
            var match = Tasks.doesTaskMatchSearchPhrase({id: 1, title: 'this is test of the search'}, 'sEar');
            expect(match).toBeTruthy();
        });

        it("should return true when task's description contains string from search phrase independently of case", function () {
            var task = {id: 1, title: 'this is test of the search', description: 'test driven development is cool'};
            var match = Tasks.doesTaskMatchSearchPhrase(task, 'dEvELoP');
            expect(match).toBeTruthy();
        });

        it("should return false when task does not match search phrase in any way", function () {
            var match = Tasks.doesTaskMatchSearchPhrase({id: 1, title: 'this is test of the search'}, 'unknownPhrase');
            expect(match).toBeFalsy();
        });

        it("should return true when any of task's subtask match search phrase", function () {
            var taskWithSubtasks = {id: 1, title: 'this is test of the search', subtasks: [
                {id: 2, title: 'subtask1', description: 'first subtask'},
                {id: 3, title: 'subtask2', description: 'second subtask'}
            ]};
            var match = Tasks.doesTaskMatchSearchPhrase(taskWithSubtasks, 'eConD');
            expect(match).toBeTruthy();
        });
    });

});


describe("TasksMultiFilter", function () {

    var tasksMultiFilter;

    beforeEach(function () {
        tasksMultiFilter = new TasksMultiFilter();
    });

    it("should filter with single added filter", function () {
        var tasks = tasksToFilter;
        tasksMultiFilter.addFilter("filter", function(tasks) {
            return tasks.filter(function(task) {
                return task.title.indexOf("toFilter") > -1
            })
        });
        var filteredTasks = tasksMultiFilter.filter(tasks);
        expect(filteredTasks.length).toBe(3);
        expect(filteredTasks.every(function(it) { return it.title.indexOf("toFilter") > -1 })).toBeTruthy();
    });

    it("should filter tasks with multiple filters when more than one filter is added", function () {
        var tasks = tasksToFilter;
        var hasTagWithNameFilterMe = function(task) {
            var hasTag = false;
            task.tags.forEach(function(tag) {if (tag.name === "filterMe") hasTag = true});
            return hasTag;
        };

        tasksMultiFilter.addFilter("toFilter", function(tasks) {
            return tasks.filter(function(task) {
                return task.title.indexOf("toFilter") > -1
            })
        });

        tasksMultiFilter.addFilter("tagFilter", function(tasks){
            return tasks.filter(function(task) {
                return hasTagWithNameFilterMe(task);
            })
        });
        var filteredTasks = tasksMultiFilter.filter(tasks);
        expect(filteredTasks.length).toBe(2);
        expect(filteredTasks.every(function(it) { return it.title.indexOf("toFilter") > -1 && hasTagWithNameFilterMe(it)})).toBeTruthy();
    });

    it("should remove filter from list by given name", function () {
        var tasks = tasksToFilter;
        var hasTagWithNameFilterMe = function(task) {
            var hasTag = false;
            task.tags.forEach(function(tag) {if (tag.name === "filterMe") hasTag = true});
            return hasTag;
        };

        tasksMultiFilter.addFilter("toFilter", function(tasks) {
            return tasks.filter(function(task) {
                return task.title.indexOf("toFilter") > -1
            })
        });

        tasksMultiFilter.addFilter("tagFilter", function(tasks){
            return tasks.filter(function(task) {
                return hasTagWithNameFilterMe(task);
            })
        });

        tasksMultiFilter.removeFilter("tagFilter");

        var filteredTasks = tasksMultiFilter.filter(tasks);
        expect(filteredTasks.length).toBe(3);
        expect(filteredTasks.every(function(it) { return it.title.indexOf("toFilter") > -1 })).toBeTruthy();
    });

    it("should throw exception when trying to remove non-existing filter", function () {
        expect(function() { tasksMultiFilter.removeFilter("nonExistingFilter") })
            .toThrow("Filter with name 'nonExistingFilter' does not exist");
    });

    it("should replace filter with new one when new one with the same name added", function() {
        var tasks = tasksToFilter;
        var hasTagWithNameFilterMe = function(task) {
            var hasTag = false;
            task.tags.forEach(function(tag) {if (tag.name === "filterMe") hasTag = true});
            return hasTag;
        };

        tasksMultiFilter.addFilter("toFilter", function(tasks){
            return tasks.filter(function(task) {
                return hasTagWithNameFilterMe(task);
            })
        });

        tasksMultiFilter.addFilter("toFilter", function(tasks) {
            return tasks.filter(function(task) {
                return task.title.indexOf("toFilter") > -1
            })
        });
        var filteredTasks = tasksMultiFilter.filter(tasks);
        expect(filteredTasks.length).toBe(3);
        expect(filteredTasks.every(function(it) { return it.title.indexOf("toFilter") > -1 })).toBeTruthy();
    });
});

