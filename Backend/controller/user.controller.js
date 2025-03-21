import User from "../model/usermodel.js";
import bcryptjs from "bcryptjs";


///Sign up controller
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User already exists " });
    }
    const hashpassword = await bcryptjs.hash(password,10);

    const createdUser = new User({
      fullname:fullname,
      email:email,
      password:hashpassword,
    });

    await createdUser.save();
    res.status(201).json({ message: "User Created Sucessfully ",user:{
      _id:createdUser.id,
      fullname:createdUser.fullname,
      email:createdUser.email,
    } });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const login = async (req,res)=>{
  try{
       const {email,password} = req.body;
       const user = await User.findOne({email});
       const ismatch = await bcryptjs.compare(password,user.password);
       if(!user || ismatch)
       {
        return res.status(400).json({message:"Invalid username or password"})
       }else{
        res.status(200).json({message:"Login sucessfully" , user:{
          _id:user._id,
          fullname:user.fullname,
          email:user.email
        }});
       

       }
  }catch(error){

    console.log(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}