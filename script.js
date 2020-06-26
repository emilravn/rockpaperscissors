// Variables for selection
let choice = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let playerScore = 0;

// Constants for the player options
const rockBtn = document.querySelector("#rockbtn");
const paperBtn = document.querySelector("#paperbtn");
const scissorsBtn = document.querySelector("#scissorsbtn");

// Rock Pick
rockBtn.addEventListener("click", () => {
  playerChoice = choice[0];
  Versus();
});

// Paper Pick
paperBtn.addEventListener("click", () => {
  playerChoice = choice[1];
  Versus();
});

// Scissors Pick
scissorsBtn.addEventListener("click", () => {
  playerChoice = choice[2];
  Versus();
});

const updateScore = () => {
  document.getElementById('ps').textContent = computerScore;
  document.getElementById('cs').textContent = playerScore;
};


function Versus(){
  ComputerPick();
  PlayRound(playerChoice, ComputerPick());
  updateScore();
}

function ComputerPick() {
  let computerPick = choice[Math.floor(Math.random() * 3)];
  return computerPick;
}

function lossAlert() {
  alert(`You lose! ${playerChoice} is beaten by ${ComputerPick}.`);
  computerScore++;
}

function PlayRound(playerChoice, ComputerPick) {
  if (ComputerPick === choice[0] && playerChoice === choice[2]) {
    lossAlert();
  } else if (ComputerPick === choice[2] && playerChoice === choice[1]) {
    lossAlert();
  } else if (ComputerPick === choice[1] && playerChoice === choice[0]) {
    lossAlert();
  } else if (ComputerPick === playerChoice) {
    alert(
      `That's a draw! Computer picked ${ComputerPick} and you picked ${playerChoice}.`
    );
  } else {
    alert("You win! " + playerChoice + " beats " + ComputerPick + ".");
    playerScore++;
  }
}