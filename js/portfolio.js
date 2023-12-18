/** @format */

$(function () {
  var $grid = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
    stagger: 100,
  });

  $(".portfolio-flters").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });

    $(this).addClass("filter-active").siblings().removeClass("filter-active");
  });
});
