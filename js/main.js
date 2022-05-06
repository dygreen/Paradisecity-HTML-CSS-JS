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
  $(".title1-1 span").stop().animate({width:"435px"},1000);
  $(".title1-2 span").stop().animate({width:"640px"},1000);
}

// dining 2-1, 2-2: 이미지 애니메이션
function showUp(){
  // 2-1
  $("#dining1 .fine1, .fine2").css("opacity","1").addClass("showUp");
  // 2-2
  $("#dining2 .casual1, .casual2, .casual3").css("opacity","1").addClass("showUp");
}


$(document).ready(function(){

  // navbar scroll 효과 + top btn
  $(window).scroll(function(){
    if($(window).scrollTop() > 100){
      $(".header-content-fixed").css("background","rgb(33, 32, 30, 0.7)");
      $("#top_btn").fadeIn();
    } else {
      $(".header-content-fixed").css("background","var(--black-color)");
      $("#top_btn").fadeOut();
    }
  });

  // sub menu slide 효과
  $("nav>ul>li").hover(function(){
    $("nav .sub-menu").stop().slideDown(500);
  },function(){
    $("nav .sub-menu").stop().slideUp(500);
  });

  // top btn 클릭시 부드럽게 올라가는
  $("#top_btn").click(function(){
    $("html, body").animate({scrollTop : 0}, 600);
    return false;
  });


  // === hotel 1-1: tab menu ===
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
      $(`.${galleryF} .thumbs li`).eq(img_old).css({"opacity":0.3});
      $(`.${galleryF} .thumbs li`).eq(img_new).css({"opacity":1});
      $(`.${galleryF} .largeImg li`).eq(img_old).stop().fadeOut(300); 
      $(`.${galleryF} .largeImg li`).eq(img_new).stop().fadeIn(300);
    }
    img_old = img_new;
  }

  $(".thumbs li").click(function(){ /* 썸네일 버튼 클릭 */
    galleryF = $(this).parent().parent().parent().attr("class"); /* .r1-1, .r1-2..찾기 */
    $(`.${galleryF} .gallery>a`).fadeIn(); /* prev/next btn 나타남 */
    img_new = $(this).data("id");
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


  // === dining 2-1: 스크롤 애니메이션 ===
  $(window).scroll(function(){
    let val = $(window).scrollTop();
    if(val > 600 && val < 1300){
      $("#dining1 .fine3, .fine4").css("opacity","1").addClass("showUp");
    } else if(val > 1300 && val < 1900){
      $("#dining1 .fine5, .fine6").css("opacity","1").addClass("showUp");
    } else if(val > 1900){
      $("#dining1 .fine7, .fine8").css("opacity","1").addClass("showUp");
    }
  });

  // dining 2-2: 스크롤 애니메이션
  $(window).scroll(function(){
    let val2 = $(window).scrollTop();
    if(val2 > 360 && val2 < 720){
      $("#dining2 .casual4, .casual5, .casual6").css("opacity","1").addClass("showUp");
    } else if(val2 > 720){
      $("#dining2 .casual7, .casual8, .casual9").css("opacity","1").addClass("showUp");
    }
  });


  // === art-tainment: icon 효과 ===
  let count = 1;
  $(".container3 li .iconify").click(function(){
    count++;
    if(count % 2 === 0){
      $(this).html("<span class='iconify' data-icon='majesticons:heart' data-width='24' data-height='24'></span>");
    } else {
      $(this).html("<span class='iconify' data-icon='majesticons:heart-line' data-width='24' data-height='24'></span>");
    }
  });

  // 스크롤 애니메이션
  $(window).scroll(function(){
    let height = $(window).scrollTop();
    console.log(height);

    // 스크롤 위치에 따른 투명도 조절 : 1
    let y = -122/23180 * height + 1220/190;
    $(".container3 li").eq(0).css("opacity", y);
    // 크기 조절 :1
    let z = -1/950 * height + 1980/950;
    if(height > 1030 && height < 1660){
      $(".container3 li").eq(0).css("transform",`scale(${z})`);
    }

    // 2
    let y2 = -1/200 * height + 186/20;
    $(".container3 li").eq(1).css("opacity", y2);
    let z2 = -1/1000 * height + 266/100;
    if(height >= 1660 && height < 2310){
      $(".container3 li").eq(1).css("transform",`scale(${z2})`);
    }

    // 3
    let y3 = -1/170 * height + 248/17;
    $(".container3 li").eq(2).css("opacity", y3);
    let z3 = -1/850 * height + 316/85;
    if(height >= 2310 && height < 2940){
      $(".container3 li").eq(2).css("transform",`scale(${z3})`);
    }

    // 4
    let y4 = -1/140 * height + 308/14;
    $(".container3 li").eq(3).css("opacity", y4);
    let z4 = -1/700 * height + 364/70;
    if(height >= 2940){
      $(".container3 li").eq(3).css("transform",`scale(${z4})`);
    }
  });


  // === wedding : tab ===
  let button4 = $("#tab4 #tab-button4>li");
  let content4 = $("#tab4 #tab-contents4>li");

  for(let i = 0; i < button4.length; i++){
    button4.eq(i).click(function(){
      tab4(i);
    });
  }

  function tab4(i){
    let move4 = 100 + 100 * i;
    $(".tab-highlight").animate({top:move4}); // tab box
    button4.find("a").css("color","var(--black-color)"); //탭의 모든 글자색
    button4.find("a").eq(i).css("color", "var(--white-color"); // 선택탭 글자색
    content4.removeClass("show");
    content4.eq(i).addClass("show");
  }


  // === activities : slide ===
  let img = $(".simage5 ul");
  let img_list = $(".simage5 ul li");
  let btn = $(".bottom-btn5 ul li");
  let up_btn = $(".side-btn5 .up-btn");
  let down_btn = $(".side-btn5 .down-btn");
  let img_height = img_list.height();
  let img_leng = img_list.length;
  let img_old5 = 0; 
  let img_new5 = 0;

  // 메인 비주얼: 이미지 이동
  function slideImg(img_new){
    targetX = -(img_new*img_height);
    img.animate({top:targetX}, 600); 
    btn.eq(img_old5).removeClass("activeUp");
    btn.eq(img_new5).addClass("activeUp"); 
    img_old5=img_new5;
  }

  // 슬라이드 자동재생
  function slideAuto(){
    img_new5++;
    if(img_new5==img_leng){
      img_new5=0;
    }
    slideImg(img_new5);
  };

  auto=setInterval(slideAuto,4000);

  // 하단버튼 클릭
  btn.click(function(){
    clearInterval(auto);
    img_new5=$(this).index();
    slideImg(img_new5);
    auto=setInterval(slideAuto,4000); 
  });

  // up/down버튼
  down_btn.click(function(){
    clearInterval(auto);
    img_new5++;
    if(img_new5>img_leng-1){
      img_new5=0;
    }
    slideImg(img_new5);
    auto=setInterval(slideAuto,4000);
  });

  up_btn.click(function(){
    clearInterval(auto);
    img_new5--;
    if(img_new5<0){
      img_new5=img_leng-1; 
    }
    slideImg(img_new5);
    auto=setInterval(slideAuto,4000);
  });


  //  === login : tab ===
  let button6 = $("#tab6 #tab-button6>li");
  let content6 = $("#tab6 #tab-contents6>li");

  for(let i = 0; i < button6.length; i++){
    button6.eq(i).click(function(){
      tab6(i);
    });
  }

  function tab6(i){
    button6.removeClass("selected");
    button6.eq(i).addClass("selected");
    content6.removeClass("show");
    content6.eq(i).addClass("show");
  }


  //  === index(main) : accordion ===
  $("dl dt").click(function(){
    $("dl dt").find("+dd").hide("slow");
    $(this).find("+dd").show("slow");
  });

  $("dl .main-tab1").click(function(){
    $("dl").css({"background":"url(image/main-bg1.jpeg) no-repeat right center","background-size": "cover","transition":"all 1s"});
  });
  $("dl .main-tab2").click(function(){
    $("dl").css({"background":"url(image/main-bg2.jpeg) no-repeat center top","background-size": "cover","transition":"all 1s"});
  });
  $("dl .main-tab3").click(function(){
    $("dl").css({"background":"url(image/main-bg3.jpeg) no-repeat center top","background-size": "cover","transition":"all 1s"});
  });
  $("dl .main-tab4").click(function(){
    $("dl").css({"background":"url(image/main-bg4.jpg) no-repeat center top","background-size": "cover","transition":"all 1s"});
  });
  $("dl .main-tab5").click(function(){
    $("dl").css({"background":"url(image/main-bg5.jpg) no-repeat center top","background-size": "cover","transition":"all 1s"});
  });

  // 메뉴 토글 버튼
  $(".menu-toggle-btn").click(function(){
    $(this).toggleClass("menu-open");
    $("#main-menu").slideToggle("fast");
  });

});