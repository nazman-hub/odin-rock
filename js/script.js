

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getComputerChoice(){
    let computerChoiceInt = getRandomInt(0,3);

    if (computerChoiceInt===0){
        return "rock"
    }
    else if (computerChoiceInt===1){
        return "paper"
    }
    else{
        return "scissors"
    }
}
//console.log("Computer choice: "+getComputerChoice());

function getHumanChoice(){
    let humanChoice = prompt("Enter rock, paper, or scissors");
    return humanChoice.toLowerCase();
}

// console.log("Human choice: "+getHumanChoice())
let humanScore = computerScore = 0;
function displayScore(){
    console.log("Human "+humanScore+"-"+computerScore+" Computer");
}


function playRound(humanChoice, computerChoice){
    console.log("Computer choice: "+computerChoice);
    console.log("Human choice: "+humanChoice);

    if (humanChoice === computerChoice){
        console.log("Draw")
    }
    else if(humanChoice==="rock"){
        if (computerChoice==="scissors"){
            humanScore += 1;
            console.log("Human wins!");
        }
        else{
            computerScore += 1;
            console.log("Computer wins!");
        }
    }
    else if(humanChoice==="paper")
        if (computerChoice==="rock"){
            humanScore += 1;
            console.log("Human wins!");
        }
        else{
            computerScore += 1;
            console.log("Computer wins!");
        }
    else if(humanChoice==="scissors"){
        if (computerChoice==="paper"){
            humanScore += 1;
            console.log("Human wins!");
        }
        else{
            computerScore += 1;
            console.log("Computer wins!");
        }
    }
    else {
        console.log("Wrong input");
    }

    displayScore();
}



function playGame(){
    humanScore = 0;
    computerScore = 0;
    for(let i=0; i<5; i++){
        const humanSelection = getHumanChoice();
       //const humanSelection = getComputerChoice();
        const computerSelection = getComputerChoice();

        console.log(`========GAME ${i+1}========`)
        
        playRound(humanSelection, computerSelection);
    }

}

playGame();