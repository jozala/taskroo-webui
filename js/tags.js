function TagsCtrl($scope, TagsService, $modal, $log) {
    $scope.tags = TagsService;

    $scope.editTag = function(tag) {
        var editTaskModalInstance = $modal.open({
            templateUrl: 'editTagModalContent.html',
            backdrop: 'static',
            controller: EditTagModalCtrl,
            resolve: {
                tag: function() {
                    return tag;
                }
            }
        });
        editTaskModalInstance.result.then(function(originalTag) {
            $scope.updateTag(originalTag);
        });
    };

    $scope.removeTag = function(tag) {
        var removeConfirmed = confirm("Are you sure to remove this tag?\n" + tag.name + "\n\nYou cannot undo this.");
        if (removeConfirmed) {
            $log.info("tag: id=" + tag.id + " " + tag.name + " removed");
            for (var i in $scope.tags) {
                if($scope.tags[i] == tag) {
                    $scope.tags.splice(i, 1);
                    break;
                }
            }
        }
    };

    $scope.updateTag = function(tag) {
        $log.info("tag: id=" + tag.id + " " + tag.name + " updated");
    }
}

var EditTagModalCtrl = function($scope, $modalInstance, tag) {
    $scope.tag = angular.copy(tag);

    $scope.ok = function(changedTag) {
        updateTaskWithData(tag, changedTag);
        $modalInstance.close(tag);
    };

    $scope.cancel = function() {
        $modalInstance.dismiss();
    };

    var updateTaskWithData = function(originalTag, changedTag) {
        originalTag.name = changedTag.name;
        originalTag.visibleInWorkView = changedTag.visibleInWorkView;
        originalTag.color = changedTag.color;
    };
};

app.directive("tag", function () {
    return {
        restrict: "E",
        transclude: true,
        replace: true,
        template: "<li class='tag'><tag-icon ng-model='tag'></tag-icon><span class='tag-name' ng-transclude></span><badge value='{{ tag.size }}' /></li>"
    };
});

app.directive("tagIcon", function () {
    return {
        restrict: "E",
        replace: true,
        template: "<div class='tagIcon' style='background-color: {{tag.color}}' title='{{tag.name}}'></div>"
    };
});

app.directive("badge", function() {
    return {
        restrict: "E",
        replace: true,
        scope: {
            value: "@"
        },
        template: "<span class='badge'>{{value}}</span>"
    }
});

app.directive("contextMenuToggle", function() {
    return {
        link: function (scope, element, attr) {
            element.attr("data-toggle", "context");
            element.attr("data-target", ".tag-edit-context-menu");

            element.contextmenu({
                target: attr.contextMenuToggle,
                before: function (e, element) {
                    e.preventDefault();
                    $(".tag-edit-context-menu").hide();
                    return true;
                }
            });
        }
    }
});

app.directive("bootstrapSwitch", function() {
    return {
        link: function (scope, element, attr) {
            element.bootstrapSwitch();
            element.attr("data-on-color", "warning");
            element.attr("data-off-color", "info");
        }
    }
});