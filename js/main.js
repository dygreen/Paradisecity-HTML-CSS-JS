// hotel+dining 종합 > 페이지 로드시 애니메이션 효과
function intro(){
  // hotel
  $("section li.hotel1 .text").stop().animate({right:"15px"},1000);
  $("section li.hotel2 .text").stop().animate({left:"0px"},1000);
  // dining
  $("section li.dining1 .text").stop().animate({right:"90px"},1000);
  $("section li.dining2 .text").stop().animate({left:"80px"},1000);
}

// hotel 1-1: 타이틀 배경 효과
function titleIntro(){
  $(".title1-1 span").stop().animate({width:"425px"},1000);
}

$(document).ready(function(){
  // navbar scroll 효과
  $(window).scroll(function(){
    if($(window).scrollTop() > 100){
      $(".header-content-fixed").css("background","rgb(33, 32, 30, 0.7)");
    } else {
      $(".header-content-fixed").css("background","var(--black-color)");
    }
  });

  // hotel 1-1: tab menu
  let button = $("#tab .tab-button>li");
  let content = $("#tab .tab-contents>li");

  for(let i = 0; i < button.length; i++){
    button.eq(i).click(function(){
      tab(i);
    });
  }

  function tab(i){
    button.removeClass("selected");
    button.eq(i).addClass("selected");
    content.removeClass("show");
    content.eq(i).addClass("show");
  }

  // hotel 1-1: gallery
  let img_old = 0;
  let img_new = 0;

  function galleryImg(img_new){
    if(img_old != img_new){
      $(".thumbs li").eq(img_old).css({"opacity":0.3});
      $(".thumbs li").eq(img_new).css({"opacity":1});
      $(".largeImg li").eq(img_old).stop().fadeOut(300); 
      $(".largeImg li").eq(img_new).stop().fadeIn(300);
    }
    img_old = img_new;
  }

  $(".thumbs li").click(function(){ /* 썸네일 버튼 클릭 */
    img_new = $(this).index();
    galleryImg(img_new);
  });

  $(".prev_btn").click(function(){ /* prev btn */
    img_new--;
    if(img_new < 0){
      img_new = 2;
    }
    galleryImg(img_new);
  });
  
  $(".next_btn").click(function(){ /* next btn */
    img_new++;
    if(img_new > 2){
      img_new = 0;
    }
    galleryImg(img_new);
  });


});