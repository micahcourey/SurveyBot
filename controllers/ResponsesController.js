surveyBot.controller('ResponsesCtrl', function ResponsesCtrl($scope, QuestionsFactory) {

  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId)

  $scope.addResponse = function() {
    $scope.question.response.push({ response: $scope.questionResponse });
    $scope.questionResponse = null;
  };
});

courseRoster.controller("StudentCtrl", function ($scope) {
  $scope.addResponse = function(questionResponse) {
    $scope.question.responses.push({ response: questionResponse });
    $scope.questionResponse = null;
  }
});
