// Rock, paper and scissors generator

const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoice = document.querySelectorAll("button")

let userChoice = ""
let computerChoice = ""
let getResult =""

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    generateResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoice.length) + 1
    if(randomNumber ==1){
        computerChoice = "rock"
    } else if(randomNumber == 2){
        computerChoice = "paper"
    } else if(randomNumber == 3){
        computerChoice = "scissor"
    } else{
        computerChoice = "randomNumber"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function generateResult(){
    if(computerChoice == userChoice){
        getResult = "It's a draw!"
    } else if(computerChoice == "rock" && userChoice == "paper"){
        getResult = "you win!!!"
    } else if(computerChoice == "rock" && userChoice == "scissor"){
        getResult = "you lost"
    } else if(computerChoice == "paper" && userChoice == "scissor"){
        getResult = "you win!!!"
    } else if(computerChoice == "paper" && userChoice == "rock"){
        getResult = "you lost"
    } else if(computerChoice == "scissor" && userChoice == "rock"){
        getResult = "you win!!!"
    } else if(computerChoice == "scissor" && userChoice == "paper"){
        getResult = "you lost"
    }
    resultDisplay.innerHTML = getResult  
}