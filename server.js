const dotenv = require("dotenv");

// Configure environment variables. On error shutdown the server
const status = dotenv.config();

if (status.error) {
  console.log(status.error);
  process.exit(1);
}

// imports
require("express-async-errors"); //handles all the async errors thrown

const express = require("express");
const cors = require("cors");
const http = require("http");
const debug = require("debug");
const winston = require("winston");
const expressWinston = require("express-winston");
const mongoose = require("mongoose");

const errorHandler = require("./middlewares/errorHandler");
const authRouter = require("./routes/authRoutes");

// mongodb | mongoose connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to the DB"))
  .catch(() => console.error("Error connecting to the DB"));

const app = express();

const PORT = process.env.PORT || 3001;
const debugLog = debug("app");

const loggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  ),
};

if (!process.env.DEBUG) {
  loggerOptions.meta = false;
}

// #region express app config

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(expressWinston.logger(loggerOptions));

// #endregion

// #region routes

/** Route to check the sever health */
app.get("/api/health", (req, res) => {
  res.status(200).json({
    name: "Job Listing Service",
    status: "Running",
    time: new Date(),
  });
});

app.use("/api/auth", authRouter);

// #endregion

// async error handler
app.use(errorHandler);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
