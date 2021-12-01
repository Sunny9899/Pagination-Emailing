const express=require("express");

const User=require("../models/user.model");

const router = express.Router();

const sendMail = require("../utils/sendmail");//3MAIL

router.post("/", async(req,res)=>{
    try{
        const user=await User.create(req.body);
      
       const e=["a1@admn.com","a2@admn.com","a3@admn.com","a4@admn.com","a5@admn.com"]//ADMIN MAIL
  
       const eToString= e.join(",");//ADMIN MAIL
        sendMail(`${req.body.email}`,`Welcome to ABC system ${req.body.first_name +" "+ req.body.last_name}`,`Hi ${req.body.first_name}, Please confirm your email address`)//4MAIL
 
        // TO SEND MAILS TO ADMINS
        sendMail(eToString,`${req.body.first_name +" "+ req.body.last_name} has registered with us`,`Please Welcome ${req.body.first_name +" "+ req.body.last_name}`,"");


     
        return res.status(201).json({user});
    }
    catch(e){
        return res.status(500).json({status:"failed",message:e.message});
    }   
})


router.get("/",async(req,res)=>{
    try{
    //PAGINATION
    //? is used to do the filtering in get request using queries
    //& is used to add more queries
    const page = +req.query.page || 1; // || 1 reprsents if value not specified consider 1 as default value
    const size= +req.query.size || 2;
    const skip=(page - 1)*size;

    const users=await User.find().skip(skip).limit(size).lean().exec();

    //To count total no. of user pages
    const totalUserPages=Math.ceil((await User.find().countDocuments())/size);

    return res.send({users,totalUserPages});
    }
    catch(e){
    return res.status(500).json({status:"failed",message:e.message});
    }
})

module.exports=router;