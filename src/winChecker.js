var WinChecker = function() {

};

WinChecker.prototype.isWinningMove = function(board, XorO) {
    // Checks will be: horizontal, vertical, diagonal left, diagonal right
    // Will probably need a recursion/ loop/ function for each of these 4 check types
    // Work one by one through them and refactor later
    // TODO: current task: ALL horizontals covered through recursion (or loop)
    console.log('function result',(this.isNextTileSame(board, 0, 0, "horizontal")));
    return (this.isNextTileSame(board, 0, 0, 'horizontal'))
    // return ((board[0][0] === XorO) && (board[0][1] === XorO) && (board[0][2] === XorO))
};

WinChecker.prototype.isNextTileSame = function(board, rowNumber, cellNumber, movement) {
    var currentTile = board[rowNumber][cellNumber]
    var nextTile = board[rowNumber][cellNumber + 1]
    console.log("current tile: ", currentTile);
    console.log('next tile: ', nextTile)
    // var returnValue;
    if (nextTile === undefined) {
        console.log('undefined tree')
        return true
        // returnValue = true;
        // console.log("return value inside if scope", returnValue);
    } else if (currentTile === nextTile) {
        console.log("same tree");
        return this.isNextTileSame(board, rowNumber, cellNumber + 1, movement);
    } else {
        console.log("NOT same tree");
        return false
        // returnValue = false;
        // console.log("return value inside if scope", returnValue);
    }
};