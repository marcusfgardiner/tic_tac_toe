describe("WinChecker", function() {
    var winChecker;

    beforeEach(function() {
        winChecker = new WinChecker
        winCombo1 = [["x", "x", "x"], ["-", "-", "-"], ["-", "-", "-"]];
        winCombo2 = [["-", "-", "-"], ["x", "x", "x"], ["-", "-", "-"]];
        winCombo3 = [["-", "-", "-"], ["-", "-", "-"], ["x", "x", "x"]];
        winCombo4 = [["x", "-", "-"], ["x", "-", "-"], ["x", "-", "-"]];
        winCombo5 = [["-", "x", "-"], ["-", "x", "-"], ["-", "x", "-"]];
        winCombo6 = [["-", "-", "x"], ["-", "-", "x"], ["-", "-", "x"]];
        winCombo7 = [["x", "-", "-"], ["-", "x", "-"], ["-", "-", "x"]];
        winCombo8 = [["-", "-", "x"], ["-", "x", "-"], ["x", "-", "-"]];
    });

    it("can correctly assess a win from 3 x's in top row", function() {
        winChecker.isWinningMove(winCombo1, 'x').toBe(true)
    });
});