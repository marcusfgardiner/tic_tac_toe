var WinChecker = function() {

};

WinChecker.prototype.isWinningMove = function(board, XorO) {
    // TopRow
    // var rowNumber = 0;
    // var cellNumber = 0;
    // console.log(firstTile)
    // this.isNextTileSame(board, rowNumber, cellNumber, movement)
    return ((board[0][0] === XorO) && (board[0][1] === XorO) && (board[0][2] === XorO))
};

WinChecker.prototype.isNextTileSame = function(board, rowNumber, cellNumber, movement) {
    var currentTile = board[rowNumber][cellNumber]
    var nextTile = board[rowNumber][cellNumber + 1]
    console.log(currentTile)
    console.log(nextTile)
    return (currentTile === nextTile)
};

// Movements will be: horizontal, vertical, diagonal left, diagonal right