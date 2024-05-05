export const useTabs = () => {
  // Получаем все табы и слайды
  const tabs = document.querySelectorAll(".hero__tab");
  const slides = document.querySelectorAll(".hero__slide");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.getAttribute("href") === "#all") {
        slides.forEach((slide) => {
          slide.classList.remove("deleted");
        });
        tabs.forEach((tab) => {
          tab.classList.remove("hero__tab--active");
        });
        tab.classList.add("hero__tab--active");
      } else {
        slides.forEach((slide) => {
          slide.classList.add("deleted");
        });
        tabs.forEach((tab) => {
          tab.classList.remove("hero__tab--active");
        });
        const tabId = tab.getAttribute("href").substring(1);

        const targetSlide = document.getElementById(tabId);
        targetSlide.classList.remove("deleted");
        tab.classList.add("hero__tab--active");
      }
    });
  });
};
