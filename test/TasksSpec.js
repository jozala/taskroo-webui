"use strict";

describe("Tasks", function() {

    var tasks;

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

