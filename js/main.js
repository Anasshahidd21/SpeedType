let timeLeft = 3;
let score = 0;


const message = document.querySelector('h4');
const input = document.querySelector('#word-input');
const word = document.getElementById("current-word");
const time = document.getElementById("time");
const scores = document.getElementById("score");
const wordList = ["intend","wry","risk","precede","coil","quarter","match","consist","fresh","mind","prepare","overt"];


var seconds = document.getElementById('seconds');
var button = document.querySelector('button');
var isPlaying;

timeLeft = 3;
score= 0;
seconds.innerHTML = timeLeft;


function restart(){
    message.innerHTML = "";
    timeLeft = 4;
    score = 0;
    scores.innerHTML = score;
    
}


function init(){
    
    time.innerHTML = "3";
    input.addEventListener("input",gameCheck);
    wordChange(wordList);

    if(timeLeft!=0){
    setInterval(countDown, 1000);
    setInterval(gameCheck, 5);
    }

    button.removeEventListener("click", init);
}

function getWordLength(){
    return wordList.length;
}

function randomizeWord(){
    return Math.floor(Math.random()*getWordLength());
}

function wordChange(){
    word.innerHTML = wordList[randomizeWord()];
}

function gameCheck(event){
    if(word.innerHTML=== input.value && timeLeft>0){
        isPlaying = true;
    }
    else{
        isPlaying = false;
    }
}

function countDown(){
    if(!isPlaying && timeLeft>0){
        timeLeft--;
        time.innerHTML = timeLeft;
    }

    else if(timeLeft<=0){
      
        isPlaying = false;
        message.innerHTML = "Game Over!!";
        button.addEventListener("click", restart);
        

    }

    else{
        input.value="";
        wordChange(wordList);
        timeLeft = 3;
        score++;

        scores.innerHTML=score;
        time.innerHTML = timeLeft;
    }
}

button.addEventListener("click", init);

//init();