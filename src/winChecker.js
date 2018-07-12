var WinChecker = function() {

};

WinChecker.prototype.isWinningMove = function(board, XorO) {
    return ((board[0][0] === XorO) && (board[0][1] === XorO) && (board[0][2] === XorO))
};
