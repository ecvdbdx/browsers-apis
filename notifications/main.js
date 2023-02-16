const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const generateNotifications = async () => {
  new Notification("Hi there!");
  await sleep(1000);
  new Notification("Do you like notifications?");
  await sleep(1000);
  new Notification("I hope you do!");
  await sleep(1000);
  new Notification("On last one, I promise!");
  await sleep(8000);
  new Notification("I lied, one more!");
  await sleep(1000);
  new Notification("NOOOTTTIFFICCCATTIIOONNNSSSSS!");
};

if ("Notification" in window) {
  /* Has permission been granted before ? */
  if (Notification.permission === "granted") {
    generateNotifications();
    /* If not granted nor explicitly denied, ask for permission */
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        generateNotifications();
      }
    });
  } else {
    alert("This browser does not support desktop notification");
  }
}
