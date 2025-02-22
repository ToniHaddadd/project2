import {tableuser} from "../../database/userinfo.js";

const createUser= async (firstName,lastName,password,email)=>

{
    const id=(tableuser.length);

   await tableuser.push([id,firstName,lastName,password,email]);
   console.log(tableuser);

}

const loginUser= (firstName,password)=>
{
    
for(let i=1;i<tableuser.length;i++)
{   
    if((tableuser[i][1]==firstName)&&(tableuser[i][3]==password))
    {
        return true;
    }

}
return false;
}

    
    const changeUserInfo= (firstName,lastName,email)=>
    {
        const id =getuserid(firstName,email);
        tableuser[id][1]=firstName;
        tableuser[id][2]=lastName;
        tableuser[id][4]=email;

    console.log(tableuser);
  
    }
    const changeUserPassword= (firstName,password,email)=>
        {
            const id =getuserid(firstName,email);
            
            tableuser[id][3]=password;
    
        console.log(tableuser);
      
        }
const getuserid=(firstName,email)=>

{
    for(let i=1;i<tableuser.length;i++)
        {  
            if((tableuser[i][1]==firstName)&&(tableuser[i][4]==email))
            {
                return i;

            }


        }

}


export default{
    createUser,loginUser,changeUserInfo,changeUserPassword
}