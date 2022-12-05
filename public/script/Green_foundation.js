;(function($){
  let cnt = 0;
  //$('.main-btn').on({
  //  mouseenter: function(){
  //    $('.main-btn').removeClass('on');
  //    $(this).addClass('on');
//
  //    $('.sub').stop().slideUp(0);
  //    $(this).next().stop().slideDown(300);
  //  }
  //});
//
  //$('#header').on({
  //  mouseleave: function(){
  //    $('.main-btn').removeClass('on');
  //    $('.sub').stop().slideUp(300);
  //  }
  //});

  // main slide
  cnt=0; 
  // 1.슬라이드 함수

  function mainSlide(){
    $('.slide-wrap').animate({left:-1200*cnt}, 600, function(){
      cnt===3?cnt=0:cnt;
      $('.slide-wrap').animate({left:-1200*cnt}, 0);
    });
  }
  // 2.다음카운트 함수
  function nextCount(){
    cnt++;
    mainSlide();
  }
  // 3.자동타이머함수
  function autoTimer(){
    setInterval(nextCount,3000);
  }
  autoTimer();

  // modal

  $('.modal-btn').on({
    click:function(e){
      e.preventDefault();
      $('.modal').fadeIn(300);
    }
  });

  $('.modal-close-btn').on({
    click:function(e){
      e.preventDefault();
      $('.modal').fadeOut(300);
    }
  });


})(jQuery);