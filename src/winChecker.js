var WinChecker = function() {

};

WinChecker.prototype.isWinningMove = function(board, XorO) {
    // Checks will be: horizontal, vertical, diagonal left, diagonal right
    // Will probably need a recursion/ loop/ function for each of these 4 check types
    // Work one by one through them and refactor later
    // TODO: current task: ALL horizontals covered through recursion (or loop)
    
    return (this.isWinningCombo(board, 0, 0, 'horizontal'))
};

WinChecker.prototype.isWinningCombo = function(board, rowNumber, cellNumber, movement) {
    var currentTile = board[rowNumber][cellNumber]
    var nextTile = board[rowNumber][cellNumber + 1]
    if (currentTile === '-') {
        return false
    } else if (nextTile === undefined) {
        console.log('undefined tree')
        return true
    } else if (currentTile === nextTile) {
        console.log("same tree");
        return this.isWinningCombo(board, rowNumber, cellNumber + 1, movement);
    } else {
        console.log("NOT same tree");
        return false
    }
};