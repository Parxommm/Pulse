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
});