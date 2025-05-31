angular.module('chatApp')
.controller('ChatController', ['$scope', '$timeout', 'themeService', 
function($scope, $timeout, themeService) {
    var vm = this;
    
    // Expose theme service to view
    $scope.themeService = themeService;
    
    // Mobile menu state
    $scope.mobileMenuOpen = false;
    vm.toggleMobileMenu = function() {
        $scope.mobileMenuOpen = !$scope.mobileMenuOpen;
    };
    
    // Current year for footer
    vm.currentYear = new Date().getFullYear();
    
    // Current contact
    vm.currentContact = {
        name: 'Sarah Johnson',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        status: 'online'
    };
    
    // Messages array
    vm.messages = [
        { text: 'Hey there! How\'s your day going?', time: new Date().setHours(10, 30), sent: false },
        { text: 'Pretty good! Just finished that project we were working on.', time: new Date().setHours(10, 32), sent: true },
        { text: 'That\'s awesome! Can you send me the files when you get a chance?', time: new Date().setHours(10, 33), sent: false }
    ];
    
    // New message
    vm.newMessage = '';
    vm.isTyping = false;
    
    // Features
    vm.features = [
        { icon: 'fa-comment-dots', title: 'Real-time Chat', description: 'Instant messaging with read receipts and typing indicators.' },
        { icon: 'fa-moon', title: 'Dark Mode', description: 'Eye-friendly dark theme for comfortable nighttime use.' },
        { icon: 'fa-mobile-alt', title: 'Responsive Design', description: 'Works seamlessly on all devices from desktop to mobile.' },
        { icon: 'fa-shield-alt', title: 'End-to-End Encryption', description: 'Your conversations are secure and private.' }
    ];
    
    // Send message
    vm.sendMessage = function() {
        if (!vm.newMessage.trim()) return;
        
        // Add new message
        vm.messages.push({
            text: vm.newMessage,
            time: new Date(),
            sent: true
        });
        
        // Clear input
        vm.newMessage = '';
        
        // Simulate typing
        vm.isTyping = true;
        
        // Simulate reply after delay
        $timeout(function() {
            vm.isTyping = false;
            
            var replies = [
                "Thanks for letting me know!",
                "Got it, I'll check it out.",
                "That sounds great!",
                "I appreciate your message.",
                "Let me think about that and get back to you."
            ];
            
            vm.messages.push({
                text: replies[Math.floor(Math.random() * replies.length)],
                time: new Date(),
                sent: false
            });
            
        }, 2000);
    };
    
    // Simulate periodic typing
    function simulateTyping() {
        $timeout(function() {
            vm.isTyping = true;
            
            $timeout(function() {
                vm.isTyping = false;
                
                vm.messages.push({
                    text: "Just sent you the files. Let me know if you need anything else!",
                    time: new Date(),
                    sent: false
                });
                
                // Repeat
                simulateTyping();
            }, 3000);
        }, 10000);
    }
    
    // Start simulation
    simulateTyping();
}]);