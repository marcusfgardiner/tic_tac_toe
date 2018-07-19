describe("WinChecker", function() {
    var winChecker;

    beforeEach(function() {
        winChecker = new WinChecker();
        loseCombo1 = [["x", "x", "-"], ["-", "-", "-"], ["-", "-", "-"]];
        loseCombo2 = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
        loseCombo3 = [["x", "-", "o"], ["-", "o", "-"], ["o", "o", "x"]];
        winCombo1 = [["x", "x", "x"], ["-", "-", "-"], ["-", "-", "-"]];
        winCombo2 = [["-", "-", "-"], ["x", "x", "x"], ["-", "-", "-"]];
        winCombo3 = [["-", "-", "-"], ["-", "-", "-"], ["x", "x", "x"]];
        winCombo4 = [["x", "-", "-"], ["x", "-", "-"], ["x", "-", "-"]];
        winCombo5 = [["-", "x", "-"], ["-", "x", "-"], ["-", "x", "-"]];
        winCombo6 = [["-", "-", "x"], ["-", "-", "x"], ["-", "-", "x"]];
        winCombo7 = [["x", "-", "-"], ["-", "x", "-"], ["-", "-", "x"]];
        winCombo8 = [["-", "-", "x"], ["-", "x", "-"], ["x", "-", "-"]];
    });

    describe("isWinningMove" ,function() {
        // TODO: add tests for ALL winning combos above (can copy function and just change subbed in win combo)
        it("can correctly assess a win from 3 x's in top row", function() {
            expect(winChecker.isWinningMove(winCombo1, "x")).toBe(true);
        });

        it("can correctly assess a win from 3 x's in second row", function() {
            expect(winChecker.isWinningMove(winCombo2, "x")).toBe(true);
        });

        it("can correctly assess a win from 3 x's in third row", function() {
            expect(winChecker.isWinningMove(winCombo3, "x")).toBe(true);
        });

        it("can correctly assess a win from 3 x's in top row", function () {
            expect(winChecker.isWinningMove(winCombo4, "x")).toBe(true);
        });

        it("can correctly assess a win from 3 x's in second row", function () {
            expect(winChecker.isWinningMove(winCombo5, "x")).toBe(true);
        });

        it("can correctly assess a win from 3 x's in third row", function () {
            expect(winChecker.isWinningMove(winCombo6, "x")).toBe(true);
        });

        it("can correctly assess a win from 3 x's in top row", function () {
            expect(winChecker.isWinningMove(winCombo7, "x")).toBe(true);
        });

        it("can correctly assess a win from 3 x's in second row", function () {
            expect(winChecker.isWinningMove(winCombo8, "x")).toBe(true);
        });

        it("can correctly assess a non-win", function() {
            expect(winChecker.isWinningMove(loseCombo1, "x")).toBe(false);
        });

        it("can correctly assess a non-win", function () {
            expect(winChecker.isWinningMove(loseCombo2, "x")).toBe(false);
        });

        it("can correctly assess a non-win", function () {
            expect(winChecker.isWinningMove(loseCombo3, "x")).toBe(false);
        });
    });

    describe("isWinningCombo", function() {
        it("can correctly assess a win from 3 x's in a row", function() {
            var rowNumber = 0;
            var cellNumber = 0;
            var movement = "horizontal";
            var result = winChecker.isWinningCombo(winCombo1, rowNumber, cellNumber, 'x', movement);
            expect(result).toBe(true);
        });

        it("can correctly assess a NON-win from 2 x's in top row", function() {
            var rowNumber = 0;
            var cellNumber = 0;
            var movement = "horizontal";
            var result = winChecker.isWinningCombo(loseCombo1, rowNumber, cellNumber, "x", movement);
            expect(result).toBe(false);
        });

        it("can correctly assess a NON-win from 3 -s in top row", function() {
            var rowNumber = 0;
            var cellNumber = 0;
            var movement = "horizontal";
            var result = winChecker.isWinningCombo(winCombo2, rowNumber, cellNumber, "x", movement);
            expect(result).toBe(false);
        });
    });
});