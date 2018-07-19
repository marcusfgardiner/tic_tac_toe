var WinChecker = function() {

};

WinChecker.prototype.isWinningMove = function(board, XorO) {
    // TODO: extract each of 4 types into their own function
    // TODO: When completed: How refactor this? Rather than feeding in movement, could I iterate through a constant array that has the 4 desired values?
    // TODO: function stops and returns true the second there is a 'true'
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
        // TODO: Call the recursive function with different forms of rowNumber++ and cellNumber++ depending on movement
        // This makes the recursive function flexible for different movement types
        // TODO: When done: Refactor to extract this branch into its own function
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