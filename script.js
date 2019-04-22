function hiddenNavShow() {

  var x = window.matchMedia("(max-width: 768px)");
  var y = window.matchMedia("(min-width: 768px)");
  var hidden_header_right = $(".hidden-header-right");

  if (x.matches) {
    hidden_header_right.addClass("active");
  } else if (y.matches) {
    hidden_header_right.removeClass("active");
  }
}

function init() {

  var menu = $("div.hamburger-menu");
  menu.click(hiddenNavShow);
}

$(document).ready(init);
