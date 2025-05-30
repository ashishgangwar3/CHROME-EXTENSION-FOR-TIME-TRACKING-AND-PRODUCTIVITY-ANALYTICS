
const express = require("express");
const mongoose = require("mongoose");
const logRoutes = require("./routes/log");
const app = express();

mongoose.connect("mongodb://localhost:27017/productivity");

app.use(express.json());
app.use("/log", logRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
