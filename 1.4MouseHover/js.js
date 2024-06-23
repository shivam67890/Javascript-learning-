const clickme=document.getElementById(`clickme`);
// // Assuming 'clickme' is a reference to an HTML element
// clickme.style.color = 'red';
// clickme.style.fontSize = '20px';
// clickme.style.backgroundColor = 'lightblue';
// // Add more CSS properties as needed


// method for writing css in JS
const styles={
    backgroundColor:`aqua`,
    fontSize:`4.5rem`,
    height:`300px`,
    width:`300px`,
    fontWeight:`bold`,
    display:`flex`,
    alignItems: 'center',
    textAlign: 'center',
    cursor:`pointer`
};
for(let style in styles){
    clickme.style[style]=styles[style];
}


// mouse Event
/* eventListener : events like -click,mouseover,mouseout 
                     .addEventListener(event,callback);*/
function changecolor(event){
    event.target.style.backgroundColor='tomato';
    event.target.textContent= `u dumbo 😭`;
}
clickme.addEventListener(`click`,changecolor);

clickme.addEventListener(`mouseover`,event =>{
    event.target.textContent=`hii noob 😁`
    event.target.style.backgroundColor='yellow';
});
clickme.addEventListener(`mouseout`,(event) =>{
    event.target.style.backgroundColor='aqua';
    event.target.textContent= `click me 🫡`;
});
