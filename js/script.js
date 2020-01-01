

let msg=document.querySelector(".message");
let msgHere=document.querySelector(".messageHere");
let btn=document.querySelector(".sbmBtn");
msgHere.innerHTML="";


btn.addEventListener("click", sendMessage);

function sendMessage(){
    let text=msg.value;
    if(msg.value===""){
        alert("please enter any text")
    }else{
        msgHere.innerHTML=text;

    }

}