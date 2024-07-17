let gamSeq=[];
let userSeq=[];
let btns=["btn1","btn2","btn3","btn4"];
let started=false;
let level=0;
let highScore=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started:");
        started=true;
        levelUp();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIndex=Math.floor(Math.random()*4);
    let randColor=btns[randIndex];
    let randbtn=document.querySelector(`.${randColor}`);
    gamSeq.push(randColor);
    btnFlash(randbtn);
}
function checkAns(index){
    let ind=index;
    if(userSeq[ind]==gamSeq[ind]){
        if(userSeq.length==gamSeq.length){
            setTimeout(levelUp,500);
        }
    }
    else{
        highScore=Math.max(highScore,level-1);
        h2.innerHTML=`Game over! Your score is <b>${level-1}</b><br><b>your highest score is ${highScore}</b><br>Enter any key to start again!`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"; 
        },100);
        reset();
    }
}
function btnPress(){
    let btn=this;
    btnFlash(btn);
    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".div");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    gamSeq=[];
    userSeq=[];
    started=false;
    level=0;
}