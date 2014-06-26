(function(){
  var app = angular.module('SessionEditor', []);

  app.factory('Modules', function(){

    var modules = [];

    return modules;
  });

  app.controller('ModulesEditorController', function($scope, Modules){
    $scope.modules = Modules;

    $scope.addModule = function(type){
      console.log(type);
      $scope.modules.push({type: type});
    };

  });

  app.controller('QuizEditorController', function($scope){

    $scope.init = function(index){
      $scope.quiz = $scope.$parent.modules[index];
      angular.extend($scope.quiz, {
        title: "",
        instructions: "",
        questions: []
      });
    };

    $scope.addQuestion = function(){
      console.log($scope.quiz);
      $scope.quiz.questions.push({type: "True/False", choices: []});
    };
  });

  app.controller('QuestionEditorController', function($scope){
    $scope.init = function($index){
        $scope.question = $scope.$parent.quiz.questions[index];
        angular.extend($scope.questions, {
            choices: []
        });
    }

  });

  app.controller('ModulesPreviewController', function($scope, Modules){
    $scope.modules = Modules;
  });

    app.filter('capitalize', function() {
        return function(input, scope) {
            if (input!=null)
                input = input.toLowerCase();
            return input.substring(0,1).toUpperCase()+input.substring(1);
        }
    });

})();