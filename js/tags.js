function TagsCtrl($scope, TagsService) {
    $scope.tags = TagsService;
}

app.directive("tag", function () {
    return {
        restrict: "E",
        transclude: true,
        replace: true,
        scope: {
            color: "@",
            size: "@",
            name: "@"
        },
        template: "<li><tag-icon color='{{ color }}' name='{{ name }}'></tag-icon><span ng-transclude></span><badge>{{ size }}</badge></li>"
    };
});

app.directive("tagIcon", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            color: "@",
            name: "@"
        },
        template: "<div class='tagIcon'></div>",
        link: function(scope, element, attrs) {
            element.css("background-color", scope.color);
            element.attr("title", scope.name);
        }
    };
});

app.directive("badge", function() {
    return {
        restrict: "E",
        transclude: true,
        replace: true,
        template: "<span class='badge' ng-transclude></span>"
    }
})
