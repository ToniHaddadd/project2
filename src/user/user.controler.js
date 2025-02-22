import userService from "./user.service.js";
const signUp=async(req,res)=>

{
    try{
        const{email,firstName,lastName,password}=req.body;
       
        await userService.createUser(firstName,lastName,password,email);
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
           console.log(firstName+password);

          const user= await userService.loginUser(firstName,password);

          if(user){
           res.status(200).json({message:"user loged in successfully"});

          }
          else{
            res.status(200).json({message:"user not found"});
          }



        }
        catch(error)
    {
        res.status(400).json({message:error.message});
    }
}

const changeUserI= async(req,res)=>

    {
        try{
            const firstName=req.body.firstName;
            const  lastName=req.body.lastName;
            const email=req.body.email;

             await userService.changeUserInfo(firstName,lastName,email);

          
           res.status(200).json({message:"user info changed successfully"});


        
    }


        catch(error)

        {
            res.status(400).json({message:error.message});
        }

    }

    const changeUserP= async(req,res)=>

        {
            try{
                const firstName=req.body.firstName;
                const password=req.body.password;
                const email=req.body.email;
    
                 await userService.changeUserPassword(firstName,password,email);
    
              
               res.status(200).json({message:"user pass has changed successfully"});
    
    
            
        }
    
    
            catch(error)
    
            {
                res.status(400).json({message:error.message});
            }
    
        }



export default{
    signUp,logIn,changeUserI,changeUserP
}