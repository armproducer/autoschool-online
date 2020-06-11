$("#password_recovery button").on("click", function () {
  $("#code_entering").fadeIn("fast");
});

$(".password_recovery_trigger").on("click", function () {
  $("#password_recovery").fadeIn("fast");
});

$(".enter_trigger").on("click", function () {
  $("#enter").fadeIn("fast");
});

$(".registration_trigger").on("click", function () {
  $("#registration").fadeIn("fast");
});

$(".authorization_enter, .authorization_mobile").on("click", function () {
  $(".overlay, #enter").fadeIn("fast");
});

$(".authorization_registration, .main_green_button").on("click", function () {
  $(".overlay, #registration").fadeIn("fast");
});

$(".questions_form_submit").on("click", function () {
  $(".overlay, #thanks").fadeIn("fast");
});

$(".overlay_modal_close").on("click", function () {
  $(
    ".overlay, #enter, #registration, #password_recovery, #code_entering, #new_password, #thanks"
  ).fadeOut("fast");
});

$(".enter_trigger").on("click", function () {
  $("#registration, #password_recovery").fadeOut("fast");
});

$(".registration_trigger").on("click", function () {
  $("#enter, #thanks").fadeOut("fast");
});

$(".password_recovery_trigger").on("click", function () {
  $("#enter").fadeOut("fast");
});

$("#password_recovery button").on("click", function () {
  $("#password_recovery").fadeOut("fast");
});
