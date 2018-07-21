var WinChecker = function(board, XorO) {
    this.board = board
    this.XorO = XorO
}

WinChecker.prototype.isWinningMove = function () {
    if (this.isHorizontalWin()) {
        return true
    };
    if (this.isVerticalWin()) {
        return true
    };
    if (this.isDiagonalRightWin()) {
        return true
    };
    if (this.isDiagonalLeftWin()) {
        return true
    };
    return false
};

WinChecker.prototype.isHorizontalWin = function () {
    for (let index = 0; index < this.board.length; index++) {
        if(this.isWinningCombo(index, 0, "horizontal")) {
            return true
        };
    };
};

WinChecker.prototype.isVerticalWin = function () {
    for (let index = 0; index < this.board.length; index++) {
        if(this.isWinningCombo(0, index, "vertical")) {
            return true
        };
    };
};

WinChecker.prototype.isDiagonalRightWin = function () {
    return this.isWinningCombo(0, 0, "diagonalRight")
};

WinChecker.prototype.isDiagonalLeftWin = function () {
    return this.isWinningCombo(0, (this.board.length - 1), "diagonalLeft")
};

WinChecker.prototype.isWinningCombo = function(rowNumber, cellNumber, movement) {
    console.log('row number', rowNumber)
    console.log('cell number', cellNumber)
    console.log('movement', movement)
    console.log('this.board', this.board)
    var currentRow = this.board[rowNumber]
    if (currentRow !== undefined) {
        var currentTile = currentRow[cellNumber]
    }
    console.log('this.XorO: ', this.XorO)
    console.log('current tile:', currentTile)
    // Same value as previous tile => could still be a winning move
    if (currentTile === this.XorO) {
        console.log("good so far tree");
        ({ rowNumber, cellNumber } = this.tileChange(rowNumber, cellNumber, movement));
        return this.isWinningCombo(rowNumber, cellNumber, movement);
    // End of this.board reached with only same tiles all the way along => winning move
    } else if (currentTile === undefined) {
        console.log('undefined tree')
        return true
    // Tile not the same => not a winning move
    } else {
        console.log("NOT same tree");
        return false
    }
};

WinChecker.prototype.tileChange = function (rowNumber, cellNumber, movement) {
    if (movement === 'horizontal' || movement === 'diagonalRight') {
        cellNumber++;
    }
    if (movement !== 'horizontal') {
        rowNumber++;
    }
    if (movement === 'diagonalLeft') {
        cellNumber--;
    }
    ;
    return { rowNumber, cellNumber };
}
