// Video
const btn = document.querySelector("button.button");
const switchText = document.querySelector(".switch");
const video = document.querySelector("video");

btn.addEventListener("click", () => {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    switchText.innerText = "Pause";
    video.pause();
  } else {
    btn.classList.remove("slide");
    switchText.innerText = "Play";
    video.play();
  }
});

// Loader
const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  loader.classList.add("hide");
});
