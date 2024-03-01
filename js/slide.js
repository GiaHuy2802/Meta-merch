
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
  Infinity: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 480, // Kích thước màn hình dưới 480px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false,
      }
    }
  ]
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  centerMode: true,
  arrows: false,
  autoplay: true,
  infinite:true,
 
});