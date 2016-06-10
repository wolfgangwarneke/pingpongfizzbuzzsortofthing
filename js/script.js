$(document).ready(function() {
  var answers = [];
  var previousAnswer;
  var previousPrevious;
  //game section
  function getAnswers(countTo, firstFactor, secondFactor) {
    answers = [];
    for (i = 1; i <= countTo; i++) {
      if ((i % firstFactor === 0) && (i % secondFactor === 0)) {
        answers.push('pingpong');
      } else if (i % firstFactor === 0) {
        answers.push('ping');
      } else if (i % secondFactor === 0) {
        answers.push('pong');
      } else {
        answers.push('number');
      }
    }
  };

  //start game
  //get array for game iteration values
  var gameCounter = 0;//necessary?
  $('.start').click(function() {
    getAnswers(100, 3, 5);
    console.log(answers.length);
  });

  //get input from controls
  var answerIs = "";
  var controlToggle = "";
  $('#numberButton').click(function() {
    answerIs = "number";
    console.log(answerIs);
  });
  $('#pingButton').click(function() {
    answerIs = "ping";
    console.log(answerIs);
  });
  $('#pongButton').click(function() {
    answerIs = "pong";
    console.log(answerIs);
  });
  $('#pingpongButton').click(function() {
    answerIs = "pingpong";
    console.log(answerIs);
  });

  //display next iteration





///tutorial section
  $('#goTutorial').click(function() {
    $('#homePage, #tutorialPage1').toggleClass('hidden');
  });
  $('#userNumber').submit(function(event) {
    $('#tutorialPrint').empty();
    var howHighToCount = parseInt($('#input').val());
    var numbersToPrint = [];
    function tutorialCounter(countTo, firstFactor, secondFactor) {
      numbersToPrint = [];
      for (i = 1; i <= countTo; i++) {
        if ((i % firstFactor === 0) && (i % secondFactor === 0)) {
          numbersToPrint.push('<em>Pingpong</em> ('+i+')');
        } else if (i % firstFactor === 0) {
          numbersToPrint.push('<em>Ping</em> ('+i+')');
        } else if (i % secondFactor === 0) {
          numbersToPrint.push('<em>Pong</em> ('+i+')');
        } else {
          numbersToPrint.push(i);
        }
      }
      numbersToPrint.forEach(function(iteration) {
        $('#tutorialPrint').append('<li>' + iteration + "</li>");
      });
    }
    tutorialCounter(howHighToCount, 3, 5);
    $('#tutorialPage1, #tutorialPage2').toggleClass('hidden');
    event.preventDefault();
  });
  $('#goBackHome').click(function() {
    $('#homepage, #tutorialPage2').toggleClass('hidden');
  });
  $('.playTheGame').click(function() {
    $('#homePage, #tutorialPage1, #tutorialPage2').addClass('hidden');
    $('#gamePage').removeClass('hidden');
  });
});
