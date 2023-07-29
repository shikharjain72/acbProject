const fs = require('fs');
const path =  require('path');

const filePath = path.join(__dirname,'../data','todos.json');
console.log(filePath);
class MyDB{
    // constructor(){
        
    // }

    storeInDB(newTask){
        return new Promise((resolve,reject) => {
            fs.readFile(
                filePath,{ encoding: 'utf-8'},
                (err, data) => {
                    if(err) return reject(err);
                    let parseData = JSON.parse(data); // json string to Javascript Object
                    parseData.push(newTask);

                    fs.writeFile(
                        filePath,
                        JSON.stringify(parseData),
                        (err) => {
                            if(err) return reject(err)
                            resolve(parseData);
                        }
                    );
                    resolve(data);
                }
            );
        })
    }

    getTodos(){
        return new Promise((resolve, reject) => {
            fs.readFile(filePath,{encoding:'utf-8'},
            (err, data) => {
                if(err) reject(err);
                resolve(JSON.parse(data));
            })
        })
    }
}


let obj1 = [
    {name:"Coding", id:1},
    {name:"Swimming", id:2},
]
console.log(JSON.stringify(obj1));

module.exports = MyDB;