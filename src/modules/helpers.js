"use strict";

const animate = ({ draw, duration = 1000, timingplane = "linear" }) => {
  const timing = {
    linear: (x) => x,

    easeOutCubic: (x) => 1 - Math.pow(1 - x, 3),
    easeInOutCubic: (x) =>
      x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
    easeOutQuart: (x) => 1 - Math.pow(1 - x, 5),
    aseOutExpo: (x) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x)),
  };
  if (!(timingplane in timing)) {
    timingplane = "linear";
  }

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) {
      timeFraction = 1;
    }

    let progress = timing[timingplane](timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

export { animate };
