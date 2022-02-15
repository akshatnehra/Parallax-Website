var controller = new ScrollMagic.Controller();

let timeline = new TimelineMax();

timeline
    .to("#foreground-image", 3, {y: -350})
    .fromTo("#background-image", {y: -40}, {y: 0},"-=3")
    .to(".rest-content", 3, {top: '0%'}, "-=3")
    .fromTo(".images-details", {opacity: 0}, {opacity: 1, duration: 3})
    .fromTo(".text", {opacity: 0}, {opacity: 1, duration: 3});

let scene = new ScrollMagic.Scene({
    triggerElement: "body",
    duration: "200%",
    triggerHook: 0,
})

.setTween(timeline)
.setPin("section")
.addTo(controller);