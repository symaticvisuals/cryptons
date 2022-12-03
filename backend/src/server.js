require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

require(__dirname + "/routes/").forEach(function (route) {
  app.use(route.prefix, route.app);
});

app.get("/heartbeat", (req, res) => {
  res.send("404");
});






    
