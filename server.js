const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(require("./controllers/burgers_controller.js"));

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));