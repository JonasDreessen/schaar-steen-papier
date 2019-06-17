let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreMessage = document.getElementById("score-message");
const schaar_div = document.getElementById("schaar");
const steen_div = document.getElementById("steen");
const papier_div = document.getElementById("papier");
// Waarde van gebruiker knoppen bepalen


// Einde waarde van gebruiker knoppen bepalen

// Computer choice
function getRandomChoise() {
    const choises = ["schaar", "steen", "papier"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choises[randomNumber];
}

function win() {
    userScore++;
    userScore_span.innerHTML = userScore;
    scoreMessage.innerHTML = "<span style='color: green;'>You Won!</span>";
}

function lose() {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    scoreMessage.innerHTML = "<span style='color: red;'>You Lost!</span>"
}

function draw() {
    scoreMessage.innerHTML = "It's a Draw!"

}


function Game(userChoise) {
    const computerChoise = getRandomChoise();
    if (userChoise + computerChoise === "steenschaar") {
        win();
    } else if (userChoise + computerChoise === "papiersteen") {
        win();
    } else if (userChoise + computerChoise === "schaarpapier") {
        win();
    } else if (userChoise + computerChoise === "steenpapier") {
        lose();
    } else if (userChoise + computerChoise === "papierschaar") {
        lose();
    } else if (userChoise + computerChoise === "schaarsteen") {
        lose();
    } else if (userChoise + computerChoise === "schaarschaar") {
        draw();
    } else if (userChoise + computerChoise === "steensteen") {
        draw();
    } else if (userChoise + computerChoise === "papierpapier") {
        draw();
    }


}
/*function Game(userChoise) {
    const computerChoise = getRandomChoise();
    switch(userChoise + computerChoise){
        case "steenschaar":
        case "papiersteen":
        case "schaarpapier":
            win();
            break;
        case "steenpapier":
        case "papierschaar":
        case "schaarsteen":
            lose();
            break;
        case "steensteen":
        case "papierpapier":
        case "schaarschaar":
            draw();
            break;

    }
}*/



function main() {
    schaar_div.addEventListener("click", function () {
        Game("schaar");
    })

    steen_div.addEventListener("click", function () {
        Game("steen");
    })

    papier_div.addEventListener("click", function () {
        Game("papier");
    })
}

main();


/*
function RandomCalculator() {
    var computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
} */