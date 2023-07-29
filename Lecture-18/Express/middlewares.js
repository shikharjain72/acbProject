const express =  require('express');
const app = express();
const PORT=4444;

app.listen(PORT,()=>{
    console.log('http://localhost',PORT);
});

app.use((req,res,next)=>{
    console.log("Inside middleware - 1");
    req.col=1;
    next();
});

app.use((req,res,next)=>{
    console.log("Inside middleware - 2");
    req.col++;
    next();
});

app.use((req,res,next)=>{
    console.log("Awaz aa rahi hain?")
    console.log(req);
    console.log(res);
    next();
})

app.get("/listen",(req,res)=>{
    console.log('Haan aa rahi hain');
    res.send('Haan aa rahi hain');
}
)

app.get("/",(req,res)=>{
    res.send("Hello World");
})

//Params ke through data dena server ko
app.get("/Hello/:name",(req,res)=>{
    res.send(`Hello ${req.params.name}`)
})

//Query Parameters
app.get("/bye",(req,res)=>{
    // console.log(req.params);
    req.query.age?
    res.send(`Bye ${req.query.name} ${req.query.age}`):
    res.send(`Bye ${req.query.name}`);
})

app.use(express.urlencoded({extended:true}));
app.post("/postRequest",(req,res)=>{
    const {contact, email} = req.body;
    res.send(`Post Success ${contact} ${email}`)
})