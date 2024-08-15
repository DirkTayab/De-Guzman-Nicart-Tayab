var slider = tns({
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

var slider = tns({
  container: ".homeBanner__slider",
  items: 3,
  autoheight: "true",
  speed: 500,
  slideBy: "1",
  rewind: true,
  gutter: 0,
  axis: "vertical",
  //   navPosition: "top",
  containerControls: "#controls",
  prevButton: ".homeServices2__prev",
  nextButton: ".homeServices2__next",
  responsive: {
    1250: {
      items: 1,
    },
    200: {
      items: 1,
    },
  },
});
