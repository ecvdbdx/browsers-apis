/* Progressive enhancement : Use custom controls if JS is correctly loaded */

const controls = document.getElementById("controls");
video.removeAttribute("controls");
controls.style.visibility = "visible";

/* Video controls */

/* !!! Magic happens... !!! */

/* Play the video if it is in viewport, otherwise pause the video */
function playPauseVideo() {
  /* It is nicer to our users to have the video muted by default */
  video.muted = true;

  video.play();

  const playPromise = video.play();

  if (playPromise) {
    playPromise.then((_) => {
      /* !!! Magic happens... !!! */
    });
  }
}

playPauseVideo();
