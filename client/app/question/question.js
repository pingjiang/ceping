'use strict';

angular.module('cepingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('questions', {
        url: '/questions',
        templateUrl: 'app/question/index.html',
        controller: 'QuestionCtrl'
      })
      .state('questions.create', {
        url: '/create',
        templateUrl: 'app/question/create.html',
        controller: 'QuestionCreateCtrl'
      })
      .state('questions.edit', {
        url: '/edit',
        templateUrl: 'app/question/edit.html',
        controller: 'QuestionEditCtrl',
        authenticate: true
      });
  });