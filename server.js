import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import eventRoute from "./routes/event.route.js";
import userRoute from "./routes/user.route.js";
import seatRoute from "./routes/seat.route.js";
import ticketRoute from "./routes/ticket.route.js";

const port = 3000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/event", eventRoute);
app.use("/user", userRoute);
app.use("/seat", seatRoute);
app.use("/ticket", ticketRoute);

app.get("/", (req, res) => {
  res.send("Server running...");
});

// Jalankan server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
  console.log(`📂 Uploads folder available at http://localhost:${port}/uploads/`);
});
