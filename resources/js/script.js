$(document).ready(function () {
  //---------Mobile navigation---------//
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    // instead of sticky nav appearing at way point it now appears 60px before reaching waypoint
    {
      offset: "60px",
    }
  );

  //---------Scroll to Buttons---------//
  $(".js--scroll-to-features").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  $(".js--scroll-to-booking").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-rates").offset().top },
      1000
    );
  });

  //---------Navigation Scroll---------//
  // Select all links with hashes
  $('a[href*="#"]')
    //remove all links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  //---------Animations on scroll---------//
  $(".js--waypoint-1").waypoint(
    function (direction) {
      $(".js--waypoint-1").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--waypoint-2").waypoint(
    function (direction) {
      $(".js--waypoint-2").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--waypoint-3").waypoint(
    function (direction) {
      $(".js--waypoint-3").addClass("animate__animated animate__bounce");
    },
    {
      offset: "95%",
    }
  );

  //---------Mobile navigation---------//
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon ion-icon");

    nav.slideToggle(200);
    //attr() allows access to the attribute name of the ion-icon html element
    if (icon.attr("name") == "menu") {
      icon.attr("name", "close");
    } else {
      icon.attr("name", "menu");
    }
  });

  //---------Map---------//
  var map = new GMaps({
    div: ".map",
    lat: 36.134643,
    lng: -81.676057,
    zoom: 14,
  });

  map.addMarker({
    lat: 36.134643,
    lng: -81.676057,
    title: "Blowing Rock",
    infoWindow: {
      content: "<p>Azalea Garden Inn</p>",
    },
  });
});
