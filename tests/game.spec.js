describe("Bowling Game", function() {

    var game;

    beforeEach(function() {
        game = BowlingGame.game();
    });

    describe("The Game Object", function() {

        it("should have a score of 0 if I knock down no skittles", function() {

            game.roll(0);

            var score = game.score();

            expect(score).toBe(0);

        });

        it("should have a score of 1", function() {

            game.roll(1);

            var score = game.score();

            expect(score).toEqual(1);

        });

        it("should have a score greater than the first roll", function() {

            var firstRoll = 2;
            var secondRoll = 3;
            game.roll(firstRoll);
            game.roll(secondRoll);

            var score = game.score();

            expect(score).toBeGreaterThan(firstRoll);

        });

        it("should have the correct score", function() {

            game.roll(1);

            var scoreIsCorrect = (game.score() === 1);

            expect(scoreIsCorrect).toBeTruthy();

        });

        it("should not have a score of 0", function() {

            game.roll(1);

            expect(game.score()).not.toBe(0);

        });
    });

    describe("Frames", function() {

        it("should create a new frame on the first roll", function() {

            spyOn(BowlingGame, "frame").andCallThrough();

            game.roll(1);

            expect(BowlingGame.frame).toHaveBeenCalled();

        });

        it("should not create a new frame on the second roll", function() {

            spyOn(BowlingGame, "frame").andCallThrough();

            game.roll(1);
            game.roll(2);

            expect(BowlingGame.frame.callCount).toBe(1);
        });

        it("should create a new frame on the third roll", function () {

            spyOn(BowlingGame, "frame").andCallThrough();

            game.roll(1);
            game.roll(6);

            game.roll(7);

            expect(BowlingGame.frame.callCount).toBe(2);

        });


        it("Should pass through the call count", function() {


            var fakeFrame = {};
            fakeFrame.roll = jasmine.createSpy();
            fakeFrame.rolls = jasmine.createSpy().andReturn(0);
            fakeFrame.score = jasmine.createSpy().andReturn(1);

            spyOn(BowlingGame, "frame").andReturn(fakeFrame);

            game.roll(1);

            expect(fakeFrame.roll).toHaveBeenCalledWith(1);


        });

        it("should create a new frame on the third roll", function () {

            var fakeFrame = {};
            fakeFrame.roll = jasmine.createSpy();
            fakeFrame.rolls = jasmine.createSpy().andReturn(0);
            fakeFrame.score = jasmine.createSpy().andReturn(1);

            spyOn(BowlingGame, "frame").andReturn(fakeFrame);

            game.roll(1);
            game.roll(6);
            game.roll(7);

            var lastPassedRoll = fakeFrame.roll.mostRecentCall.args[0];

            expect(lastPassedRoll).toBe(7);

            var firstPassedRoll = fakeFrame.roll.calls[0].args[0];

            expect(firstPassedRoll).toBe(1);

        });
    });

});
