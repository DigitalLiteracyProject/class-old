(function(){
    var app = angular.module('QuizTaker', []);

    app.controller('QuizTakerController', function($scope){
        $scope.hi = 'yo';

//        initialize
        $scope.init = function(){
            $scope.quiz = {"type":"quiz","title":"DLP Class Quiz","instructions":"This is a test quiz, and the instructions go here!","questions":[{"type":"True/False","choices":[],"body":"Coding is useless.","correct_answer":"False"},{"type":"Multiple Choice","choices":["Hannah","Tom","Colin","All of the Above"],"body":"Who is the coolest CS teacher?","correct_answer":"All of the Above"},{"type":"Short Answer","choices":[],"body":"Who is this?","secondary_text":"Ved's a big fan","correct_answer":"deepika","imageURL":"http://cdn.ndtv.com/movies/images/balam-pichkaristill.jpg"},{"type":"Free Response","choices":[],"body":"What is one thing you learned today?","secondary_text":"Anything is fine. Feel free to write as much as you'd like!"}],"body":"","starter_code":"","validations":[]};
            $scope.answers = [];
//            for(var i=0; i < $scope.quiz.questions.length, i++;) {
//                $scope.answers.push(null);
//            }
        };
        $scope.init();

        $scope.flashErrors = function(errors){
            console.log(errors);
        }

        $scope.quizSubmitted = function(){
            var messages = [];
            var answers = $scope.answers;
            var correctAnswers = [];
            var questionsPendingReview = 0;
            var errorEncountered = false;
            var totalQuestions = $scope.quiz.questions.length;
            var totalCorrectAnswers = 0;

            delete $scope.flashErrors;
            delete $scope.flashResults;

            // first, verify that all answers are filled in
            for(var i = 0; i < totalQuestions; i++){
                if(typeof(answers[i]) == 'undefined'){
                    messages.push('Question ' + (i + 1) + ' is unanswered');
                    errorEncountered = true;
                }
            }

            // if there are no validation errors, then we move on to checking the answers
            if(!errorEncountered){
                for(var i = 0; i < totalQuestions; i++){
                    correctAnswers.push($scope.quiz.questions[i].correct_answer);
                    if($scope.quiz.questions[i].type != 'Free Response'){
                        if(answers[i].toLowerCase() == $scope.quiz.questions[i].correct_answer.toLowerCase()){
                            totalCorrectAnswers++;
                        } else {
                            messages[i] = 'Question ' + (i + 1) + ' incorrect. Correct answer is <b>' + $scope.quiz.questions[i].correct_answer + '</b';
                        }
                    } else {
                        questionsPendingReview++;
                    }
                }
            } else {
                $scope.flashErrors = messages;
                return;
            }


            $scope.flashResults = { results: messages,
                                    totalQuestions: totalQuestions,
                                    totalCorrectAnswers: totalCorrectAnswers,
                                    questionsPendingReview: questionsPendingReview
                                  };
        }
    });

    app.filter('capitalize', function() {
        return function(input, $scope) {
            if (input!=null)
                input = input.toLowerCase();
            return input.substring(0,1).toUpperCase()+input.substring(1);
        }
    });

})();