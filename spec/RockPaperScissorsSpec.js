describe("Rock-Paper-Scissors", function() {
  var player1, player2, game;

  beforeEach(function() {

    player1 = new Player('Dave');
    player2 = new Player('Alex');
    game = new Game(player1, player2);

  });

  describe('winning and losing', function() {

    describe('rock', function() {

      it('should beat scissors', function() {
        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });

      it('should beat lizard', function() {
        player1.picks('rock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to paper', function() {
        player1.picks('rock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to spock', function() {
        player1.picks('rock');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('paper', function() {

      it('should beat rock', function() {
        player1.picks('paper');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
      });

      it('should beat spock', function() {
        player1.picks('paper');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to scissors', function() {
        player1.picks('paper');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to lizard', function() {
        player1.picks('paper');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('scissors', function() {

      it('should beat paper', function() {
        player1.picks('scissors');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
      });

      it('should beat lizard', function() {
        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to rock', function() {
        player1.picks('scissors');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to spock', function() {
        player1.picks('scissors');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);
      });

    });

    describe('lizard', function() {

      it('should beat paper', function() {
        player1.picks('lizard');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
      });

      it('should beat spock', function() {
        player1.picks('lizard');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to rock', function() {
        player1.picks('lizard');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to scissors', function() {
        player1.picks('lizard');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
      });

    });

    describe('spock', function() {

      it('should beat rock', function() {
        player1.picks('spock');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
      });

      it('should beat scissors', function() {
        player1.picks('spock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to paper', function() {
        player1.picks('spock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to lizard', function() {
        player1.picks('spock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);
      });

    });
  });

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {
        var drawGameResults = ['rock', 'paper', 'scissors'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });

        expect(drawGameResults).toEqual([null, null, null]);
      });

    });

  });

  describe('losing', function (){
	  it("knows the loser of a game", function() {
		  player1.picks('rock');
		  player2.picks('scissors');
		  expect(game.loser()).toBe(player2)
	  });
  });

  describe('winning verb', function() {
	  it("returns the correct winning verb", function() {
		  expect(game.winningVerb('rock', 'scissors')).toEqual("blunts");
	  });
  });

  describe('victory message', function() {

    it("should return the winner's name, winner's implement, the verb and the loser's name with the loser's implement", function() {
      player1.picks('rock');
      player2.picks('scissors');
      expect(game.victoryMessage()).toEqual("Dave's rock blunts Alex's scissors");
    });

  });

});





