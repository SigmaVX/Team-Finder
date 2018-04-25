var teamData = require("../data/team-data");
var user = require("../data/user-data");

module.exports=function(app){

    // Get Team Data
    app.get("/api/teams", function(req, res){
        return res.json(teamData);
    });

    // Get User Data
    app.get("/api/user", function(req, res){
        return res.json(user);
    });

    // Post Team Data
    app.post("/api/teams", function(req, res){
        var results = req.body;
        return res.json(teamData);
    });
    
    // Post User Sign In Data
    app.post("/api/user/info", function(req, res){
        var results = req.body;
        user[0].name = results.name;
        user[0].ign = results.ign;
        return res.send(user);
    });
        
    // Post User Score Data
    app.post("/api/user/scores", function(req, res){  
        var results = req.body;
        user[0].scores = results.scores;
        return res.send(user);
    });
}
