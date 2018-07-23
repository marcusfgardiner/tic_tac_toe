var prompt = require("prompt-sync")();

var Game = function() {
  this.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  this.validMoves = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.isCurrentPlayerX = true;
};

Game.prototype.switchPlayer = function() {
  this.isCurrentPlayerX = !this.isCurrentPlayerX;
}

Game.prototype.isValidMove = function(cellNumber) {
  var index = this.validMoves.indexOf(cellNumber);
  if (index === -1) {
    return false;
  } else {
    this.deleteMove(this.validMoves, index);
    return true;
  }
};

Game.prototype.deleteMove = function(array, index) {
    array.splice(index, 1);
};

Game.prototype.returnBoard = function() {
  return this.board;
};

Game.prototype.currentPlayer = function() {
  if (this.isCurrentPlayerX) {
    return "X";
  } else {
    return "O";
  }
};

Game.prototype.updateBoard = function(cellNumber, currentPlayer) {
  this.board[cellNumber - 1] = this.currentPlayer();
};

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

WinChecker.prototype.winningMove = function() {
  if (this._isHorizontalWin()) {
    return this.currentPlayer;
  }
  if (this._isVerticalWin()) {
    return this.currentPlayer;
  }
  if (this._isDiagonalLeftToRightWin()) {
    return this.currentPlayer;
  }
  if (this._isDiagonalRightToLeftWin()) {
    return this.currentPlayer;
  }
  if (this._isTie()) {
    return "Tie";
  }
  return false;
};

WinChecker.prototype._isHorizontalWin = function() {
  for (let index = 0; index < this.rowLength; index++) {
    this.cellCount = 0;
    var startingCell = (index * this.rowLength);
    if (this._isWinningCombo(startingCell, "horizontal")) {
      return true;
    }
  }
};

WinChecker.prototype._isVerticalWin = function() {
  for (let index = 0; index < this.rowLength; index++) {
    this.cellCount = 0;
    if (this._isWinningCombo(index, "vertical")) {
      return true;
    }
  }
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
  }
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
    userInput = Number(userInput)
    var validMove =  this.game.isValidMove(userInput)
    if (validMove) {
      return userInput;
    } else {
      console.log("INVALID MOVE: Please input a valid move, cell number 1-9 on a free space!");
      return this.getMove()
    }
};

var ticTacToe = new UserInterface();
ticTacToe.runGame();