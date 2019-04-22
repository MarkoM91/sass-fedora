function hiddenNavShow() {

  var x = window.matchMedia("(max-width: 768px)");
  var hidden_header_right = $(".hidden-header-right");

  if (x.matches) {
    hidden_header_right.addClass("active");
  }
}

function init() {

  var menu = $("div.hamburger-menu");
  menu.click(hiddenNavShow);
}

$(document).ready(init);
