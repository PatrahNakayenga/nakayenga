/*
$(document).ready(function() {
  // When the .nav-icon is clicked, toggle the 'open' class on the nav-links
  $(".nav-icon").on("click", function() {
    $(".nav-links").toggleClass("open");
  });
});


*/


$(document).ready(function() {
  // When the .nav-icon is clicked, toggle the 'open' class on the nav-icon and nav-links
  $(".nav-icon").on("click", function() {
    $(".nav-icon").toggleClass("open");  // Toggle 'open' class on the nav-icon to change the icon
    $(".nav-links").toggleClass("open"); // Toggle 'open' class on the nav-links to show/hide the menu
  });
});
