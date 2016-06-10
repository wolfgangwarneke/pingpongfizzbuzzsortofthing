$(document).ready(function() {
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
});//end document ready
