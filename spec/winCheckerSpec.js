describe("WinChecker", function() {
    var winChecker;

    beforeEach(function() {
        winChecker = new WinChecker();
        loseCombo1 = [["x", "x", "-"], ["-", "-", "-"], ["-", "-", "-"]];
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
        it("can correctly assess a win from 3 x's in top row", function() {
            expect(winChecker.isWinningMove(winCombo1, "x")).toBe(true);
        });

        it("can correctly assess a non-win from 3 x's in middle row", function() {
            expect(winChecker.isWinningMove(loseCombo1, "x")).toBe(false);
        });
    });

    // describe("isNextTileSame", function() {
    //     it("can check if next horizontal tile the same", function() {
    //         var rowNumber = 0;
    //         var cellNumber = 1;
    //         var movement = 'horizontal';
    //         var result = winChecker.isNextTileSame(winCombo1, rowNumber, cellNumber,movement);
    //         expect(result).toBe(true);
    //     });

    //     it("can check if next horizontal tile NOT the same", function() {
    //         var rowNumber = 0;
    //         var cellNumber = 1;
    //         var movement = "horizontal";
    //         var result = winChecker.isNextTileSame(loseCombo1, rowNumber, cellNumber, movement);
    //         expect(result).toBe(false);
    //     });
    // });
});