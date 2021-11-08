var bars = document.querySelector('.fa-bars');
var menu = document.querySelector('.nav-menu');
console.log(bars)
console.log(menu)

bars.addEventListener('click', ()=>{
    menu.classList.toggle('show-nav-menu');

})

$(function () {
    $(window).scroll(function () {
      var topScroll = $(this).scrollTop();
      console.log("top: ", topScroll);
      var windowWidth = $(window).width();
      $("#hello-tag").css({
        transform: "translate3d(" + topScroll / 10 + "vw, 0%, 0px)",
        transformStyle: "preserve-3d",
      });
      $("#zumrud-div").css({
        transform: "translate3d(-" + topScroll / 10 + "vw, 0%, 0px)",
        transformStyle: "preserve-3d",
      });
    });
  });