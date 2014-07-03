(function(){
    var app = angular.module('StudentView', []);

    app.controller('MessagesController', function($scope){
        $scope.messages = [];

        $scope.sendMessage = function(message){
            if(message.length > 0){
                $scope.messages.push(message);
                $scope.inputtedMessage = '';
                // push the event here
            }
        }

    });

    app.controller('ModulesOverview', function($scope){
        $scope.active_module = 1;
        $scope.modules = [{type: "quiz", title: "Review Quiz"}, {type: "code", title: "Warmup Exercise"}, {type: "lecture", title: "For Loop Lecture"}];
    });

})();