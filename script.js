let choice = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let playerScore = 0;

function ComputerPick() {
    let computerPick = choice[Math.floor(Math.random() * choice.length)];
    return computerPick;
}

function PlayerPick() {
    let userInput = prompt("Rock, paper or scissors?");

    switch (userInput.toLowerCase()) {
        case "rock":
            userInput = choice[0];
            break;
        case "paper":
            userInput = choice[1];
            break;
        case "scissors":
            userInput = choice[2];
            break;
        default:
            alert("Not a valid choice!");
            userInput = PlayerPick();
    }
    return userInput;
}

function lossAlert() {
    computerScore++;
    return `You lose! ${PlayerPick} is beaten by ${ComputerPick}.`;
}

function PlayRound(PlayerPick, ComputerPick) {
    if (ComputerPick === choice[0] && PlayerPick === choice[2]) {
        lossAlert();
    } else if (ComputerPick === choice[2] && PlayerPick === choice[1]) {
        lossAlert();
    } else if (ComputerPick === choice[1] && PlayerPick === choice[0]) {
        lossAlert();
    } else if (ComputerPick === PlayerPick) {
        alert(
            `That's a draw! Computer picked ${ComputerPick} and you picked ${PlayerPick}.`
        );
    } else {
        alert("You win! " + PlayerPick + " beats " + ComputerPick + ".");
        playerScore++;
    }
}

function Game() {
    alert("Welcome to this game! Here you will play rock, paper, scissors against the computer for five rounds. Good luck!"
    );
    for (let i = 0; i < 5; i++) {
        PlayRound(PlayerPick(), ComputerPick());
        console.log(`Player's Score: ${playerScore}, Computer's Score: ${computerScore}`
        );
    }
}

// For the UI

const rockBtn = document.querySelector("#rockbtn");


const paperBtn = document.querySelector("#paperbtn");


const scissorsBtn = document.querySelector("#scissorsbtn");