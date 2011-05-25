var BowlingGame = {};

BowlingGame.game = function() {

    var frames = [];
    var frameIsComplete = function(frame) {
        if (frame === undefined) return true;
        if (frame.rolls() === 2) return true;
        return false;
    }

    return {
        roll: function (skittles) {
            var currentFrame = frames[frames.length - 1];
            if (frameIsComplete(currentFrame)) {
                var newFrame = BowlingGame.frame();
                newFrame.roll(skittles);
                frames.push(newFrame);
            } else {
                currentFrame.roll(skittles);
            }


        },
        score: function() {
            var score = 0;
            for (var i = 0; i < frames.length; i++) {
                score += frames[i].score();
            }
            return score;
        }
    }

}