// async and sync function --
// https:www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript

const fs = require("fs");
fs.readFile("a2.txt", "utf-8", function (err, data) {
    console.log(data);//3
})
console.log("hi there");//1
let a = 0;
for (let i = 0; i < 1000000; i++) {//take very lonnger 
    a++;
}
console.log("hi there 2");//2





// Define three example functions
// Define three example functions, but one of them contains asynchronous code
function first() {
    console.log(1)
}

function second() {
    setTimeout(() => {//settimeout is another function  which make the second function wait in queue and go to next one and 
        console.log(2)//this will run after whole code when queue will check any remaining  function by starting from start..
    }, 0)
}
function third() {
    console.log(3);
}
for (let i = 0; i < 1000000; i++) {//take very lonnger 
    
}
function fourth() {
    console.log(4)
}
// Execute the functions
first()
second()
third()
console.log(`hii`);
fourth()





// Define three functions
function first() {
    console.log(1)
  }
  
  function second(callback) {
    setTimeout(() => {
      console.log(2)
      // Execute the callback function;used because we want second to work parallel with 3.
      callback()//settimeout sent second function to queue but callback call second function just after timeout and the it move to third..
    }, 0)
  }
  function third() {
    console.log(3)
  }
  first()
second(third)



// A function
function fn() {
    console.log('Just a function')
  }
  // A function that takes another function as an argument
  function higherOrderFunction(abc) {
    // When you call a function that is passed as an argument, it is referred to as a callback
    abc()
  } 
  // Passing a function
  higherOrderFunction(fn)
  fn()
/* in this firstly it prnt 1 and then second(in which 3Function is saved) is sent to queue because of setTimeout and then fn() is printed
then it restart and firstly print 2 and the 3*/





//promise
// Initialize a promise
const promise = new Promise((resolve, reject) => {
    resolve('we did it')
})
// A promise can have three possible states: pending, fulfilled, and rejected.
// After being successfully fulfilled, the value goes from undefined to being populated with data.
promise.then((response) => {
    console.log(response)
  })




//   This code creates a promise that resolves with the message 'Resolving an asynchronous request!' 
//   after a 3-second delay. Once the promise resolves, the first then block appends ' And chaining!' to the 
//   resolved message and logs the result to the console.

//   The chaining of .then blocks allows for sequential processing of the resolved value. 
//   In this case, the second then block receives the modified message from the first then block and 
//   logs it to the console. This demonstrates how promises can be chained to handle asynchronous operations 
//   and their results in a sequential manner.
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolving an asynchronous request!'), 3000)
  })
  promise.then((response) => {
    console.log(response)
  })
  promise 
  .then((firstResponse) => {
    // Return a new value for the next then
    return firstResponse + ' And chaining!';
  })
  .then((secondResponse) => {
    console.log(secondResponse)
  })



//json-jsObjectNotation-https://www.digitalocean.com/community/tutorials/how-to-work-with-json-in-javascript
// Storing data
// Generating data structures from user input
// Transferring data from server to client, client to server, and server to server
// Configuring and verifying data




  function getUsers(onSuccess) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Handle resolve and reject in the asynchronous API
        if (onSuccess) {
          resolve([
            {id: 1, name: 'Jerry'},
            {id: 2, name: 'Elaine'},
            {id: 3, name: 'George'},
          ])
        } else {
          reject('Failed to fetch data!')
        }
      }, 1000)
    })
  }
  // Run the getUsers function with the false flag to trigger an error
getUsers(false)
.then((response) => {
  console.log(response)
})
.catch((error) => {
  console.error(error)
})


// The JSON.stringify() function converts an object to a JSON string.var obj = {"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}
var obj = {"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}
var s = JSON.stringify(obj)
console.log(s)
//to do opposite use  JSON.parse() 
var o=JSON.parse(s)
console.log(o)


// Fetch a user from the GitHub API
fetch('https://api.github.com/users/octocat')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })//This is the data requested from https://api.github.com/users/octocat, rendered in JSON format.



//we can use async function with new method(it make code simpler then promise one)-
async function getUser() {
  return {};
}
console.log(getUser())
getUser().then((response) => console.log(response))

// like fetching data become easy and more readable with async and await
// Handle fetch with async/await
async function getUser() {
  try{
  const response = await fetch('https://api.github.com/users/octocat')
  const data = await response.json()

  console.log(data)}
  catch (error){
    console.log("error")
  }
}
// Execute async function
getUser()
