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