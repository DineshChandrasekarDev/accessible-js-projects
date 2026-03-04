const submitBtn=document.getElementById("submitBtn");
const resetBtn=document.getElementById("resetBtn");
const guessInput=document.getElementById("guess-input");
const message=document.getElementById("message");
const attemptsText=document.getElementById("attempts");
let randomnumber;
let attempts;
const maxattempts=5;
function startgame(){
    randomnumber=Math.floor(Math.random()*100)+1;
    attempts=0;
    submitBtn.disabled=false;
    guessInput.disabled=false;
    message.textContent="";
    attemptsText.textContent=`Attempts left : ${maxattempts}`;
    guessInput.focus();
}
function endgame(){
submitBtn.disabled=true;
guessInput.disabled=true;
}

function checkguess()
{
    const guess=Number(guessInput.value);
    if(!guess || guess<1 || guess>100){
        message.textContent="Please enter a valid input between 1 and 100";
        return;
    }
    attempts++;
    if(guess==randomnumber){
        message.textContent=`Correct! The number was ${randomnumber}`;
        message.style.color="#00ffcc";
        endgame();
    }
    else if (guess>randomnumber)
    {
        message.textContent="Too High! Try Again";

    }
    else if(guess<randomnumber){
        message.textContent="Too Low! Try Again";
    }
    attemptsText.textContent=`Attempts Left:${maxattempts-attempts}`;
    if(attempts>=maxattempts && guess!=randomnumber)
    {
        message.textContent=`Game Over! The number was ${randomnumber}`;
        message.style.color="#b11010";
        endgame();
    }
    guessInput.value="";
    guessInput.focus();
}
submitBtn.addEventListener("click",checkguess);
resetBtn.addEventListener("click",startgame);
startgame();