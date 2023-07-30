const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const routes = require("./routes");
const errorMiddleware = require("./middlewares/error");

const corsOption = {
  credentials: true,
};
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOption));

app.use("/api/v1/destin", routes.destin);
app.use("/api/v1/user", routes.user);

app.use(errorMiddleware);

module.exports = app;
