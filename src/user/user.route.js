import express from "express";
import userControler from "./user.controler.js";
// import userController from "./user.controler.js";
const router=express.Router();

// router.post("/signUp",(req,res)=>{
//     console.log("hello");
// })

// // router.use("*",(req,res,next)=>{
// //     console.log("the req is :",req);
    
// })
router.post("/signUp",userControler.signUp);
router.get("/logIn",userControler.logIn);

export default router