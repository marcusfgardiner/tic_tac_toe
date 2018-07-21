describe("WinChecker", function() {
    var winChecker;

    beforeEach(function() {
        winCombo1 = [["x", "x", "x"], ["-", "-", "-"], ["-", "-", "-"]];
        winCombo2 = [["-", "-", "-"], ["x", "x", "x"], ["-", "-", "-"]];
        winCombo3 = [["-", "-", "-"], ["-", "-", "-"], ["x", "x", "x"]];
        winCombo4 = [["x", "-", "-"], ["x", "-", "-"], ["x", "-", "-"]];
        winCombo5 = [["-", "x", "-"], ["-", "x", "-"], ["-", "x", "-"]];
        winCombo6 = [["-", "-", "x"], ["-", "-", "x"], ["-", "-", "x"]];
        winCombo7 = [["x", "-", "-"], ["-", "x", "-"], ["-", "-", "x"]];
        winCombo8 = [["-", "-", "x"], ["-", "x", "-"], ["x", "-", "-"]];
        loseCombo1 = [["x", "x", "-"], ["-", "-", "-"], ["-", "-", "-"]];
        loseCombo2 = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
        loseCombo3 = [["x", "-", "o"], ["-", "o", "-"], ["o", "o", "x"]];
    });

    describe("isWinningMove" ,function() {
        it("1 can correctly assess a win from 3 x's in top row", function() {
            winChecker = new WinChecker(winCombo1, "x");
            expect(winChecker.isWinningMove()).toBe(true);
        });

        it("2 can correctly assess a win from 3 x's in second row", function() {
            winChecker = new WinChecker(winCombo2, "x");
            expect(winChecker.isWinningMove()).toBe(true);
        });

        it("3 can correctly assess a win from 3 x's in th   ird row", function() {
            winChecker = new WinChecker(winCombo3, "x");
            expect(winChecker.isWinningMove()).toBe(true);
        });

        it("4 can correctly assess a win from 3 x's in first column", function () {
            winChecker = new WinChecker(winCombo4, "x");
            expect(winChecker.isWinningMove()).toBe(true);
        });

        it("5 can correctly assess a win from 3 x's in second column", function () {
            winChecker = new WinChecker(winCombo5, "x");
            expect(winChecker.isWinningMove()).toBe(true);
        });

        it("6 can correctly assess a win from 3 x's in third column", function () {
            winChecker = new WinChecker(winCombo6, "x");
            expect(winChecker.isWinningMove()).toBe(true);
        });

        it("7 can correctly assess a win from 3 x's diagonal left to right", function () {
            winChecker = new WinChecker(winCombo7, "x");
            expect(winChecker.isWinningMove()).toBe(true);
        });

        it("8 can correctly assess a win from 3 x's diagonal right to left", function () {
            winChecker = new WinChecker(winCombo8, "x");
            expect(winChecker.isWinningMove()).toBe(true);
        });

        it("1 can correctly assess a non-win", function() {
            winChecker = new WinChecker(loseCombo1, "x");
            expect(winChecker.isWinningMove()).toBe(false);
        });

        it("2 can correctly assess a non-win - no moves yet", function () {
            winChecker = new WinChecker(loseCombo2, "x");
            expect(winChecker.isWinningMove()).toBe(false);
        });

        it("3 can correctly assess a non-win - random x's and o's ", function () {
            winChecker = new WinChecker(loseCombo3, "x");
            expect(winChecker.isWinningMove()).toBe(false);
        });
    });
});