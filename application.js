$(document).ready(function() {
  playGame();
});

var playerPositions={'player1': 1, 'player2': 1}
  function handleKeyPress(event) {
    console.log(event.which)
    var value= event.which
    movePlayer(value)
    $('td').text(' ')
    $('#player1_strip td.active').text('🚗')
    $('#player2_strip td.active').text('🚙')
    var won = playerWins();
    if(won){
      return playGame()
    }
  }

var playGame = function(){
  playerPositions={'player1': 1, 'player2': 1}
  $('td').removeClass('active')
  $('#player1_strip td:first-child').addClass('active');
  $('#player2_strip td:first-child').addClass('active');

  $(document).off('keyup', handleKeyPress);
  $(document).on('keyup', handleKeyPress);
}

var movePlayer = function(value){
  var playerKeys= {68:'player1', 75:'player2'};
  player = playerKeys[value];
  playerPositions[player]++
  console.log(playerPositions[player]);
  $('#'+player+'_strip td:nth-child('+(playerPositions[player]-1) +')').removeClass('active');
  $('#'+player+'_strip td:nth-child('+playerPositions[player]+')').addClass('active');
};

var playerWins = function(){
  if ($('#'+player+'_strip td:last-child').hasClass('active')){
  return confirm(player + " is the Winner!  Do you want to play again?");}
};
