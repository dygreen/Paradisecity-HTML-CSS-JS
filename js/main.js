// hotel+dining 종합 > 페이지 로드시 애니메이션 효과
function intro(){
  // hotel
  $("section li.hotel1 .text").stop().animate({right:"15px"},1000);
  $("section li.hotel2 .text").stop().animate({left:"0px"},1000);

  // dining
  $("section li.dining1 .text").stop().animate({right:"90px"},1000);
  $("section li.dining2 .text").stop().animate({left:"80px"},1000);
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

});