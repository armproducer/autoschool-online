$("textarea").keyup(function () {
  $(this).height(29); // min-height 29
  $(this).height(this.scrollHeight);
});
