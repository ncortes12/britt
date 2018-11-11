var path = require("path");
module.exports = function (app){
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "/../views/index.html"))
    });
    app.get("/contact", function(req,res){
        res.sendFile(path.join(__dirname, "/../views/contact.html"))
    });
    app.get("/research", function(req,res){
        res.sendFile(path.join(__dirname, "/../views/research.html"))
    });
    app.get("/cv", function(req,res){
        res.sendFile(path.join(__dirname, "/../views/cv.html"))
    })
    app.get("/resources", function(req,res){
        res.sendFile(path.join(__dirname, "/../views/resources.html"))
    })
    app.get("/people", function(req,res){
        res.sendFile(path.join(__dirname, "/../views/people.html"))
    })
}