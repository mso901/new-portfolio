$(function(){
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("on")
    } else {
      $("#header").removeClass("on");
    }
  });
  
  gsap.to(window, 0.2, { scrollTo: 0 });

  var intro = gsap.timeline({
    onComplete: function () {
      gsap.set("body", { overflow: "auto" });
    },
  });

  intro
    .to(".home_title span:nth-child(1)", 0.5, { opacity: 1 })
    .to(".home_title span:nth-child(1)", 0.3, { opacity: 0 })
    .to(".home_title span:nth-child(2)", 0.5, { opacity: 1 })
    .to(".home_title span:nth-child(2)", 0.3, { opacity: 0 })
    .to(".home_title span:nth-child(3)", 0.5, { opacity: 1 })
    .to(".home_title span:nth-child(3)", 0.3, { opacity: 0 })
    .to(".home_title span:nth-child(4)", 0.5, { opacity: 1 })
    .to(".home_title span:nth-child(4)", 0.5, { "font-size": "150px" })
    .addLabel("m1")
    .to(window, 1.4, { scrollTo: "#about" }, "m1")
    .to(
      ".home_title span:nth-child(4)",
      1,
      { filter: "blur(10px)" },
      "m1"
    )
    .set(".home_title span:nth-child(4)", { filter: "blur(0px)" });

});