const openMenuBar = document.getElementById("openMenuBar");
openMenuBar.addEventListener("click", function () {
  document.getElementById("navs").style.left = "0";
});

const closeMenuBar = document.getElementById("closeMenuBar");
closeMenuBar.addEventListener("click", function () {
  document.getElementById("navs").style.left = "-100%";
});

// const openFilterBtn = document.getElementById("openFilterBtn");
// console.log(openFilterBtn);
// openFilterBtn.addEventListener("click", function () {
//   document.getElementById("filterOverlay");
//   if (filterOverlay.style.display === "none") {
//     filterOverlay.style.display = "block";
//   } else {
//     filterOverlay.style.display = "none";
//   }
// });

function toggleFilterBtn() {
  var x = document.getElementById("filterOverlay");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// const closeFilterBtn = document.getElementById("closeFilterBtn");
// closeFilterBtn.addEventListener("click", function () {
//   document.getElementById("filterOverlay").style.display = "none";
// });

function closeFilterBtn() {
  var x = document.getElementById("filterOverlay");
  if (x.style.display === "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// const openSortBtn = document.getElementById("openSortBtn");
// openSortBtn.addEventListener("click", function on() {
//   document.getElementById("sortOverlay");
//   if (sortOverlay.style.display === "none") {
//     sortOverlay.style.display = "block";
//   } else {
//     sortOverlay.style.display = "none";
//   }
// });

function toggleSortBtn() {
  var x = document.getElementById("sortOverlay");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// const closeSortBtn = document.getElementById("closeSortBtn");
// closeSortBtn.addEventListener("click", function off() {
//   document.getElementById("sortOverlay").style.display = "none";
// });

function closeSortBtn() {
  var x = document.getElementById("sortOverlay");
  if (x.style.display === "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// function toggleMenuBtn() {
//   var x = document.getElementById("moreMenuBtns");
//   if (x.style.visibility === "hidden") {
//     x.style.visibility = "visible";
//   } else {
//     x.style.visibility = "hidden";
//   }
// }

// const toggleMoreMenu = document.getElementById("toggleMoreMenu");
// toggleMoreMenu.addEventListener("click", function on() {
//   document.getElementById("moreMenuActions");
//   if (moreMenuActions.style.display === "none") {
//     moreMenuActions.style.display = "block";
//   } else {
//     moreMenuActions.style.display = "none";
//   }
// });

function toggleMoreMenu() {
  var x = document.getElementById("moreMenuActions");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Dashboard-header-add-record

// const openAddOverlayDashboard = document.getElementById(
//   "openAddOverlayDashboard"
// );
// openAddOverlayDashboard.addEventListener("click", function on() {
//   document.getElementById("addRecordOverlayDashboard").style.display = "block";
// });

// const closeAddOverlayDB = document.getElementById("closeAddOverlayDB");
// closeAddOverlayDB.addEventListener("click", function off() {
//   document.getElementById("addRecordOverlayDB").style.display = "none";
// });

// const closeAddOverlay2DB = document.getElementById("closeAddOverlay2DB");
// closeAddOverlay2DB.addEventListener("click", function off() {
//   document.getElementById("addRecordOverlayDB").style.display = "none";
// });

// Records-header-add-record

// const openAddOverlay2 = document.getElementById("openAddOverlayHeader");
// openAddOverlay2.addEventListener("click", function on() {
//   document.getElementById("addRecordOverlay").style.display = "block";
// });

// const openAddOverlay = document.getElementById("openAddOverlay");
// openAddOverlay.addEventListener("click", function on() {
//   document.getElementById("addRecordOverlay").style.display = "block";
// });

function openAddOverlay() {
  var x = document.getElementById("addRecordOverlay");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// const closeAddOverlay = document.getElementById("closeAddOverlay");
// closeAddOverlay.addEventListener("click", function off() {
//   document.getElementById("addRecordOverlay").style.display = "none";
// });

function closeAddOverlay() {
  var x = document.getElementById("addRecordOverlay");
  if (x.style.display === "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// const closeAddOverlay2 = document.getElementById("closeAddOverlay2");
// closeAddOverlay2.addEventListener("click", function off() {
//   document.getElementById("addRecordOverlay").style.display = "none";
// });

function closeAddOverlay2() {
  var x = document.getElementById("addRecordOverlay");
  if (x.style.display === "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// const openEditOverlay = document.getElementById("openEditOverlay");
// openEditOverlay.addEventListener("click", function on() {
//   document.getElementById("editRecordOverlay").style.display = "block";
// });

function openEditOverlay() {
  var x = document.getElementById("editRecordOverlay");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// const closeEditOverlay = document.getElementById("closeEditOverlay");
// closeEditOverlay.addEventListener("click", function off() {
//   document.getElementById("editRecordOverlay").style.display = "none";
// });

// function closeEditOverlay() {
//   var x = document.getElementById("editRecordOverlay");
//   if (x.style.display === "none") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

function closeEditOverlay() {
  document.getElementById("editRecordOverlay").style.display = "none";
}

// const closeEditOverlay2 = document.getElementById("closeEditOverlay2");
// closeEditOverlay2.addEventListener("click", function off() {
//   document.getElementById("editRecordOverlay").style.display = "none";
// });

function closeEditOverlay2() {
  var x = document.getElementById("editRecordOverlay");
  if (x.style.display === "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// const openAddOverlay2DB = document.getElementById("openAddOverlayHeader");
// openAddOverlay2DB.addEventListener("click", function () {
//   document.getElementById("addRecordOverlay").style.display = "block";
// });

function openAddOverlayHeader() {
  var x = document.getElementById("addRecordOverlay");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// const closeAddOverlayDB = document.getElementById("closeAddOverlayDB");
// closeAddOverlayDB.addEventListener("click", function off() {
//   document.getElementById("addRecordOverlayDB").style.display = "none";
// });

// const closeAddOverlay2DB = document.getElementById("closeAddOverlay2DB");
// closeAddOverlay2DB.addEventListener("click", function off() {
//   document.getElementById("addRecordOverlayDB").style.display = "none";
// });

// const openAddOverlay3DB = document.getElementById("openAddOverlayHeader");
// openAddOverlay3DB.addEventListener("click", function () {
//   console.log(
//     (document.getElementById("addRecordOverlay").style.display = "block")
//   );
// });

// console.log(document.getElementById("openAddOverlayHeader"));
// console.log(document.getElementById("openAddOverlayHeader"));

// TO DO

// Create js to close open overlays when another btn is toggled/clicked or when clicked outside
// Make filter and sort buttons stay blue when theres active filters and sorts

// const openAddOverlay22 = document.getElementById("openAddOverlayHeader2");
// openAddOverlay22.addEventListener("click", function on() {
//   document.getElementById("addRecordOverlay").style.display = "block";
// });

// const closeAddOverlay22 = document.getElementById("closeAddOverlay22");
// closeAddOverlay22.addEventListener("click", function off() {
//   document.getElementById("addRecordOverlay22").style.display = "none";
// });

// const closeAddOverlay222 = document.getElementById("closeAddOverlay222");
// closeAddOverlay222.addEventListener("click", function off() {
//   document.getElementById("addRecordOverlay").style.display = "none";
// });
