var WinChecker = function(gameBoard, XorO) {
    this.board = gameBoard;
    this.XorO = XorO
    this.rowLength = Math.sqrt(gameBoard.length);
    this.cellNumberChanges = { horizontal: 1, vertical: this.rowLength, diagonalRight: (this.rowLength + 1), diagonalLeft: (this.rowLength - 1) }
}

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
    for (let index = 0; index < this.rowLength; index++) {
      if (this._isWinningCombo(index, 0, "horizontal")) {
        return true;
      }
    };
};

WinChecker.prototype._isVerticalWin = function () {
    for (let index = 0; index < this.rowLength; index++) {
      if (this._isWinningCombo(0, index, "vertical")) {
        return true;
      }
    };
};

WinChecker.prototype._isDiagonalRightWin = function () {
    return this._isWinningCombo(0, 0, "diagonalRight")
};

WinChecker.prototype._isDiagonalLeftWin = function () {
    return this._isWinningCombo(0, (this.board.length - 1), "diagonalLeft")
};

WinChecker.prototype._isWinningCombo = function(cellNumber, movement) {
    var currentTile = board[cellNumber];
    // Current tile same as previous x/o tile => could still be a winning combination
    if (currentTile === this.XorO) {
        cellNumber += cellNumberChanges[movement]
        return this._isWinningCombo(cellNumber, movement);
    // End of board reached with only same tiles all the way along => winning combination
    } else if (currentTile === undefined) {
        return true
    // Tile not the same => not a winning combination
    } else {
        return false
    }
};