window.addEventListener('pageshow',()=>{
  if(window.performance.navigation.type==2){
    $('.red_wrap').css('display','block');
   $('.about_a').removeClass('btn_scale');
   $('.about_a span').removeClass('home_btn2');
  }
});
window.onload = function(){
  $('.red_wrap').css('animation-delay','0');
  $('body').css('overflow','hidden');
  setTimeout(function(){
    $('body').css('overflow','auto');
},5900);

setTimeout(function(){
  $('.load_wrap,.red_wrap').css('display','none');
},5900);
}
 /* ピッチインピッチアウトによる拡大縮小を禁止 */
 document.documentElement.addEventListener('touchstart', function (e) {
  if (e.touches.length >= 2) {e.preventDefault();}
  }, {passive: false});
  /* ダブルタップによる拡大を禁止 */
  var t = 0;
  document.documentElement.addEventListener('touchend', function (e) {
  var now = new Date().getTime();
  if ((now - t) < 350){
    e.preventDefault();
  }
  t = now;
  }, false);

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

      $('.list_img').each(function(){
        var elemPos = $(this).offset().top;
        if (scroll > elemPos - windowHeight){
          $('.list_img').addClass('img_appearance');
        }
      });


      if (window.matchMedia('(min-width: 1025px)').matches) {
        $('.main').each(function(){
          var elemPos = $(this).offset().top;
          if (scroll >  400){
            $('.top_video').css('transform','scale(1.2)');
          }
          else{
            $('.top_video').css('transform','scale(1)');
          }
        });
  
  } else {
    $('.main').each(function(){
      var elemPos = $(this).offset().top;
      if (scroll > 50){
        $('.top_video').css('transform','translate(-50%,0) scale(1.2)');
      }
      else{
        $('.top_video').css('transform','translate(-50%,0) scale(1)');
      }
    });
  }


    });
  });

  $(function() {
    $('.about_a').on('click', function(e){
      e.preventDefault();         // ページ遷移を一旦キャンセル
      url = $(this).attr('href'); // 遷移先のURLを取得
      if (url !== '') {
        $('body').addClass('page_in'); // 画面遷移前のアニメーション is-slide-in
        $(this).addClass('btn_scale');
        $('.about_span').addClass('home_btn2');
        setTimeout(function () {
          window.location = url;  // 秒後に取得したURLに遷移
        }, 1000);
      }
      return false;
    });
   });


   $(function(){
    if (document.documentElement.clientHeight == 768 ) {
      jQuery(function(){
        var link_style = $('<link>').attr({
          'rel': 'stylesheet',
          'href': './css/other.css'
        });
        $('body').append(link_style);
      });
    } else {
    }
});