(function(){
  var app = angular.module('SessionEditor', ['ngResource', 'ngRoute']);
//  var sessionResource = $resource('/session/:sessionId', {sessionId: API_id})

  console.log('Session resource ID: ' + API_id);


  app.factory('Session', function($resource){
    return $resource('/session/:id', {});
  });

  app.factory('Modules', function(){

    var modules = JSON.parse('[{"type":"quiz","title":"DLP Class Quiz 1","instructions":"Remember last class? Here are some questions, yo.","questions":[{"type":"True/False","choices":[],"body":"Coding is useless.","correct_answer":"False"}],"body":"","starter_code":"","validations":[]}, {"type":"lecture","title":"Lecture content!","instructions":"Lecture Body","questions":[],"body":"","starter_code":"","validations":[]}]');
    console.log('modules');
    console.log(modules);
    return modules;
  });

  app.controller('SessionEditorController', function($scope, Session){
//    var init = function(){
//      Session.get({id: API_id},function(data){
//        $scope.sessionData = data;
//        console.log($scope.sessionData);
//      });
//
//    };
//    init();

//    $scope.save = function(){
//      console.log('saving...');
//      console.log($scope.sessionData);
//      Session.save($scope.sessionData, function(response){
//        console.log('Saved!');
//      });
//    };

      $scope.data = [{"type":"quiz","title":"DLP Class Quiz 1","instructions":"Remember last class? Here are some questions, yo.","questions":[{"type":"True/False","choices":[],"body":"Coding is useless.","correct_answer":"False"}],"body":"","starter_code":"","validations":[]}, {"type":"lecture","title":"Lecture content!","instructions":"Lecture Body","questions":[],"body":"","starter_code":"","validations":[]}];

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
      angular.extend($scope.$parent.modules[index], $scope.quiz);
      console.log('Quiz scope');
      console.log($scope.quiz.title);
//      angular.extend($scope.quiz, {
//        title: "",
//        instructions: "",
//        questions: []
//      });
    };

    $scope.addQuestion = function(){
      console.log($scope.quiz);
      $scope.quiz.questions.push({type: "True/False", choices: []});
    };
  });

  app.controller('QuestionEditorController', function($scope){
    $scope.init = function(index){
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

  app.controller('LectureEditorController', function($scope){
     $scope.init = function(index){
         $scope.lecture = $scope.$parent.modules[index];
//         angular.extend($scope.lecture, {
//            title: "",
//            body: ""
//         });
     };
  });

  app.controller('CodeExerciseEditorController', function($scope){
     $scope.init = function(index){
         $scope.code = $scope.$parent.modules[index];
         angular.extend($scope.code, {
             title: "",
             instructions: "",
             starter_code: "",
             validations: []
         })
     }
  });

})();