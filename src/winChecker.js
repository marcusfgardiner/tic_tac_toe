var WinChecker = function() {
    //TODO: pass in board & XorO and save it to winChecker object on initiation = don't need to feed into methods every time
    //TODO: Rather than feeding in movement each time, store currentMovement on WinChecker object
}

WinChecker.prototype.isWinningMove = function(board, XorO) {
    if (this.isHorizontalWin(board, XorO)) {
        return true
    };
    if (this.isVerticalWin(board, XorO)) {
        return true
    };
    if (this.isDiagonalRightWin(board, XorO)) {
        return true
    };
    if (this.isDiagonalLeftWin(board, XorO)) {
        return true
    };
    return false
};

WinChecker.prototype.isHorizontalWin = function(board, XorO) {
    for (let index = 0; index < board.length; index++) {
        if(this.isWinningCombo(board, index, 0, XorO, "horizontal")) {
            return true
        };
    };
};

WinChecker.prototype.isVerticalWin = function(board, XorO) {
    for (let index = 0; index < board.length; index++) {
        if(this.isWinningCombo(board, 0, index, XorO, "vertical")) {
            return true
        };
    };
};

WinChecker.prototype.isDiagonalRightWin = function(board, XorO) {
    return this.isWinningCombo(board, 0, 0, XorO, "diagonalRight")
};

WinChecker.prototype.isDiagonalLeftWin = function(board, XorO) {
    return this.isWinningCombo(board, 0, (board.length - 1), XorO, "diagonalLeft")
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
    // Same value as previous tile => could still be a winning move
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
    // End of board reached with only same tiles all the way along => winning move
    } else if (currentTile === undefined) {
        console.log('undefined tree')
        return true
    // Tile not the same => not a winning move
    } else {
        console.log("NOT same tree");
        return false
    }
};