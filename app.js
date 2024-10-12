let userscore=0;
let compscore=0;

let choices=document.querySelectorAll(".choice");
let msgdsp=document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getcompchoice=()=>{
    let pssbl=["rock","paper","scissors"];
    let randomindx=Math.random()*3;
    randomindx=Math.floor(randomindx);
    return pssbl[randomindx];
}

const draw=() =>{
    msgdsp.innerText="Game was Draw. Play Again";
    msgdsp.style.backgroundColor = "#081b31";
}

const showwinner=(status,userchoice,compchoice)=>{
    if(status){
        msgdsp.innerText=`You Won!. Your ${userchoice} beats ${compchoice}`;
        msgdsp.style.backgroundColor = "green";
        userscore++;
        userScorePara.innerText=userscore;
    }
    else{
        msgdsp.innerText=`You Lost.  ${compchoice} beats Your  ${userchoice}`;
        msgdsp.style.backgroundColor = "red";
        compscore++;
        compScorePara.innerText=compscore;
    }
}

const playgame = (userchoice)=>{
    const compchoice=getcompchoice();
    if(compchoice===userchoice){
        draw();
    }
    else{
            let userresult=true;
            if(userchoice==="rock")
            {
                userresult=compchoice==="paper"?false:true;
            }
            else if(userchoice==="paper"){
                userresult=compchoice==="scissors"?false:true;
            }
            else userresult=compchoice==="rock"?false:true;
            showwinner(userresult,userchoice,compchoice);
        }
}


choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        
        const userchoice=choice.getAttribute("id");
        
        playgame(userchoice);
    });
});