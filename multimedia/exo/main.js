/* Progressive enhancement : Use custom controls if JS is correctly loaded */

const controls = document.getElementById("controls");
video.removeAttribute("controls");
controls.style.visibility = "visible";

/* It is nicer to our users to have the video muted by default */
video.muted = true;

/* Video controls */

/* !!! Magic happens... !!! */

/* Play the video if it is in viewport, otherwise pause the video */
function playPauseVideo() {
  const playPromise = video.play();

  video.play();

  if (playPromise) {
    playPromise.then((_) => {
      /* !!! Magic happens... !!! */
    });
  }
}

playPauseVideo();
