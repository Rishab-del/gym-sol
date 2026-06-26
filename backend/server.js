const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const workoutRoutes = require("./routes/workoutRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", workoutRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected"))
  .catch(console.log);

app.listen(8000, "0.0.0.0", () => {
  console.log("Server running on 8000");
});