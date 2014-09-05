'use strict';

angular.module('cepingApp')
  .controller('QuestionCtrl', function ($scope, $http, socket) {
    console.log($scope);
    $scope.questions = [];

    $http.get('/api/questions').success(function(questions) {
      $scope.questions = questions;
      socket.syncUpdates('question', $scope.questions);
    });

    $scope.addQuestion = function() {
      if($scope.question.description === '') {
        return;
      }
      $http.post('/api/questions', $scope.question);
      $scope.newThing = '';
    };

    $scope.deleteQuestion = function(question) {
      $http.delete('/api/questions/' + question._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('question');
    });
  });
