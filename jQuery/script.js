$(function(){

    //トップ画面の波紋
    $(document).ready(function() {
      $('#top').ripples({ //波紋をつけたい要素の指定
      resolution: 800, //波紋の広がりの速度（値が大きいほど遅くなる。）
      dropRadius: 10, //波紋の大きさ（値が大きいほど大きくなる。）
      perturbance: 0.01 //波紋による屈折量（値が大きいほどブレる。）
      });
    });

    //ハンバーガーメニューの動き
    $('.nav-toggle').on('click', function () {
        $('.nav-toggle, .sp-nav').toggleClass('show');
    });

    //ハンバーガーメニューがクリックされたらセクションへ移動
    $('.sp-nav-item-link').on('click', function(event) {
        $('.nav-toggle').trigger('click');
    });

    //to topボタンが押されたらトップへスクロール 
    $(window).on("scroll", function($) {
        if (jQuery(this).scrollTop() > 500) {
          jQuery('.floating').show();
        } else {
          jQuery('.floating').hide();
        }
      });
     
    //スムーススクロール
    $(function(){
      $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });
    });

    //スライダー
    $('.works-wrap').slick({
      dots: true,
      prevArrow:false,
      nextArrow:false,
      dotsClass: 'slide-dots'
    });
});