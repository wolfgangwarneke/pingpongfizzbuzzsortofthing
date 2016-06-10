var answers = [];
var previousAnswer;
var previousPrevious;
var currentToAnswer;
var answerJuggle;
var answersCopy;
var points;
var pointsSystem = {number: 1, ping: 2, pong: 2, pingpong: 4};
var firstTimeFlag;
var counter;
var livesLeft;

$(document).ready(function() {

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
  $('.start').click(function() {
    points = 0;
    livesLeft = 4;
    $('#livesLeft').text(livesLeft-1);
    $('#score').text(points);
    getAnswers(100, 3, 5);
    currentToAnswer = answers.shift();
    console.log(currentToAnswer);
    firstTimeFlag = true;
  });

  //get input from controls
    var userPrediction = "";
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
    if (!firstTimeFlag) {
      answerJuggle = answers.shift();
      answers = answers.splice(0);
      if ((response === answerJuggle) || (response === typeof answerJuggle)) {
        console.log('hey you are right');
        points += pointsSystem[response];
        $('#score').text(points);
        $('#mainDisplay').text('yep.');
      } else {
        livesLeft -= 1;
        $('#livesLeft').text(livesLeft-1);
        $('#mainDisplay').text('nah.');
      }
      $('#previous').text(answerJuggle);
    } else {
      firstTimeFlag = false;
      if ((response === currentToAnswer) || (response === typeof currentToAnswer)) {
        console.log('hey you are right');
        points += pointsSystem[response];
        $('#score').text(points);
        $('#mainDisplay').text('yep.');
      } else {
        // console.log('hmm that might be wrong there');
        livesLeft -= 1;
        $('#livesLeft').text(livesLeft-1);
        $('#mainDisplay').text('nah.');
      }
      $('#previous').text(currentToAnswer);
    }
    if (livesLeft === 0) {
      endOfGame();
    }
  }

  function endOfGame() {
    $('#livesLeft').text(0);
    alert('it is over now');
  }


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
