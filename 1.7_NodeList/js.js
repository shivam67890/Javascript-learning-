/*Nodelist-static collection of html element by(id,class,element) can be created by using querryselectorAll()
simmiliar to array but does not have( map,filter,reduce ) but have forEach(); nodelist wont update to 
automatically reflect change . 
*/

const btn=document.querySelectorAll(`.mybtn`);

// btn.forEach(button =>{
//     button.style.backgroundColor=`green`;
//     button.textContent+=`⭐`;
// })

btn.forEach(button =>{
button.addEventListener(`click`,event =>{
    // event.target.style.backgroundColor=`tomato`;
    // event.target.textContent=`Ouch😣`;
    event.target.remove();
    // event.document.querySelectorAll(`.mybtn`);
});
});


btn.forEach(button =>{
button.addEventListener(`mouseover`,event =>{
    event.target.style.backgroundColor=`tomato`;
    // event.target.textContent=`Ouch😣`;
});
});
btn.forEach(button =>{
button.addEventListener(`mouseout`,event =>{
    event.target.style.backgroundColor=`black`;
    // event.target.style.color=`white`;
    // event.target.textContent=`button1`;
});
});


const newbtn=document.createElement(`button`);
newbtn.textContent=`button5`;

newbtn.classList=`mybtn`;
document.body.appendChild(newbtn);