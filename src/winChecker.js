var WinChecker = function() {
    //TODO: pass in board & XorO and save it to winChecker object on initiation = don't need to feed into methods every time
    //TODO: Rather than feeding in movement each time, store currentMovement on WinChecker object
    // TODO: NICE TO HAVE - Have movetypes be saved as a hash of text values to numbers e.g. {'horizontal' => 1}
}

WinChecker.prototype.isWinningMove = function(board, XorO) {
    // TODO: extract each of 4 types into their own function
    // TODO: function stops and returns true the second there is a 'true' i.e. break out of function and return true based on if conditions
    var result = false
    // Diagonal right:
    if (this.isWinningCombo(board, 0, 0, XorO, "diagonalRight")) {
        result = true;
    };
    // Diagonal left:
    if (this.isWinningCombo(board, 0, (board.length - 1), XorO, "diagonalLeft")) {
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
        // TODO: Refactor to extract this branch into its own function of tileChange
        if (movement === 'horizontal' || movement === 'diagonalRight') {
            cellNumber++
        }
        if (movement !== 'horizontal') {
            rowNumber++
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