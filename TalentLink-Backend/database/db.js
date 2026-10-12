import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv()
const connectDB=async()=>
{
    try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb connected successfuly")
    }
    catch(error){
        console.log(error)
    }
}
export default connectDB