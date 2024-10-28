//variables
let userScore= 0;
let compScore= 0;

const choices=document.querySelectorAll(".choice");

//code for announcement on screen
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

//making fun for generate comp choice
const genCompChoice = ()=>{
      const options=["rock","paper","scissors"];
      const randIdx=Math.floor(Math.random()*3);
      return options[randIdx];
}
//making function for Draw condition
const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Draw Play Again";
    msg.style.backgroundColor="#081b31";
};
//fun for showing user win or not
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText =   userScore;
        msg.innerText=`you win  Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you lose ${compChoice} beats  Your${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

//making function for comp choices
const playGame= (userChoice)=>{
         console.log("user choice =", userChoice);
         //generate comp choice
         const compChoice=genCompChoice();
         console.log("comp choice=",compChoice);

         //fighting between  user and comp
         if(userChoice===compChoice){
            //drawGame
            drawGame();
         }
         else{
            let userWin=true;
            if(userChoice==="rock"){
                //comp choice will be paper or scissors and cannot be rock bcz if rock then it must execute if statement and game was draw..
                userWin=compChoice==="paper" ?false:true;
            }
            else if(userChoice==="paper"){
                userWin=compChoice==="scissors" ? false : true;
            }
            else{
                //rock,paper
                userWin=compChoice==="rock" ? false : true;
            }
            showWinner(userWin,userChoice,compChoice);
         }
};

//user choices
choices. forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);

});
});
