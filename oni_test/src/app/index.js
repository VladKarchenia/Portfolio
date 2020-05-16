import '../style/app.scss';

function hideElem() {
  $('#best_offer').fadeOut('slow')
}

$('#close_btn').on('click', hideElem);

$('#extra_details').on('change', function() {
  $('#details').prop('disabled', !this.checked )
})

function showActiveTab(e) {
  if (e.target.tagName === 'LABEL') {
    $('.tab.active').removeClass('active')
    $(e.target).addClass('active')
  }
}
$('#tabs').on('click', showActiveTab);

function showElement(e) {
  if (e.target.id === 'burger_btn' || e.target.id === 'close_burger_btn') {
    $('header').toggleClass('burger')
  } else {
    $('header').toggleClass('mobile_search')
  }
}

$('#burger_btn, #close_burger_btn, #mobile_search').on('click', showElement);

$('#slick_table').slick({
  rows: 2,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  responsive: [
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 725,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }
  ]
})