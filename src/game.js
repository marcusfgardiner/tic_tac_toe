var Game = function() {
    this.movesBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    this.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
};

Game.prototype.readBoard = function(cellNumber) {
    return this.board[cellNumber - 1]
};

Game.prototype.updateBoard = function(cellNumber, XorO) {
    //TODO: check move not already used
    //TODO: if move not used, update board + add to used moves list
    this.board[cellNumber - 1] = XorO
};