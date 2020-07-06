const video = document.querySelector(".youtube_video");
const video_style = getComputedStyle(video);

if (window.matchMedia("(max-width: 768px)").matches) {
  video.style.height = (parseInt(document.body.clientWidth) * 30) / 38.5 + "px";
} else {
  video.style.height = (parseInt(video_style.width) * 30) / 38.5 + "px";
}

$(window).resize(function () {
  video.style.height = (parseInt(video_style.width) * 30) / 38.5 + "px";
});
