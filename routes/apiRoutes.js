var friendData = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res){
        var newFriend ={
            name:req.body.name,
            photo:req.body.photo,
            scores:req.body.scores
        }

          var currentMatch;
          var currentScore = 1000;
          var newScore;
      
          for (var i =0; i < friendData.length; i++) {
            newScore = 0;
    
            for (var j =0; j < friendData[i].scores.length; j++) {
              var diff = Math.abs(friendData[i].scores[j] - newFriend.scores[j])
              newScore += diff;
            }
            if (newScore < currentScore) {
              currentScore = newScore;
              currentMatch = friendData[i]
            }
          
          }
        friendData.push(newFriend);
        res.json(currentMatch);
    })
}


