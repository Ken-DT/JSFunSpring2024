

import prompt from "readline-sync";

function playGuessingGame() {
    const secretNumber = Math.floor(Math.random() * 10) + 1; // Generate secret number between 1 and 10
    let attempts = 0;

    console.log("\nWelcome to the Guessing Game!\nPress ctrl+c to stop\n");

    while (true) {
        const guess = parseInt(prompt.question('Guess the secret number between 1 and 10: '));

        if (isNaN(guess) || guess < 1 || guess > 10) {
            console.log('Please enter a valid number between 1 and 10.');
            continue;
        }

        attempts++;

        if (guess === secretNumber) {
            console.log(`Congratulations! You guessed the secret number (${secretNumber}) in ${attempts} attempts.`);
            break;
        } else if (guess < secretNumber) {
            console.log('Too low! Try a higher number.');
        } else {
            console.log('Too high! Try a lower number.');
        }
    }
}

playGuessingGame();