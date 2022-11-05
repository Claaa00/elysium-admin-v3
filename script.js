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

const openAddOverlay = document.getElementById("addRecordBtn");
openAddOverlay.addEventListener("click", function on() {
  document.getElementById("addRecordOverlay").style.display = "block";
});

const closeAddOverlay = document.getElementById("closeOverlayBtn");
closeAddOverlay.addEventListener("click", function off() {
  document.getElementById("addRecordOverlay").style.display = "none";
});
