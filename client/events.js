  Template.leaderboard.events({
    'click .player': function(){
      Session.set('selectedPlayer', this._id);
    },
    'dblclick .player': function(){

    },
    'mouseover .player': function(){
//      console.log(this.name + ":" + this.score);
    },
    'click .increment': function() {
      var selectedPlayer = Session.get('selectedPlayer');
      Meteor.call('modifyPlayerScore', selectedPlayer, 5);
    },
    'click .decrement': function() {
      var selectedPlayer = Session.get('selectedPlayer');
      Meteor.call('modifyPlayerScore', selectedPlayer, -5);
    }
  });
  Template.addPlayerForm.events({
    'submit form': function(event) {
      event.preventDefault();
      var playerName = event.target.playerName.value;
      Meteor.call('insertPlayer', playerName);      
      event.target.playerName.value = "";
    },
    'click .removePlayer': function() {
//      if (Template.leaderboard.helpers.isPlayerSelected()) {
        var selectedPlayer = Session.get('selectedPlayer');
        Meteor.call('removePlayer', selectedPlayer);
//        PlayerList.remove(Session.get('selectedPlayer'));
//      }
    }
  });