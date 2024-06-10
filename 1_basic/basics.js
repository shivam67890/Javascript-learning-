// let username;
// document.getElementById("mysubmit").onclick=function(){
//   username=document.getElementById("my_text").value;
//   document.getElementById("myH1").textContent=`hello ${username}`;
// }



// let age=window.prompt("tell your age mff");
// age=Number(age); //used to convert string into number.
// age+=1;
// console.log(age);




// // to print circumference of circle.
// const pi=3.14;
// let radius;
// let circumference;

// document.getElementById("mysubmit").onclick=function(){
//   radius=document.getElementById("my_text").value;
//   radius=Number(radius);
//   circumference=2*pi*radius;
//   document.getElementById("myH3").textContent="This is cicumference of circle="+circumference+" cm";
// }


// const min=50;
// const max=100;
// let randomnum=Math.floor(Math.random()*(0-5))+3;// generate random no. b/w 1 to 6 
// console.log(randomnum);// *is used for max value .and  
// // + just increase the no (can be used as min value.)




// //code for geting username through slicing 
// const email="shivam@gmail.com";
// const username=email.slice(0,email.indexOf("@"));
// const extension=email.slice(email.indexOf("@")+1);
// console.log(username);
// console.log(extension);





// //guess the no:
// let a=50;
// let b=100;
// let randm=Math.floor(Math.random()*(b-a+1)+a);
// console.log(randm);

// let guess;
// let count=0;
// let running=true;

// while(running){
//     guess=window.prompt(`guess the number between ${a} - ${b} :`);
//     guess=Number(guess);
//     count++;
//     if(guess<randm){
//         window.alert(`you guess is less than expected`);
//     }
//     else if(guess>randm){
//         window.alert(`you guess is more than expected`);   
//     }
//     else{
//         window.alert(`you guess is correct & it took you ${count} attempt.`);   
//         running =false;
//     }
// }



// // spread method .
// let number=[1,2,3,4,5];
// let maximum=Math.max(...number);//(...)are used for spreading an array or string .
// console.log(maximum);

// let fruits=['apple','banana','mango'];
// let names=['shivma','ayusb','kmmm'];
// let sprd=[...fruits,...names];//we always use []in js for strings.
// console.log(sprd);



// //rest parameter:
// function average(...numbers){
//     let result =0;
//     for(let sum of numbers){
//         result+=sum;
//     }
//     return result/numbers.length;//remember numbers.length
// }
// let avg=average(2,4,6);
// console.log(avg);


// function makingsent(...input){
//     return input.join("-"); //.join is imp
// }
// let add=makingsent('shivam','is','a','good','boy');
// console.log(add);







// // callback
// function abc(callBack){
//     console.log(`hello`);
//     callBack();
// }
// function callBack(){
//     console.'log'(`wait`);
// }
// abc(callBack);


// // for each()--it changes the origional no.
// let abc=[1,2,3,4,5];
// abc.forEach(square);
// function square(ele){
//     console.log(Math.pow(ele,2));
// }
// // output: 1 4 9 16 25 



// // map method
// let abc = [1, 2, 3, 4, 5];
// let xyz = abc.map(square);
// function square(ele) {
//     return Math.pow(ele, 3);
// }
// console.log(xyz);
// //In summary, forEach is used for iterating over an array and performing an action for each element,
// // while map is used for iterating over an array, transforming each element, and returning a new array
// // with the transformed elements




// // filter method
// let abc=[1,2,3,4,5,6];
// let xyz=abc.filter(evenNum);
// console.log(xyz)
// function evenNum(ele){
//     return ele%2===0;
// }



// //reduce()
// let abc=[1,2,3,4];//line 1
// let xyz=abc.reduce(sum);
// console.log(`$${xyz.toFixed(2)}`);// Remeber toFixed(x) is used for decimal places
// function sum(ele,secondEle){
//     return ele+secondEle;  //this wrk as a=a+b and it repeat in loop till abc (line 1) is completed..
// }



// // arrow function
// let abc=(name)=>{
//     console.log(`hello there ${name}`);
// }

// abc("yoyo");

// setTimeout(()=>console.log(`hello there`),1000);

// let number=[1,2,3,4,5];
// const square=number.map((ele)=>Math.pow(ele,2));
// console.log(square);


// // objects
// const boy1={
//     car:"car1",
//     bike:"bike1",
//     funcname:()=>{console.log("haah boy1")},
// }
// console.log(boy1.car);
// console.log(boy1.funcname());
// boy1.funcname()



// (THIS) is used in objects
// const boy1={
//     car:"car1",
//     bike:"bike1",
//     funcname:()=>{console.log(`haah boy1 ${this.car}`)},//cannot use (this) in =>(arrow);
//     funcname:function(){console.log(`haah boy1 ${this.car}`)},// ✅✅
// }   

// boy1.funcname();



// // Constructor : special method for defining properties and method in objects..
// function boy1(car ,bike ,house){
//     this.cars=car,
//     this.bikes=bike,
//     this.houses=house,
//     this.drive=function(){console.log(`lolzz ${this.houses}`)};
// }
// const first = new boy1("ferrari" ,"bmw" ,999);
// first.drive();
// console.log(first.bikes);



// // classes: cleaner and better way of objects:
// class product{
//     constructor(name,price){
//         this.name=name;
//         this.price=price;
//     }
//     display(){
//         console.log(`product name - ${this.name} and its price : ${this.price}`);
//     }
// }
// const product1= new product("bmw",6898767);
// product1.display();


// //static:it is property or method which is of class not objects
// class user {
//     static usercount = 0;
//     constructor(username, age) {
//         this.username = username;
//         this.age = age;
//         user.usercount++;
//     }
//     sayhello(){
//     console.log(`this is the name of user - ${this.username}`);
//     }
// }
// d
// const user1 = new user("shivam", 99);
// const user2 = new user("ayush", 69);
// user1.sayhello();
// console.log(user1); // Output: 1
