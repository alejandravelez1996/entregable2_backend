const { getAll, create, getOneUser, removeUser, updateUser} = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/users")
		.get(getAll)
		.post(create)
		
userRouter.route("/users/:id")
.get(getOneUser)
.delete(removeUser)
.put(updateUser)

module.exports = userRouter;