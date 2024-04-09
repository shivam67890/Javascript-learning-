const mycheckbox=document.getElementById(`mycheckbox`);
const visa=document.getElementById(`visa`);
const MasterCard=document.getElementById(`MasterCard`);
const PayPal=document.getElementById(`PayPal`);
const submitbtn=document.getElementById(`submit`);
const yoursubscribed=document.getElementById(`yoursubscribed`);
const paymentresult=document.getElementById(`paymentresult`);

submitbtn.onclick =function(){
  if(mycheckbox.checked){
    yoursubscribed.textContent=`you are subscribed`;
  }
  else{
  yoursubscribed.textContent=`you are not subscribed`;
  }
  if (visa.checked){
    paymentresult.textContent=`you are paying with visa.`;
  }
  else if (MasterCard.checked){
    paymentresult.textContent=`you are paying with master card.`;
  }
  else if(PayPal.checked){
    paymentresult.textContent=`you are paying with paypal.`;
  }
  else{
    paymentresult.textContent=`you have to select one card .`;
  }

}