var Game = function() {
  this.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  this.validMoves = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.isPlayerX = true;
};

Game.prototype.switchPlayer = function() {
  this.isPlayerX = !this.isPlayerX;
}

Game.prototype.isValidMove = function(cellNumber) {
  // TODO: This doesn't work yet - returns index result of -1 every time
  console.log('valid moves array', this.validMoves)
  var index = this.validMoves.indexOf(cellNumber + 1);
  if (index === -1) {
    return false;
  } else {
    this.validMoves.splice(index, 1);
    return true;
  }
};

Game.prototype.readBoard = function(cellNumber) {
  return this.board[cellNumber - 1];
};

Game.prototype.returnBoard = function() {
  return this.board;
};

Game.prototype.currentPlayer = function() {
  if (this.isPlayerX) {
    return "X";
  } else {
    return "O";
  }
};

Game.prototype.updateBoard = function(cellNumber, XorO) {
  this.board[cellNumber - 1] = this.currentPlayer();
};

var WinChecker = function(gameBoard, XorO) {
  this.board = gameBoard;
  this.XorO = XorO;
  this.rowLength = Math.sqrt(gameBoard.length);
  this.cellNumberChanges = {
    horizontal: 1,
    vertical: this.rowLength,
    diagonalRight: this.rowLength + 1,
    diagonalLeft: this.rowLength - 1
  };
  this.moveNumber = 0;
};

WinChecker.prototype.winningMove = function() {
  if (this._isHorizontalWin()) {
    return this.XorO;
  }
  if (this._isVerticalWin()) {
    return this.XorO;
  }
  if (this._isDiagonalLeftToRightWin()) {
    return this.XorO;
  }
  if (this._isDiagonalRightToLeftWin()) {
    return this.XorO;
  }
  if (this._isTie()) {
    return "Tie";
  }
  return false;
};

WinChecker.prototype._isHorizontalWin = function() {
  for (let index = 0; index < this.rowLength; index++) {
    this.moveNumber = 0;
    var startingCell = index * this.rowLength;
    if (this._isWinningCombo(startingCell, "horizontal")) {
      return true;
    }
  }
};

WinChecker.prototype._isVerticalWin = function() {
  for (let index = 0; index < this.rowLength; index++) {
    this.moveNumber = 0;
    if (this._isWinningCombo(index, "vertical")) {
      return true;
    }
  }
};

WinChecker.prototype._isDiagonalLeftToRightWin = function() {
  this.moveNumber = 0;
  return this._isWinningCombo(0, "diagonalRight");
};

WinChecker.prototype._isDiagonalRightToLeftWin = function() {
  this.moveNumber = 0;
  var startingCell = this.rowLength - 1;
  return this._isWinningCombo(startingCell, "diagonalLeft");
};

WinChecker.prototype._isTie = function() {
  if (this.board.indexOf(" ") === -1) {
    return true;
  }
};

WinChecker.prototype._isWinningCombo = function(cellNumber, movement) {
  var currentTile = this.board[cellNumber];
  this.moveNumber++;
  if (this.moveNumber > this.rowLength) {
    return true;
  } else if (currentTile === this.XorO) {
    cellNumber += this.cellNumberChanges[movement];
    return this._isWinningCombo(cellNumber, movement);
  } else {
    return false;
  }
};

var prompt = require("prompt-sync")();

var UserInterface = function() {
  this.movesBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
};

UserInterface.prototype.runGame = function() {
  this.game = new Game();
  this.introMessage();
  this.printBoard(this.movesBoard);
  this.runTurn();
  };

UserInterface.prototype.runTurn = function() {
  var cellNumber = this.getMove();
  this.game.updateBoard(cellNumber);
  this.printBoard(this.game.returnBoard());
  var result = this.isWinCheck();
  this.game.switchPlayer();
  console.log('RESULT', result)
  if (result === false) {
    this.runTurn();
  }
  else if (result === 'Tie') {
    console.log("Game over, tie game!")
  }
  else {
    console.log("Game over, the winner is ", result);
  }
};

UserInterface.prototype.printBoard = function(board) {
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

UserInterface.prototype.introMessage = function() {
  console.log(
    "Welcome to Tic Tac Toe." +
      "\n" +
      "Submit the number where you want to place your move!"
  );
};

UserInterface.prototype.isWinCheck = function() {
  var currentPlayer = this.game.currentPlayer();
  var winChecker = new WinChecker(this.game.returnBoard(), this.game.currentPlayer());
  return winChecker.winningMove();
};

UserInterface.prototype.getMove = function() {
    console.log("It is your turn Player " + this.game.currentPlayer());
    var userInput = prompt("Which cell 1-9?   ");
    console.log('user input', userInput)
    console.log('result of valid move function', this.game.isValidMove(userInput))
    var validMoves = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var index = validMoves.indexOf(userInput);
    console.log('index result', index)
    // if (this.game.isValidMove(userInput)) {
    return userInput
  // } else {
  //   console.log("Please input a valid move, cell number 1-9 on a free space!");
  //   this.getMove();
  // }
};




var ticTacToe = new UserInterface();
ticTacToe.runGame();