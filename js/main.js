const schaar_div = document.getElementById("schaar");
const steen_div = document.getElementById("steen");
const papier_div = document.getElementById("papier");
// Waarde van gebruiker knoppen bepalen


// Einde waarde van gebruiker knoppen bepalen

// Computer choice
function getRandomChoise(){
    const choises = ["schaar","steen","papier"];
    const randomNumber = Math.floor(Math.random()*3);
    return choises[randomNumber];
}

function win(){
    console.log("win");
}

function lose(){
    console.log("lose");
}

function draw(){
    console.log("draw");
}

function Game(userChoise) {
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
}



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