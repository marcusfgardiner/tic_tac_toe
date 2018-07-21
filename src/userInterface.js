var UserInterface = function() {
    this.game = new Game
};

UserInterface.prototype.printBoard = function() {
    board = this.game.board
    for (var i = 0; i < board.length ; i++) {
        console.log(board[i])
    };
};

    board = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
    for (var i = 0; i < board.length ; i++) {
        console.log(board[i])
    };