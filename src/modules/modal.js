"use strict";

const modal = () => {
  const modal = document.querySelector(".popup");
  const popupContent = modal.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");

  const animationPopupContent = () => {
    const maxCountAnimation = Math.round(
      100 -
        (popupContent.getBoundingClientRect().left * 100) / window.innerWidth
    );
    let countAnimation = 30;

    (function animation() {
      if (countAnimation < maxCountAnimation) {
        requestAnimationFrame(animation);
        popupContent.style.transform = `translateX( 0px )`;
        popupContent.style.left = `${100 - countAnimation}%`;
        countAnimation++;
      } else {
        popupContent.style.left = "";
        popupContent.style.transform = ``;
      }
    })();
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      modal.style.display = "block";
      if (window.innerWidth > 767) {
        animationPopupContent();
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
};

export default modal;
