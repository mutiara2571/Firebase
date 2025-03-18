//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika menu dklik
document.querySelector("#Accessories").onclick = () => {
  navbarNav.classList.toggle("active");
};

const Accessories = document.querySelector("#Accessories");

document.addEventListener("click", function (e) {
  if (!Accessories.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
