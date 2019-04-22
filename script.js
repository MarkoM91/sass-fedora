function hiddenNavShow() {

  var hidden_header_right = $(".hidden-header-right");
  hidden_header_right.toggleClass("active");
}

function resize() {
    var ww = document.body.clientWidth;
    if (ww >100) {
      $('.hidden-header-right').removeClass('active');
    }
  };
  $(window).resize(function(){
    resize();
  });
function init() {

  var menu = $("div.hamburger-menu");
  menu.click(hiddenNavShow);


}
$(document).ready(init);
