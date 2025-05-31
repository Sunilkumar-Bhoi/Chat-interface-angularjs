angular.module('chatApp')
.directive('onlineStatus', function() {
    return {
        restrict: 'E',
        scope: {
            status: '@'
        },
        template: '<span class="online-status" ng-class="statusClass"></span>',
        link: function(scope) {
            scope.statusClass = scope.status === 'online' ? 'online' : 'offline';
        }
    };
});