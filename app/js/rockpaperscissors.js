'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissor'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
function getPlayerMove(move) {
   var move;
    if move === 'rock'
        return 'Rock';
    if move === 'paper'
        return 'Paper';
    if move === 'scissor'
        return 'Scissor';
    if move === null
        return getInput;
    return;
}
function getComputerMove(move) {
    var move;
    if move === 'rock'
        return 'Rock';
    if move === 'paper'
        return 'Paper';
    if move === 'scissor'
        return 'Scissor';
    if move === null
        return randomPlay;
    return;
}
function getWinner(playerMove,computerMove) {
var winner;
    values of playerMove and computerMove.
    var compare = function(playerMove,computerMove){
        if (playerMove===computerMove){
            return "tie";
        }
        if (playerMove==="Rock"){
            if (computerMove==="Scissor"){
                return "Rock wins";
            }else {
                return "Paper wins";
            }
        }
        if (playerMove==="Scissor"){
            if (computerMove==="Paper"){
                return "Scissor wins";
            }else {
                return "Rock wins";
            }
        }
        if (playerMove==="Paper"){
            if (computerMove==="Rock"){
                return "Paper wins";
            }else {
                return "Scissor wins";
            }
        }
    }
    return winner;
}
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
if playerWins === 5
    return "Player has won 5 times";
if computerWins === 5
    return "Computer has won 5 times";
    return [playerWins, computerWins];
}
