(function(){
  var app = angular.module('SessionEditor', []);

  app.controller('QuizEditorController', function(){
    this.data = {};
    this.data.questions = [];

    this.addQuestion = function(){
      this.data.questions.push({type: "True/False"});
    };


  });

  app.controller('QuestionEditorController', function(){

    this.destroy = function($scope){
      $scope.$destroy();
    };
    
    this.updateQuestionType = function(type){
      
    };

  });

})();