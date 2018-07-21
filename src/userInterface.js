var UserInterface = function() {
    this.movesBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
};

UserInterface.prototype.runGame = function() {
    this.game = new Game();
    this.introMessage();
    this.printBoard(this.movesBoard);
    while (this.isWinCheck() === false) {
        this.printBoard(this.currentBoard());
        this.game.playTurn();
    }
};

UserInterface.prototype.printBoard = function(board) {
    console.log("\n" + " " + board[0] + " | " + board[1] + " | " + board[2]+ "\n"
    + " ---------\n" + " " + board[3] + " | " + board[4] + " | " + board[5] + "\n"
    + " ---------\n" + " " + board[6] + " | " + board[7] + " | " + board[8] + "\n");
};

UserInterface.prototype.introMessage = function() {
        console.log("Welcome to Tic Tac Toe." + "\n"
        + "Submit the number where you want to place your move!")
};

UserInterface.prototype.isWinCheck = function() {
  var winChecker = new WinChecker(this.currentBoard, XorO);
  return winChecker.isWinningMove();
};

UserInterface.prototype.currentBoard = function() {
    this.game.returnBoard();
};

ticTacToe = new UserInterface
ticTacToe.runGame();