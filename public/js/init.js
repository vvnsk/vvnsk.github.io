/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($) {
  /*----------------------------------------------------*/
  /* FitText Settings
------------------------------------------------------ */

  setTimeout(function() {
    $("h1.responsive-headline").fitText(1, {
      minFontSize: "40px",
      maxFontSize: "90px"
    });
  }, 100);

  /*----------------------------------------------------*/
  /* Smooth Scrolling
------------------------------------------------------ */

  $(".smoothscroll").on("click", function(e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top
        },
        800,
        "swing",
        function() {
          window.location.hash = target;
        }
      );
  });

  /*----------------------------------------------------*/
  /* Highlight the current section in the navigation bar
------------------------------------------------------*/

  var sections = $("section");
  var navigation_links = $("#nav-wrap a");

  sections.waypoint({
    handler: function(event, direction) {
      var active_section;

      active_section = $(this);
      if (direction === "up") active_section = active_section.prev();

      var active_link = $(
        '#nav-wrap a[href="#' + active_section.attr("id") + '"]'
      );

      navigation_links.parent().removeClass("current");
      active_link.parent().addClass("current");
    },
    offset: "35%"
  });

  /*----------------------------------------------------*/
  /*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

  $("header").css({ height: $(window).height() });
  $(window).on("resize", function() {
    $("header").css({ height: $(window).height() });
    $("body").css({ width: $(window).width() });
  });

  /*----------------------------------------------------*/
  /*	Fade In/Out Primary Navigation
------------------------------------------------------*/

  $(window).on("scroll", function() {
    var h = $("header").height();
    var y = $(window).scrollTop();
    var nav = $("#nav-wrap");

    if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
      nav.fadeOut("fast");
    } else {
      if (y < h * 0.2) {
        nav.removeClass("opaque").fadeIn("fast");
      } else {
        nav.addClass("opaque").fadeIn("fast");
      }
    }
  });

  /*----------------------------------------------------*/
  /*	Modal Popup
------------------------------------------------------*/

  $(".item-wrap a").magnificPopup({
    type: "inline",
    fixedContentPos: false,
    removalDelay: 200,
    showCloseBtn: false,
    mainClass: "mfp-fade"
  });

  $(document).on("click", ".popup-modal-dismiss", function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  /*----------------------------------------------------*/
  /*	Header Color Random Palette
------------------------------------------------------*/

  let paletteOptions = [
    ["#5c5470", "#352f44", "#2a2438"], // purple
    ["#D10E0E", "#FF3030", "#FC4949"], // red
    ["#3E000C", "#7A0018", "#7C0B2B"], // maroon
    ["#000514", "#00092B", "#092C77"], // blue
    ["#118AB2", "#51A9C7", "#97CABF"], // light blue
    ["#2C435C", "#456990", "#7498BF"], // pale blue
    ["#100431", "#260460", "#32127A"], // violet
    ["#22223B", "#4A4E69", "#9A8C98"] // cement blue
  ];

  let selectedPaletteIndex = Math.floor(Math.random() * paletteOptions.length);
  let selectedPalette = paletteOptions[selectedPaletteIndex];

  $("#home").css(
    "background",
    `linear-gradient(-45deg, ${selectedPalette[0]}, ${selectedPalette[1]}, ${
      selectedPalette[2]
    })`
  );

  /*----------------------------------------------------*/
  /*	Header Typed
------------------------------------------------------*/

  $("#typed").typed({
    strings: ["a Web Developer", "a Data Analyst", "Sai Krishna !"],
    typeSpeed: 30,
    backDelay: 15,
    loop: false,
    contentType: "html", // or text
    // defaults to false for infinite loop
    loopCount: false
  });
});
