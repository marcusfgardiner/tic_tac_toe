// Node must be installed to run the program, along with package 'prompt-sync'
// To install prompt-sync: in terminal, use 'npm install "prompt-sync" --save'
// To run program: in terminal use 'node ticTacToe.js'

//TODO: Separate into individual class files

var prompt = require("prompt-sync")();

// Game manages all functional aspects of the game i.e. the board, players, and the moves the players make on the board
var Game = function() {
  this.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  this.validMoves = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.isCurrentPlayerX = true;
};

//TODO: Extract Cells to their own class: each should have a label(1 to 9) and a state(O, X or empty).
// Extract classes for data structures! Key to watch out for: multiple methods all referring to that data structure, all with the same data structure!
//TODO: Use extracted cells to update move validation: 
// *The advantage of this approach is that you don 't then have to e.g. maintain separate state to check for valid moves (you don’t have to maintain a separate array of valid moves that you update/ delete) - the list of valid moves becomes intrinsic to the array of cells (and whether those cells are empty or not) *
//   Mapping through array of cells, filtering for only the empty cells by checking
//   if each one of those cells is empty, mapping through that array of only empty cells 
// to create the list of valid moves(moves that are still available) *
//   i.e.cells.filter((cell) => cell.state === EMPTY).map((cell) => cell.label).*It 's almost always preferable to colocate linked state in a class than maintain separate data structures for different bits of state.

Game.prototype.updateBoard = function(cellNumber, currentPlayer) {
  this.board[cellNumber - 1] = this.currentPlayer();
};

Game.prototype.returnBoard = function() {
  return this.board;
};

Game.prototype.returnValidMoves = function() {
  return this.validMoves;
};

Game.prototype.currentPlayer = function() {
  if (this.isCurrentPlayerX) {
    return "X";
  } else {
    return "O";
  }
};

Game.prototype.switchPlayer = function() {
  this.isCurrentPlayerX = !this.isCurrentPlayerX;
};

Game.prototype.isValidMove = function(cellNumber) {
  var index = this.validMoves.indexOf(cellNumber);
  return index !== -1
};

Game.prototype.deleteValidMove = function(cellNumber) {
  var index = this.validMoves.indexOf(cellNumber);
    this._deleteMove(this.validMoves, index);
};

Game.prototype._deleteMove = function(array, index) {
  array.splice(index, 1);
};

Game.prototype.isWinCheck = function() {
  var currentPlayer = this.currentPlayer();
  var winChecker = new WinChecker(this.board, this.currentPlayer());
  return winChecker.winningMove();
};

// WinChecker checks the outcome of the game: ongoing, win (which player) and tie
var WinChecker = function(gameBoard, currentPlayer) {
  this.board = gameBoard;
  this.currentPlayer = currentPlayer;
  this.rowLength = Math.sqrt(gameBoard.length);
  this.cellNumberChange = {
    horizontal: 1,
    vertical: this.rowLength,
    diagonalRight: this.rowLength + 1,
    diagonalLeft: this.rowLength - 1
  };
  this.cellCount = 0;
};


// TODO: branching if statements => Use polymorphism, strategy pattern
// This is exactly the same as the whole 'is_a' from polymorphism! I didn't notice I was doing this classic trap!
// Example: 
// const waysToWin = [new HorizontalWinChecker(), new VerticalWinChecker(), new DiagonalWinChecker()]; … 
// let isWin = waysToWin.some((winStrategy) => winStrategy.isWin(cells))
WinChecker.prototype.winningMove = function() {
  if (this._isHorizontalWin()) {
    return this.currentPlayer;
  };
  if (this._isVerticalWin()) {
    return this.currentPlayer;
  };
  if (this._isDiagonalLeftToRightWin()) {
    return this.currentPlayer;
  };
  if (this._isDiagonalRightToLeftWin()) {
    return this.currentPlayer;
  };
  if (this._isTie()) {
    return "Tie";
  };
  return false;
};

WinChecker.prototype._isHorizontalWin = function() {
  for (let index = 0; index < this.rowLength; index++) {
    this.cellCount = 0;
    var startingCell = (index * this.rowLength);
    if (this._isWinningCombo(startingCell, "horizontal")) {
      return true;
    };
  };
};

