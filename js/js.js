$(' #slider1').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1125,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true
        // dots: true
      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
        // dots: true
      }
    },
    {
      breakpoint: 755,
      settings: {
        slidesToShow: 2,
          slidesToScroll: 2,
        // dots: true
        
      }
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 1,
          slidesToScroll: 1,
        // dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('#slider2').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 7,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true
        // dots: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true
        // dots: true
      }
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 3,
          slidesToScroll: 3,
        // dots: true
        
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2,
          slidesToScroll: 2,
        // dots: true
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2,
          slidesToScroll: 2,
        // dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});