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

  // Modal
  $('[data-modal=consultation]').on('click', () => {
    $('.overlay, #consultation').fadeIn();
  })

  $('.modal__button-close').on('click', () => {
    $('.overlay, #consultation, #order, #thanks').fadeOut();
  })

  $('.button--item').each(function(i) {
    $(this).on('click', () => {
      $('#order .modal__subtitle').text($('.catalog-item__name').eq(i).text());
      $('.overlay, #order').fadeIn();
    })
  })

  // Validation 
  validateForm = (form) => {
    $(form).validate({
      rules: {
        name: {
        required: true,
        minlength: 2
        },
        phone: 'required',
        email: {
          required: true,
          email: true,
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Минимум {0} символа!")
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свой email",
          email: "Введите правильный email в формате name@domain.com"
        }
      }
    });
  }

  validateForm('.consultation__form');
  validateForm('#consultation form');
  validateForm('#order form');

  // Masked Input
  $('input[name=phone]').mask("+375(99) 999-99-99");

  // Mailer
  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');
        $('form').trigger('reset');
    });
    return false;
  });
});