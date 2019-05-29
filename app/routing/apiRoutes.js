var friends = require("../data/friends");

module.exports = function(app) {
  //Get List Of All Pals
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  //Add User Information to Pals Array
  app.post("/api/friends", function(req, res) {

    var bestMatch = {
    palName: "",
    palImage: "",
    scoreDifference: 1000
    };
    
    var userInput = req.body;
    var userScore = userInput.score;

    //Use this variable to calculate the difference between the user's scores and the scores of each user in the database
    var totalDifference; 

    //Loop Through All Pals From the database
    for (var i=0; i<friends.length; i++) {
      var pal = friends[i];
      totalDifference = 0;

      //Loop Through All Scores of each Pal
      for (var q=0; q<pal.score[q]; q++) {
        var palScore = pal.score[q];
        var myScore = userScore[q];

        totalDifference += Math.abs(
        parseInt(myScore) - parseInt(palScore));
        }

      if (totalDifference <= bestMatch.scoreDifference) {
        bestMatch.scoreDifference = totalDifference;
        bestMatch.palName = pal.name;
        bestMatch.palImage = pal.photo;
        }
    }
    friends.push(userInput);
    res.json(bestMatch);
    console.log(bestMatch);
    console.log(userInput);
  });
};
