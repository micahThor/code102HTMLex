function displayGameScore() {
    // get LAFC and Sounder score and write user score to page
    var sounderScore = document.getElementById("sounderscore").value;
    sounderScoreText.innerHTML= sounderScore; 
    var lafcScore = document.getElementById("lafcscore").value;
    lafcScoreText.innerHTML= lafcScore;

    // test scores to see if user entered correct scores
    checkGameScore(sounderScore, lafcScore);
}

function checkGameScore(score1, score2) {
    // checks user input against game score and prints results to page
    if (score1 == 3 && score2 == 1) {
        scoreGuess.innerHTML = "That's the correct score!  Sounders won!";
    } else if (score1 != 3 && score2 == 1) {
        scoreGuess.innerHTML = "That's the correct score for LAFC!  But wrong for Sounders...";
    } else if (score1 == 3 && score2 != 1) {
        scoreGuess.innerHTML = "That's the correct score for the Sounders!  But wrong for LAFC...";
    } else {
        scoreGuess.innerHTML = "Both of your scores are wrong";
    }
}