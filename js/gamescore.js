function displayGameScore() {
    // get LAFC and Sounder score
    var sounderScore = document.getElementById("sounderscore").value;
    var lafcScore = document.getElementById("lafcscore").value;

    // validate score values
    if (validateScores(sounderScore, lafcScore)) {
        
        // write values to page
        sounderScoreText.innerHTML= sounderScore; 
        lafcScoreText.innerHTML= lafcScore;

        // test scores to see if user entered correct scores
        checkGameScore(sounderScore, lafcScore);
    }
}

function checkGameScore(score1, score2) {
    // checks user input against game score and prints results to page
    if (score1 == 3 && score2 == 1) {
        scoreGuess.innerHTML = "That's the correct score!  Sounders won!";
    } else if (score1 != 3 && score2 == 1) {
        if (score1 > 3) {
            scoreGuess.innerHTML = "That's correct for LAFC!  But the Sounders scored LESS goals.";
        } else if (score1 < 3) {
            scoreGuess.innerHTML = "That's correct for LAFC!  But the Sounders scored MORE goals.";
        }
    } else if (score1 == 3 && score2 != 1) {
        if (score2 > 1) {
            scoreGuess.innerHTML = "That's correct score for the Sounders!  But LAFC scored LESS goals.";
        } else if (score2 < 1) {
            scoreGuess.innerHTML = "That's correct score for the Sounders!  But LAFC scored MORE goals.";
        }
    } else {
        scoreGuess.innerHTML = "Both of your scores are wrong.";
    }
}

function validateScores(score1, score2) {
    if (isNaN(score1)) {
        alert("Sounder's score must be a number");
        return false;
    }
    if (isNaN(score2)) {
        alert("LAFC's score must be a number");
        return false;
    }
    return true
}