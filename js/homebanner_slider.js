var slider = tns({
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
