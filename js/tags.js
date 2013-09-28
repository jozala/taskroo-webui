function TagsCtrl($scope, TagsService) {
    $scope.tags = TagsService
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
    }
})

app.directive("tagIcon", function () {
    return {
        restrict: "E",
        scope: {
            color: "@",
            name: "@"
        },
        template: "<div class='tagIcon' style='background-color: {{ color }};' title='{{ name }}'></div>"
    }
})

app.directive("badge", function() {
    return {
        restrict: "E",
        transclude: true,
        replace: true,
        template: "<span class='badge' ng-transclude></span>"
    }
})
