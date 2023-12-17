/** @format */

$(function () {
  $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
  });

  // filter items on button click
  $('.portfolio-flters').on('click', 'li', function () {
    var filterValue = $(this).find().attr('data-filter');
    $('.portfolio-container').isotope({ filter: filterValue });
    $('.portfolio-flters li').removeClass('filter-active');
    $(this).addClass('filter-active');
  });
});
