var slider = tns({
  container: ".Services__slider",
  items: 3,
  speed: 1000,
  gutter: 50,
  rewind: true,
  slideBy: "1",
  navPosition: "bottom",
  containerControls: "#controls",
  prevButton: ".Services__prev",
  nextButton: ".Services__next",
  responsive: {
    1250: {
      items: 3,
    },
    200: {
      items: 1,
    },
  },
});
