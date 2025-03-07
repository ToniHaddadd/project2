import express from "express";
import bodyParser from "body-parser";
import userRoute from "./src/user/user.route.js";
import database from "./src/config/database.js";
const app = express();
const { json, urlencoded } = bodyParser;
app.use(urlencoded({ extended: false }));
app.use(json());

app.use("/user", userRoute);

app.listen(3000, () => {
  console.log("we are open on port 3000");
});
