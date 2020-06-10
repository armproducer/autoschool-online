$("button").on("click", function () {
  $(".overlay, #enter").fadeIn("fast");
});
$(".overlay_modal_close").on("click", function () {
  $(".overlay, #enter, #registration").fadeOut("fast");
});
