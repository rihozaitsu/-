window.onload = function(){
  window.onpageshow = function(event) {
    if (event.persisted) {
       window.location.reload();
    }
  };
  $('.about_btn').removeClass('btn_scale');
  // ページ読み込み時に実行したい処理
  var count = 0;
  var countup = function(){
document.getElementById('video_wrap').classList.add('video_slide');
  } 
  setTimeout(countup, 2600);

  var countblack = function(){
document.getElementById('black_back').classList.add('video_slide');
  } 
  setTimeout(countblack, 2200);

  var countblack = function(){
document.getElementById('gray_back').classList.add('video_slide');
  } 
  setTimeout(countblack, 2400);
  
var countload = function(){
document.getElementById('load').classList.add('load_none');
} 
setTimeout(countload, 2000);

var countspan = function(){
var documentli=	document.getElementsByClassName( "ss" );
documentli[0].classList.add('anime_span');
documentli[1].classList.add('anime_span');
documentli[2].classList.add('anime_span');
documentli[3].classList.add('anime_span');
documentli[4].classList.add('anime_span');
documentli[5].classList.add('anime_span');
documentli[6].classList.add('anime_span');
}
setTimeout(countspan, 2000);
}



$(function(){
  $(window).scroll(function (){
    $('.title_wrap').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 100){
        $('.title').addClass('title_up');
      }
    });
  });
});

$(function(){
  $(window).scroll(function (){
    $('.title_wrap2').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 100){
        $('.title2').addClass('title_up');
      }
    });
  });
});

$(function(){
  $(window).scroll(function (){
    $('.list_img_one').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 100){
        $(this).addClass('img_appearance');
        $('.list_img').addClass('img_appearance');
      }
    });
  });
});

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


 $(function(){
  $(window).scroll(function (){
    $('.service_in').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 100){
        $(this).addClass('img_appearance');
      }
    });
  });
});

$(function(){
  $(window).scroll(function (){
    $('.gray_over').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200){
        $(this).addClass('gray_up');
        $(this).next().addClass('img_big');
      }
    });
  });
});


$(function(){
  $(window).scroll(function (){
$('.concept,.concept_min').each(function(){
  var scroll = $(window).scrollTop();
  if (scroll > 100){
    $(this).css('opacity','0');
    $(this).css('transform','scale(0.9)');
    $('.white_wrap').addClass('white_hide');
  }
  else{
    $(this).css('opacity','1');
    $(this).css('transform','scale(1)'); 
    $('.white_wrap').removeClass('white_hide');
  }
});
  });
  

});
