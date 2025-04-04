// function to open/close nav
function toggleNav() {
  // if nav is open, close it
  if ($("nav").is(":visible")) {
    $("nav").fadeOut();
    $("button").removeClass("menu");
  }
  // if nav is closed, open it
  else {
    $("button").addClass("menu");
    $("nav").fadeIn().css('display', 'flex');
  }
}

// when clicking + or ☰ button
$("button").click(function () {
  // when clicking ☰ button, open nav
  if ($("header").hasClass("open")) {
    toggleNav();
  }
  // when clicking + button, open header
  else {
    $("header").addClass("open");
    toggleNav();
  }
});

// close nav
$("#nav-close").click(function () {
  toggleNav();
});


