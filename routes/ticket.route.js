import express from "express";
import {
    getAllTickets,
    getTicketById,
    addTicket,
    updateTicket,
    deleteTicket
} from "../controller/ticket.controller.js";

const app = express.Router();

app.get("/", getAllTickets);
app.get("/:id", getTicketById);
app.post("/", addTicket);
app.put("/:id", updateTicket);
app.delete("/:id", deleteTicket);

export default app;