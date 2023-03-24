// app.js
const express = require("express");
const { readdirSync } = require("fs");
const db = require("./config/db.config");
require("dotenv").config();
const app = express();
app.use(express.json());
db();
// loop through the modules directory and import each module's index file
readdirSync("./src/modules").forEach((file) => {
  const module = require(`./src/modules/${file}`);

  app.use(`/api/${file}`, module.router);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});
