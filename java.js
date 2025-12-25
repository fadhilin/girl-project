const btn = document.getElementById("playBtn");
const audio = document.getElementById("myAudio");

btn.addEventListener("click", () => {
  audio.currentTime = 0;
  audio.play();
});
