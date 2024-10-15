let gameSeq=[];
let userSeq=[];
let gameStart=false;
let gamelevel=0;
let btnColor=["green","yellow","purple","blue"]
let h3=document.querySelector('h3')
document.addEventListener("keypress",()=>{
    if(gameStart==false){
        console.log("game started.");
        gameStart=true;
        lavelup();
    }
    
});
function btnflase(btn){
   btn.classList.add("flasbtn");
   setTimeout(()=>{
    btn.classList.remove("flasbtn");
   },200);
}
function userflase(btn){
    btn.classList.add("userflasbtn");
    setTimeout(()=>{
     btn.classList.remove("userflasbtn");
    },200);
 }
function lavelup(){
    userSeq=[];
    gamelevel++;
    h3.innerText=`Level ${gamelevel}`;
    let rendomId=Math.floor(Math.random()*4);
    let rendomeColor=btnColor[rendomId];
    gameSeq.push(rendomeColor);
    console.log(gameSeq);
    
    let rendomebtn=document.querySelector(`.${rendomeColor}`);
    btnflase(rendomebtn);
}
function chackColor(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(lavelup, 1000);
        }
        
    }else{
        h3.innerHTML=`Game Over! Your scor was <b>${gamelevel}</B><br> Press any key to start the game`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector('body').style.backgroundColor="white"
        },100);
        reset();
        
    }
    
}
function btnPress(){
let btn=this;
userflase(btn);
userColor=btn.getAttribute("id");
console.log(userColor);
userSeq.push(userColor);
chackColor(userSeq.length-1);

    
}
let allbtn=document.querySelectorAll('.btn');
for(btns of allbtn){
    btns.addEventListener("click",btnPress);
}
function reset(){
    gameSeq=[];
    userSeq=[];
    gamelevel=0;
    gameStart=false;
}