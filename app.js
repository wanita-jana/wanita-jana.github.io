let activeTab = null;

function initialPageLoad() {
  let hash = window.location.hash;
  let el = null;
  if (!hash) {
    el = document.querySelector(".home-sec");
  } else {
    hash = "." + hash.substr(1) + "-sec";
    el = document.querySelector(hash);
  }
  activeTab = document.querySelector(".active");
  if (activeTab) activeTab.classList.remove("active");
  el.parentElement.classList.add("active");
  activeTab = el.parentElement;
}

function handleTabClick(e) {
  const link = e.target.closest(".nav-item");
  if (link !== null) {
    activeTab.classList.remove("active");
    link.classList.add("active");
    activeTab = link;
  }
}

function init() {
  initialPageLoad();
  let navbar = document.querySelector(".navbar-nav");
  navbar.addEventListener("click", handleTabClick);
}

init();
