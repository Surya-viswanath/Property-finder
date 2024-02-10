const Add = require("./Addproschema")


const getoneuser=async(req, res)=>{
    const getemail=req.params.email
    const getone=await Add.find({email:getemail})  
    res.json(getone)

}
module.exports = getoneuser

//////////

// const login=async(req,res) => {
//     const {Email,Password}=req.body
//     const existingemail=await student.findOne({Email})
//     if (existingemail){
//        if(existingemail.Email ===Email && (await bcrypt.compare(Password,existingemail.Password))){
//        res.send("login successful");
//        }
//        else{
//         res.send("login failed");
//        }
//     }
//     else{
//         console.log("no data in db");
//         res.json("no data in db");
//     }
// }
//    module.exports = login