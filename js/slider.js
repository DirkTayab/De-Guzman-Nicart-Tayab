

var bannerslider1 = tns({
  container: ".homeBanner__slider",
  items: 1,
  autoheight: "true",
  speed: 500,
  slideBy: "1",
  rewind: true,
  gutter: 0,
  axis: "vertical",
  navPosition: "top",
  controls: false,
  autoplay: true,
  //   containerControls: "#controls",
  //   prevButton: ".homeServices2__prev",
  //   nextButton: ".homeServices2__next",
  responsive: {
    1250: {
      items: 1,
    },
    200: {
      items: 1,
    },
  },
});

var homeserviceslider2 = tns({
  container: ".homeServices2__slider",
  items: 3,
  speed: 500,
  gutter: 30,
  slideBy: "1",
  rewind: true,

  //   navPosition: "top",
  containerControls: "#controls",
  prevButton: ".homeServices2__prev",
  nextButton: ".homeServices2__next",
  responsive: {
    1250: {
      items: 3,
    },
    200: {
      items: 1,
    },
  },
});
