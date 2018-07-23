describe("Game", function() {
    var game;

    beforeEach(function() {
        game = new Game();
    }); 

    it("starts with a blank tic tac toe board", function() {
        expect(game.board).toEqual([
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " "
        ]);
    });

    it("can read a value on the board based on input cell", function() {
        game.board = [" ", " ", " ", " ", "x", " ", " ", " ", " "];
        expect(game.readBoard(5)).toEqual('x')
    });

    it("can update the board based on a provided string input", function() {
        game.updateBoard(5, "x");
        expect(game.board[4]).toEqual("x");
    });
});