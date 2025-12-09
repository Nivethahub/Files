const express= require('express')
const app = express ();
app.get('/logout',(req,res)=>{
    res.send('Getlogout is working')
})