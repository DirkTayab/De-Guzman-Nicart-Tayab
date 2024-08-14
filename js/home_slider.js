var slider = tns({
  container: ".homeServices2__slider",
  items: 3,
    speed: 500,
    gutter: 100,
    slideBy: "1",
    autoplay: true,
    navPosition: "bottom",
    containerControls: "#controls",
    prevButton: ".prev",
    nextButton: ".next",
    responsive: {
        1250: {
            items: 3,
        },
        200: {
            items: 1,
        },
    },
});