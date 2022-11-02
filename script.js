// // sidebar open close
// let openBtn = document.querySelector(".fa-bars");
// let closeBtn = document.querySelector(
//   ".nav-container .sidebar-logo .close-btn"
// );
// let navigations = document.querySelector(".nav-container");

// openBtn.addEventListener("click", function () {
//   navigations.style.left = "0";
// });

const openBtn = document.getElementById("menuBar");
openBtn.addEventListener("click", function () {
  document.getElementById("navs").style.left = "0";
});

const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", function () {
  document.getElementById("navs").style.left = "-100%";
});
