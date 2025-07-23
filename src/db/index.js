import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// async used because mongodb can take some time to connect
// and we want to handle that asynchronously

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(
            `MongoDB connected successfully DB_HOST ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

export default connectDB;
