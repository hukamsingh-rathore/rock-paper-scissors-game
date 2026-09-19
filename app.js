let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset-btn");

const genCompChoice = () => {
    const options = ["rock", "paper", "sicssor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};


const drawGame = (userChoice) => {
    msg.innerText = `Game Draw! Both picked ${userChoice}.`;
    msg.style.backgroundColor = "#0f3460";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        if (userScorePara) userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "#2e7d32";
    } else {
        compScore++;
        if (compScorePara) compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "#c62828";
    }
};


const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame(userChoice);
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "sicssor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        choices.forEach((c) => c.classList.remove("selected"));
        choice.classList.add("selected");

        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

if (resetBtn) {
    resetBtn.addEventListener("click", () => {
        userScore = 0;
        compScore = 0;
        if (userScorePara) userScorePara.innerText = "0";
        if (compScorePara) compScorePara.innerText = "0";
        choices.forEach((c) => c.classList.remove("selected"));
        msg.innerText = "Play your move!";
        msg.style.backgroundColor = "#0f3460";
    });
}
