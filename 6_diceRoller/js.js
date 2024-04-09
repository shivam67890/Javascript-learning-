rolldice.onclick=function btndice(){
const Input=document.getElementById(`input`).value; //input should always be inside function. 
const result=document.getElementById(`result`);
const imgdice=document.getElementById(`diceImage`);

let value=[];
let imag=[];
for (let i=0;i<Input;i++){
    let rnd=Math.floor(Math.random()*6)+1;
    value.push(rnd);//push is used for adding ele in array.
    imag.push(`<img src="diceImages/${rnd}.png">`);//very imp LEARN IT
}
    result.textContent=`dice : ${value.join(', ')}`;
    imgdice.innerHTML=imag.join(' ');   
}

