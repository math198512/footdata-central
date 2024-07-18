var request = require("request");
//import prisma from "../db"



// Get Players with given Team
export const getPlayers = async (req, res) => {
    var options = {
        method: 'GET',
        url: 'https://v3.football.api-sports.io/players/squads',
        qs: {team: req.params.team},
        headers: {
            //'x-rapidapi-host': 'v3.football.api-sports.io',
            "x-apisports-key": process.env.API_FOOTBALL_KEY
          }
        };
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
        
            res.json(JSON.parse(body)["response"]);
        });
}






