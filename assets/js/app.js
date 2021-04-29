// OffCanvas Navigation Menu on Mobile Screen Start
function darkenScreen(darken) {
  if (darken == true) {
    document.querySelector(".screen-darken").classList.add("active");
    document.querySelector("html").style.overflowY = "hidden";
  } else if (darken == false) {
    document.querySelector(".screen-darken").classList.remove("active");
    document.querySelector("html").style.overflowY = "auto";
  }
}

function closeOffCanvas() {
  darkenScreen(false);
  document.querySelector(".mobile-offcanvas.show").classList.remove("show");
  document.body.classList.remove("offcanvas-active");
}

function showOffCanvas(offcanvas_id) {
  darkenScreen(true);
  document.getElementById(offcanvas_id).classList.add("show");
  document.body.classList.add("offcanvas-active");
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-trigger]").forEach(function (everyelement) {
    let offcanvas_id = everyelement.getAttribute("data-trigger");
    everyelement.addEventListener("click", function (e) {
      e.preventDefault();
      showOffCanvas(offcanvas_id);
    });
  });

  document.querySelectorAll(".btn-close").forEach(function (everybutton) {
    everybutton.addEventListener("click", function (e) {
      closeOffCanvas();
    });
  });

  document
    .querySelector(".screen-darken")
    .addEventListener("click", function (event) {
      closeOffCanvas();
    });
});
// OffCanvas Navigation Menu on Mobile Screen End

// On Scroll Header Sticky
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("subHeader").classList.add("sub-header-scroll");
    document.getElementById("navbarMain").classList.add("navbar-sticky-dark");
    document.getElementById("mobileToggle").classList.add("mobile-toggle-dark");
  } else {
    document.getElementById("subHeader").classList.remove("sub-header-scroll");
    document
      .getElementById("navbarMain")
      .classList.remove("navbar-sticky-dark");
    document
      .getElementById("mobileToggle")
      .classList.remove("mobile-toggle-dark");
  }
}

// Banner Title Change
var titleIndex = 0;
showTitle();
function showTitle() {
  var i;
  var title = document.getElementsByClassName("banner-title");
  for (i = 0; i < title.length; i++) {
    title[i].style.display = "none";
  }
  titleIndex++;
  if (titleIndex > title.length) {
    titleIndex = 1;
  }
  title[titleIndex - 1].style.display = "block";
  setTimeout(showTitle, 4000); // Change Title every 4 seconds
}
