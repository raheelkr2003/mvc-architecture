
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConfig.js");
const userRoutes = require("./routes/userRoutes.js");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
// app.get("/" , (req,res)=>{
//   res.send("Hello from server");
// })
app.use("/api", userRoutes);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
