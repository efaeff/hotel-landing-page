/////////// NAV

const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;

    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);

//////////////// PHOTO SLIDER

let slideIndex = 0;
carousel();

function carousel() {
  let i;
  const x = document.getElementsByClassName("mySlides");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}
