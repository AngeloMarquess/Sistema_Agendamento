const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine','ejs');


mongoose.connect("mongodb://localhost:27017/agendamento",{useNewUrlParser: true, useUnifiedTopology: true})

app.get("/", (req,res) => {
res.send("oi");

});

app.get("/Cadastro", (req, res) => { 
    res.render("create");
})

app.listen(8090, () => {});