var appControllers = angular.module('app-controllers', []);

appControllers.controller('MainController', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {

}]);

appControllers.controller('AppController', ['$auth', '$scope', '$rootScope', '$state', '$timeout', '$mdSidenav', '$log', '$mdBottomSheet', '$mdDialog', function($auth, $scope, $rootScope, $state, $timeout, $mdSidenav, $log, $mdBottomSheet, $mdDialog) {

    $rootScope.busy = false;

    if($auth.isAuthenticated()) {
        $state.go('shows');
    } else {
        $state.go('auth');
    }
    
}]);
