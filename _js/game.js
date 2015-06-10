var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.Game = (function($){
  var Game = function(){
    this.init = function(){
      $(".but_start_game").bind("click",startGame);
    };
    var startGame = function(){
    };
  };
  return Game;
})(jquery);
