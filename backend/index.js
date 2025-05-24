const express = require("express");
const mongoose = require("./mongoDB");
const { register } = require("./controller/Singup");
const cors = require("cors");
const app = express();
mongoose();

app.use(cors());
app.use(express.json());

app.use("/api", register);

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
