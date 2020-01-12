window.onscroll = function() {
  var nav = document.getElementById("navbar");
  if (window.pageYOffset >= 560) {
    nav.className = "sticky";
  } else if (window.pageYOffset < 560) {
    nav.classList.remove("sticky");
  }
};

function display_menu() {
  $("#div_menu").toggle("slide");
}

function ScrollToTop() {
  window.scrollTo(0, 0);
}
