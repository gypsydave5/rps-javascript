function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
};

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
};

Game.prototype.loser = function(){
	return (this.winner === this.player1 ? this.player1 : return this.player2

Game.prototype.victoryMessage = function(){
	var message;

	var winnerName = this.winner().name;
	var loserName = this.loser().name;
	var winningWeapon = this.winner().pick;
	var losingWeapon = this.loser().pick;
	var winningVerb = this.winningVerb(winningWeapon, losingWeapon);
	if (this.winner()) {
		message = ( winnerName + "'s " + winningWeapon + " " + winningVerb + " " + loserName + "'s " + losingWeapon );
	} else {
		message = 'Draw';
	};

	return message;
};

Game.prototype.winningVerb = function(playerPick, opponentPick) {
	return this.PAIRS[playerPick][opponentPick]
}

Game.prototype.PAIRS = {
	rock:	{ scissors: 'blunts', lizard: 'crushes' },
	paper:  { rock: 'covers', spock: 'disproves' },
	scissors: { paper: 'cuts', lizard: 'decapitates' },
	lizard: { spock: 'poisons', paper: 'eats' },
	spock: { scissors: 'smashes', rock: 'vapourizes' }
};

