// Read File by passing to require function
const user = require('./_db/test.json');

var jcontent = {
    "name": "John",
    "age": 32
}



console.log("Why " + user.name);

var obj = JSON.parse(user);


/*
console.log(user.address);
*/


