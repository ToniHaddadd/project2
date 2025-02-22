import {tableuser} from "../../database/userinfo.js";

const createUser= async (firstName,lastName,password,email)=>

{
    const id=(tableuser.length);

   await tableuser.push([id,firstName,lastName,password,email]);
   console.log(tableuser);

}

const loginUser= (firstName,password)=>
{
   
for(let i=0;i<tableuser.length;i++)
{
    if((tableuser[i][1]==firstName)&&(tableuser[i][3]==password))
    {
        return true;
    }

}
return false;
}


export default{
    createUser,
}