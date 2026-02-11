import Users from "../models/UserSchema.js";
import bcrypt from 'bcrypt';

class UserController {

    static createUsers = async (req, res) => {
        const { password, ...otherFields } = req.body;

        const passwordHash = await bcrypt.hash(password, 10);

        const userData = { ...otherFields, password: passwordHash }

        const userCreated = await Users.create(userData)

        res.status(201).json(userCreated);
    }

    static listUsers = async (req, res) => {
        const showUsers = await Users.find()

        res.status(200).json(showUsers);
    }

    static updateUsers = async (req, res) => {
        const id = req.params.id

        const {username, email, password} = req.body

        const findAndUpdUser = await Users.findByIdAndUpdate(id, {$set: {username, email, password}});

        res.status(200).json(findAndUpdUser);
    }

    static deleteUsers = async (req, res) => {
        const id = req.params.id;

        const findAndDeleteUser = await Users.findByIdAndDelete(id);

        res.status(200).send("Usuario deletado");
    }

    static loginUsers = async (req, res) => {
        const { username, password} = req.body;

        const findUser = await Users.findOne({ username }).select("+password");
        if (!findUser) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        const passwordVerification = await bcrypt.compare(password, findUser.password);
        if (!passwordVerification) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        return res.status(200).json({ success: true, message: "Login successful" });
    }
}

export default UserController;