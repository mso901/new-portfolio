/** @format */

$(function () {
  var $grid = $('.portfolio-container').isotope({
    itemSelector: '.portfolio_item',
  });

  // filter items on button click
  $('.portfolio-flters').on('click', 'li',function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    // $('.ortfolio-flters li').removeClass('on');
    // $(this).addClass('on');
  });
});
