const express = require("express");
const verifyToken = require("./middleware/verifyToken");
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");
const usersRouter = require("./routes/users");
const worksRouter = require("./routes/works");
const schoolsRouter = require("./routes/schools");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv/config");

const app = express();

app.use(bodyParser.json());

app.use(cors({ origin: true, credentials: true }));

async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:8VdayxvWBeeA4A6O@cluster0.jfrmol2.mongodb.net/JobzDe?retryWrites=true&w=majority`
    );
    console.log("Connected to MongoDB DataBase");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.get("/", (req, res) => {
  res.send("Hi, welcome to JobzDe RESTFUL Web-API 😍");
});
app.use("/auth", authRouter);
app.use("/jobs", verifyToken, jobsRouter);
app.use("/users", verifyToken, usersRouter);
app.use("/works", verifyToken, worksRouter);
app.use("/schools", verifyToken, schoolsRouter);

const port = 9900;

app.listen(port, () => {
  console.log(
    `Server is started on port http://localhost:${port}/ or http://000.000.000.000/`
  );
});
