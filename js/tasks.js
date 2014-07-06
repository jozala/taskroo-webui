"use strict";

var Tasks = {

    findTaskAncestors: function(tasks, taskId) {
        var ancestors = [];
        for(var i in tasks) {
            if (tasks[i].subtasks != undefined && tasks[i].subtasks.some(function(subtask) {return subtask.id == taskId})) {
                ancestors.push(tasks[i]);
                break;
            }
        }

        if (ancestors.length > 0) {
            return ancestors;
        } else {
            tasks.forEach(function(task) {
                ancestors = ancestors.concat(Tasks.findTaskAncestors(task.subtasks, taskId));
                if (ancestors.length > 0) {
                    ancestors.push(task);
                }
            });
        }
        return ancestors;
    },

    replaceTaskOrSubtask: function(tasks, oldTask, newTask) {
        var index = tasks.indexOf(oldTask);
        if (index == -1) {
            tasks.forEach(function(task) {
                Tasks.replaceTaskOrSubtask(task.subtasks, oldTask, newTask);
            });
        } else {
            tasks[index] = newTask;
        }
    }


};