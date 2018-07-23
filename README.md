# Recurse Center: Tic Tac Toe

## Project description: 
Tic Tac Toe game

Before your interview, write a program that lets two humans play a game of Tic Tac Toe in a terminal. The program should let the players take turns to input their moves. The program should report the outcome of the game.

During your interview, you will pair on adding support for a computer player to your game. You can start with random moves and make the AI smarter if you have time.

## My reflections on completing Tic Tac Toe

Although I appreciate what the Recurse Center is testing in the pair coding interview is pair coding, I have used the exercise to also work on 5 learning areas of particular interest for me: 
1. Data structures (Different data structures for the board and the impact that has on the code)
2. Practicing the use of recursion (particularly for checking the result of a TicTacToe board of any size, rather than using hard-coded outcomes)
3. OOO Design
4. Javascript for a command line application
5. Using a mixture of TDD and not-using TDD

 I have included some personal reflections on these topics below

1. Different data structures: I begun using an array of arrays for the TicTacToe board, and found that whilst this reduced my cognitive-load in conceptualising and working with the board, it made the code far more complex due to the extra layer of depth in the data structure. Refactoring to use one simpler array, both the winChecker and Game classes were far easier to work through in terms of logic. This has made me realise that spending time at the start to ensure the data structure is as simple as possible whilst still being fit for purpose is vital. In the design phase, if I want to make the board easier to conceptualise, I can use intermediary methods that enable me to access the board in a simpler fashion (e.g. using coordinates that translate to access to the simple array).
2. Recursion: I was able to practice using Recursion for 3 major features: Checking winning combinations, validating move submissions and running player turns. I found that compared to loops it enabled the design of the winChecker to be far more flexible, and able to check the result of a ticTacToe board of any size. It also required more thought of the future scenarios of recursively going through the methods, with clear branching paths and a clear scope for what should be within the recursive method. 
3. OOO Design: I begun coding with the concept of having a 3 part design of Game, winChecker and User Interface. I found it particularly hard to conceptualise the user interface when working with a command line rather than a true web page, so want to practice another JS command line application. I found that having the winChecker class separated and started with that made it much easier to focus on a clearly separate entity, but when creating the Game and userInterface I struggled with design at certain junctures when deciding what constituted a user interacting with an interface versus a game being run. I also had to think carefully about how the winChecker was called, and decided it should be through the game class, because the game class contains the data required to run the winChecker. One element I found challenging with implementing recursion and OOO design together was aiming not to violate the "tell, don't ask" principle. I found that recursively calling the same method made me feel the design was better to 'ask' for a response and then decide whether to execute the recursion or not. Otherwise, the recursion execution would have to come from a different class, which felt more difficult to manage. The 'getMove' and 'checkGameOver' functions are good examples of this. Linked to the above, I was also uncertain about the design of the getMove method; I felt it didn't adhere to single responsibility as it both got the move and had aspects that call for the validatation of the move. Ultimately I stuck with the design as it was, because I felt the validation logic itself was actually extracted, and ultimately the function does just get the move, with the actual logic for validation sitting elsewhere.
4. Javascript for CLI: Versus my first programming language, Ruby, Javascript provided several hurdles in creating a Command Line Application. Firstly, it did not have a useful 'gets' method, so I researched different options for receiving user input, played with them and deciding upon prompt. There was also difficulty in dealing with the asynchronicity of using prompt in the command line, so I switched to a synchronous library for prompt to manage this issue. It prompted me to look further into how event loops work in Javascript, which was an interesting diversion, and I need to look further into callbacks, as whilst I feel I understand their purpose as a means of executing functionality asynchronously, I do not yet feel comfortable in applying them or clearly explaining them. 
5. To TDD or not to TDD: Following a suggestion by a coding mentor, Mark Somerfield, I am beginning to practice not test driving aspects of my code, and instead aiming to think from a user perspective/ think through design in advance/ play with iterations, before adding test coverage later. I test drove the creation of the winChecker class, but not of the game and userInterface classes. This enabled me to understand why TDD was useful in ensuring some good practice process elements were followed, but you can apply these elements without explicitly using TDD, and it may free you up to make larger cognitive leaps than TDD allows. These elements are: (1) Visibility (2) Algorithmic thinking (3) Thinking feature-first / User’s perspective  (4) Satisfaction of seeing tests go green (5) Enables easier refactoring