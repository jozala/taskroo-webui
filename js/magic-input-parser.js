"use strict";

function MagicInputParser() {

    MagicInputParser.dueDateRegex = /due:(\d{8})/;
    MagicInputParser.deferDateRegex = /defer:(\d{8})/;
    MagicInputParser.startDateRegex = /start:(\d{8})/;
    MagicInputParser.tagsRegex = /tags:([^\s]*)/;
    MagicInputParser.tagAtRegex = /\s@([^\s]*)/g;
    MagicInputParser.tagAtOnTheStartRegex = /^@([^\s]*)/g;

    MagicInputParser.commands = [
        {
            regex: MagicInputParser.dueDateRegex,
            taskField: "dueDate",
            assignFn: function (value) {
                return moment(value, "YYYYMMDD").valueOf();
            }
        },
        {
            regex: MagicInputParser.deferDateRegex,
            taskField: "startingOn",
            assignFn: function (value) {
                return moment(value, "YYYYMMDD").valueOf();
            }
        },
        {
            regex: MagicInputParser.startDateRegex,
            taskField: "startingOn",
            assignFn: function (value) {
                return moment(value, "YYYYMMDD").valueOf();
            }
        },
        {
            regex: MagicInputParser.tagsRegex,
            taskField: "tags",
            assignFn: function (value) {
                return value.split(',');
            }
        }
    ];

    MagicInputParser.parseDate = function(input) {
        return moment(value, "YYYYMMDD").valueOf();
    };
}

MagicInputParser.prototype.parse = function (input) {
    var task = {};
    task.title = input;
    task.tags = [];

    MagicInputParser.commands.forEach(function (command) {
        var commandPart = input.match(command.regex);
        if (commandPart) {
            task.title = task.title.split(commandPart[0]).join("").trim();
            task[command.taskField] = command.assignFn(commandPart[1]);
        }
    });

    task.tags = task.tags.concat(this.findAtTags(task.title));

    return task;
};

MagicInputParser.prototype.findAtTags = function(input) {
    var tags = [];
    var atTagsFromTitle = input.match(MagicInputParser.tagAtRegex);
    if (atTagsFromTitle) {
        atTagsFromTitle.forEach(function (atTag) {
            tags.push(atTag.substring(2))
        });
    }

    atTagsFromTitle = input.match(MagicInputParser.tagAtOnTheStartRegex);
    if (atTagsFromTitle) {
        atTagsFromTitle.forEach(function (atTag) {
            tags.push(atTag.substring(1))
        });
    }
    return tags;
};


