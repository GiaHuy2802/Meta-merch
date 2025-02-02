
var checkboxes = document.querySelectorAll(
  '.groups input[type="checkbox"]'
);

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    checkboxes.forEach(function (otherCheckbox) {
      if (otherCheckbox !== checkbox) {
        otherCheckbox.checked = false;
      }
    });
  });
});