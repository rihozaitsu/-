$(function(){
  $('.btn_wrap,.homebtn_wrap').on('click', function() {
  
    // メニューを表示・非表示させています
  $('.menu').toggleClass('over');
  // ボタンの切り替えです
  setTimeout(function(){
  $('.btn,.home_btn').toggleClass('btnout');
  },10);
  setTimeout(function(){
  $('.btn2,.home_btn2').toggleClass('btnchange');
  },10);
});
});

$(function(){
  $(window).scroll(function (){
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var windowWidth = $(window).width();
　　　　　var windowSm = 768;
    $('.fadein').each(function(){
      var elemPos = $(this).offset().top;
      if (scroll > elemPos - windowHeight ){
        $(this).addClass('fadein_up');
      }
    });
   });
});