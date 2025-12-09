const express = require('express')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const url = 'mongodb://localhost:27017/Signup';
const bodyParser = require('body-parser')
const app = express()
const port = 2000
const User = require('./detailsmodule')
mongoose.connect(url).then(()=>console.log("connect"))
app.listen(port,()=>console.log('Server is connected'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// app.get('/Signup', (req,res)=>{
//     console.log('hi');
//     res.send(details);
// })
// let details;
app.post('/Signup',async(req,res) =>{
    let details=new User({
        First_Name: req.body.First_Name,
        Last_Name: req.body.Last_Name,
        E_Mail: req.body.E_Mail,
        Password: req.body.Password,
        Confirm_Password: req.body.Confirm_Password
    })
    // res.send(details);
    // res.send('SIGNUP COMPLETED')
    // details.save()
const userdata = await User.insertMany(details);
console.log(userdata);
const ruser = User.findOne({E_Mail: userdata.E_Mail})
if(!ruser){res.send('Registered user')}
else{res.send('New user added')}
})
//const user = require('./detailsmodule')
// app.get('/Signin', (req,res)=>{
//     console.log('get is working');
//     res.send(collect);
// })
// let collect;



//signin page
app.post('/Signin', async (req, res) => {
    try {
      const details = await User.findOne({E_Mail:req.body.E_Mail, Password:req.body.Password});
      if (!details) {
        res.send('Invalid credentials');
       
      } else {
        //console.log(details.getUser())
       res.send('Signin successful');
       console.log(details.Password);
      }
    } catch (error) {
      res.send('signin error');
    }

  });


  app.post('/Forgetpassword', async(req,res)=>{
  try {
    let checkdetails = await User.findOne({E_Mail:req.body.E_Mail,Last_Name:req.body.Last_Name})
   // console.log(checkdetails);
    if(!checkdetails){
      console.log('invalid details');
     res.send('INVALID details');
    }
    else {
      let create = await User.findOneAndUpdate({E_Mail:req.body.E_Mail},{Password:req.body.NewPassword})
      res.send('Password reset successfull');
      console.log('hi');
      console.log(create);
    }
  } catch (error) {
    res.send(error.message)
  }
  })