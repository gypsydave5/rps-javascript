$(document).ready(function(){
  var p1 = new Player('Alex');
  var p2 = new Player('Mihai');
  var game = new Game(p1, p2);

  $('.choices img').on('click', function(){
    p1.picks($(this).data('pick'));
    p2.picks('rock');

    console.log('Hello')
    $('#results').append('<li>Hello world</li>');
  })
})