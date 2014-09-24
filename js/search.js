function SearchCtrl($scope, SearchService, $modal, $log) {
    $scope.search = SearchService;

    $scope.clearSearch = function($event) {
        $scope.search.searchString = '';
        $event.target.blur()
    }
}