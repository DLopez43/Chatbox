import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        message: {type: String, required: true}, 
        text: String, 
        username: String, 
    },
     {
        timestamps: true
    }
)

export default mongoose.model('message', messageSchema)