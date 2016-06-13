# Factors of Ping and Pong

#### Predict Multiples of Three and Five, June 10th 2016

#### By Wolfgang Warneke

## Description

Simple game where the user can learn about how the sequence of 3's (ping) and 5's (pong) function together and then play an interactive version where the user will predict which type is next in the sequence.

## Specifications

Prints a list of numbers counting by ones from one until the amount equal to the user input.
Example input: 4
Example output: 1, 2, 3, 4

Converts the output of any number divisible by three from that number to Ping.
Example input 9
Example output "Ping"

Converts the output of any number divisible by five from that number to Pong.
Example input 100
Example output "Pong"

Converts the output of any number divisible by both three and five to say "Pingpong".
Example input 30
Example output "Pingpong"

Display output sequence on new screen.

Adds start tutorial text to accompany input to teach user how to use the game
Example text: Welcome! Ping pong counts by ones, but the two multiples will change the number to "ping" or "pong".  If the number has both multiples it becomes both "ping" and "pong"... Pingpong! In arcade mode  of Ping Pong Pingpong you will navigate your way through the game by predicting whether the next number will actually be a number or whether it will change to "ping", "pong", "pingpong".  But don't get it wrong or you'll lose a life! (Don't worry you get 3.)

Adds start menu with choices for tutorial or to play the game.

Assign click event to "Number", "Ping", "Pong", "Pingpong" buttons.
example: clicking "Pong" will mean you are predicting the next sequence will be a multiple of 5

Display next number of sequence and compare against user selection.  If there is a match, points will be awarded. Or lose a life if incorrect.
example: if "pong" was the prediction, but the correct answer was "number", a life is lost.

Tally different score values for each type of button submission.
example: "Number" is worth one point, "Ping" and "Pong" are worth 2 points, and "Ping Pong" is worth 4 points

Add display sequence for question flow showing current activity on a main display, previous answers to the left, and future entries (represented by a question mark).  Main display is initially a question mark.

Upon submission displays result, then shifts to next sequence prediction.

Has a start button of eponymous function.

Stores time of start.

Stores time of completion and contrast against start and awards bonus points depending on completion time.
example: each second under 4 minutes is worth 1 bonus point

Displays high score and amount of times the game has been played this session.

Has arrow key functionality for computer use.

## Setup/Installation Requirements

* Make sure Javascript is enabled in your browser
* Open page ![here](https://wolfgangwarneke.github.io/pingpongfizzbuzzsortofthing);



## Known Bugs

* Leaves trailing values in main display at end of game

## Support and contact details

wolfgang.warneke@gmail.com
@wolfgangwarneke on Twitter and Instagram

## Technologies Used

* Javascript
* jQuery

### License

Copyright (c) 2016 Wolfgang Warneke
