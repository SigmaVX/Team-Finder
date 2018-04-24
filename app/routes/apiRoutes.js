var teamData = require("../data/team-data");
var user = require("../data/user-data");

module.exports=function(app){

    // Get Team Data
    app.get("/api/teams", function(req, res){
        return res.json(teamData);
    });

    // Post Team Data
    app.post("/api/teams", function(req, res){
        var results = req.body;
        return res.json(teamData);
    });

    // Post User Data
    app.post("/api/user", function(req, res){
        var results = req.body;
        
        if(results.name){
            user[0].name = results.name;
            user[0].ign = results.ign;
            return res.json(user);
        }

        else if(results.scores){
            user[0].scores = results.scores;
            return res.json(user);
        }

        else{
            return res.json(user);
        }


    });
}
