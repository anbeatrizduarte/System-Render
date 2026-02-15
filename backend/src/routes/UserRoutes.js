import express from "express";
import UserController from "../controllers/UserController.js"

const router = express.Router();

router
    .get("/listUsers", UserController.listUsers)
    .post("/createUsers", UserController.createUsers)
    .post("/loginUsers", UserController.loginUsers)
    .put("/updateUsers/:id", UserController.updateUsers)
    .delete("/deleteUsers/:id", UserController.deleteUsers)

export default router;