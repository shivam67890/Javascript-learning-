const myimg=document.getElementById(`myimg`);
const mybtn=document.getElementById(`mybtn`);

mybtn.addEventListener(`click`,event =>{

    if(myimg.style.visibility===`hidden`){
        myimg.style.visibility=`visible`;
        mybtn.textContent=`hide`;
    }
    else{
        myimg.style.visibility=`hidden`;
        mybtn.textContent=`show`;
    }
});