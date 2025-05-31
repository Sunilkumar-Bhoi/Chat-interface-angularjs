angular.module('chatApp')
    .factory('themeService', ['$window', function($window) {
        var service = {
            isDark: false,
            
            applyTheme: function() {
                var theme = service.isDark ? 'dark' : 'light';
                $window.document.documentElement.setAttribute('data-theme', theme);
            },
            
            initTheme: function() {
                var savedTheme = $window.localStorage.getItem('theme');
                if (!savedTheme) {
                    var prefersDark = $window.matchMedia('(prefers-color-scheme: dark)').matches;
                    savedTheme = prefersDark ? 'dark' : 'light';
                }
                service.isDark = savedTheme === 'dark';
                service.applyTheme();
            },
            
            toggleTheme: function() {
                service.isDark = !service.isDark;
                $window.localStorage.setItem('theme', service.isDark ? 'dark' : 'light');
                service.applyTheme();
            }
        };
        
        return service;
    }]);