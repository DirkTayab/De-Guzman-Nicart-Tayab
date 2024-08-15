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
