let rand,UserChoice,ComputerChoice;
function getComputerChoice(){
    rand=Math.floor(3*Math.random())+1;
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
}
function UserChoiceUper(){
    UserChoice=UserChoice.toUpperCase();
}
let userscore=0,compscore=0;
function baseScore(){
    userscore=0;
    compscore=0;
}
function playround(){
    let outcome=0;
    let log=document.querySelector(".logs");
    let logoutput=document.createElement("div");
    if(UserChoice==ComputerChoice){
        console.log(`This is a tie!`);
        let output=`This is a tie!`;
        logoutput.textContent=output;
        log.insertBefore(logoutput,log.firstChild);
        return;
    }
    else{
        if(UserChoice=="ROCK" && ComputerChoice=="SCISSOR") outcome=1;
        if(UserChoice=="PAPER" && ComputerChoice=="ROCK") outcome=1;
        if(UserChoice=="SCISSOR" && ComputerChoice=="PAPER") outcome=1;
    }
    if(outcome==1){
        console.log("You Won! "+UserChoice +" beats "+ComputerChoice);
        let output=`You Won! ${UserChoice} beats ${ComputerChoice}`;
        logoutput.textContent=output;
        log.insertBefore(logoutput,log.firstChild);
        userscore++;
    }
    else {
        console.log("You lost! "+ComputerChoice +" beats "+UserChoice);
        let output=`You lost! ${ComputerChoice} beats  ${UserChoice}`;
        logoutput.textContent=output;
        log.insertBefore(logoutput,log.firstChild);
        compscore++;
    }
    if(userscore==5){console.log("Yay You won it finally!!!!");
        
    }
    if(compscore==5){console.log("Opps you lost!! better luck next time");
    }

}

const buttons=document.querySelectorAll(".player button");
let previousUserChoice,previousComputerChoice;
buttons.forEach((button)=>{button.addEventListener("click",()=>{
    console.log(button.textContent);
    UserChoice=button.textContent;
    getComputerChoice();
    UserChoiceUper();
    playround();

    let user=document.querySelector(".playerscorereal");
    let computer=document.querySelector(".computerscorereal");
    user.textContent=userscore;
    computer.textContent=compscore;
    
    const ComputerChoiceButton=document.querySelector(`.computer .${ComputerChoice.toLowerCase()} button`)
    highlight(button);
    highlight(ComputerChoiceButton);
    if(previousUserChoice!=undefined && previousUserChoice!=button) unhighlight(previousUserChoice);
    if(previousComputerChoice!=undefined && previousComputerChoice!=ComputerChoiceButton) unhighlight(previousComputerChoice);
    previousUserChoice=button;
    previousComputerChoice=ComputerChoiceButton;
    let log=document.querySelector(".logs");
    let logChildren = log.querySelectorAll('*');
    if(logChildren.length>3){
        logChildren[logChildren.length-1].remove();
    }

    if(userscore==5){
        window.alert("Congratulations! YOU WON !!");
        unhighlight(button);
        baseScore();
        removeall();
    }
    if(compscore==5){
        window.alert("Ooh NOO! YOU LOST IT!!");
        unhighlight(button);
        baseScore();
        removeall();
    }

})})

function highlight(button){
    button.style.cssText="color: blue; background: grey;";
}

function unhighlight(button){
    button.style.cssText="color: black; background: white;";
}

function removeall(){
    let log = document.querySelector(".logs");
    let logChildren = log.querySelectorAll('*');
    logChildren.forEach((child)=>{ child.remove(); })
}