var surveyBot = angular.module('surveyBot', ['ui.router']);

surveyBot.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: "HeadersCtrl"
      },
      'body': {
        templateUrl: "partials/home.html"
      }
    }
  });

  $stateProvider.state('questions', {
    url: "/questions",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: "HeadersCtrl"
      },
      'body': {
        templateUrl: "partials/questions.html",
        controller: "QuestionsCtrl"
      }
    }
  });

  $stateProvider.state('survey', {
    url: "/survey",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: "HeadersCtrl"
      },
      'body': {
        templateUrl: "partials/survey.html",
        controller: "ResponsesCtrl"
      }
    }
  });
});
