const express = require('express');
const app = express();
const port = 2000;
app.listen(port,()=>console.log('Server is connected'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// app.post('/Forgotpassword', async(req,res)=>{
//     try {
//         const details = await User.findOne({Last_Name:req.body.Last_Name, E_Mail:req.body.E_Mail});
//         if (!details) {
//           res.send('Invalid credentials');
//         } else {
//           //console.log(details.getUser())
//          res.send('Signin successful');
//          console.log(details.Password);
//         }
//       } catch (error) {
//         res.send('signin error');
//       }
//   })