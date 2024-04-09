const inputnum= document.getElementById("for");
const  celsuis= document.getElementById("forcelsuis");
const  fahrenheit= document.getElementById("forfahrenheit");
const input= document.getElementById("giveinput");
let user;


function convert(){
    if(celsuis.checked){
        user=Number(inputnum.value);
        user=(user*9/5)+32;
        input.textContent=user + `°F`;
    } 
    else if(fahrenheit.checked){
        user=Number(inputnum.value);
        user=(user-32)*(5/9);
        input.textContent=user + `°C`;
    } 
    else{
        input.textContent=` select a unit`;
    }
}
