var WinChecker = function() {
    //TODO: pass in board & XorO and save it to winChecker object on initiation = don't need to feed into methods every time
    //TODO: Rather than feeding in movement each time, store currentMovement on WinChecker object
    // TODO: NICE TO HAVE - Have movetypes be saved as a hash of text values to numbers e.g. {'horizontal' => 1}
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
        if (this.isWinningCombo(board, index, 0, XorO, "horizontal")) {
          return true
        }
    }
};

WinChecker.prototype.isVerticalWin = function(board, XorO) {
    for (let index = 0; index < board.length; index++) {
        if (this.isWinningCombo(board, 0, index, XorO, "vertical")) {
            return true;
        }
    }
};

WinChecker.prototype.isDiagonalRightWin = function(board, XorO) {
    if (this.isWinningCombo(board, 0, 0, XorO, "diagonalRight")) {
        return true;
    };
};

WinChecker.prototype.isDiagonalLeftWin = function(board, XorO) {
    if (this.isWinningCombo(board, 0, (board.length - 1), XorO, "diagonalLeft")) {
        return true;
    };
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