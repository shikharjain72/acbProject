const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT=4444;
const MyDB = require('./dataStore/js/script');

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());

let todos = [];

app.get('/gettask', async (req, res)=>{
    // res.send(todos);

    // MyDB.getTodos().then((data) => {
    //     console.log(data);
    //     res.send(data);
    // }).catch(err => {
    //     console.log(err);
    // })
    try{
        let data = await MyDB.getTodos();
        res.send(data);
    }catch(err){
        console.log(err);
    }
});

app.post('/addtask',(req,res)=>{
    todos.push(req.body.newTask);
    res.redirect('/gettask');
});

app.listen(PORT,() => {
    console.log("http://localhost:"+PORT);
})