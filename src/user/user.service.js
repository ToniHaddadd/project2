import pkg from "jsonwebtoken";
const { sign } = pkg;
import { tableuser } from "../../database/userinfo.js";
import userModel from "./user.model.js";

class userService {
  static async createUser(email, password, firstName, lastName) {
    return new userModel({ email, password, firstName, lastName }).save();
  }
  static async findUserById(userId) {
    return userModel.findOne({ _id: userId });
  }
  static async findAll() {
    return userModel.find({});
  }
  static async deleteOne(userId) {
    return userModel.deleteOne({ _id: userId });
  }
  static async deleteMany(firstName) {
    return userModel.deleteMany({ firstName: firstName });
  }

  static async loginUser(email, password) {
    const userFinder = await this.findUserByEmail(email);
    if (userFinder.password != password) {
      throw new Error("PASS not found");
    }

    // we dont put awit with return because it is awiting
    if (!userFinder) {
      throw new Error("email not found");
    }
    const token = this.signJwt({
      _id: userFinder._id,
      firstName: userFinder.firstName,
    });
    return {
      user: { firstName: userFinder.firstName, lastName: userFinder.lastName },
      token,
    };
  }
  static signJwt(userpayload) {
    return sign(userpayload, "mysecretkey");
  }
  static async findUserByEmail(email) {
    return userModel.findOne({ email: email });
  }
  static changeUserInfo(firstName, lastName, email, password) {}

  static changeUserPassword(oldpassword, password, email) {}

  static async checkUser(email, password) {}

  static getLastId() {}
}
export default userService;
