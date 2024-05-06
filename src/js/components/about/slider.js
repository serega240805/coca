import Swiper from "swiper";
import "swiper/css";

export const useHeroSlider = () => {
  new Swiper(".hero__slider", {
    slidesPerView: "auto",
    spaceBetween: 32,
    freeMode: true,
    loop: true,
    centeredSlides: false,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const useOurTeamSlider = () => {
  new Swiper(".our-team__slider", {
    slidesPerView: "auto",
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};
