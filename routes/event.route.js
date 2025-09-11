import express from "express";
import {
  getAllEvent,
  getEventById,
  addEvent,
  updateEvent,
  deleteEvent,
} from "../controller/event.controller.js";
import { upload } from "../middlewares/upload.js";

const app = express.Router();

app.get("/", getAllEvent);
app.get("/:id", getEventById);
app.post("/", upload.single("image"), addEvent);
app.put("/:id", upload.fields([{ name: "image", maxCount: 1 }]), updateEvent);
app.delete("/:id", deleteEvent);

export default app;