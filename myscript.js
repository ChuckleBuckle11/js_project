
game();

function computerPlay(){
    var items = ["Rock", "Paper", "Scissors"];

    return items[Math.floor(Math.random()*items.length)];
}

function playRound(playerSelection, computerSelection){
    const player_input = playerSelection.toLowerCase();
    return res = result(formatInput(playerSelection), computerSelection)[0];
}



function formatInput(string){
    let process_string = string.toLowerCase();
    return process_string[0].toUpperCase() + process_string.slice(1);
}

function result(playerSelection,computerSelection){
    let res = [``, 0];
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        res[0] = `Draw!`;
        res[1] = -1;
        return res;
    }

    else if (playerSelection == "Rock"){
        if (computerSelection == "Paper"){
            res[0] = `You Lose! ${computerSelection} beats ` + 
                `${playerSelection}`;
            return res;
        }
        else if (computerSelection == "Scissors"){
            res[0] = `You Win! ${playerSelection} beats 
                ${computerSelection}}`;
            res[1] = 1;
            return res;
        }
    }

    else if (playerSelection == "Paper"){
        if (computerSelection == "Scissors"){
            res[0] = `You Lose! ${computerSelection} beats ` + 
                `${playerSelection}`;
            return res;
        }
        else if (computerSelection == "Rock"){
            res[0] = `You Win! ${playerSelection} beats 
                ${computerSelection}}`;
            res[1] = 1;
            return res;
        }
    }
    else if (playerSelection == "Scissors"){
        if (computerSelection == "Rock"){
            res[0] = `You Lose! ${computerSelection} beats ` + 
                `${playerSelection}`;
            return res;
        }
        else if (computerSelection == "Paper"){
            res[0] = `You Win! ${playerSelection} beats 
                ${computerSelection}}`;
            res[1] = 1;
            return res;
        }
    }
}

function game(){
    let i = 0;
    const score = [0,0];
    while (i < 5){
        let player_input = prompt(`What's your play (Rock, Paper, Scissors)?`);
        let res = result(formatInput(player_input), computerPlay());
        console.log(res[0]);
        // computer wins
        if (res[1] == 0){
            score[1]++;
        }
        else if (res[1] == 1){
            score[0]++;
        }

        else if(res[1] == -1){
            continue;
        }
        console.log(`The current score is ${score[0]} - ${score[1]} `)
        i++


    }

}