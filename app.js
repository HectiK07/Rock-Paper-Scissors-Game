let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector(".msg");

const userScoreNum = document.querySelector(".user_score");
const compScoreNum = document.querySelector(".comp_score");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randomId = Math.floor(Math.random() * 3);
    return options[randomId];
};

const drawGame = () => {
    console.log("The game is draw");
    msg.innerText = "Game was a Draw.";
    msg.style.backgroundColor = "#273E47";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreNum.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreNum.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("userChoice is", userChoice);
    const compChoice = genCompChoice();
    console.log("compChoice is", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice === "Scissors" ? true : false;
        } else if (userChoice === "Paper") {
            userWin = compChoice === "Rock" ? true : false;
        } else {
            userWin = compChoice === "Paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
