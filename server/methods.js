  Meteor.methods({
    'insertPlayer': function(playerName) {
      var currentUserId = Meteor.userId();
      PlayerList.insert({
        name: playerName,
        score: 0,
        createdBy: currentUserId
      });
    },
    'removePlayer': function(selectedPlayer) {
      PlayerList.remove(selectedPlayer);
    },
    'modifyPlayerScore': function(selectedPlayer, scoreValue) {
      PlayerList.update(selectedPlayer, {$inc: {score: scoreValue} });      
    }
  });