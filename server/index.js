const express = require("express");
const app = express();
const cors = require('cors');
const port = 5000;
const bodyParser = require("body-parser");
const route = require("./router/index");

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
//app init
route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});