describe("Game", function() {
    var game;

    beforeEach(function() {
        game = new Game();
    }); 

    it("starts with a blank tic tac toe board", function() {
        expect(game.board).toEqual([['-','-','-'],['-','-','-'],['-','-','-']]);
    });

    it("can read a value on the board based on input coordinates", function() {
        game.board = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
        expect(game.readBoard(2,2)).toEqual('x')
    });
});