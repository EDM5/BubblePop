var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.Game = (function($){
  var Game = function(){
    var curBubble;
    this.init = function(){
      $(".but_start_game").bind("click",startGame);
    };
    var startGame = function(){
      $(".but_start_game").unbind("click");
      BubbleShoot.ui.hideDialog();
      curBubble = getNextBubble();
    };
    var getNextBubble = function(){
      var bubble = BubbleShoot.Bubble.create();
      bubble.getSprite().addClass("cur_bubble");
     $("#board").append(bubble.getSprite());
      return bubble;
    };
  };
  return Game;
})(jquery);
