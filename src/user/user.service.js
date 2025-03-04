import { tableuser } from "../../database/userinfo.js";

const createUser = async (firstName, lastName, password, email) => {
  const user = await checkUser(email, password);

  if (user) {
    throw new Error("user" + firstName + "with this email already exists");
  }

  const id = getLastId() + 1;

  await tableuser.push({ id, firstName, lastName, password, email });
};

const loginUser = async (email, password) => {
  if (await checkUser(email, password)) {
    return true;
  }
  return false;
};

const changeUserInfo = (firstName, lastName, email, password) => {
  for (const user of tableuser) {
    if (user.email === email && user.password === password) {
      user.email = email;
      user.firstName = firstName;
      user.lastName = lastName;
      return email;
    }
  }
};

const changeUserPassword = (oldpassword, password, email) => {
  console.log(tableuser);
  for (const user of tableuser) {
    if (user.email === email && user.password === oldpassword) {
      user.password = password;
      return email;
    }
  }
  console.log(tableuser);
};

const checkUser = async (email, password) => {
  for (const user of tableuser) {
    if (user.email === email && user.password === password) {
      return true;
    }
  }
  return false;
};

const getLastId = () => {
  let id = 0;

  tableuser.forEach((user) => {
    id = id + user.id;
  });

  return id;
};
export default {
  createUser,
  loginUser,
  changeUserInfo,
  changeUserPassword,
};
