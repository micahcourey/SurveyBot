surveyBot.controller('ResponsesCtrl', function ResponsesCtrl($scope, QuestionsFactory) {
  $scope.responses = QuestionsFactory.responses;
  $scope.QuestionsFactory = QuestionsFactory;
});
