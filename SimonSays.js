let gameSequence = [];
let userSequence = [];
let btns = ["red", "yellow" , "green" , "blue"];
let h2 = document.querySelector("h2");
let started = false ;
let level = 0 ;

document.addEventListener("keypress" , function() {
    if(started == false) {
    console.log("game started") ; 
        started = true;
     } 

     levelUp() ;
});
 
function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSequence = [] ;
    level++ ;
   h2.innerText = `Level ${level}`;
let randomIndex = Math.floor(Math.random() * 4) ;
let randomcolor = btns[randomIndex];
let randomBtn = document.querySelector(`.${randomcolor}`);
gameSequence.push(randomcolor);
console.log(gameSequence);
   gameFlash(randomBtn);
}

function matchSequence(index) {
     if(gameSequence[index] === userSequence[index]) {
        if(gameSequence.length == userSequence.length) {
            setTimeout(levelUp , 1000);
        }
     }
     else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "Red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "White";   
        }, 150);
        reset() ;
     }
}

function btnPress() {
    let btn = this;
    userFlash(btn) ;
     
    userColor = btn.getAttribute("id");
    userSequence.push(userColor);
   
    matchSequence(userSequence.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click" , btnPress);
}

function reset() {
    started = false ;
     gameSequence = [];
     userSequence = [];
     level = 0 ;
}
