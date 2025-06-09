const toggleBtn = document.querySelector(".header-nav__toggle");
const closeBtn = document.querySelector(".header-nav__close");
const navList = document.querySelector(".header-nav__list");

toggleBtn.addEventListener("click", () => {
  navList.classList.add("is-active");
});

closeBtn.addEventListener("click", () => {
  navList.classList.remove("is-active");
});
