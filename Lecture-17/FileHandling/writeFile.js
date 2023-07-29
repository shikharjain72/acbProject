const fs = require('fs');
let path = require('path');
const fileName='humanDetails.json';
let humans = [
    {name: 'Vaibhav',age:23,hobby:'Singing'},
    {name: 'Kartikay',age:27,hobby:'Dancing'},
    {name: 'Nitish',age:23,hobby:'Acting'},
    {name: 'Farhan Akhtar',age:23,hobby:'Acting'},
]

let filePath = path.join(__dirname,'Data',fileName);

fs.writeFile(
    filePath,
    JSON.stringify(humans),
    {
        encoding:'utf-8',
        flag:'w'
    },
    (err) => {
        if(err) throw new(err)
        console.log("File write hogayi!")
    }
)