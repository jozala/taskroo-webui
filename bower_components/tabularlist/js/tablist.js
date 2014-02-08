var app = angular.module("TabList", []);

// TODO move changes from this file to actual project file (MARIUSZ!!!)
app.factory("TableService", function () {
    return [
        {"id": "1", "name": "Main Cell", "after": "sup-after", "children": []},
        {"id": "2", "name": "Second Cell", "after": "sup-after", "children": [
            {"id": "2.1", "name": "Second-one", "after": "sub-after", "children": [
                {"id": "2.1.1", "name": "Second one-one", "after": "sup-after", "children": []}
            ]},
            {"id": "2.2", "name": "Second-two", "after": "sup-after", "children": []}
        ]},
        {"id": "3", "name": "Third Cell", "after": "sup-after", "children": [
            {"id": "3.1", "name": "Third one", "after": "sub-after", "children": [
                {"id": "3.1.1", "name": "Third one-one", "after": "sup-after", "children": []}
            ]}
        ]}
    ];
});

function TabListCtrl($scope, TableService) {
    $scope.table = TableService;
    $scope.addElement = function() {
        var element = {"id": "1", "name": "Main Cell", "after": "sup-after", "children": []};
        $scope.table.push(element);
    };
    $scope.template = '<row children="row.children" row="row" ng-repeat="row in children"><cell>{{ row.id }}</cell><cell>{{ row.name }}</cell><cell>{{ row.after }}</cell></row>';
}

app.directive("tablist", function () {
    return {
        restrict: "E",
        replace: true,
        transclude: true,
        scope: {
            template: "=",
            functions: "="
        },
        template: "<ul class='tabular-list' ng-transclude></ul>",
        controller: function($scope, $element, $attrs) {
            this.getIndent = function() {
                var indent = $attrs.indent;
                if (this.getLevel() > 0) {
                    indent = getIndentFromParent();
                }
                return indent;
            };
            this.getLevel = function() {
                return $element.parents('ul').length;
            };
            this.isExpandedAtInit = function() {
                var expanded = $attrs.expanded === "true";
                if (this.getLevel() > 0) {
                    expanded = getExpandedFromParent();
                }
                return expanded;
            };
            this.getTemplate = function() {
                return $scope.template;
            };
            this.getFunctions = function() {
                return $scope.functions;
            };
            var getIndentFromParent = function() {
                return $element.parents('ul').last().attr("indent");
            };
            var getExpandedFromParent = function() {
                return $element.parents('ul').last().attr('expanded') === "true";
            };
        }
        
    };
});

app.directive("row", function ($compile, $timeout) {
    return {
        restrict: "E",
        replace: true,
        require: ["^tablist", "row"],
        transclude: true,
        scope: {
            row: "=",
            children: "="
        },
        template: "<li class='row'><span ng-transclude></span></li>",
        controller: function ($scope, $element) {
            this.setExpandedInit = function (isExpanded) {
                this.expanded = isExpanded;
                if (this.hasParent() && !isExpanded) {
                    $element.parent("ul").hide();
                }
            };
            this.hasParent = function () {
                return $element.parent("ul").parent().is("li");
            };
            this.hasChildren = function () {
                return $scope.children.length > 0;
            };
            this.expand = function () {
                this.expanded = true;
                $element.children("ul").show();
            };
            this.collapse = function () {
                this.expanded = false;
                $element.children("ul").hide();
            };
            this.toggleExpand = function () {
                if (this.expanded === true) {
                    this.collapse();
                } else {
                    this.expand();
                }
            };
            this.isExpanded = function () {
                return this.expanded;
            };
            this.getIndent = function () {
                return $scope.tablistCtrl.getIndent();
            };
            this.getLevel = function () {
                return $element.parents('ul').length - 1;
            };
        },
        compile: function(tElement, tAttrs, linker) {
            return  {
                pre: function($scope, $element, $attr, $controllers) {
                        var tablistCtrl = $controllers[0];
                        var rowCtrl = $controllers[1];
                        $scope.tablistCtrl = tablistCtrl;
                        rowCtrl.setExpandedInit(tablistCtrl.isExpandedAtInit());

                },
                post: function($scope, $element, $attr, $controllers) {
                    var tablistCtrl = $controllers[0];
                    $scope.template = tablistCtrl.getTemplate();
                    $scope.functions = tablistCtrl.getFunctions();
                    if (angular.isArray($scope.children)) {
                        $compile("<tablist indent='indent' expanded='expanded' functions='functions' template='template'>" +
                                    $scope.template +
                                "</tablist>")($scope, function(cloned) {
                            $element.append(cloned);
                        });
                    }
                }
            };
        }
    };
});

app.directive("cell", function ($timeout) {
    return {
        restrict: "E",
        require: "^row",
        replace: true,
        scope: true,
        transclude: true,
        template: "<span class='cell'><expander ng-if='isMainColumn() && rowCtrl.hasChildren()' /><span class='cell-content' ng-transclude></span></span>",
        controller: function($scope, $element) {
            $scope.isMainColumn = function() {
                return $element.hasClass("main-column");
            };
            $scope.expandRow = function() {
                $timeout($scope.rowCtrl.expand, 0);
            }
        },
        link: function(scope, element, attrs, rowCtrl) {
            scope.rowCtrl = rowCtrl;
        }
    };
});

app.directive('mainColumn', function () {
    return {
        restrict: "C",
        require: "^row",
        link: function(scope, element, attrs, rowCtrl) {
            var indent = rowCtrl.getIndent();
            var level = rowCtrl.getLevel();

            if (level >= 1) {
                var levelIndentation = (indent * level) + "px";
                element.css("padding-left", "+=" + levelIndentation);
                element.css('width', "-=" + levelIndentation);
            }
        }
    }
});


// TODO bug exists causing not changing expander state (class) when new subtask is added
app.directive("expander", function () {
    return {
        restrict: "E",
        replace: true,
        require: "^row",
        template: "<span ng-click='toggleExpand()' class='tablist-expander' ng-class='{expanded: rowCtrl.isExpanded(), collapsed: !rowCtrl.isExpanded()}'></span>",
        controller: function ($scope) {
            $scope.toggleExpand = function () {
                $scope.rowCtrl.toggleExpand();
            };
        },
        link: function (scope, element, attrs, rowCtrl) {
            scope.rowCtrl = rowCtrl;
        }
    };
});