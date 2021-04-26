// OffCanvas Navigation Menu on Mobile Screen Start
function darken_screen(yesno) {
  if (yesno == true) {
    document.querySelector(".screen-darken").classList.add("active");
    document.querySelector("html").style.overflowY = "hidden";
  } else if (yesno == false) {
    document.querySelector(".screen-darken").classList.remove("active");
    document.querySelector("html").style.overflowY = "auto";
  }
}

function close_offcanvas() {
  darken_screen(false);
  document.querySelector(".mobile-offcanvas.show").classList.remove("show");
  document.body.classList.remove("offcanvas-active");
}

function show_offcanvas(offcanvas_id) {
  darken_screen(true);
  document.getElementById(offcanvas_id).classList.add("show");
  document.body.classList.add("offcanvas-active");
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-trigger]").forEach(function (everyelement) {
    let offcanvas_id = everyelement.getAttribute("data-trigger");
    everyelement.addEventListener("click", function (e) {
      e.preventDefault();
      show_offcanvas(offcanvas_id);
    });
  });

  document.querySelectorAll(".btn-close").forEach(function (everybutton) {
    everybutton.addEventListener("click", function (e) {
      close_offcanvas();
    });
  });

  document
    .querySelector(".screen-darken")
    .addEventListener("click", function (event) {
      close_offcanvas();
    });
});
// OffCanvas Navigation Menu on Mobile Screen End

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("subHeader").style.transform = "translateY(-48px)";
    document.getElementById("navbarMain").classList.add("navbar-sticky-dark");
    document.getElementById("mobileToggle").classList.add("mobile-toggle-dark");
  } else {
    document.getElementById("subHeader").style.transform = "translateY(0)";
    document
      .getElementById("navbarMain")
      .classList.remove("navbar-sticky-dark");
    document
      .getElementById("mobileToggle")
      .classList.remove("mobile-toggle-dark");
  }
}
