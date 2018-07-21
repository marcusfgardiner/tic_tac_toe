var Game = function() {
    this.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    this.currentPlayer = 1
    this.movesList = ['X', 'O']
};

Game.prototype.playTurn = function() {
    this.whichPlayer()
};

Game.prototype.readBoard = function(cellNumber) {
    return this.board[cellNumber - 1]
};

Game.prototype.returnBoard = function() {
  return this.board;
};

Game.prototype.updateBoard = function(cellNumber, XorO) {
    this.board[cellNumber - 1] = XorO
};