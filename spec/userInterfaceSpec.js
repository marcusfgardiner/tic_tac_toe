describe("UserInterface", function() {
    var userInterface

    beforeEach(function() {
        userInterface = new UserInterface();
    });

  it("prints formatted game board", function() {
    var printedBoard = userInterface.printBoard();
    expect(console.log).toHaveBeenCalledWith(printedBoard);
  });
});