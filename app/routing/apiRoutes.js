// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var path = require('path');
var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  //Get List Of All Pals
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // ---------------------------------------------------------------------------

  //Add User Information to Pal
  app.post("/api/friends", function(req, res) {
    // req.body is available since we're using the body parsing middleware
    var userInput = req.body;
    var userScore = userInput.score;

    console.log(userInput);
    console.log(userScore);
    //Calculate Pal Match
    var palName;
    var palImage;
    var scoreDifference = 50000;

    //Loop Through All Pals From friends.js
    for (var i=0; i<friends.length; i++) {
      
      //Loop Through Each Question's Response From survey.html
      var difference = 0; 
      for (var q=0; q<userScore.length; q++) {
          difference += Math.abs(friends[i].score[q] - userScore[q]);}
      if (difference < scoreDifference) {
      scoreDifference = difference;
      palName = friends[i].name;
      palImage = friends[i].photo;
      }
    }

    friends.push(userInput);
    res.json({status: 'OK', palName: palName, palImage: palImage});
  });

};
