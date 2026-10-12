import express from 'express'
import { createUser,loginUser,getMe  } from '../controller/user.js'
import authMiddleware from '../middleware/auth.js'
const userRouter=express.Router()
userRouter.post('/register',createUser)
userRouter.post('/login',loginUser)
userRouter.get("/me", authMiddleware, getMe)
export default userRouter