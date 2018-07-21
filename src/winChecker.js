var WinChecker = function(gameBoard, XorO) {
    this.board = this.translateBoardToArrays(gameBoard);
    this.XorO = XorO
}

WinChecker.prototype.translateBoardToArrays = function (gameBoard) {
    var rowLength = Math.sqrt(gameBoard.length)
    var arrayOfArrays = []
    for(var i = 0; i < rowLength; i++) {
        var newArray = []
        for (let index = 0; index < rowLength; index++) {
            newArray.push(gameBoard.shift())
        }
        arrayOfArrays.push(newArray)
    };
    return arrayOfArrays
};

WinChecker.prototype.isWinningMove = function () {
    if (this._isHorizontalWin()) {
        return true
    };
    if (this._isVerticalWin()) {
        return true
    };
    if (this._isDiagonalRightWin()) {
        return true
    };
    if (this._isDiagonalLeftWin()) {
        return true
    };
    return false
};

WinChecker.prototype._isHorizontalWin = function () {
    for (let index = 0; index < this.board.length; index++) {
        if(this._isWinningCombo(index, 0, "horizontal")) {
            return true 
        };
    };
};

WinChecker.prototype._isVerticalWin = function () {
    for (let index = 0; index < this.board.length; index++) {
        if(this._isWinningCombo(0, index, "vertical")) {
            return true
        };
    };
};

WinChecker.prototype._isDiagonalRightWin = function () {
    return this._isWinningCombo(0, 0, "diagonalRight")
};

WinChecker.prototype._isDiagonalLeftWin = function () {
    return this._isWinningCombo(0, (this.board.length - 1), "diagonalLeft")
};

WinChecker.prototype._isWinningCombo = function(rowNumber, cellNumber, movement) {
    var currentTile = this._returnCurrentTile(rowNumber, cellNumber);
    // Current tile same as previous x/o tile => could still be a winning combination
    if (currentTile === this.XorO) {
        ({ rowNumber, cellNumber } = this._tileChange(rowNumber, cellNumber, movement));
        return this._isWinningCombo(rowNumber, cellNumber, movement);
    // End of board reached with only same tiles all the way along => winning combination
    } else if (currentTile === undefined) {
        return true
    // Tile not the same => not a winning combination
    } else {
        return false
    }
};

WinChecker.prototype._tileChange = function (rowNumber, cellNumber, movement) {
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
WinChecker.prototype._returnCurrentTile = function (rowNumber, cellNumber) {
    var currentRow = this.board[rowNumber];
    if (currentRow !== undefined) {
        var currentTile = currentRow[cellNumber];
    }
    return currentTile;
}