WinChecker.prototype._isVerticalWin = function() {
  for (let index = 0; index < this.rowLength; index++) {
    this.cellCount = 0;
    if (this._isWinningCombo(index, "vertical")) {
      return true;
    };
  };
};

WinChecker.prototype._isDiagonalLeftToRightWin = function() {
  this.cellCount = 0;
  return this._isWinningCombo(0, "diagonalRight");
};

WinChecker.prototype._isDiagonalRightToLeftWin = function() {
  this.cellCount = 0;
  var startingCell = (this.rowLength - 1);
  return this._isWinningCombo(startingCell, "diagonalLeft");
};

WinChecker.prototype._isTie = function() {
  if (this.board.indexOf(" ") === -1) {
    return true;
  };
};

WinChecker.prototype._isWinningCombo = function(cellNumber, movement) {
  var currentTile = this.board[cellNumber];
  this.cellCount++;
  if (this.cellCount > this.rowLength) {
    return true;
  } else if (currentTile === this.currentPlayer) {
    cellNumber += this.cellNumberChange[movement];
    return this._isWinningCombo(cellNumber, movement);
  } else {
    return false;
  }
};

// User interface is the gateway for how the user interacts with the game. 
// The interaction of the user drives the progress of the game.
var UserInterface = function() {
  this.movesBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  this.introMessage = "Welcome to Tic Tac Toe." + "\n" + "Submit the number where you want to place your move!";
};

UserInterface.prototype.runGame = function() {
  this.game = new Game();
  console.log(this.introMessage)
  this._printBoard(this.movesBoard);
  this._runTurn();
  };


//TODO: Extract this huge number of calls to 'game' (including the calls to game within these methods!)
// Order of the below is important, but can have the return value back to this method include
// several data points in e.g. an array/ hash
// Explanation:  If a class calling another class needs the other class to do one thing, then another, then another thing, 
// it's much cleaner to wrap this in a single method in the other class being called
// otherwise, the calling code needs to know too much about the class being called and that makes it brittle and difficult to change.
UserInterface.prototype._runTurn = function() {
  var cellNumber = this._getMove();
  this.game.updateBoard(cellNumber);
  this.game.deleteValidMove(cellNumber);
  this._printBoard(this.game.returnBoard());
  this._checkGameOver();
  this.game.switchPlayer();
  this._runTurn();
};

UserInterface.prototype._getMove = function() {
  var currentPlayer = this.game.currentPlayer()
  if (currentPlayer === 'X') {
    return this._getMoveHuman()
  }
  else { return this._getMoveAI() }
};

UserInterface.prototype._getMoveAI = function() {
  var validMovesArray = this.game.returnValidMoves()
  var randomMove = validMovesArray[Math.floor(Math.random()*validMovesArray.length)]
  return randomMove
};

UserInterface.prototype._getMoveHuman = function() {
  console.log("It is your turn Player " + this.game.currentPlayer());
  userInput = prompt("Which cell 1-9?  ");
  userInput = Number(userInput);
  var validMove = this.game.isValidMove(userInput);
  if (validMove) {
    return userInput;
  } else {
    console.log(
      "INVALID MOVE: Please input a valid move, cell number 1-9 on a free space!"
    );
    return this._getMove();
  }
};


UserInterface.prototype._printBoard = function(board) {
  console.log(
    "\n" +
      " " +
      board[0] +
      " | " +
      board[1] +
      " | " +
      board[2] +
      "\n" +
      " ---------\n" +
      " " +
      board[3] +
      " | " +
      board[4] +
      " | " +
      board[5] +
      "\n" +
      " ---------\n" +
      " " +
      board[6] +
      " | " +
      board[7] +
      " | " +
      board[8] +
      "\n"
  );
};

UserInterface.prototype._checkGameOver = function() {
  var result = this.game.isWinCheck();
  if (result === false) {
    console.log('~~~~~ Next turn ~~~~~')
  } else if (result === "Tie") {
    console.log("Game over, tie game!");
    process.exit()
  } else {
    console.log("Game over, the winner is ", result);
    process.exit()
  }
};

var ticTacToe = new UserInterface();
ticTacToe.runGame();