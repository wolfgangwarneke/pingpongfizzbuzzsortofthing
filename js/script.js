$(document).ready(function() {
  var howHighToCount = parseInt(prompt('How high should we count?'));
  var numbersToPrint = [];
  function tutorialCounter(countTo, firstFactor, secondFactor) {
    numbersToPrint = [];
    for (i = 1; i <= countTo; i++) {
      if ((i % firstFactor === 0) && (i % secondFactor === 0)) {
        numbersToPrint.push('Pingpong');
      } else if (i % firstFactor === 0) {
        numbersToPrint.push('Ping');
      } else if (i % secondFactor === 0) {
        numbersToPrint.push('Pong');
      } else {
        numbersToPrint.push(i);
      }
    }
    numbersToPrint.forEach(function(iteration) {
      $('#tutorialPrint').append('<li>' + iteration + "</li>");
    });
  }
  tutorialCounter(howHighToCount, 3, 5);
});//end document ready
