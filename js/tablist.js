var app = angular.module("TabList", []);

function TabListCtrl($scope) {

}

app.directive("tablist", function() {
   return {
       restrict: "E",
       replace: true,
       transclude: true,
       scope: {
         mainColumn: "@",
         indent: "@"
       },
       template: "<ul class='tabular-list' ng-transclude></ul>",
       controller: function($scope, $element, $transclude) {
           this.getMainColumnNumber = function() {
               var mainColumn = $scope.mainColumn;
               if (this.getLevel() > 0) {
                   mainColumn = getMainColumnFromParent();
               }
               return mainColumn;
           }
           this.getIndent = function() {
               var indent = $scope.indent;
               if (this.getLevel() > 0) {
                   indent = getIndentFromParent();
               }
               return indent;
           }
           this.getLevel = function() {
               return $element.parents('ul').length;
           }

           var getIndentFromParent = function() {
               return $element.parents('ul').last().attr("indent");
           }
           var getMainColumnFromParent = function () {
               return $element.parents('ul').last().attr('main-column');
           }
       }
   }
});

app.directive("cell", function ($compile) {
    return {
        restrict: "E",
        require: [
            "^tablist",
            "^row"
        ],
        replace: true,
        transclude: true,
        scope: {},
        template: "<span><span style='display: inline;' ng-transclude></span></span>",
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
                element.addClass("tablist-main-column");
            }
            if (element.index() == mainColumnNumber && rowCtrl.hasChildren()) {
                var expander = $compile("<expander />")(scope)
                element.prepend(expander);
            }
        }
    }
});

app.directive("row", function($timeout) {
    return {
        restrict: "E",
        replace: "true",
        require: "^tablist",
        transclude: true,
        scope: {},
        template: "<li ng-transclude></li>",
        controller: function($scope, $element) {
            this.hasChildren = function() {
                return $element.has("ul").length > 0
            }
            $scope.expand = function() {
                alert("Fucking YeaH!");
            }
        }
    }
});

app.directive("expander", function() {
    return {
        restrict: "E",
        replace: true,
        require: "^row",
        template: "<span ng-click='expand()' class='tablist-expander'></span>",
        controller: function($scope, $element) {

        },
        link: function(scope, element, attrs, rowCtrl) {
            scope.rowCtrl = rowCtrl
        }
    }
});