import userService from "./user.service.js";
const signUp=async(req,res)=>

{
    try{
        const{email,firstName,lastName,password}=req.body;
       
        await userService.createUser(email,firstName,lastName,password);
        res.status(200).json({message:"user sign up and added successfully"});
        
        
    }
    catch(error)
    {
        res.status(400).json({message:error.message});
    }
}

const logIn=async(req,res)=>

    {
        try{
           const firstName=req.body.firstName;
           const password=req.body.password;

          const user= await userService.loginUser(firstName,password);

          if(user){
           res.status(200).json({message:"user loged in successfully"});

          }
          else{
            req.status(200).json({message:"user not found"});
          }



        }
        catch(error)
    {
        res.status(400).json({message:error.message});
    }
}




export default{
    signUp,logIn,
}