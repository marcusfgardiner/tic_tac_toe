var Game = function() {
    this.board = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
};

Game.prototype.readBoard = function(xCoordinate, yCoordinate) {
    return this.board[xCoordinate - 1][yCoordinate - 1]
};

Game.prototype.updateBoard = function(xCoordinate, yCoordinate, XorO) {
    //TODO: check move not already used
    //TODO: if move not used, update board + add to used moves list
    this.board[xCoordinate - 1][yCoordinate - 1] = XorO
};