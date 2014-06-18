

describe("The magic input parser", function() {
    var magicParser;

    beforeEach(function() {
        magicParser = new MagicInputParser();
    });

    it("should parse string without any prefix as a task title", function() {
        var input = "This is task title";
        var task = magicParser.parse(input);
        expect(task.title).toBe("This is task title");
    });

    it("should parse due date when there is a prefix due:", function() {
        var input = "This task has a due date due:20140323";
        var task = magicParser.parse(input);
        var expectedDateInMilliseconds = moment("20140323", "YYYYMMDD").valueOf();
        expect(task.dueDate).toBe(expectedDateInMilliseconds);
    });

    it("should not include due date string in the task title", function() {
        var input = "This task has a due date due:20140323";
        var task = magicParser.parse(input);
        expect(task.title).toBe("This task has a due date");
    });

    it("should parse start date when there is a prefix defer:", function() {
        var input = "This task has a due date defer:20140709";
        var task = magicParser.parse(input);
        var expectedDateInMilliseconds = moment("20140709", "YYYYMMDD").valueOf();
        expect(task.startDate).toBe(expectedDateInMilliseconds);
    });

    it("should parse start date when there is a prefix start:", function() {
        var input = "This task has a due date start:20140214";
        var task = magicParser.parse(input);
        var expectedDateInMilliseconds = moment("20140214", "YYYYMMDD").valueOf();
        expect(task.startDate).toBe(expectedDateInMilliseconds);
    });

    it("should remove commands from task title when there are multiple commands in the input", function() {
        var input = "start:20140214 This task has multiple commands due:20130709";
        var task = magicParser.parse(input);
        expect(task.title).toBe("This task has multiple commands");

    });

    it("should use first command when there are multiple same commands in the input", function() {
        var input = "due:20140214 This task has multiple due commands due:20130709";
        var task = magicParser.parse(input);
        var expectedDateInMilliseconds = moment("20140214", "YYYYMMDD").valueOf();
        expect(task.dueDate).toBe(expectedDateInMilliseconds);

    });

    it("should parse tags from input when tags command is in the input", function() {
        var input = "This task has multiple due commands tags:one,two,three";
        var task = magicParser.parse(input);
        expect(task.tags).toEqual([{name: "one"},{name: "two"},{name: "three"}]);
    });

    it("should parse tags when @tag is in the task title", function() {
        var input = "This task has @someTags specified in the @title";
        var task = magicParser.parse(input);
        expect(task.tags).toEqual([{name: "someTags"},{name: "title"}]);
    });

    it("should parse tags when @tag is in the beginning of the task title", function() {
        var input = "@This task has only one tag on the beginning of the title";
        var task = magicParser.parse(input);
        expect(task.tags).toEqual([{name: "This"}]);
    });

    it("should not parse email addresses as tags from task title", function() {
        var input = "This task has email_address@inTheTitle.com and no tags";
        var task = magicParser.parse(input);
        expect(task.tags).toEqual([]);
    });

    it("should parse 'today' in the dates to the proper date", function() {
        var input = "This task has a due date start:today due:today";
        var task = magicParser.parse(input);
        var todayInMilliseconds = moment().startOf('day').valueOf();
        expect(task.startDate).toEqual(todayInMilliseconds);
        expect(task.dueDate).toEqual(todayInMilliseconds);
    });

    it("should parse 'tomorrow' in the dates to the proper date", function() {
        var input = "This task has a due date defer:tomorrow due:tomorrow";
        var task = magicParser.parse(input);
        var tomorrowInMilliseconds = moment().startOf('day').add(1, 'day').valueOf();
        expect(task.startDate).toEqual(tomorrowInMilliseconds);
        expect(task.dueDate).toEqual(tomorrowInMilliseconds);
    });

    it("should leave date commands in title as it is when date is in invalid format", function() {
        var input = "This task has a due date start:wrongFormatDate";
        var task = magicParser.parse(input);
        expect(task.startDate).toBeUndefined();
        expect(task.title).toBe(input);
    });

    it("should parse 'monday' and other days strings in the date commands to the proper date in future", function() {
        var input = "This task has a due date start:monday due:sunday";
        var task = magicParser.parse(input);
        var nextMondayInMilliseconds = moment().day('Monday').startOf('day').valueOf();
        if (nextMondayInMilliseconds <= moment().startOf('day').valueOf()) {
            nextMondayInMilliseconds = moment().add(7, 'day').day('Monday').startOf('day').valueOf();
        }
        var nextSundayInMilliseconds = moment().day('Sunday').startOf('day').valueOf();
        if (nextSundayInMilliseconds <= moment().startOf('day').valueOf()) {
            nextSundayInMilliseconds = moment().add(7, 'day').day('Sunday').startOf('day').valueOf();
        }
        expect(task.startDate).toEqual(nextMondayInMilliseconds);
        expect(task.dueDate).toEqual(nextSundayInMilliseconds);
    });

});

