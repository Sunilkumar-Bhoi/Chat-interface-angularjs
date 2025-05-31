angular.module('chatApp')
.factory('themeService', ['$window', function($window) {
    var service = {
        isDark: false,
        
        initTheme: function() {
            // Check localStorage for saved theme
            var savedTheme = $window.localStorage.getItem('theme');
            
            // Or use system preference
            if (!savedTheme) {
                var prefersDark = $window.matchMedia('(prefers-color-scheme: dark)').matches;
                savedTheme = prefersDark ? 'dark' : 'light';
            }
            
            this.isDark = savedTheme === 'dark';
        },
        
        toggleTheme: function() {
            this.isDark = !this.isDark;
            $window.localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
        }
    };
    
    return service;
}]);