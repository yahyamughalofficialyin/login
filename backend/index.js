const express = require("express");

const app = express();

const ConnectDB = require("./Config/DB")

require("dotenv").config();


app.use(
    express.json(),
)