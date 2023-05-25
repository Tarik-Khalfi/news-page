const btn = document.getElementById("menu");
const closeBtn = document.querySelector(".close-btn");
const show = document.querySelector(".show");
const body = document.getElementById("overlay");
btn.addEventListener("click", function () {
  closeBtn.classList.toggle("close-btn2");
  btn.classList.add("index");
  btn.classList.add("close-btn");
  show.classList.add("showen");
  body.classList.add("overlay");
});
closeBtn.addEventListener("click", function () {
  btn.classList.remove("close-btn");
  closeBtn.classList.remove("close-btn2");
  body.classList.remove("overlay");
  show.classList.remove("showen");
  show.classList.remove("hide");
});
