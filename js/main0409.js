window.onload = function(){
  // $(this).removeClass('btn_scale');
  //   setTimeout(function(){
  //       $('#load').addClass('logo_none');
  //   },5900);
  $('body').css('overflow','hidden');
  setTimeout(function(){
    $('body').css('overflow','auto');
},5900);
}


$(function(){
    $(window).scroll(function (){
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
　　　　　var windowSm = 768;
      $('.footer_black').each(function(){
        if (scroll > 600){
          $(this).css('z-index','10');
        }
        else{
        $(this).css('z-index','5');
        }
      });

      $('.video_white').each(function(){
　　　if (windowWidth <= windowSm) {
    　　　if (scroll > 10){
    　　  $(this).css('opacity','0');
    　　　}
        else{
        $(this).css('opacity','1');
        }
　　　}
      else {
      }
      });

      $('.list_img').each(function(){
        var elemPos = $(this).offset().top;
        if (scroll > elemPos - windowHeight ){
          $('.list_img').addClass('img_appearance');
        }
      });

      $('.top_span,.smile_wrap').each(function(){
    if (windowWidth <= windowSm) {
        if (scroll > 100){
          $(this).css('opacity','0');
        }
        else{
            $(this).css('opacity','1');
        };
       }
    else {
      if (scroll > 100){
        $(this).css('opacity','0.3');
        $('.top>.lr').css('top','20vh');
      }
      else{
          $(this).css('opacity','1');
        $('.top>.lr').css('top','18vh');

      };
    }
     });

})
})

$(function() {
  $('.about_btn').on('click', function(e){
    e.preventDefault();         // ページ遷移を一旦キャンセル
    url = $(this).attr('href'); // 遷移先のURLを取得
    if (url !== '') {
      $('body').addClass('page_in'); // 画面遷移前のアニメーション is-slide-in
      $(this).addClass('btn_scale');
      $('.about_span').css('opacity','0');
      setTimeout(function () {
        window.location = url;  // 秒後に取得したURLに遷移
      }, 1000);
    }
    return false;
  });
 });