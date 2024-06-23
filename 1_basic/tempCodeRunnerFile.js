
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



