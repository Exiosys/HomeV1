window.onscroll = function() {
  var nav = document.getElementById("navbar");
  if (window.pageYOffset >= 565) {
    nav.className = "sticky";
  } else if (window.pageYOffset < 565) {
    nav.classList.remove("sticky");
  }
};

function display_menu() {
  var menu = document.getElementById("div_menu");
  menu.className = "div_menu_display";
}

function hide_menu() {
  var menu = document.getElementById("div_menu");
  menu.className = "div_menu_hidden";
}
