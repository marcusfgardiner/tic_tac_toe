var WinChecker = function() {

};

WinChecker.prototype.isWinningMove = function(board, XorO) {
    // TopRow
    var currentX = 0;
    var currentY = 0;
    // console.log(firstTile)
    // this.isNextTileSame(board, currentX, currentY, movement)
    return ((board[0][0] === XorO) && (board[0][1] === XorO) && (board[0][2] === XorO))
};

// Movements will be: horizontal, vertical, diagonal left, diagonal right