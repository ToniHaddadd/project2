import { tableuser } from "../../database/userinfo.js";

class userService {
  static async createUser(firstName, lastName, password, email) {
    const user = await checkUser(email, password);

    if (user) {
      throw new Error("user" + firstName + "with this email already exists");
    }

    const id = getLastId() + 1;

    await tableuser.push({ id, firstName, lastName, password, email });
  }

  static async loginUser(email, password) {
    if (await checkUser(email, password)) {
      return true;
    }
    return false;
  }

  static changeUserInfo(firstName, lastName, email, password) {
    for (const user of tableuser) {
      if (user.email === email && user.password === password) {
        user.email = email;
        user.firstName = firstName;
        user.lastName = lastName;
        return email;
      }
    }
  }

  static changeUserPassword(oldpassword, password, email) {
    console.log(tableuser);
    for (const user of tableuser) {
      if (user.email === email && user.password === oldpassword) {
        user.password = password;
        return email;
      }
    }
    console.log(tableuser);
  }

  static async checkUser(email, password) {
    for (const user of tableuser) {
      if (user.email === email && user.password === password) {
        return true;
      }
    }
    return false;
  }

  static getLastId() {
    let id = 0;

    tableuser.forEach((user) => {
      id = id + user.id;
    });

    return id;
  }
}
export default userService;
