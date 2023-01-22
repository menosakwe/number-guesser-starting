let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// This function generates a random number between 0 and 9 (inclusive)
function generateTarget() {
    return Math.floor(Math.random() * 10);
}


// This function compares the user's and computer's guesses to the target number
// It returns true if the user's guess is closer to the target than the computer's guess
// It returns false if the computer's guess is closer to the target than the user's guess
function compareGuesses(user, computer, target) {
    /* if (user < 0 || user > 9) {
        return alert ('Please enter valid number');
    } */
    target = generateTarget();
    console.log('Target ' + target);
    let userDiff = Math.abs(user - target);
    let computerDiff = Math.abs(computer - target);
    if (userDiff <= computerDiff) {
        return true; //Same or less diff, user wins
    } else {
        return false; //Computer wins
    }
}

// This function updates the score based on the winner of the round ('human' or 'computer')
function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
    return 'user ' + humanScore + ' computer ' + computerScore;
}

// This function advances the round number by 1
function advanceRound() {
    currentRoundNumber++;
    return currentRoundNumber;
}
console.log(compareGuesses(2,6));
console.log(updateScore('human'));
console.log(advanceRound());

console.log(compareGuesses(2,6));
console.log(updateScore('computer'));
console.log(advanceRound());

console.log(compareGuesses(2,6));
console.log(updateScore('human'));
console.log(advanceRound());

console.log(compareGuesses(2,6));
console.log(updateScore('computer'));
console.log(advanceRound());
