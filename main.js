/*
* Offline "Set" card game
* Colin Bott
* 6/6/20
* Set card images from https://smart-games.org/en/set/start
*/
$( function() {
    var NUM_CARDS = 81;
    var SHAPES = ["oval", "squiggle", "diamond"];
    var FILLS = ["solid", "striped", "open"];
    var COLORS = ["red", "green", "blue"];

    $("#cardcount").html("Cards Remaining: " + NUM_CARDS);

    var current_card_num = NUM_CARDS;
    var deck = Array.from({length: NUM_CARDS}, (x,i) => i);
    deck = shuffle(deck);

    $("button").click( function( event ) {
      if(current_card_num < 1){
        return;
      }
      current_card_num--;
      $("#cardcount").html("Cards Remaining: " + current_card_num);
      current_card = deck[current_card_num];
      shape  = Math.trunc(current_card / 27) % 3;
      fill   = Math.trunc(current_card / 9) % 3;
      color  = Math.trunc(current_card / 3) % 3;
      number = Math.trunc(current_card) % 3;
      image_name = SHAPES[shape] + "_" + FILLS[fill] + "_" + COLORS[color];
      image_tag = '<img class="shape" src="images/' + image_name + '.png"><br>';
      image_tag = image_tag.repeat(number + 1);
      card = '<div class="card"><div class="center"><div class="shape-container">' + image_tag + '</div></div></div>';
      $("#table").append(card);
    } );

    $("#table").on("click", ".card", function(e) {
      $(e.target).parents(".card").addBack().remove();
    });
} );

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 * Code source: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}
