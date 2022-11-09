// side menu

const openMenuBar = document.getElementById("openMenuBar");
openMenuBar.addEventListener("click", function () {
  document.getElementById("navs").style.left = "0";
});

const closeMenuBar = document.getElementById("closeMenuBar");
closeMenuBar.addEventListener("click", function () {
  document.getElementById("navs").style.left = "-100%";
});

// add record overlay

// const addRecordOverlay = document.getElementById("addRecordOverlay");
// const openAddOverlayHeader = document.getElementById("openAddOverlayHeader");
// openAddOverlayHeader.onclick = function () {
//   if (addRecordOverlay.style.display !== "none") {
//     addRecordOverlay.style.display = "none";
//   } else {
//     addRecordOverlay.style.display = "block";
//   }
// };

function openAddOverlayHeader() {
  var x = document.getElementById("addRecordOverlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function openAddOverlay() {
  var x = document.getElementById("addRecordOverlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function closeAddOverlay() {
  var x = document.getElementById("addRecordOverlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function closeAddOverlay2() {
  var x = document.getElementById("addRecordOverlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleFilterBtn() {
  var x = document.getElementById("filterOverlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function closeFilterBtn() {
  var x = document.getElementById("filterOverlay");
  if (x.style.display === "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleSortBtn() {
  var x = document.getElementById("sortOverlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function closeSortBtn() {
  var x = document.getElementById("sortOverlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleMoreMenu() {
  var x = document.getElementById("moreMenuActions");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function openEditOverlay() {
  var x = document.getElementById("editRecordOverlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function closeEditOverlay() {
  var x = document.getElementById("editRecordOverlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function closeEditOverlay2() {
  var x = document.getElementById("editRecordOverlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function openDetailsOverlay() {
  var x = document.getElementById("viewRecordOverlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function closeViewOverlay() {
  var x = document.getElementById("viewRecordOverlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function closeViewOverlay2() {
  var x = document.getElementById("viewRecordOverlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function openDeleteOverlay() {
  var x = document.getElementById("trashMessageOverlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function closeTrashOverlay() {
  var x = document.getElementById("trashMessageOverlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// const openAddOverlay = document.getElementById("openAddOverlay");
// openAddOverlay.onclick = function () {
//   if (addRecordOverlay.style.display !== "none") {
//     addRecordOverlay.style.display = "none";
//   } else {
//     addRecordOverlay.style.display = "block";
//   }
// };

// // const addRecordOverlay = document.getElementById("addRecordOverlay");
// const closeAddOverlay = document.getElementById("closeAddOverlay");
// closeAddOverlay.onclick = function () {
//   if (addRecordOverlay.style.display !== "none") {
//     addRecordOverlay.style.display = "none";
//   } else {
//     addRecordOverlay.style.display = "block";
//   }
// };

// const closeAddOverlay2 = document.getElementById("closeAddOverlay2");
// closeAddOverlay2.onclick = function () {
//   if (addRecordOverlay.style.display !== "none") {
//     addRecordOverlay.style.display = "none";
//   } else {
//     addRecordOverlay.style.display = "block";
//   }
// };

// // edit record overlay

// const editRecordOverlay = document.getElementById("editRecordOverlay");
// const openEditOverlay = document.getElementById("openEditOverlay");
// openEditOverlay.onclick = function () {
//   if (editRecordOverlay.style.display !== "none") {
//     editRecordOverlay.style.display = "none";
//   } else {
//     editRecordOverlay.style.display = "block";
//   }
// };

// // const addRecordOverlay = document.getElementById("addRecordOverlay");
// const closeEditOverlay = document.getElementById("closeEditOverlay");
// closeEditOverlay.onclick = function () {
//   if (editRecordOverlay.style.display !== "none") {
//     editRecordOverlay.style.display = "none";
//   } else {
//     editRecordOverlay.style.display = "block";
//   }
// };

// const closeEditOverlay2 = document.getElementById("closeEditOverlay2");
// closeEditOverlay2.onclick = function () {
//   if (editRecordOverlay.style.display !== "none") {
//     editRecordOverlay.style.display = "none";
//   } else {
//     editRecordOverlay.style.display = "block";
//   }
// };

// // filter

// const filterOverlay = document.getElementById("filterOverlay");
// const toggleFilterBtn = document.getElementById("toggleFilterBtn");
// toggleFilterBtn.onclick = function () {
//   if (filterOverlay.style.display !== "none") {
//     filterOverlay.style.display = "none";
//   } else {
//     filterOverlay.style.display = "block";
//   }
// };

// // const addRecordOverlay = document.getElementById("addRecordOverlay");
// const closeFilterBtn = document.getElementById("closeFilterBtn");
// closeFilterBtn.onclick = function () {
//   if (filterOverlay.style.display === "none") {
//     filterOverlay.style.display = "none";
//   } else {
//     filterOverlay.style.display = "block";
//   }
// };

// // sort

// const sortOverlay = document.getElementById("sortOverlay");
// const toggleSortBtn = document.getElementById("toggleSortBtn");
// toggleSortBtn.onclick = function () {
//   if (sortOverlay.style.display !== "none") {
//     sortOverlay.style.display = "none";
//   } else {
//     sortOverlay.style.display = "block";
//   }
// };

// // const addRecordOverlay = document.getElementById("addRecordOverlay");
// const closeSortBtn = document.getElementById("closeSortBtn");
// closeSortBtn.onclick = function () {
//   if (sortOverlay.style.display === "none") {
//     sortOverlay.style.display = "none";
//   } else {
//     sortOverlay.style.display = "block";
//   }
// };

// const moreMenuActions = document.getElementById("moreMenuActions");
// const toggleMoreMenu = document.getElementById("toggleMoreMenu");
// toggleMoreMenu.onclick = function () {
//   if (moreMenuActions.style.display !== "none") {
//     moreMenuActions.style.display = "none";
//   } else {
//     moreMenuActions.style.display = "block";
//   }
// };
