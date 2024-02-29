
function toggleFilter() {
  var colLeft = document.getElementById("colLeft");

  // Toggle the "active" class on Col_left
  colLeft.classList.toggle("active");
}

// Close filter when clicking outside mw_wrp
document.addEventListener("click", function (event) {
  var colLeft = document.getElementById("colLeft");
  var mwWrp = document.querySelector(".mw_wrp");

  if (!mwWrp.contains(event.target) && !colLeft.contains(event.target)) {
    colLeft.classList.remove("active");
  }
});