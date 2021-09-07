$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 1000,
    prevArrow: '<button type="button" class="prev-slide"><img src="icons/arrow-prev.svg" alt="prev" width="30" height="50"></button>',
    nextArrow: '<button type="button" class="next-slide"><img src="icons/arrow-next.svg" alt="next" width="30" height="50"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function() {
    $(this)
      .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
      .closest('div.container').find('ul.catalog__list').removeClass('catalog__list--active').eq($(this).index()).addClass('catalog__list--active');
  });

  toggleSlide = (item) => {
    $(item).each(function(i) {
      $(this).on('click', function(evt) {
        evt.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content--active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list--active');
      })
    })
  }
  toggleSlide('.catalog-item__about');
  toggleSlide('.catalog-item__back');
});