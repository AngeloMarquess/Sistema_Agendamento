const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const appointmentService = require("./services/AppointmentService");

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

app.post("/create" , async (req, res) => {

 var status = await appointmentService.Create(
    req.body.name,
    req.body.email,
    req.body.description,
    req.body.cpf,
    req.body.date,
    req.body.time
    
    )

    if(status){
        res.redirect("/");
    }else{
        res.send("Ocorreu uma falaha!");
    }
    });

app.listen(8090, () => {});