const subjectsItem = document.querySelectorAll(
  ".subjects_container_box_description_item"
);

let subjectItemActive;

function remove_bootrap_classes() {
  subjectItemActive = document.querySelector("#subjects_tab_content .active");
  subjectsItem.forEach((item) => {
    item.classList.remove("fade");
    item.classList.remove("show");
    item.classList.remove("active");
    item.classList.remove("tab-pane");
  });
  subjectItemActive.classList.add("show");
  subjectItemActive.classList.add("active");
}

if (window.matchMedia("(max-width: 1024px)").matches) {
  remove_bootrap_classes();
}

$(window).resize(function () {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    remove_bootrap_classes();
  } else {
    subjectsItem.forEach((item) => {
      item.classList.add("fade");
      item.classList.add("tab-pane");
    });
  }
});
