const express = require('express'); 
require("./src/db/conn");

const MensRanking = require("./src/models/mens");
const router = require("./src/routers/men")
const app = express();
const port = 3000;
app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(`Connection is live in port ${port}`);
})