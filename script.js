function hiddenNavShow() {

  var hidden_header_right = $(".hidden-header-right");
  hidden_header_right.toggleClass("active");
}

function init() {

  var menu = $("div.hamburger-menu");
  menu.click(hiddenNavShow);

  var y = window.matchMedia("(min-width: 768px)");
  var hidden_header_right = $(".hidden-header-right");

  if (y) {
  hidden_header_right.css("display" , "none");
  }
}

$(document).ready(init);
