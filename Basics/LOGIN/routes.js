const express=require('express')
const router = express.Router();
// router.get('/',(req,res)=>{
//     res.send('Get router started working')
// })
router.post('/post',(req,res)=>{
    res.send('Post router is started working')
})
module.exports=router;