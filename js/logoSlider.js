//  // Logo loop slider
//  $('.autoplay').slick({
//     slidesToShow: 9,
//     slidesToScroll: 1,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 0,
//     speed: 2000,
//     easing: 'linear',
//     cssEase: 'linear',
//     arrows: false,
//     swipe: false,
//     draggable: false,
//     pauseOnHover: false,
//     pauseOnClick: false,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           speed: 800,
//         },
//       }
//     ]
    
//   });


  $('.autoplay').slick({
    slidesToShow: 10,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 1000,
    easing: 'linear',
    cssEase: 'linear',
    arrows: false,
    swipe: false,
    draggable: false,
    pauseOnHover: false,
    pauseOnClick: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          speed: 800,
          slidesToShow: 4,
        },
      }
    ]
  });

  // Review Block slider
