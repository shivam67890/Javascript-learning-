const newele = document.createElement("div");
document.body.appendChild(newele);
newele.id = "hii";
newele.textContent = "😁";
newele.style.width = "200px";
newele.style.height = "200px";
newele.style.backgroundColor= "lightblue";
newele.style.fontSize = "3.5rem";
newele.style.textAlign   = "center";
newele.style.justifyContent = "center";
newele.style.alignItems = "center";
newele.style.position = "relative";
newele.style.display = "flex";

const emoz=document.getElementById(`hii`);

const moveob=20;
let x=0;
let y=0;

document.addEventListener(`keydown`,event =>{
    emoz.textContent='let`s go🫡';
    emoz.style.backgroundColor=`tomato`;
    // document.addEventListener(`keydown`,event =>{
        if(event.key.startsWith("Arrow")){
            switch(event.key){
                case "ArrowUp":
                    y-=moveob;
                    break;
                    case "ArrowDown":
                        y+=moveob;
                        break;
                        case "ArrowLeft":
                            x-=moveob;
                            break;
                            case "ArrowRight":
                                x+= moveob;
                                break; 
                            }
                            emoz.style.top=`${y}px`;
                            emoz.style.left=`${x}px`;
                        }
                    });
document.addEventListener(`keyup`,event =>{
    emoz.textContent='😁';
    emoz.style.backgroundColor=`lightblue`;
});