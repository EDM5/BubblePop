var BubbleShoot = window.BubbleShoot || {}
BubbleShoot.ui = (function($){
  var ui = {
    BUBBLE_DIMS : 44,
    init : function(){
    },
    hideDialog : function(){
     $(".dialog").fadeOut(300);
    },
    getMouseCoords : function(e){
      var coords = {x : e.pageX, y : e.pageY};
    },
  };
  return ui;
})(jQuery);
