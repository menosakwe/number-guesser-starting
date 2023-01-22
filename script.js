let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
}


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

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
    return 'user ' + humanScore + ' computer ' + computerScore;
}

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