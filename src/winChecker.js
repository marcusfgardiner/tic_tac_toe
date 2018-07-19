var WinChecker = function() {

};

WinChecker.prototype.isWinningMove = function(board, XorO) {
    // Checks will be: horizontal, vertical, diagonal left, diagonal right
    // Will probably need a recursion/ loop/ function for each of these 4 check types
    // Work one by one through them and refactor later
    // TODO: Call the recursive function once for each type of movement. 
    // Horizontal and vertical BOTH need for loops to move through all horizontals/verticals
    // TODO: When completed: How refactor this? Rather than feeding in movement, could I iterate through a constant array that has the 4 desired values?
    var result = false
    // Diagonal right:
    if (this.isWinningCombo(board, 0, 0, XorO, "diagonalRight")) {
        result = true;
    };
    // Horizontal: 
    for (let index = 0; index < board.length; index++) {
        if (this.isWinningCombo(board, index, 0, XorO, "horizontal")) {
          result = true;
        }
    }
    // Vertical:
    for (let index = 0; index < board.length; index++) {
        if (this.isWinningCombo(board, 0, index, XorO, "vertical")) {
            result = true;
        }
    }
    // Diagonal left:
    return result
};

WinChecker.prototype.isWinningCombo = function(board, rowNumber, cellNumber, XorO, movement) {
    console.log('row number', rowNumber)
    console.log('cell number', cellNumber)
    console.log('movement', movement)
    console.log('board', board)
    // Issue when trying to read rowNumber = 3 that broke test. Fixed with below if statement - need to refactor to remove
    // Key issue: trying to read the cell number when board[rowNumber] is undefined => error
    var currentRow = board[rowNumber]
    if (currentRow !== undefined) {
        var currentTile = currentRow[cellNumber]
    }
    console.log('XorO: ', XorO)
    console.log('current tile:', currentTile)
    if (currentTile === XorO) {
        console.log("good so far tree");
        // TODO: Call the recursive function with different forms of rowNumber++ and cellNumber++ depending on movement
        // This makes the recursive function flexible for different movement types
        // TODO: When done: Refactor to extract this branch into its own function
        if (movement === 'horizontal' || movement === 'diagonalRight') {
            cellNumber++
        }
        if (movement !== 'horizontal') {
            rowNumber++
            // (console.log('not horiz'))
        }
        if (movement === 'diagonalLeft') {
            cellNumber--
        };
        return this.isWinningCombo(board, rowNumber, cellNumber, XorO, movement);
    } else if (currentTile === undefined) {
        console.log('undefined tree')
        return true
    } else {
        console.log("NOT same tree");
        return false
    }
};