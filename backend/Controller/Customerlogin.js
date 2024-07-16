// const bcrypt = require('bcrypt');
// const Customer = require('./Customerschema');
// const Customerlogin=async(req,res) => {
//     const {email,password}=req.body
//     const existingemail=await Customer.findOne({email})
//     if (existingemail){
//        if(existingemail.email ===email && (await bcrypt.compare(password,existingemail.password))){
//         res.json({id: existingemail._id,message:'login successful'})
//     //    res.send("login successful");
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
//    module.exports = Customerlogin

const Customer = require('./Customerschema');

   const Customerlogin = async (req, res) => {
       const { email, password } = req.body;
   
       try {
           // Check if all required fields are present
           if (!email || !password) {
               console.log('Missing email or password');
               return res.status(400).json({ message: 'Email and password are required' });
           }
   
           // Find the user by email
           const existingUser = await Customer.findOne({ email });
   
           if (!existingUser) {
               console.log('User not found');
               return res.status(400).json({ message: 'Invalid email or password' });
           }
   
           // Compare the provided password with the stored password
           if (existingUser.password !== password) {
               console.log('Invalid password');
               return res.status(400).json({ message: 'Invalid email or password' });
           }
   
           // Exclude the password from the user object
           const userResponse = { ...existingUser.toObject(), password: undefined };
   
           // Respond with the user data
           res.status(200).json({ user: userResponse });
       } catch (error) {
           console.error('Error during user sign in:', error);
           res.status(500).json({ message: 'Internal server error' });
       }
   };
   
   module.exports = Customerlogin;


   
