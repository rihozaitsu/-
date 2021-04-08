// フェードインの処理をまとめた関数
function fadeinEvent() {
    // getElementsByClassName で、fadein のクラスを持つ要素を取得し配列として保持
    var fadeinClass= Array.prototype.slice.call(document.getElementsByClassName("fadein"));

    // 配列の数だけ処理を行う
    fadeinClass.forEach(function( element ) {

        // getBoundingClientRect で要素の位置や幅や高さなどを取得
        var boundingClientRect = element.getBoundingClientRect();

        // スクロールの位置情報（html のスクロールがなければ、body のスクロール）を取得
        var scroll = document.documentElement.scrollTop || document.body.scrollTop;

        // ブラウザウィンドウの ビューポートの高さ
        var windowHeight = window.innerHeight;

        // スクロールの位置が、フェードインしたい要素の位置にいるかどうか判定する
        if (scroll > scroll + boundingClientRect.top - windowHeight + 200){

            // 要素を表示する場合は、要素の透明度を無くし、Y方向の移動距離を無くす。これで表示される
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
}

// 画面がロードされたときに行う処理を記載
window.onload = function(){
    // 画面が中途半端なスクロール位置でリロードされても表示するべきものが表示されるようにするため、ロードですぐに呼び出す
    fadeinEvent();

    // スクロールしたら動くエベントとして用意しておく。スクロールするたびに動くようにする
    window.addEventListener('scroll', fadeinEvent, false);
}

/* worksページ toggle */
$(function(){
    $('#togglebtn_1').on('click', function(){
        $('#toggle1').slideToggle(600, alertFunc);
        function alertFunc(){
            if ($(this).css('display') == 'block') {
            $("#btn_txt1").text("▲ Close ▲");
            }else{
            $("#btn_txt1").text("▼ Read Open ▼");
            }
        };
    });
    $('#togglebtn_2').on('click', function(){
        $('#toggle2').slideToggle(600, alertFunc);
        function alertFunc(){
            if ($(this).css('display') == 'block') {
            $("#btn_txt2").text("▲ Close ▲");
            }else{
            $("#btn_txt2").text("▼ Read Open ▼");
            }
        };
    });
    $('#togglebtn_3').on('click', function(){
        $('#toggle3').slideToggle(600, alertFunc);
        function alertFunc(){
            if ($(this).css('display') == 'block') {
            $("#btn_txt3").text("▲ Close ▲");
            }else{
            $("#btn_txt3").text("▼ Read Open ▼");
            }
        };
    });
});
/*
//背景画像レスポンシブ変更
$(function() {
    // 置換の対象とするclass属性。
    var $elem = $('.back-move');
    // 置換の対象とするsrc属性の末尾の文字列。
    var sp = 'sp.';
    var pc = 'pc.';
    // 画像を切り替えるウィンドウサイズ。
    var replaceWidth = 768;
  
    function imageSwitch() {
      // ウィンドウサイズを取得する。
      var windowWidth = parseInt(window.innerWidth);
  
      // ページ内にあるすべての`.js-image-switch`に適応される。
      $elem.each(function() {
        var $this = $(this);
        // ウィンドウサイズが768px以上であれば_spを_pcに置換する。
        if(windowWidth >= replaceWidth) {
          $this.attr('src', $this.attr('src').replace(sp, pc));
  
        // ウィンドウサイズが768px未満であれば_pcを_spに置換する。
        } else {
          $this.attr('src', $this.attr('src').replace(pc, sp));
        }
      });
    }
    imageSwitch();
  
    // 動的なリサイズは操作後0.2秒経ってから処理を実行する。
    var resizeTimer;
    $(window).on('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        imageSwitch();
      }, 200);
    });
  });*/

