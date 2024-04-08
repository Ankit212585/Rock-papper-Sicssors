let userScore = 0;
let computerScore = 0;

const Choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
let userScorepara = document.querySelector(".user-score");
let computerScorepara = document.querySelector(".comp-score");
const NewGame = document.querySelector(".New-btn");

const computerChoise = () => {
  //   rock,papper,sicessor
  const options = ["rock", "papper", "Sicssors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const DrawGame = () => {
  console.log("Game Draw");
  msg.innerHTML = " Draw 😒 Play Again!";
  msg.style.background = "#081b31";
};

const showWinner = (userWin, myChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorepara.innerHTML = userScore;
    msg.innerHTML = `You win! 😁🏆  Your ${myChoice} beats Computer Choice ${compChoice}`;
    msg.style.background = "green";
  } else {
    computerScore++;
    computerScorepara.innerHTML = computerScore;
    msg.innerHTML = `You loose! 🤦‍♂️ Computer ${compChoice} beats Your Choice ${myChoice}`;
    msg.style.background = "Red";
  }
};

const playGame = (myChoice) => {
  console.log("user Choice =", myChoice);
  // Generate computer choice
  const compChoice = computerChoise();
  console.log("Computer Choice =", compChoice);

  if (myChoice === compChoice) {
    // Game Draw
    DrawGame();
  } else {
    let userWin = true;
    if (myChoice === "rock") {
      // Sicssors , papper
      userWin = compChoice === "papper" ? false : true;
    } else if (myChoice === "papper") {
      // Sicssors , Rock
      userWin = compChoice === "Sicssors" ? false : true;
    } else {
      // Sicssors , Rock
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, myChoice, compChoice);
  }
};

Choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const myChoice = choice.getAttribute("id");
    playGame(myChoice);
  });
});

const reset = () => {
  userScorepara.innerHTML = userScore = 0;
  computerScorepara.innerHTML = userScore = 0;
  msg.innerHTML = "Play Your Move 😀";
  msg.style.background = "#081b31";
};

NewGame.addEventListener("click", () => {
  reset();
});
