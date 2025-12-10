import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        message: {type: String, required: true}, 
        username: String, 
        createdAt: Date, 
    },
     {
        timestamps: true
    }
)

export default mongoose.model('message', messageSchema)