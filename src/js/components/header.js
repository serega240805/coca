export const headerVisible = () => {
  const header = document.querySelector(".header");
  let previousScrollY = 0;

  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY;

    if (currentScrollY > previousScrollY) {
      header.classList.remove("header--show");
    } else {
      header.classList.add("header--show");
    }

    previousScrollY = currentScrollY;
  });
};
