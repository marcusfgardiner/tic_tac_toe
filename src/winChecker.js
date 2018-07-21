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
    var currentTile = this.returnCurrentTile(rowNumber, cellNumber);
    // Current tile same as previous x/o tile => could still be a winning combination
    if (currentTile === this.XorO) {
        ({ rowNumber, cellNumber } = this.tileChange(rowNumber, cellNumber, movement));
        return this.isWinningCombo(rowNumber, cellNumber, movement);
    // End of board reached with only same tiles all the way along => winning combination
    } else if (currentTile === undefined) {
        return true
    // Tile not the same => not a winning combination
    } else {
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
WinChecker.prototype.returnCurrentTile = function (rowNumber, cellNumber) {
    var currentRow = this.board[rowNumber];
    if (currentRow !== undefined) {
        var currentTile = currentRow[cellNumber];
    }
    return currentTile;
}