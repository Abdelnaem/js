      var moviesId = document.querySelector(".section").removeAttribute("class"),
          slidersHome = document.querySelectorAll(".owl-carousel");
      (slidersHome || []).forEach(function (item) {
        $(item).owlCarousel({
          rtl:true,
          loop:true,
          margin:10,
          nav:true,
          navText: ["<div><i class='fa fa-angle-right'></i></div>", "<div><i class='fa fa-angle-left'></i></div>"],
          autoplay:true,
          autoplayTimeout: 5000,
          autoplayHoverPause:true,
          responsive:{
            0:{
              items:2,
              margin:15
            },
            500:{
              items:2,
              margin:15
            },
            800:{
              items:3,
              margin:15
            },
            1000:{
              items:4,
              margin:15
            },
            1100:{
              items:5,
              margin:20
            }
          }
        });
      });
