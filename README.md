# tic_tac_toe

Tic Tac Toe game

Before your interview, write a program that lets two humans play a game of Tic Tac Toe in a terminal. The program should let the players take turns to input their moves. The program should report the outcome of the game.

During your interview, you will pair on adding support for a computer player to your game. You can start with random moves and make the AI smarter if you have time.

Notes:
- I wanted to practice OOO Design, which created more aspects to consider in how classes were designed and related to each other versus creating an app at global scope level
- Although I appreciate what the Recurse Center is testing in the pair coding interview is pair coding, I had wanted to try Tic Tac Toe for a while and there were 2 areas of particular interest for me: (1) Different data structures for the board and the impact that has on the code (2) using recursion to check whether there was a winning combination. I did not use any Tic Tac Toe guides or pre-existing solutions in the creation of my code
- (1) I started with an array of arrays for the tic tac toe board. Whilst this made it easier for me to conceptualise the board, it made it far more difficult to code, as many functions required loops within loops. On changing to a simpler single array, I was able to heavily refactor the code and enjoyed learning the lesson of data structure and the wide ranging impact it can have on code
- (2) I am currently interested in exploring recursion, so I used recursion for the functionality of the winChecker and aimed to create a winChecker that could handle a tic tac toe board of any size. As my goal for the winChecker was learning the use of recursion (rather than creating optimised code across the program), I translated the board single-array into an array of arrays (one array per row) to reduce cognitive load whilst implementing the first recursion iteration. On changing the data structure to a single array, I refactored the recursive code and was able to simplify the code base. Whilst overall the recursive approach made the code for the winChecker more verbose, the class can handle a tic tac toe board of any size and I feel I now have a better understanding about how recursion can be used to make flexible code for evaluating data. I did not use any guides or look at any recursive implementations online to try to challenge myself to implement the recursion through my own original thought. 
- Following a suggestion by a coding mentor, Mark Somerfield, I am beginning to practice not test driving aspects of my code, and instead aim to think from a user perspective/ think through design in advance/ play with iterations, before adding test coverage later. I test drove the creation of the winChecker class, but not of the game and userInterface classes.