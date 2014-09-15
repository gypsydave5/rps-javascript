function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
}

Game.prototype.winner = function(){
	if (this.player1.pick === this.player2.pick) {
		return null;
	};
	if (this.PAIRS[this.player1.pick][this.player2.pick] !== undefined) {
		return this.player1;
	}
	else {
		return this.player2;
	};
}

Game.prototype.PAIRS = {
	rock:	{ scissors: '', lizard: '' },
	paper:  { rock: '', spock: '' },
	scissors: { paper: '', lizard: '' },
	lizard: { spock: '', paper: '' },
	spock: { scissors: '', rock: '' }
}
