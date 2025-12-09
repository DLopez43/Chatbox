import mongoose from "mongoose"; 

// connecting to DB 
export const DBconnection = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB"); 
        return connect; 
    } catch (err) {
        console.error("DB connection failed", err)
        process.exit(1);
    }
}

// disconnect from DB 
export const DBdisconnect = async () => {
    try {
        await mongoose.connection.close(); 
        console.log("disconnected from DB")
    } catch (err) {
        console.error("error disconnecting", err); 
    }
}