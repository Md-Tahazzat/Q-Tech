const tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);
tl.from(".img-layer-1", {
  x: "100%",
  duration: 0.4,
});

// animation for navbar
tl.from("#navbar-container", {
  y: -100,
  duration: 0.3,
});

// animation for navlinks
tl.from(".nav-link-container .links", {
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

// animation for, table,  computer, coffee, and flower tab.
tl.from(
  ".img-layer-2",
  {
    y: -1000,
    duration: 0.1,
    stagger: 0.2,
  },
  1
);

// animation for banner's man image
tl.from(
  ".img-layer-3",
  {
    opacity: 0,
  },
  2
);

// animation for baner image background writing
tl.from(
  ".img-layer-4",
  {
    y: -700,
    opacity: 0.4,
  },
  2.3
);

// animation for computer, coffee, and flower tab.
tl.from(
  ".img-layer-5",
  {
    opacity: 0,
    stagger: 0.2,
    scale: 0,
    ease: "expoScale(0.5,7,none)",
  },
  2.6
);

// animation for banner title text "mobile"
tl.from(
  "#banner-title .text-2",
  {
    x: -500,
  },
  2
);

// animation for banner title text "We Build"
tl.from(
  "#banner-title .text-1",
  {
    opacity: 0,
    duration: 1.3,
  },
  1.6
);

// animation for description text
const text = new SplitType("#banner-description", { type: "chars" });
tl.from(
  text.chars,
  {
    stagger: 0.02,
    y: "-50vh",
    rotate: 60,
    duration: 0.1,
  },
  2.4
);

tl.play().then(() => text.revert()); // to reverse the text into its previous form.

// animation for banner title text "App"
tl.from("#banner-title .text-3", {
  y: "-57.7vh",
  x: 90,
  fontSize: "19px",
  duration: 0.8,
  ease: "bounce.out",
});

// animation for website logo.
const logoTl = gsap.timeline({
  repeat: -1,
  repeatDelay: 4,
  yoyo: 1,
});

logoTl.to(
  ".logo-container .logo .logo-left",
  {
    delay: 1,
    width: 10,
    height: 25,
    y: -11,
    x: 24,
    duration: 0.6,
    rotateX: 360,
  },
  "a"
);
logoTl.to(
  ".logo-container .logo .logo-right",
  {
    delay: 1,
    width: 10,
    height: 25,
    y: -11,
    x: -24,
    duration: 0.6,
    rotateX: 360,
  },
  "a"
);
// logoTl.to({}, 1, {});
// logoTl.reverse();

gsap.from("#service-container", {
  duration: 1.4,
  scale: 0,
  // rotateX: 360,
  scrollTrigger: {
    trigger: "#service-container",
    scroller: "body",
    end: "top 400",
  },
});
