for (
  var count = 0,
    p = Promise.resolve(),
    fn = (t) => {
      p = p.then(
        () =>
          new Promise((e) =>
            $("#load-perc")
              .text(t + "%")
              .delay(1)
              .fadeIn("slow", e)
          )
      );
    };
  count < 100;
)
  fn(count + 1), count++;
$(function () {
  $(".fixloading").remove(),
    $(".openmenu,.closemenu").on("click", function (t) {
      t.preventDefault(), $(this).closest(".menumobile").toggleClass("active");
    }),
    $(".menumobile ul li a, .menumobile .currentpage").on("click", function () {
      $(".menumobile").removeClass("active");
    }),
    $(".accordion-projects .item").first().addClass("active"),
    $(".accordion-projects .info").first().addClass("active");
  var t = "700px";
  if (
    ($(".accordion-projects .info").first().show().animate({ width: t }),
    $(".accordion-projects .item").on("mouseenter", function () {
      $(this).addClass("active").siblings(".item").removeClass("active"),
        $(this)
          .next()
          .show()
          .addClass("active")
          .stop()
          .animate({ width: t })
          .siblings(".info")
          .stop()
          .animate({ width: 0 }, function () {
            $(this).hide();
          });
    }),
    $(".loaderproject").hasClass("active") &&
      setTimeout(function () {
        $(".loaderproject").removeClass("active");
      }, 510),
    $(".imageintro").length > 0)
  )
    var e = ".project-intro a, .returnbutton a";
  else e = ".project-intro a, .returnbutton a, .menucustom a";
  $(e).on("click", function (t) {
    t.preventDefault();
    var e = $(this).attr("href");
    $(".loaderproject").addClass("active"),
      setTimeout(function () {
        window.location.href = e;
      }, 750);
  });
}),
  $(window).on("resize", function () {});
var lastScrollTop = 0;
$(window).on("scroll", function () {});
