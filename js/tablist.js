var app = angular.module("TabList", []);


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
}

app.directive("tablist", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            mainColumn: "=",
            indent: "=",
            expanded: "=",
            model: "="
        },
        template: "<ul class='tabular-list'><row ng-repeat='row in model' row='row' main-column='mainColumn' indent='indent' expanded='expanded'></row></ul>"
    }
});

app.directive("row", function ($compile) {
    return {
        restrict: "E",
        replace: true,
        require: "row",
        scope: {
            mainColumn: "=",
            indent: "=",
            expanded: "=",
            row: "="
        },
        template: "<li><cell>{{ row.id }}</cell><cell>{{ row.name }}</cell><cell>{{ row.after }}</cell></li>",
        controller: function ($scope, $element) {
            this.setExpandedInit = function (isExpanded) {
                if (this.hasParent() && !isExpanded) {
                    $element.parent("ul").hide();
                }
            };
            this.hasParent = function () {
                return $element.parent("ul").parent().is("li");
            };
            this.hasChildren = function () {
                return $scope.row.children.length > 0;
            };
            this.expand = function () {
                $scope.expanded = (!$scope.expanded);
                if ($scope.expanded == false) {
                    $element.children("ul").hide();
                } else {
                    $element.children("ul").show();
                }
            };
            this.isExpanded = function () {
                return $scope.expanded;
            };
            this.getMainColumnNumber = function () {
                return $scope.mainColumn;
            };
            this.getIndent = function () {
                return $scope.indent;
            };
            this.getLevel = function () {
                return $element.parents('ul').length;
            };
        },
        link: function (scope, element, attrs, rowCtrl) {
            rowCtrl.setExpandedInit(scope.expanded);
            if (angular.isArray(scope.row.children) && scope.row.children.length > 0) {
                $compile("<tablist model='row.children' main-column='mainColumn' indent='indent' expanded='expanded'></tablist>")(scope, function(cloned) {
                    element.append(cloned);
                });
            }
        }
    }
});

app.directive("cell", function () {
    return {
        restrict: "E",
        require: [
            "^row"
        ],
        replace: true,
        transclude: true,
        template: "<span><expander /><span style='display: inline;' ng-transclude></span></span>",
        controller: function($scope, $element) {
            $scope.isMainColumn = function() {
                return $scope.rowCtrl.getMainColumnNumber() == $element.index();
            }
        },
        compile: function(){
            return{
                post: function postLink(scope, iElement, iAttrs, controller){
                    scope.rowCtrl = controller[0];
                    // remove ng-transclude attribute to prevent error thrown when transcluded content is re-compiled
                    angular.element(iElement[0].querySelectorAll('[ng-transclude]')).removeAttr('ng-transclude');

                    var indent = scope.rowCtrl.getIndent();
                    var level = scope.rowCtrl.getLevel();
                    if (scope.isMainColumn() && level >= 1) {
                        var levelIndentation = (indent * level) + "px";
                        iElement.css("padding-left", "+=" + levelIndentation);
                        iElement.css('width', "-=" + levelIndentation)
                    }

                    if (!scope.isMainColumn() || !scope.rowCtrl.hasChildren()) {
                        $(".tablist-expander", iElement).remove();
                    }
                }
            }
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