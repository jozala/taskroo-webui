function TagsCtrl($scope, TagsService, TasksService, TagsFilteringService, $modal, $log, growlNotifications) {
    TagsService.service.query(function(result) {
        TagsService.tags = result;
        $scope.tags = TagsService.tags;
        $scope.tags.forEach(function(tag) {tag.selected = false});
    });

    $scope.tagFilter = TagsFilteringService;

    $scope.editTag = function(tag) {
        var editTaskModalInstance = $modal.open({
            templateUrl: 'html/editTagModalContent.html',
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
            TagsService.service.delete({tagId: tag.id}, function() {
                $log.info("tag: id=" + tag.id + " " + tag.name + " removed");
                for (var i in $scope.tags) {
                    if($scope.tags[i] == tag) {
                        $scope.tags.splice(i, 1);
                        break;
                    }
                }
                refreshTasks();
                growlNotifications.add('Tag "' + tag.name + '" has been removed.', 'warning', 10000);
            });
        }
    };

    $scope.updateTag = function(tag) {
        new TagsService.service(tag).$update({tagId: tag.id}, function(updatedTag) {
            refreshTasks();
            growlNotifications.add('Tag "' + tag.name + '" has been updated.', 'success', 5000);
        });
        $log.info("tag: id=" + tag.id + " " + tag.name + " updated");
    };

    var refreshTasks = function() {
        if (TasksService.hasUnfinishedTasks) {
            TasksService.service.getUnfinished(function (newTasks) {
                TasksService.tasks.length = 0;
                newTasks.forEach(function (refreshedTask) {
                    TasksService.tasks.push(refreshedTask);
                });
                $scope.selectTag('ALL');
            });
        } else {
            TasksService.service.getFinished(function (newTasks) {
                TasksService.finishedTasks.length = 0;
                newTasks.forEach(function (refreshedTask) {
                    TasksService.finishedTasks.push(refreshedTask);
                });
                $scope.selectTag('ALL');
            });
        }
    };

    $scope.selectTag = function(tag) {
        $scope.tags.forEach(function(tag) {tag.selected = false});

        if (tag != "ALL" && tag != "NONE") {
            tag.selected = true;
        }
        $scope.tagFilter.selectedTag = tag;
    };

    $scope.$watch('tagFilter.selectedTag', function(newSelectedTag) {
        if ($scope.tags == undefined) return;
        $scope.selectTag(newSelectedTag);
    });
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
        template: "<div class='tagIcon' style='background-color: {{tag.color}}' title='{{tag.name}}'>" +
            "<div ng-if='tag.visibleInWorkView' class='glyphicon glyphicon-tasks'></div></div>"
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