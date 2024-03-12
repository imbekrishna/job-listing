const dotenv = require("dotenv");

// Configure environment variables. On error shutdown the server
const status = dotenv.config();

if (status.error) {
  console.log(status.error);
  process.exit(1);
}

// imports
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to the DB"))
  .catch(() => console.error("Error connecting to the DB"));

const app = express();

// #region routes

/** Route to check the sever health */
app.get("/api/health", (req, res) => {
  res.status(200).json({
    name: "Job Listing Service",
    status: "Running",
    time: new Date(),
  });
});

// #endregion

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
