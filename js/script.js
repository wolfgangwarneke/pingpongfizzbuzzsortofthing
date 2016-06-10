$(document).ready(function() {
  var answers = [];
  var previousAnswer;
  var previousPrevious;
  var answerJuggle;
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
        answers.push(i);
      }
    }
  };

  //start game
  //get array for game iteration values
  var currentToAnswer;//necessary?
  $('.start').click(function() {
    getAnswers(100, 3, 5);
    currentToAnswer = answers.shift();
    console.log(currentToAnswer);
  });

  //get input from controls
  var userPrediction = "";
  var controlToggle = "";
  $('#numberButton').click(function() {
    userPrediction = "number";
    checkAnswer(userPrediction);
  });
  $('#pingButton').click(function() {
    userPrediction = "ping";
    checkAnswer(userPrediction);
  });
  $('#pongButton').click(function() {
    userPrediction = "pong";
    checkAnswer(userPrediction);
  });
  $('#pingpongButton').click(function() {
    userPrediction = "pingpong";
    checkAnswer(userPrediction);
  });

  //checkAnswer
  function checkAnswer(response) {
    answerJuggle = answers.shift();
    answers = answers.splice(1);
    if ((response === answerJuggle) || (response === typeof answerJuggle)) {
      alert('hey you are right');
    } else {
      alert('hmm that might be wrong there');
    }
  }

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
