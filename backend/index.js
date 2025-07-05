import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/bookings", bookingRoutes);

app.listen(PORT, () => {
    console.log(`Bookitup Backend läuft auf http://localhost:${PORT}`);
});