import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
},
    {
        versionKey: false
    })

const Users = mongoose.model("Users", UserSchema);

export default Users