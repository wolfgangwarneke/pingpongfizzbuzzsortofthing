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
    // console.log(answers);
  };

  //start game
  //get array for game iteration values
  $('.start').click(function() {
    points = 0;
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
    alert(answerJuggle);
    answers = answers.splice(0);
    if ((response === answerJuggle) || (response === typeof answerJuggle)) {
      console.log('hey you are right');
      points += pointsSystem[response];
      $('#score').text(points);
      $('#mainDisplay').text('yep.');
    } else {
      console.log('hmm that might be wrong there');
      $('#mainDisplay').text('nah.');
    }
    // $('#previousPrevious').text($('#previous').val());
    $('#previous').text(answerJuggle);
  } else {
    firstTimeFlag = false;
    if ((response === currentToAnswer) || (response === typeof currentToAnswer)) {
      console.log('hey you are right');
      points += pointsSystem[response];
      $('#score').text(points);
      $('#mainDisplay').text('yep.');
    } else {
      console.log('hmm that might be wrong there');
      $('#mainDisplay').text('nah.');
    }
    $('#previous').text(currentToAnswer);
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
