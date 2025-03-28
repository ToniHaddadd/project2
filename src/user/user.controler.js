import userService from "./user.service.js";

class userController {
  static async signUp(req, res) {
    try {
      const { email, password, firstName, lastName } = req.body;

      const user = await userService.createUser(
        email,
        password,
        firstName,
        lastName
      );
      res
        .status(200)
        .json({ message: "user sign up and added successfully" + user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getOne(req, res) {
    try {
      const { userId } = req.body;
      const user = await userService.findUserById(userId);
      res.status(200).json({ message: "User fetched successfully" + user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  static async getAll(req, res) {
    try {
      const users = await userService.findAll();

      res.status(200).json({ message: "Users fetched successfully" + users });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  static async deleteOne(req, res) {
    try {
      const { userId } = req.body;
      const user = await userService.deleteOne(userId);

      res.status(200).json({ message: "User deleted successfully", user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  static async deleteMany(req, res) {
    try {
      const { firstName } = req.body;
      const user = await userService.deleteMany(firstName);

      res.status(200).json({ message: "Users deleted successfully", user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userService.loginUser(email, password);
      res.status(200).json({ message: "Users logged in successfully", user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default userController;
