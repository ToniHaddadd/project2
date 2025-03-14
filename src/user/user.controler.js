import userService from "./user.service.js";

class userController {
  static async signUp(req, res) {
    try {
      const { email, password, firstName, lastName } = req.body;

      await userService.createUser(email, password, firstName, lastName);
      res.status(200).json({ message: "user sign up and added successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async logIn(req, res) {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const result = await userService.loginUser(email, password);

      if (result) {
        res.status(200).json({ message: "user loged in successfully", result });
      } else {
        res.status(200).json({ message: "user not found" });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async changeUserI(req, res) {
    try {
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const email = req.body.email;
      const password = req.body.password;

      const emaile = await userService.changeUserInfo(
        firstName,
        lastName,
        email,
        password
      );

      res
        .status(200)
        .json({ message: "user" + emaile + " info changed successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async changeUserP(req, res) {
    try {
      const oldpassword = req.body.oldpassword;
      const password = req.body.password;
      const email = req.body.email;

      const emaile = await userService.changeUserPassword(
        oldpassword,
        password,
        email
      );

      res.status(200).json({
        message: "user with email:" + emaile + " pass has changed successfully",
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default userController;
