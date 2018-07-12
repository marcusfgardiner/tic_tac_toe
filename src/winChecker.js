var WinChecker = function() {

};

WinChecker.prototype.isWinningMove = function(board, XorO) {
    // TopRow
    // var currentX = 0;
    // var currentY = 0;
    // console.log(firstTile)
    // this.isNextTileSame(board, currentX, currentY, movement)
    return ((board[0][0] === XorO) && (board[0][1] === XorO) && (board[0][2] === XorO))
};

WinChecker.prototype.isNextTileSame = function(board, currentX, currentY, movement) {
    var currentTile = board[currentX][currentY]
    var nextTile = board[currentX][currentY + 1]
    console.log(currentTile)
    console.log(nextTile)
    return (currentTile === nextTile)
};

// Movements will be: horizontal, vertical, diagonal left, diagonal right