var WinChecker = function(gameBoard, XorO) {
    this.board = gameBoard;
    this.XorO = XorO
    this.rowLength = Math.sqrt(gameBoard.length);
    this.cellNumberChanges = { horizontal: 1, vertical: this.rowLength, diagonalRight: (this.rowLength + 1), diagonalLeft: (this.rowLength - 1) }
    this.moveNumber = 0
}

WinChecker.prototype.isWinningMove = function () {
    if (this._isHorizontalWin()) {
        return true
    };
    if (this._isVerticalWin()) {
        return true
    };
    if (this._isDiagonalLeftToRightWin()) {
      return true;
    };
    if (this._isDiagonalRightToLeftWin()) {
        return true
    };
    return false
};

WinChecker.prototype._isHorizontalWin = function () {
    for (let index = 0; index < this.rowLength; index++) {
        this.moveNumber = 0
        var startingCell = (index * this.rowLength)
        if (this._isWinningCombo(startingCell, "horizontal")) {
            return true;
        }
    };
};

WinChecker.prototype._isVerticalWin = function () {
    for (let index = 0; index < this.rowLength; index++) {
        this.moveNumber = 0
        if (this._isWinningCombo(index, "vertical")) {
            return true;
        }
    };
};

WinChecker.prototype._isDiagonalLeftToRightWin = function () {
    this.moveNumber = 0
    return this._isWinningCombo(0, "diagonalRight")
};

WinChecker.prototype._isDiagonalRightToLeftWin = function() {
    this.moveNumber = 0
    var startingCell = this.rowLength - 1
    return this._isWinningCombo(startingCell, "diagonalLeft");
};

WinChecker.prototype._isWinningCombo = function(cellNumber, movement) {
    var currentTile = this.board[cellNumber];
    this.moveNumber++
    if (this.moveNumber > this.rowLength) {
        return true
    } else if (currentTile === this.XorO) {
        console.log("same tree");
        cellNumber += this.cellNumberChanges[movement]
        return this._isWinningCombo(cellNumber, movement);
    } else {
        console.log("fail tree");
        return false
    }
};