/* Stores the Service Worker cache and
offline capabilities
This follows the MDN tutorial @:
https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
*/
let cacheVersion = 'fend-rrapp-v01';


self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheVersion).then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/restaurant.html',
        '/css/styles.css',
        '/data/restaurants.json',
        '/js/',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/js/serviceworker.js'
      ]);
    })
  );
});
