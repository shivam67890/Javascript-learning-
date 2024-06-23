function times(){
    const date= new Date();
    let hour=date.getHours().toString().padStart(2,0);//In string there is pad start method which allow to put 0 before any number .
    let minute=date.getMinutes().toString().padStart(2,0);
    let second=date.getSeconds().toString().padStart(2,0);
    document.getElementById("clock").textContent=`${hour}:${minute}:${second}`;
}
// times();
setInterval(times,1000);//-is used to run a function continuosly after 1 sec: