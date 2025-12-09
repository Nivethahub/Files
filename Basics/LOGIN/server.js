const express = require('express')
const app = express();
const port = 4000;
const routes=require('./routes')
app.use('/routes',routes)
app.get('/',(req,res)=>{
    res.send('Get router started working')
})
app.listen(port,()=> {
console.log('Port connected to server');
})