import express from 'express'
import connectDB from './database/db.js'
import { configDotenv } from 'dotenv'
import jobRoutes from './router/job.js'
import applicationRoutes from "./router/applicationRoutes.js"
import userRouter from './router/user.js'
import cors from 'cors'
configDotenv()

const app=express()
app.use(cors())
app.use(express.json())
connectDB()
app.use('/api/users',userRouter)
app.use('/api/jobs', jobRoutes)
app.use("/api/applications", applicationRoutes)
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`http://localhost:3000`)})