var player1 = new Player('Dave');
var player2 = new Player('Bob');
var game = new Game(player1, player2);
var winningMessage;
var options = function(){
	var options = [];
	for(var option in game.PAIRS) options.push(option);
	return options;
};

var aRandomPickFrom = function(array) {
	return array[Math.floor(Math.random() * array.length)];
};

$(document).ready(function() {
	$('#options img').on('click', function(){
		player1.pick = $(this).data('pick');
		player2.pick = aRandomPickFrom(options());
		$('<li>' + game.victoryMessage() + '</li>')
			.prependTo('ol')
			.css('opacity', 0)
			.slideDown(1000)
			.animate(
				{opacity: 1},
				{queue: false, duration: 2000}
				);
		$('ol li:gt(3)').fadeOut(1000, function(){
			$(this).remove();
		});
	});
});
