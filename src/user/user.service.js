import { tableuser } from "../../database/userinfo.js";
import userModel from "./user.model.js";

class userService {
  static async createUser(email, password, firstName, lastName) {
    await new userModel({ email, password, firstName, lastName }).save();
  }

  static async loginUser(email, password) {}

  static changeUserInfo(firstName, lastName, email, password) {}

  static changeUserPassword(oldpassword, password, email) {}

  static async checkUser(email, password) {}

  static getLastId() {}
}
export default userService;
