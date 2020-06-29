// Variables for selection
let choice = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let playerScore = 0;

// bUttons for the player options
const rockBtn = document.querySelector("#rockbtn");
const paperBtn = document.querySelector("#paperbtn");
const scissorsBtn = document.querySelector("#scissorsbtn");

// Reset button
const resetBtn = document.createElement("button");
resetBtn.innerHTML = "Reset";
resetBtn.setAttribute("style", "background-color: red; width:120px; height: 60px; font-size: 14px; color: white; border-style: hidden; border-radius: 6px; text-decoration: none; overflow: hidden; cursor: pointer; text-align: center; -transition-duration: 0.4s; outline: 0; margin: 40px 0px; resetBtn:hover");

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
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      document.getElementById(
        "scoreboard"
      ).textContent = `You win the game! ${playerChoice} beats ${ComputerPick()}.`;
      RemoveOptions();
    } else {
      document.getElementById(
        "scoreboard"
      ).textContent = `The computer wins the game! ${playerChoice} is beaten by ${ComputerPick()}.`;
      RemoveOptions();
    }
  }
  document.getElementById("ps").textContent = playerScore;
  document.getElementById("cs").textContent = computerScore;
};

function ComputerPick() {
  return choice[Math.floor(Math.random() * 3)];
}

function lossAlert() {
  document.getElementById(
    "scoreboard"
  ).textContent = `You lose! ${playerChoice} is beaten by ${ComputerPick()}.`;
  computerScore++;
}

function Versus() {
  PlayRound(playerChoice);
  updateScore();
}

function PlayRound(playerChoice) {
  let computerChoice = ComputerPick();
  if (computerChoice === choice[0] && playerChoice === choice[2]) {
    lossAlert();
  } else if (computerChoice === choice[1] && playerChoice === choice[0]) {
    lossAlert();
  } else if (computerChoice === choice[2] && playerChoice === choice[1]) {
    lossAlert();
  } else if (computerChoice === playerChoice) {
    document.getElementById(
      "scoreboard"
    ).textContent = `That's a draw! Computer picked ${computerChoice} and you picked ${playerChoice}.`;
  } else {
    document.getElementById(
      "scoreboard"
    ).textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    playerScore++;
  }
}

const resetGame = document.querySelector("resetContainer");

resetBtn.addEventListener("click", () => {
  document.getElementById("ps").innerHTML = "0";
  document.getElementById("cs").innerHTML = "0";
  document.getElementById("scoreboard").innerHTML =
    "New game! Choose your pick!";
  playerScore = 0;
  computerScore = 0;
  AddOptions();
});

function RemoveOptions() {
  document.getElementById("input").removeChild(rockBtn);
  document.getElementById("input").removeChild(paperBtn);
  document.getElementById("input").removeChild(scissorsBtn);
  document.getElementById("resetContainer").appendChild(resetBtn);
}

function AddOptions() {
  document.getElementById("input").appendChild(rockBtn);
  document.getElementById("input").appendChild(paperBtn);
  document.getElementById("input").appendChild(scissorsBtn);
  document.getElementById("resetContainer").removeChild(resetBtn);
}