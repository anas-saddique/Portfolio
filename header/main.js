var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Youtuber", "Web Developer.."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
 let menulist = document.getElementById("menulist")
            menulist.style.maxHeight = "0px"
function togglemenu(){
  if(menulist.style.maxHeight = "0px")
  {
    menulist.style.maxHeight ="300px";
  }
  else{
    menulist.style.maxHeight = "0px"
  }
}
