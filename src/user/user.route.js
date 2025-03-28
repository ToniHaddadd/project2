import express from "express";
import userControler from "./user.controler.js";

const router = express.Router();

router.post("/signUp", userControler.signUp);
router.get("/getOne", userControler.getOne);
router.get("/getAll", userControler.getAll);
router.get("/login", userControler.loginUser);
router.delete("/delete", userControler.deleteOne);
router.delete("/deletemany/firstName", userControler.deleteMany);

// router.patch("/changeuserinfo", userControler.changeUserI);
// router.patch("/changeuserpass", userControler.changeUserP);

export default router;
