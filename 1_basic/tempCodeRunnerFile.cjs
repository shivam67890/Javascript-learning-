const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'a2.txt');

fs.readFile("a2.txt", "utf-8", function (err, data) {
    console.log(data);//3
})
console.log("hi there");//1
let a = 0;
for (let i = 0; i < 1000000; i++) {//take very lonnger 
    a++;
}
console.log("hi there 2");//2
