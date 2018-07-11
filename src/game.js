var Game = function() {
    this.board = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
};

Game.prototype.readBoard = function(xCoordinate, yCoordinate) {
    return this.board[xCoordinate - 1][yCoordinate - 1]
};

Game.prototype.move = function(xCoordinate, yCoordinate, XorO) {
    this.board[xCoordinate - 1][yCoordinate - 1] = XorO
};