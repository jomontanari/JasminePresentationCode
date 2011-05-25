BowlingGame.frame = function() {

    var rolls = 0;
    var score = 0;


    return {
        roll: function(skittles) {
            rolls++;
            score+=skittles;
        },
        score: function() {
            return score;
        },
        rolls: function() {
            return rolls;
        }

    }
}