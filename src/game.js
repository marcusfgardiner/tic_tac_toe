var Game = function() {
    this.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    this.validMoves = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.isPlayerX = true
    this.movesList = ['X', 'O']
};

Game.prototype.playTurn = function(cellNumber) {
    this.updateBoard(cellNumber, this.currentPlayer())
    this.isPlayer1 = !this.isPlayer1
};

Game.prototype.isValidMove = function(cellNumber) {
  var index = this.validMoves.indexOf(cellNumber);
    if (index = -1) {
        return false
    }
    else { 
        array.splice(index, 1);
        return true 
    }
};

Game.prototype.readBoard = function(cellNumber) {
    return this.board[cellNumber - 1]
};

Game.prototype.returnBoard = function() {
  return this.board;
};

Game.prototype.currentPlayer = function() {
    if (this.isPlayerX) {
        return 'X'
    }
    else {
        return 'O'
    }
};

Game.prototype.updateBoard = function(cellNumber, XorO) {
    this.board[cellNumber - 1] = XorO
};