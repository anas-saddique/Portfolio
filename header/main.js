const menu = document.querySelector(".menu");
let open;

function openMenu() {
  if (open) {
    menu.style.display = "none";
    open = false;
  } else if (!open) {
    menu.style.display = "block";
    open = true;
  }
}
var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Youtuber", "Web Developer.."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

    