
$(document).ready(function () {
  $("#toggleButton").click(function () {
      $("#colLeft").toggle();
  });
  $("#colLeft").click(function (e) {
      if (!$(e.target).closest('.mw_wrp').length && !$(e.target).is('.mw_wrp')) {
          $("#colLeft").hide();
      }
  });
});

