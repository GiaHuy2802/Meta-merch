$(document).ready(function () {
    $(".slider-nav").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode: true,
      autoplay: false,
      arrow:true,
      responsive: [
        {
          breakpoint: 1199, // Kích thước màn hình dưới 480px
          settings: {
            slidesToShow: 2,
            slidesToScroll: 7,
          }
        },
        {
          breakpoint: 991, // Kích thước màn hình dưới 480px
          settings: {
            slidesToShow: 2,
            slidesToScroll:7 ,
          }
        },
        {
          breakpoint: 431, // Kích thước màn hình dưới 480px
          settings: {
            slidesToShow: 1,
            slidesToScroll:1,
            infinite:true,
            autoplay:true,
            centerMode:false,
            arrow:false,
          }
        }
        // Thêm các breakpoint khác nếu cần thiết
      ]
    });
   
  });
 
