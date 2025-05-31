angular.module('chatApp', ['ngRoute'])
.run(['themeService', function(themeService) {
    // Initialize theme from localStorage or system preference
    themeService.initTheme();
}]);