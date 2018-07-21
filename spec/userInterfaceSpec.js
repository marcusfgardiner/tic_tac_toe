describe("UserInterface", function() {
    var userInterface

    beforeEach(function() {
        userInterface = new UserInterface();
        board = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
        // userInterface.game = {board: [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]]}
    });

// TODO: Test that game & winChecker is created when creating user interface

  it("prints formatted game board", function() {
    var printedBoard = userInterface.printBoard();
    expect(console.log).toHaveBeenCalledWith(printedBoard);
  });
});