$(function() {
  $(".form-input").focusin(function() {
    //$(this).siblings("i").css("color","black")
  })
  
  $(".menu-btn").click(function() {
    $(".bs-example-navbar-collapse-1").slideToggle(300);
  })

  $(".close-btn").click(function() {
    $(".description").removeClass("show-des");
    $(".des-text").removeClass("show");
  })

  $(".ca-btn").click(function() {
    $(".login-container").css("transform","translateX(-110%) scale(.5)");
    $(".signup-container").css("transform","translateX(0%)");
    $(".signup-container").css("display","block") 
  })

  $(".signup-login-btn").click(function() {
    $(".signup-container").css("transform","translateX(110%) scale(.5)");
    $(".login-container").css("transform","translateX(0%)");
  })

  var top=$("body").scrollTop();

  $(window).scroll(function () {
    if ($(window).width() >= 751) {
      var top=$("body").scrollTop();
      if(top>=50) {
        $("nav").css("height","55px");
      }
      else {
        $("nav").css("height","75px");
      }
    }
  });

  $(window).on('resize', function() {
    if ($(window).width() >= 751) {
      $(".bs-example-navbar-collapse-1").slideDown(10);
      $("nav").css("height","75px");
    }
    else {
      $(".description").removeClass("show-des");
      $(".bs-example-navbar-collapse-1").slideUp(10);
      $("nav").css("height","50px");
    }
  });

  var timeOut;

  $(".tp").click(function(e) {
    
    $(".des").css("display","none");
    $(".tp").removeClass("tp-active");

    var ripple=$(".description").find(".ripple");
    var text=$(".description").find(".des-text");
    var dt=$(this).attr("class").replace("tp ","");
    dt="."+dt;
    //alert(dt);
    clearTimeout(timeOut);

    ripple.removeClass("ripple-effect");
    text.removeClass("show");
    $(".description").css("box-shadow","none");
    $(".tp").removeClass("tp-active");

    var t=$("body").scrollTop();
    var x=parseInt(e.pageX-($("body").offset().left)-(ripple.width() / 2));
    var y=parseInt(e.pageY-($("body").offset().top)-t-(ripple.height() / 2));

    ripple.css({
      left: x,
      top: y
    }).addClass("ripple-effect");

    $(".description").addClass("show-des")
    $(".description").find(dt).css("display","block");
    $(this).addClass("tp-active");
    
    timeOut=setTimeout(function(){
      $(".description").css("box-shadow","0 0 0 1px #EDE7F6, 0 5px 1.5rem 0px rgba(0,0,0,0.7)");
      text.addClass("show");
    }, 500);
  });
});
function slide() {
  $(".logSin-parent, .logSin-container").toggleClass("slider");
}