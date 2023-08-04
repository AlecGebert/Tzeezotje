$(document).ready(function () {
  $(".slider").slick({
    // normal options...
    infinite: true,
    swipe: true,
    arrows: true,
    event: {
      afterChange: function (event, slick, currentSlide, nextSlide) {
        if (currentSlide == 3) {
          slick.slickGoTo(1);
        }
      },
    },

    // the magic
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});
Array.from(document.querySelectorAll(".menu-link")).forEach((item) => {
  item.onclick = () => {
    document.querySelector(".container").classList.remove("change");
  };
});
