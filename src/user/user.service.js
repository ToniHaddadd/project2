import { tableuser } from "../../database/userinfo.js";

const createUser = async (firstName, lastName, password, email) => {
  const id = tableuser.length;

  await tableuser.push([id, firstName, lastName, password, email]);
  //   console.log(tableuser);
};

const loginUser = (email, password) => {
  for (let i = 1; i < tableuser.length; i++) {
    if (tableuser[i][4] == email && tableuser[i][3] == password) {
      return true;
    }
  }
  return false;
};

const changeUserInfo = (firstName, lastName, email) => {
  const id = getuserid(email);
  if (id > 0) {
    tableuser[id][1] = firstName;
    tableuser[id][2] = lastName;
    tableuser[id][4] = email;
    return email;
  }
  //   return "error : user not found ";
  console.log(tableuser);
};

const changeUserPassword = (oldpassword, password, email) => {
  const id = getuserid(email);

  if (tableuser[id][3] == oldpassword) {
    tableuser[id][3] = password;
    return email;
  }

  console.log(tableuser);
};

const getuserid = (email) => {
  for (let i = 1; i < tableuser.length; i++) {
    if (tableuser[i][4] == email) {
      return i;
    }
  }
};

export default {
  createUser,
  loginUser,
  changeUserInfo,
  changeUserPassword,
};
