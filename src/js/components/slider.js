import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const usePartnersSlider = () => {
  Swiper.use([Autoplay]);
  new Swiper(".partners__slider", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
  });
};
