surveyBot.controller('QuestionsCtrl', function QuestionsCtrl($scope, QuestionsFactory.js) {
  $scope.question = [ questionOne: "What is your favorite game?",
                      questionTwo: "What is your favorite sport?" ];
  $scope.QuestionsFactory = QuestionsFactory;
});
