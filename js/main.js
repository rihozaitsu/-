window.onload = function(){
    setTimeout(function(){
        $('#load').addClass('logo_none');
    },6000);
}

$(function(){
    $(window).scroll(function (){
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
      $('.footer_black').each(function(){
        if (scroll > 600){
          $(this).css('z-index','10');
        }
        else{
        $(this).css('z-index','5');
        }
      });
      $('.video_white').each(function(){
        if (scroll > 10){
          $(this).css('opacity','0');
        }
        else{
        $(this).css('opacity','1');
        }
      });

      $('.list_img').each(function(){
        var elemPos = $(this).offset().top;
        if (scroll > elemPos - windowHeight + 100){
          $('.list_img').addClass('img_appearance');
        }
      });

      $('.top_span').each(function(){
        if (scroll > 100){
          $(this).css('opacity','0');
        }
        else{
          $(this).css('opacity','1');
    };
  });
})
})