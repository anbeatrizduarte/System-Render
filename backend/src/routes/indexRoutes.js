import express from "express";
import Users from "./UserRoutes.js";

const routes = (app) => {
    app.use(express.json());

    app.use("/users", Users);
}

export default routes;
