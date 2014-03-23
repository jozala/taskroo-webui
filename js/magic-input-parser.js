"use strict";

function MagicInputParser() {

    MagicInputParser.dueDateRegex = /due:([^\s]*)/;
    MagicInputParser.deferDateRegex = /defer:([^\s]*)/;
    MagicInputParser.startDateRegex = /start:([^\s]*)/;
    MagicInputParser.tagsRegex = /tags:([^\s]*)/;
    MagicInputParser.tagAtRegex = /\s@([^\s]*)/g;
    MagicInputParser.tagAtOnTheStartRegex = /^@([^\s]*)/g;

    MagicInputParser.commands = [
        {
            regex: MagicInputParser.dueDateRegex,
            taskField: "dueDate",
            assignFn: MagicInputParser.parseDate
        },
        {
            regex: MagicInputParser.deferDateRegex,
            taskField: "startingOn",
            assignFn: MagicInputParser.parseDate
        },
        {
            regex: MagicInputParser.startDateRegex,
            taskField: "startingOn",
            assignFn: MagicInputParser.parseDate
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
        if (input.toLowerCase() == 'today') {
            return moment().startOf('day').valueOf();
        }
        if (input.toLowerCase() == 'tomorrow') {
            return moment().startOf('day').add(1, 'day').valueOf();
        }
        var correctDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        if (correctDays.some(function(day) { return day == input.toLowerCase() })) {
            var indexOfDay = correctDays.indexOf(input.toLowerCase());
            if (moment().day(indexOfDay).startOf('day') <= moment().startOf('day')) {
                return moment().add(7, 'day').day(indexOfDay).startOf('day').valueOf();
            }
            return moment().day(indexOfDay).startOf('day').valueOf();
        }
        if (!moment(input, "YYYYMMDD").isValid()) {
            return undefined;
        }
        return moment(input, "YYYYMMDD").valueOf();
    };
}

MagicInputParser.prototype.parse = function (input) {
    var task = {};
    task.title = input;
    task.tags = [];

    MagicInputParser.commands.forEach(function (command) {
        var commandPart = input.match(command.regex);
        if (commandPart) {
            var fieldValue = command.assignFn(commandPart[1]);
            if (fieldValue != undefined) {
                task[command.taskField] = fieldValue;
                task.title = task.title.split(commandPart[0]).join("").trim();
            }
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


