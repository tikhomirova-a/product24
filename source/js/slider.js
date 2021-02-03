let bxslider = null;
$(document).ready(function(){
  let winwidth = $(window).width();
  if(winwidth < 1024){
    bxslider = $('.bxslider').bxSlider();
  }
});

$(window).resize(function(e) {

  let winwidth = $(window).width();
  if(bxslider != null && winwidth >= 1007 ){
    bxslider.destroySlider();
    bxslider = null;

  }else if(bxslider === null && winwidth < 1007 ){
    bxslider = $('.bxslider').bxSlider();
  }
});
