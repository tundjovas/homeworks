const http = require('http');
const file = require('./file');
const path = require('path');


const arrayData = [
    'first',
    'second',
    3,
    4,
    'apple',
    'cat',
    'dog'
];

const objData = {
    "firstName" : "Simona",
    "lastName" : "Tundjova",
    "city" : "Shtip",
    "contry" : "Macedonia",
    "street" : "Street",
    "streetNo" : "10"
};

const objPath = path.join('object.txt');
const arrayPath = path.join('array.txt');

const writeToFile = async () => {
    await file.writeToFile(JSON.stringify(arrayData), arrayPath);
    await file.writeToFile(JSON.stringify(objData), objPath);
}

writeToFile().then(() => { console.log("Files are written")}).catch(err => console.log(err));

const readFromFile = async () => {
    var arr = await file.readFromFile(arrayPath);
    var obj = await file.readFromFile(objPath);

    console.log(arr);
    console.log(obj);
}

readFromFile().then(() => {
    console.log("Files read")
}).catch(err => console.log(err));
//create a server object:
http.createServer().listen(8080);