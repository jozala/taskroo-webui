var app = angular.module("TabList", []);

function TabListCtrl($scope) {
}

app.directive("tablist", function () {
    return {
        restrict: "E",
        replace: true,
        transclude: true,
        scope: {
            mainColumn: "@",
            indent: "@",
            expanded: "@"
        },
        template: "<ul class='tabular-list' ng-transclude></ul>",
        controller: function ($scope, $element) {
            this.getMainColumnNumber = function () {
                var mainColumn = $scope.mainColumn;
                if (this.getLevel() > 0) {
                    mainColumn = getMainColumnFromParent();
                }
                return mainColumn;
            };
            this.getIndent = function () {
                var indent = $scope.indent;
                if (this.getLevel() > 0) {
                    indent = getIndentFromParent();
                }
                return indent;
            };
            this.getLevel = function () {
                return $element.parents('ul').length;
            };
            this.isExpandedAtInit = function () {
                var expanded = $scope.expanded === "true";
                if (this.getLevel() > 0) {
                    expanded = getExpandedFromParent();
                }
                return expanded;
            }

            var getIndentFromParent = function () {
                return $element.parents('ul').last().attr("indent");
            };
            var getMainColumnFromParent = function () {
                return $element.parents('ul').last().attr('main-column');
            };
            var getExpandedFromParent = function () {
                return $element.parents('ul').last().attr('expanded') === "true";
            };
        }
    }
});

app.directive("cell", function () {
    return {
        restrict: "E",
        require: [
            "^tablist",
            "^row"
        ],
        replace: true,
        transclude: true,
        template: "<span><expander /><span style='display: inline;' ng-transclude></span></span>",
        link: function (scope, element, attrs, requiredControllers) {
            var tablistCtrl = requiredControllers[0];
            var rowCtrl = requiredControllers[1];
            var mainColumnNumber = tablistCtrl.getMainColumnNumber();
            var indent = tablistCtrl.getIndent();
            var level = tablistCtrl.getLevel();
            if (element.index() == mainColumnNumber && level >= 1) {
                var levelIndentation = (indent * level) + "px";
                element.css("padding-left", "+=" + levelIndentation);
                element.css('width', "-=" + levelIndentation)
            }

            if (element.index() != mainColumnNumber || !rowCtrl.hasChildren()) {
                $(".tablist-expander", element).remove();
            }
        }
    }
});

app.directive("row", function () {
    return {
        restrict: "E",
        replace: true,
        require: ["row", "^tablist"],
        transclude: true,
        scope: {},
        template: "<li ng-transclude></li>",
        controller: function ($scope, $element) {
            this.setExpandedInit = function () {
                this.expanded = $scope.tablistCtrl.isExpandedAtInit();
                if (!this.expanded && this.hasParent()) {
                    $element.parent("ul").hide();
                }
            };
            this.hasParent = function () {
                return $element.parent("ul").parent().is("li");
            };
            this.hasChildren = function () {
                return $element.has("ul").length > 0
            };
            this.expand = function () {
                this.expanded = (!this.expanded);
                if (this.expanded == false) {
                    $element.children("ul").hide();
                } else {
                    $element.children("ul").show();
                }
            };
            this.isExpanded = function () {
                return this.expanded;
            }
        },
        link: function (scope, element, attrs, ctrls) {
            var rowCtrl = ctrls[0];
            var tablistCtrl = ctrls[1];
            scope.tablistCtrl = tablistCtrl;
            rowCtrl.setExpandedInit();
        }
    }
});

app.directive("expander", function () {
    return {
        restrict: "E",
        replace: true,
        require: "^row",
        template: "<span ng-click='expand()' class='tablist-expander' ng-class='{expanded: rowCtrl.isExpanded(), collapsed: !rowCtrl.isExpanded()}'></span>",
        controller: function ($scope) {
            $scope.expand = function () {
                $scope.rowCtrl.expand();
            }
        },
        link: function (scope, element, attrs, rowCtrl) {
            scope.rowCtrl = rowCtrl;
        }
    }
});