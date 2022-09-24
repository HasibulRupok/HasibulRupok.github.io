// nav toggle function
$("#menuButton").click(function () {
  $("#liContainer").toggle();
});

$(document).ready(function () {
  var viewportWidth = $(window).width();
  if (viewportWidth < 768) {
    $(".vertically-Center").removeClass("vertically-Center");
    // $(".content-inner.active").removeClass("active");
  }

  $(document).ready(function () {
    // more click 
    $("#moreBBtn").click(function(){
      window.location.pathname = "../pages/profile.html";
    });
  });
});
