const express = require('express');
// const mongoose = require('mongoose');
// const url = 'mongodb://localhost:27017/Signin';
// mongoose.connect(url).then(()=>console.log('connected')).catch((err)=>console.log(error.messsage));
const app = express();
const port = 2000;
app.listen(port,()=>console.log('Server is connected'));
const bodyParser = require('body-parser');
// const signinmodel = require('./detailssignin');
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// app.get('/Signin', (req,res)=>{
//     console.log('get is working');
//     res.send(user);
// })
// let user;
// app.post('/Signin',async(req,res) =>{
//     const user= { 
//         E_Mail: req.body.E_Mail,
//         Password: req.body.Password
//     }
//     res.send(user);
//     console.log(user);
// })
app.get('/Signin', (req,res)=>{
    console.log('get is working');
    res.send(collect);
})
let collect;

app.post('/Signin',async(req,res) =>{
    const collect = new user({
        E_Mail: req.body.E_Mail,
        Password: req.body.Password
    })
    res.send(collect);
    console.log(collect);
})