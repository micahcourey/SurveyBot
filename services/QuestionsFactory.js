surveyBot.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.questions = [];
  factory.responses = [];

  factory.addQuestion = function() {
    factory.questions.push({ question: factory.question });
    factory.question = null;
  };

  factory.addResponse = function() {
    var response = { response: factory.response };
    factory.responses.push(responses);
    factory.responses = null;
  };

  return factory;
});
