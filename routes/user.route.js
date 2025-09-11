import express from "express";
import {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
} from "../controller/user.controller.js";

import {authenticate} from "../controller/auth.controller.js"

const app = express.Router();

app.get("/", getAllUsers);
app.get("/:id", getUserById);
app.post("/", addUser);
app.put("/:id", updateUser);
app.delete("/:id", deleteUser);

app.post("/login", authenticate);

export default app;