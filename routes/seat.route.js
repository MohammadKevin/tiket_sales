import express from "express";
import {
    getAllSeat,
    getSeatById,
    addSeat,
    updateSeat,
    deleteSeat,
} from "../controller/seat.controller.js";

const app = express.Router();

app.get("/", getAllSeat);
app.get("/:id", getSeatById);
app.post("/", addSeat);
app.put("/:id", updateSeat);
app.delete("/:id", deleteSeat);

export default app;