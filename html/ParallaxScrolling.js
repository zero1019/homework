let windowheight = window.innerHeight;
let img_bg = document.getElementById("images/8959fad1f1d8e027cbcc76394dbbccfb.jpg");
let img_bird = document.getElementById("images/parallax3@2x.png");
let img_tree = document.getElementById("images/parallax2@2x.png");
let img_m1 = document.getElementById("images/parallax1@2x.png");
let img_m2 = document.getElementById("images/parallax0@2x.png");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  if (value < windowheight) {    
    img_bg.style.backgroundPositionY = value * 0.7 + "px";
    img_m2.style.transform = `translate( ${value * -0.3}px , ${value * 0.5}px)`;
    img_m1.style.transform = `translate( ${value * 0.3}px , ${value * 0.4}px)`;
    img_tree.style.transform = `translate( 0px , ${value * 0.3}px)`;
    img_bird.style.transform = `translate( ${value * -0.4}px , ${value * 0.6}px)`;   
  }
});

let home = document.getElementById("home");
let home2 = document.getElementById("home2");
let home3 = document.getElementById("home3");

home.style.backgroundPositionY = -windowheight / 2 + "px";
home2.style.backgroundPositionY = -windowheight / 2 + "px";
home3.style.backgroundPositionY = -windowheight / 2 + "px";

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  let value2 = value - windowheight * 0.5;
  let value3 = value - windowheight * 1.5;
  let value4 = value - windowheight * 2.5;
  if (windowheight * 0.5 < value) {
    home.style.backgroundPositionY = ((-windowheight / 2) + value2 * 0.5) + "px";
  }
  if (windowheight * 1.5 < value) {
    home2.style.backgroundPositionY = ((-windowheight / 2) + value3 * 0.5) + "px";
  }
  if (windowheight * 2.5 < value) {
    home3.style.backgroundPositionY = ((-windowheight / 2) + value4 * 0.5) + "px";
  }
});
