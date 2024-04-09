const numb=document.getElementById("number");
const dec=document.getElementById("decrease");
const inc=document.getElementById("increase");
const res=document.getElementById("reset");
let count=0;

inc.onclick=function(){
  count++;
  numb.textContent=count;
}
dec.onclick=function(){
  count--;
  numb.textContent=count;
}
res.onclick=function(){
  count=0;
  numb.textContent=count;
}