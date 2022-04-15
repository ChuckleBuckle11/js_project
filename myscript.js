game();







function computerPlay(){
    var items = ["Rock", "Paper", "Scissors"];

    return items[Math.floor(Math.random()*items.length)];

}

function playRound(playerSelection, computerSelection){
    
    let player_input = playerSelection.toLowerCase();

    if (player_input == "rock") {
        if (computerSelection.toLowerCase() == "paper"){
            return "Lose";
        }
        
        else if (computerSelection.toLowerCase() == "scissors"){
            return "Win";
        }
    }

    if (player_input == "paper") {
        if (computerSelection.toLowerCase() == "scissors"){
            return "Lose";
        }
        
        else if (computerSelection.toLowerCase() == "rock"){
            return "Win";
        }
    }

    if (player_input == "scissors") {
        if (computerSelection.toLowerCase() == "rock"){
            return "Lose";
        }
        
        else if (computerSelection.toLowerCase() == "paper"){
            return "Win";
        }
    }
    return "Draw";
}


function game(){

    let score = [0, 0];

    for (let i=0; i<5; i++){
        let playerSelection = prompt("What's your play?");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        let playerSelection_formatted = capitalizeFirstLetter(playerSelection.toLowerCase());
        let text ='';
        if (result == "Win"){
            score[0]++;
            text = (`You Win! ${playerSelection_formatted} beats ${computerSelection}!`);
        }

        else if (result == "Lose"){
            score[1]++;
            text = (`You Lose! ${computerSelection} beats ${playerSelection_formatted}!`);
        }

        else{
            text = (`Draw! Play again!`);
            i--;
        }

        console.log(text);
        console.log(`Score is ${score[0]} - ${score[1]}`);
    
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}