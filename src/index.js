
const express=require("express");

const usersController=require("./controllers/user.Controller");

const app=express();

app.use(express.json());

app.use("/users",usersController);


module.exports=app;