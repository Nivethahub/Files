// // const bodyParser = require('body-parser')
// const express = require('express')
// // const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
// const app = express()
// const port = 8081
// app.listen(port,()=>console.log('Server is connected'))

// // const url = 'mongodb://localhost:27017/Courses';
// // mongoose.connect(url).then(()=>console.log('connected')).catch(err=>console.log('not connected'))

// // const datas= new mongoose.Schema({
// //    First_Name: String,
// //     Last_Name: String,
// //     E_Mail: String,
// //     Password: String,
// //     Confirm_Password: String
// // })

// // const Signup = mongoose.model('Signup',datas)
// //  const details = Signup({
// //     First_Name: 'First Name',
// //     Last_Name: 'Last Name',
// //     E_Mail: 'E Mail',
// //     Password: 'Password',
// //     Confirm_Password: 'Confirm Password'
// // })

// // Signup.create(details)
// // .then(()=> console.log('Saved'))
// // .catch((err) => console.log(error.message))

// // app.put('/signups/6572f721ac72998a8fb295ba', async(req,res)=>{
// //        const First_Name= req.body.First_Name
// //       const  Last_Name= req.body.Last_Name
// //       const E_Mail= req.body.E_Mail
// //       const  Password= req.body.Password
// //        const Confirm_Password= req.body.Confirm_Password
// // console.log('connected')
// //  const newone = await Signup.updateOne(
// //    { '_id':'6572f721ac72998a8fb295ba'},{$set: {First_Name: req.body.First_Name}})
// //     res.send(newone)
// // console.log(newone)})

// app.get('/Courses', (req,res)=>{
//     res.send(console.log('hi'))
// })
// // app.post('/Courses',(req,res)=>{
// //     const First_Name= req.body.First_Name
// //       const  Last_Name= req.body.Last_Name
// //       const E_Mail= req.body.E_Mail
// //       const  Password= req.body.Password
// //        const Confirm_Password= req.body.Confirm_Password
// //        console.log('hi2');
// // })

// app.post('/Courses', (req,res)=>{
//     res.send(console.log('hi2'))
// })

// app.put('/Courses', (req,res)=>{
//     console.log("hi");
// })


// // app.post('/Courses', (req,res)=>{
// //     res.send('hello2')
// // })

// // app.put('/Courses', (req,res)=>{

// //     const First_Name = req.body.First_Name
// //     const Last_Name = req.body.Last_Name

// //     const n= update({First_Name: First_Name},{Last_Name: Last_Name}
// //         try
// //         {res.send(First_Name,Last_Name)}
// //         catch (error) 
// //         {res.send(err.message)}
// //         )
// //     res.send(console.log("hi"));
// // })


const express = require('express')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const url = 'mongodb://localhost:27017/Signup';
mongoose.connect(url).then(()=>console.log()).catch((err)=>console.log(err.message))
const bodyParser = require('body-parser')
const app = express()
const port = 6000
const detailsmodel = require('./detailsmodule')
app.listen(port,()=>console.log('Server is connected'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.get('/Signup', (req,res)=>{
    console.log('hi');
    res.send(details)
})
let details;
app.post('/Signup',async(req,res) =>{
    let details={
        First_Name: req.body.First_Name,
        Last_Name: req.body.Last_Name,
        E_Mail: req.body.E_Mail,
        Password: req.body.Password,
        Confirm_Password: req.body.Confirm_Password
    }
    console.log(details);
    res.send(details);
})



//   app.post('/Resetpassword', async(req,res)=>{
//     try{
//     let details= await new User({
//         Password: req.body.Password,
//         Confirm_Password: req.body.Confirm_Password
//     })
//    if(!details){
//     res.send('incorrect password')
//    } else{res.send('password successfully changed')
//     console.log(details)}}
//     catch (error) {
//         res.send('signin error');
//       }
//   })


