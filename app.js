const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors({ origin: "https://snazzy-froyo-bb2151.netlify.app" }));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/api/users", require("./routes/users"));
app.use("/api/indications", require("./routes/indications"));

module.exports = app;
