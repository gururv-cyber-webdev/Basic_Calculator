import mongoose from "mongoose";

const connectDb = async() => {
    const con = await mongoose.connect(process.env.MONGO)
    console.log("MongoDB connected")
}

export default connectDb