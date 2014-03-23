

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
        expect(task.startingOn).toBe(expectedDateInMilliseconds);
    });

    it("should parse start date when there is a prefix start:", function() {
        var input = "This task has a due date start:20140214";
        var task = magicParser.parse(input);
        var expectedDateInMilliseconds = moment("20140214", "YYYYMMDD").valueOf();
        expect(task.startingOn).toBe(expectedDateInMilliseconds);
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
        expect(task.tags).toEqual(["one","two","three"]);
    });

    it("should parse tags when @tag is in the task title", function() {
        var input = "This task has @someTags specified in the @title";
        var task = magicParser.parse(input);
        expect(task.tags).toEqual(["someTags", "title"]);
    });

    it("should parse tags when @tag is in the beginning of the task title", function() {
        var input = "@This task has only one tag on the beginning of the title";
        var task = magicParser.parse(input);
        expect(task.tags).toEqual(["This"]);
    });

    it("should not parse email addresses as tags from task title", function() {
        var input = "This task has email_address@inTheTitle.com and no tags";
        var task = magicParser.parse(input);
        expect(task.tags).toEqual([]);
    });

//    it("should parse 'today' in the dates to the proper date", function() {
//        var input = "This task has a due date start:today due:today";
//        var task = magicParser.parse(input);
//        var todayInMilliseconds = moment().startOf('day').valueOf();
//        expect(task.startingOn).toEqual(todayInMilliseconds);
//        expect(task.dueDate).toEqual(todayInMilliseconds);
//    });

});

