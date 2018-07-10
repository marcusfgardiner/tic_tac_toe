describe("Game", function() {
    var game;

    beforeEach(function() {
        game = new Game();
    }); 

    it("starts with a blank tic tac toe board", function() {
        expect(game.board).toEqual([
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-"
        ]);
    });
});