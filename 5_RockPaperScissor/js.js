const rock=document.getElementById(`rock`);
const paper=document.getElementById(`paper`);
const scissor=document.getElementById(`scissor`);
const submit =document.getElementById(`submit`);
const result=document.getElementById(`result`);
const result2=document.getElementById(`hurray`);

submit.onclick =function(){
    if(rock.checked){
        let randm=Math.floor(Math.random()*(3));
        if(randm==1){
            result.textContent=`_Rock`;
            result2.textContent=(`tie`);
        }
        else if(randm==2){
            result.textContent=`_Paper`;
            result2.textContent=(`you lost`);
        }
        else{
            result.textContent=`_scissor`;
            result2.textContent=(`you won`);
        }
      }
      else if(paper.checked){
        let randm=Math.floor(Math.random()*(3));
        if(randm==1){
            result.textContent=`_Rock`;
            result2.textContent=(`you won`);
        }
        else if(randm==2){
            result.textContent=`_Paper`;
            result2.textContent=(`tie`);
        }
        else{
            result.textContent=`_scissor`;
            result2.textContent=(`you lost`);
        }
      }
      else if(scissor.checked){
        let randm=Math.floor(Math.random()*(3));
        if(randm==1){
            result.textContent=`_Rock`;
            result2.textContent=(`lost`);
        }
        else if(randm==2){
            result.textContent=`_Paper`;
            result2.textContent=(`you won`);
        }
        else{
            result.textContent=`_scissor`;
            result2.textContent=(`tie`);
        }
      }




}


