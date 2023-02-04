const video = document.getElementById("video");

const playElement = document.getElementById("play");
const muteElement = document.getElementById("mute");

const volumeElement = document.getElementById("volume");

const currentTimeElement = document.getElementById("current");
const durationElement = document.getElementById("duration");

const rewindElement = document.getElementById("rewind");

const noMotionPreference = window.matchMedia(
  "(prefers-reduced-motion: no-preference)"
);

/* Use custom controls if JS is correctly loaded */

const controls = document.getElementById("controls");
video.removeAttribute("controls");
controls.style.visibility = "visible";

playElement.addEventListener("click", () => {
  if (video.paused) {
    playElement.innerHTML = "Pause";
    video.play();
  } else {
    playElement.innerHTML = "Play";
    video.pause();
  }
});

muteElement.addEventListener("click", () => {
  video.muted = !video.muted;
  if (video.muted) {
    muteElement.innerHTML = "Unmute";
  } else {
    muteElement.innerHTML = "Mute";
  }
});

volumeElement.addEventListener("change", () => {
  video.volume = volumeElement.value;
});

video.addEventListener("timeupdate", () => {
  const currentTime = video.currentTime;
  const duration = video.duration;

  currentTimeElement.innerHTML = formatTime(currentTime);
  durationElement.innerHTML = formatTime(duration);
});

rewindElement.addEventListener("click", () => {
  video.currentTime = 0;
});

/* format time in this format minutes:seconds */

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  if (seconds < 10) {
    return `${minutes}:0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

function playPauseVideo() {
  // It is nicer to our users to have the video muted by default
  video.muted = true;
  const playPromise = video.play();

  /* Disable autoplay if user prefers reduced motion */
  if (noMotionPreference.matches) {
    video.play();
  }

  if (playPromise) {
    playPromise.then((_) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio !== 1 && !video.paused) {
              video.pause();
            } else if (video.paused) {
              video.play();
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(video);
    });
  }
}

playPauseVideo();
