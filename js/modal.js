$(".authorization_enter, .authorization_mobile").on("click", function () {
  $(".overlay, #enter").fadeIn("fast");
  document.body.classList.add("body_stop_scroll");
});

$(".authorization_registration, .main_green_button, .price_button").on("click", function () {
  $(".overlay, #registration").fadeIn("fast");
  document.body.classList.add("body_stop_scroll");
});

$(".questions_form_submit").on("click", function () {
  $(".overlay, #thanks").fadeIn("fast");
  document.body.classList.add("body_stop_scroll");
});

$(".overlay_modal_close_common").on("click", function () {
  $(
    ".overlay, #enter, #registration, #password_recovery, #code_entering, #new_password, #thanks, #password_recovery_finished, #code_entering_twice"
  ).fadeOut("fast");
  document.body.classList.remove("body_stop_scroll");
});

$(".enter_trigger").on("click", function () {
  $(
    "#registration, #password_recovery, #password_recovery_finished, #new_password, #code_entering"
  ).fadeOut("fast");
  $("#enter").fadeIn("fast");
});

$(".registration_trigger").on("click", function () {
  $("#enter, #thanks, #terms_of_use, #privacy_policy").fadeOut("fast");
  $("#registration").fadeIn("fast");
});

$(".password_recovery_trigger").on("click", function () {
  $("#enter").fadeOut("fast");
  $("#password_recovery").fadeIn("fast");
});

$(".code_entering_trigger").on("click", function () {
  $("#password_recovery").fadeOut("fast");
  $("#code_entering").fadeIn("fast");
});

$(".new_password_trigger").on("click", function () {
  $("#code_entering, #code_entering_twice").fadeOut("fast");
  $("#new_password").fadeIn("fast");
});

$(".password_recovery_finished_trigger").on("click", function () {
  $("#new_password").fadeOut("fast");
  $("#password_recovery_finished").fadeIn("fast");
});

$(".code_entering_twice_trigger").on("click", function () {
  $("#code_entering, #code_entering_twice").fadeOut("fast");
  $("#code_entering_twice").fadeIn("fast");
});

$(".terms_of_use_trigger").on("click", function () {
  $("#registration").fadeOut("fast");
  $("#terms_of_use").fadeIn("fast");
});

$(".privacy_policy_trigger").on("click", function () {
  $("#registration").fadeOut("fast");
  $("#privacy_policy").fadeIn("fast");
});

$(".overlay_modal_close_to_registration").on("click", function () {
  $("#terms_of_use, #privacy_policy").fadeOut("fast");
  $("#registration").fadeIn("fast");
});

$(".terms_of_use_footer_trigger").on("click", function () {
  $(".overlay, #terms_of_use").fadeIn("fast");
});

$(".privacy_policy_footer_trigger").on("click", function () {
  $(".overlay, #privacy_policy").fadeIn("fast");
});
