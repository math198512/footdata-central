var request = require("request");
//import prisma from "../db"



// Get Teams with given league and season
export const getTeams = async (req, res) => {
    var options = {
        method: 'GET',
        url: 'https://v3.football.api-sports.io/teams',
        qs: {league: req.params.league, season: req.params.season},
        headers: {
            //'x-rapidapi-host': 'v3.football.api-sports.io',
            "x-apisports-key": process.env.API_FOOTBALL_KEY
          }
        };
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
        
            res.json({data: JSON.parse(response)});
        });
    }




