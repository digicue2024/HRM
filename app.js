const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const clientRouter = require("./routes/client");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/api/admin", adminRouter);

app.use("/api/admin/client", clientRouter);
app.use("/api/admin/user", userRouter);

mongoose
  .connect(process.env.MONG_URI)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error("Database Connection Error:", err));

module.exports = app;
