const express = require('express');
const app = express();
const path = require('path')

app.use('/public',express.static(path.join(__dirname,'public')))

const checkAdmin = (req,res,next) => {
    console.log("first response function");
    if(req.query.admin === "true")
        next();
    else
        res.status(400).send("Not Admin")
}

app.use(checkAdmin);   //positioning of this app.use matters, here we want to check if user is admin before sending Response, therefore app.get(checkAdmin) is before sendRes

const sendRes = (req,res) => {
    res.status(200);
    res.send("there is still time to go back");
}

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/' , sendRes)

app.post('/',(req,res) => {
    console.log("body ->" , req.body );
    res.json(req.body)
})

app.listen(3000,() => console.log("listening at localhost:3000"));