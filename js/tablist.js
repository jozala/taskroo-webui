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
       controller: function($scope, $element) {
           this.getMainColumnNumber = function() {
               var mainColumn = $scope.mainColumn;
               if (this.getLevel() > 0) {
                   mainColumn = getMainColumnFromParent();
               }
               return mainColumn;
           };
           this.getIndent = function() {
               var indent = $scope.indent;
               if (this.getLevel() > 0) {
                   indent = getIndentFromParent();
               }
               return indent;
           };
           this.getLevel = function() {
               return $element.parents('ul').length;
           };

           var getIndentFromParent = function() {
               return $element.parents('ul').last().attr("indent");
           };
           var getMainColumnFromParent = function () {
               return $element.parents('ul').last().attr('main-column');
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

app.directive("row", function() {
    return {
        restrict: "E",
        replace: true,
        require: "^tablist",
        transclude: true,
        scope: true,
        template: "<li ng-transclude></li>",
        controller: function($scope, $element) {
            this.expanded = true;

            this.hasChildren = function() {
                return $element.has("ul").length > 0
            };
            this.expandRow = function() {
                this.expanded = (!this.expanded);
                console.log("after change: " + this.expanded);
                console.log($element);
                if (this.expanded == false) {
                    $element.children("ul").hide();
                } else {
                    $element.children("ul").show();
                }
            };
        }
    }
});

app.directive("expander", function() {
    return {
        restrict: "E",
        replace: true,
        require: "^row",
        template: "<span ng-click='expandRow()' class='tablist-expander'></span>",
        controller: function($scope) {
            $scope.expandRow = function() {
                console.log($scope.rowCtrl);
                $scope.rowCtrl.expandRow();
            }
        },
        link: function(scope, element, attrs, rowCtrl) {
            scope.rowCtrl = rowCtrl;
        }
    }
});