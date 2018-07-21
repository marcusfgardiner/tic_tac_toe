# tic_tac_toe

Tic Tac Toe game

Before your interview, write a program that lets two humans play a game of Tic Tac Toe in a terminal. The program should let the players take turns to input their moves. The program should report the outcome of the game.

During your interview, you will pair on adding support for a computer player to your game. You can start with random moves and make the AI smarter if you have time.

Notes:
- I am currently interested in exploring recursion, so I used recursion for the functionality of the winChecker and aimed to create a winChecker that could handle a tic tac toe board of any size. I translated the simple board hash into an array of arrays and aimed to use recursion so that a board of any size/dimension could be evaluated. Whilst it made the code for the winChecker more complicated and certainly not optimal, I feel I now have a better understanding about how recursion can be used to make flexible code for evaluating data, particularly for game boards. As part of the winChecker, I also translated the relatively simpler array into an array of arrays, as I thought this would reduce the cognitive load of my implementing recursion, as I would not have to consider the movement across rows in terms of number of spaces. I also ensured to come to tic tac toe completely fresh and look at no guides or implementations online, to try to challenge myself to implement the recursion through my own original thought. 