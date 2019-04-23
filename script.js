function sliderImg() {
  var activeSlider = $('div.slider.active');
  activeSlider.removeClass("active");

  var nextSlider;
  if (activeSlider.hasClass("last")) {

    nextSlider = $('div.slider.first');
  } else {
    nextSlider = activeSlider.next("div.slider");
  }

  nextSlider.addClass("active");
}

function hiddenNavShow() {
  var hidden_header_right = $(".hidden-header-right");
  hidden_header_right.toggleClass("active");
}

function resize() {
    var ww = document.body.clientWidth;
    if (ww >750) {
      $('.hidden-header-right').removeClass('active');
    }
}

function init() {
  var menu = $("div.hamburger-menu");
  menu.click(hiddenNavShow);

  $(window).resize(resize);

  setInterval(sliderImg, 7000);
}

$(document).ready(init);
