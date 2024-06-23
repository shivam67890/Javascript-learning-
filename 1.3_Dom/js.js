// // dom : document object model - represent the page we see in a web browser and provide a api to interact 
// // with it & structure all element in tree like structure.. 
// const username="shivam";
// const changes=document.getElementById(`changeit`);
// if(username==""){
//     changes.textContent +=` guest`;
// }
// else{
//     changes.textContent +=` shivam`;
// }



// // element selector :method used to manupulate html and css
// // document.querySelector()  only select first element 
// // document.querySelectorAll() select all

// // by class
// const fruit=document.getElementsByClassName(`fruits`);
// // fruit[1].style.backgroundColor="yellow";
// for(let fru of fruit){
//     fru.style.backgroundColor="yellow";
// }



// // adding and changing html
// const newele=document.createElement(`h1`);
// newele.textContent ="new Element";
// newele.id="dom1";
// newele.style.backgroundColor="red"
// newele.style.textAlign='center'
// // document.getElementById("box1").append(newele);
// document.getElementById("box1").prepend(newele);

// const box2=document.getElementById(`box2`);
// // document.body.insertBefore(newele,box2)
// // box2.prepend(newele);

// // const boxes=document.querySelectorAll(`.box`);
// // document.body.insertBefore(newele,boxes[1]);

// // remove html
// // document.getElementById("box1").removeChild(newele);



// // // adding and changing html in ol 
// const newele=document.createElement(`li`);
// newele.textContent=`tomato`;
// newele.style.backgroundColor=`grey`
// // document.getElementById(`fruits`).prepend(newele);
// // document.getElementById(`fruits`).insertBefore(newele,apple);
// const boxes=document.querySelectorAll(`#fruits li`);
// document.getElementById(`fruits`).insertBefore(newele,boxes[2]); 