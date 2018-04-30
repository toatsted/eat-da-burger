const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// mysql connectionz
require("./config/connection.js")(app);

require("./controllers/burgers_controller.js")(app);

app.listen(PORT, () => console.log(`app is listening on https://localhost:${PORT}`));