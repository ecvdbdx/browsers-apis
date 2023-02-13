const title = document.getElementById("title");

const EcvCoords = {
  latitude: 44.861,
  longitude: -0.554,
};

const onSuccess = (position) => {
  const isInECV =
    parseFloat(position.coords.latitude.toFixed(3)) === EcvCoords.latitude &&
    parseFloat(position.coords.longitude.toFixed(3)) === EcvCoords.longitude;
  if (isInECV) {
    title.textContent = "Welcome to ECV Digital";
  } else {
    title.textContent = "You are not yet in ECV Digital";
  }
};

const onError = () => {
  title.textContent = "Unable to retrieve your location";
};

if ("geolocation" in navigator) {
  title.textContent = "Locating…";
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
} else {
  title.textContent = "Geolocation is not supported by your browser";
}
