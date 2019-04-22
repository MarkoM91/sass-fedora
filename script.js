function leftClick() {

  var activeImg = $('img.active');
  activeImg.removeClass("active");

  var prevImg;
  var prevImg = activeImg.prev("img");
  if (activeImg.hasClass("first")) {

   prevImg = $("img.last");
 }
 prevImg.addClass("active");
}

function rightClick() {

  var activeImg = $('img.active');
  activeImg.removeClass("active");

  var nextImg;
  if (activeImg.hasClass("last")) {

    nextImg = $('.picture-container > img.first');
  } else {

    nextImg = activeImg.next("img");
  }
  nextImg.addClass("active");

}

function init() {

}

$(document).ready(init);
