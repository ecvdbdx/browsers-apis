self.addEventListener("install", (event) => {
  event.waitUntil(
    /* Create a place to store the response of the / route */
    caches.open("v1").then((cache) => {
      return cache.addAll(["/"]);
    })
  );
});

/* If the request is in cache, respond with it. Otherwise forward to network */
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((responseFromCache) => {
        if (responseFromCache) {
          return responseFromCache;
        }
        return fetch(event.request);
      })
      .catch(() => {
        return fetch(event.request);
      })
  );
});
