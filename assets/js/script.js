const menu = document.querySelector(".menu");
const navigation = document.querySelector("#navigation");
const mobile = matchMedia("(max-width: 720px)");

function setMenu(open) {
  menu.setAttribute("aria-expanded", String(open));
  navigation.hidden = mobile.matches && !open;
}

function syncNavigation() {
  menu.hidden = !mobile.matches;
  setMenu(false);
}

menu.addEventListener("click", () => {
  setMenu(menu.getAttribute("aria-expanded") === "false");
});

navigation.addEventListener("click", (event) => {
  if (mobile.matches && event.target.closest("a")) {
    const section = document.querySelector(event.target.closest("a").hash);
    setMenu(false);
    section.setAttribute("tabindex", "-1");
    section.focus({ preventScroll: true });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    menu.focus();
  }
});

mobile.addEventListener("change", syncNavigation);
syncNavigation();

if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}
