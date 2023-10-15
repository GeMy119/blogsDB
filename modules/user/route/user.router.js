const validation = require("../../../configration/common/midelware/validation");
const isAuthorized = require("../../../configration/common/midelware/isAuthorized");
const { registerSchema, loginSchema } = require("../joi/user.joi");
const { GET_ALL_USERS } = require("../endPoints/endPoints.user");
const getAllUsers = require("../controller/getAllUsers");
const logIn = require("../controller/login");
const register = require("../controller/register");
const userVerify = require("../controller/verify");
const updateUser = require("../controller/updateUser");

const userRouter = require("express").Router();

userRouter.post("/register", validation(registerSchema), register);
userRouter.post("/logIn", validation(loginSchema), logIn);
userRouter.get("/getAllUsers", isAuthorized(GET_ALL_USERS), getAllUsers);
userRouter.put("/updateUser/:id", updateUser);
userRouter.get("/userVerify", userVerify);
module.exports = userRouter;
