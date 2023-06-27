const express = require("express");

const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/madlib.html");
});

app.post("/", function(req, res){
    var noun1 = req.body.noun1;
    var noun2 = req.body.noun2;
    var noun3 = req.body.noun3;
    var noun4 = req.body.noun4;
    var noun5 = req.body.noun5;
    var adjective1 = req.body.adjective1;
    var adjective2 = req.body.adjective2;
    var adjective3 = req.body.adjective3;
    var name1 = req.body.name1;
    var name2 = req.body.name2;
    var pluralNoun1 = req.body.pluralNoun1;
    res.send(`<h1>Matlab Paragraph</h1> Once upon a time, in a ${adjective1} kingdom, there lived a ${noun1} named 
    ${name1}. ${name2} was known for their ${adjective2} ${noun2} and their love for ${pluralNoun1}
    . One day, a ${adjective3} ${noun3} appeared in the kingdom, causing ${noun4} and ${noun5}
     among the villagers.
    `);
});

app.listen(3000, function(){
    console.log("Server is started.");
});