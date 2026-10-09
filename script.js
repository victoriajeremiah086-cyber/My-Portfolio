// Live clock
function updateTime() {
  const el = document.getElementById("currentTime");
  if (el) el.textContent = new Date().toLocaleTimeString();
}
updateTime();
setInterval(updateTime, 1000);

// Show a placeholder silhouette until photo.jpg is added
const photoImg = document.getElementById("photoImg");
const photoFrame = document.getElementById("photoFrame");
if (photoImg && photoFrame) {
  const check = () => {
    if (!photoImg.complete || photoImg.naturalWidth === 0) {
      photoFrame.classList.add("empty");
    } else {
      photoFrame.classList.remove("empty");
    }
  };
  photoImg.addEventListener("error", () => photoFrame.classList.add("empty"));
  photoImg.addEventListener("load", () => photoFrame.classList.remove("empty"));
  check();
}
