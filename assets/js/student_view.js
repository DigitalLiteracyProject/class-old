(function(){
    var app = angular.module('StudentView', []);

    socket.on('connect', function socketConnected(){
        console.log('Socket connected with sessionID: ' + this.socket.sessionid);

        socket.get('classroom/subscribe/' + classroomID, function gotResponse(){
            console.log();
        });

        socket.on('message', function messageReceived(message){

        });
    });

    app.controller('MessagesController', function($scope){
        $scope.messages = [];

        $scope.sendMessage = function(message){
            if(message.length > 0){
                $scope.messages.push(message);
                $scope.inputtedMessage = '';

                // push the event here
                socket.emit()
            }
        }

    });

    app.controller('ModulesOverview', function($scope){
        $scope.active_module = 1;
        $scope.modules = [{type: "quiz", title: "Review Quiz"}, {type: "code", title: "Warmup Exercise"}, {type: "lecture", title: "For Loop Lecture"}];
    });

})();