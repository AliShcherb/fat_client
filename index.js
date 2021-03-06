const express = require("express");
const bodyParser = require("body-parser");

const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Alina's application." });
});
require("./article.routes.js")(app);

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});

