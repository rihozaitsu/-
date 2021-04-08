window.onload = function(){
    var count = 0;
    var countblack = function(){
  document.getElementById('black_back').classList.add('video_slide');
    } 
    setTimeout(countblack, 700);
    var countblack = function(){
  document.getElementById('gray_back').classList.add('video_slide');
    } 
    setTimeout(countblack, 900);
  var countup = function(){
  document.getElementById('video_wrap').classList.add('video_slide');
    } 
    setTimeout(countup, 1100);
    // ページ読み込み時に実行したい処理
  document.getElementsByClassName('about_h1')[0].classList.add('h1_up');
  
  }