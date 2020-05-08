const express=require('express');


const router=express.Router();

router.get('/',(req,res)=>{
    res.send('Get logged in user');
});

router.post('/',(req,res)=>{
    res.send('login user');
});

module.exports=router;