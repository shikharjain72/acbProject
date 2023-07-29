// const fs = require('fs');
// const path = require('path');
// const FileA ='FileA.txt';
// const FileB ='FileB.txt';

// function getData(fileName){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(
//             fileName,
//             {
//                 encoding:'utf-8'
//             },
//             (err,data)=>{
//                 if(err) return reject(err);
                
//                 // let arr=data.split("\n");
//                 // console.log(arr);
//                 resolve(data);
//             }
//         )
//     })
// }
// // console.log(getData(FileA));
// // let arr1 = getData(FileA).then((data) => console.log(data)); 
// // let arr2 = getData(FileB).then((data) => console.log(data));
// // console.log(arr1);
// // console.log(arr2);
// console.log("HERE")
// let arr3 = getData(FileA).then((data)=> {
//     let arr = data.split('\r\n');
//     // console.log(arr);
//     return arr;
// })
// console.log(arr3);

const fs = require('fs');
const path = require('path');

function getData(fileName) {
    return new Promise((resolve,reject)=>{
        let filePath = path.join(__dirname, fileName);
        fs.readFile(
            filePath,
            {
                encoding:'utf-8'
            },
            (err,data)=>{  // can we apply promise here?
                if(err) return reject(err)
                resolve(data);
            }
        )
    }) 
}

function sortArray(arr){
    // console.log(arr);
    arr.sort((a,b)=>{
        return b-a;
    });
    console.log(arr);
    
    fs.writeFile(
        'result.json',
        JSON.stringify(arr),
        (err)=>{
            if(err) console.log(err)
            console.log("Sab ho gaya");
        }
    )
}

let result = [];

getData('FileA.txt')
    .then((data)=>{
        // console.log(data);
        let arr = data.split('\n');
        console.log(arr)
        getData('FileB.txt')
            .then((data2)=>{
                let arr2 = data2.split('\n');
                console.log(arr2);
                result = [...arr,...arr2];

                sortArray(result);
            })
    })
