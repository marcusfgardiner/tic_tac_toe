var WinChecker = function() {

};

WinChecker.prototype.isWinningMove = function(board, XorO) {
    // Checks will be: horizontal, vertical, diagonal left, diagonal right
    // Will probably need a recursion/ loop/ function for each of these 4 check types
    // Work one by one through them and refactor later
    // TODO: current task: ALL horizontals covered through recursion (or loop)
    var result = false
    for (let index = 0; index < board.length; index++) {
        if (this.isWinningCombo(board, index, 0, XorO, "horizontal")) {
          result = true;
        }
    }
    return result
};

WinChecker.prototype.isWinningCombo = function(board, rowNumber, cellNumber, XorO, movement) {
    var currentTile = board[rowNumber][cellNumber]
    console.log('XorO: ', XorO)
    console.log('current tile:', currentTile)
    if (currentTile === XorO) {
        console.log("same tree");
        return this.isWinningCombo(board, rowNumber, cellNumber + 1, XorO, movement);
    } else if (currentTile === undefined) {
        console.log('undefined tree')
        return true
    } else {
        console.log("NOT same tree");
        return false
    }
};