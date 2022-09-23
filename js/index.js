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
    // profile Btn click
    $("#profileBtn").click(function () {
      document.getElementById("homeSection").style.display = "none";
      $("#homeBtn").removeClass("activePage");

      document.getElementById("profileBtn").classList.add("activePage");

      var viewportWidth = $(window).width();
      if (viewportWidth < 768) {
        document.getElementById("profileSection").classList.add("displayBlock");
      } else {
        document.getElementById("profileSection").classList.add("md:flex");
      }
    });

    // homeBtn click
    $("#homeBtn").click(function () {
      document.getElementById("profileSection").style.display = "none";
      $("#profileBtn").removeClass("activePage");

      document.getElementById("homeBtn").classList.add("activePage");
      // document.getElementById("homeSection").style.display = "block";

      var viewportWidth = $(window).width();
      if (viewportWidth < 768) {
        document.getElementById("homeSection").style.display = "block";
      } else {
        document.getElementById("homeSection").classList.add("md:flex");
        document.getElementById("homeSection").style.display = "flex";
      }
    });
  });
});
