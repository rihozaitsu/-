$(function(){
  $('.btn_wrap').on('click', function() {
  
    // メニューを表示・非表示させています
  $('.menu').toggleClass('over');
  // ボタンの切り替えです
  setTimeout(function(){
  $('.btn').toggleClass('btnout');
  },10);
  setTimeout(function(){
  $('.btn2').toggleClass('btnchange');
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