  Template.leaderboard.helpers({
    'player': function(){
      return PlayerList.find({}, {sort: {score: -1, name: 1} });
    },
    'playercount': function(){
      return PlayerList.find().count();
    },
    'playerfind': function(name){
      return PlayerList.find({ name: name }).fetch();
    },
    'selectedClass': function(){
      if (this._id == Session.get('selectedPlayer')) {
        return "selected";
      }
    },
    'showselectedplayer': function() {
      var selectedPlayer = Session.get('selectedPlayer');
      return PlayerList.findOne(selectedPlayer);
    },
    'isPlayerSelected': function() {
      if (Session.get('selectedPlayer')) {
        return true;
      } else {
        return false;
      }
    }
  });