
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
