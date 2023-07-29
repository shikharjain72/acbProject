const fs = require('fs');
let path = require('path');
const fileName='humanDetails.json';


let filePath = path.join(__dirname,'Data',fileName);

fs.readFile(
    filePath,
    {
        encoding:'utf-8'
    },
    (err,data)=>{
        if(err) throw new Error("Nahi Likh paaya");
        console.log(data)
    }
)