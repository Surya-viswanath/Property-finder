const bcrypt = require('bcrypt');
const Customer = require('./Customerschema');
const Admin = require('../Model/AdminSchema');
const Adminlogin=async(req,res) => {
    const {email,password}=req.body
    const existingemail=await Admin.findOne({email})
    if (existingemail){
       if(existingemail.email ===email && (await bcrypt.compare(password,existingemail.password))){
    //    res.send("login successful");
       res.json({id:existingemail._id,message:'login successful'})
       }
       else{
        res.json("login failed");
       }
    }
    else{
        console.log("no data in db");
        res.json("no data in db");
    }
}
   module.exports = Adminlogin