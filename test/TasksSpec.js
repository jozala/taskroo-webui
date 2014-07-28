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

