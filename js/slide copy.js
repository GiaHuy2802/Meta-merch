
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
  Infinity: true,
  autoplay: true,
});
$(".slider-nav").slick({
  slidesToShow: 6,
  slidesToScroll: 6,
  asNavFor: ".slider-for",
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
  autoplay: true,
  infinite:true,
  responsive: [
    {
      breakpoint: 480, // Kích thước màn hình dưới 480px
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 390, // Kích thước màn hình dưới 480px
      settings: {
        slidesToShow: 4,
        slidesToScroll: 7,
      }
    }
    // Thêm các breakpoint khác nếu cần thiết
  ]
});