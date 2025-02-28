import express from "express";
import userControler from "./user.controler.js";

const router = express.Router();

router.post("/signUp", userControler.signUp);
router.get("/logIn", userControler.logIn);
router.patch("/changeuserinfo", userControler.changeUserI);
router.patch("/changeuserpass", userControler.changeUserP);

export default router;
