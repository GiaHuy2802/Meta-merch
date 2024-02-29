
$(document).ready(function () {
  $("#toggleButton").click(function () {
      $("#menuContainer").toggle();
  });
  $("#menuContainer").click(function (e) {
      if (!$(e.target).closest('.account').length && !$(e.target).is('.account')) {
          $("#menuContainer").hide();
      }
  });
});
