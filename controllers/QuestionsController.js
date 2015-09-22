surveyBot.controller('QuestionsCtrl', function QuestionsCtrl($scope, QuestionsFactory) {
  $scope.questionOne = QuestionsFactory.questions;
  $scope.QuestionsFactory = QuestionsFactory;
});
