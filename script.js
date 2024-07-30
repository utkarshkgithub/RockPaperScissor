let rand,UserChoice,ComputerChoice;
function getComputerChoice(){
    rand=Math.floor(3*Math.random())+1;
}
console.log(rand);
if(rand==1){
    ComputerChoice="ROCK";
}
else if(rand==2){
    ComputerChoice="PAPER";
}
else{
    ComputerChoice="SCISSOR";
}
function getUserChoice(){
    UserChoice=prompt("Enter your Pick: \nRock Paper Scissor");
    UserChoice=UserChoice.toUpperCase();
}
let userscore=0,compscore=0;
function playround(){
    let outcome=0;
    if(UserChoice==ComputerChoice){
        console.log(`This is a tie!`);
        return;
    }
    else{
        if(UserChoice=="ROCK" && ComputerChoice=="SCISSOR") outcome=1;
        if(UserChoice=="PAPER" && ComputerChoice=="ROCK") outcome=1;
        if(UserChoice=="SCISSOR" && ComputerChoice=="PAPER") outcome=1;
    }
    if(outcome==1){
        console.log("You Won! "+UserChoice +" beats "+ComputerChoice);
        userscore++;
    }
    else {
        console.log("You lost! "+ComputerChoice +" beats "+UserChoice);
        compscore++;
    }
}
while(userscore<5 || compscore <5){
    getComputerChoice();
    getUserChoice();
    playround();
}
if(userscore==5) console.log("Yay You won it finally!!!!");
else console.log("Opps you lost!! better luck next time");