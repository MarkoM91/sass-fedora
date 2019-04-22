function hiddenNavShow() {

  var hidden_header_right = $(".hidden-header-right");
  hidden_header_right.toggleClass("active");

}


function init() {
  var menu = $("div.hamburger-menu");
  menu.click(hiddenNavShow);
}

$(document).ready(init);
