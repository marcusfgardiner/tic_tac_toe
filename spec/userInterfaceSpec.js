describe("UserInterface", function() {

    var userInterface = new UserInterface

    it("prints formatted game board", function() {
        var printedBoard = userInterface.printBoard()
        expect(console.log).toHaveBeenCalledWith(printedBoard)
    });

});