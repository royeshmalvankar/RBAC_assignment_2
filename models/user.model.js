import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "Member" ,
        enum:["Manager", "Admin", "Member"]
    }
    });
    
const User = mongoose.model("User", userSchema);

export default User