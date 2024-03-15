const staticCacheName = "site-static-v13";
const dynamicCacheName = "site-dynamic-v6";

const assets = [
  "/",
  "/index.html",
  "/js/app.js",
  "/js/materialize.min.js",
  "/css/materialize.min.css",
  "/js/my-shield.js",
  "/js/shield.js",
  "/css/about-us.css",
  "/css/branch-network.css",
  "/css/contact.css",
  "/css/my-shield.css",
  "/css/products-services.css",
  "/css/shield-careers.css",
  "/css/fallback.css",
  "/pages/fallback.html",
  "/images/gifs/offline-bear.gif",
  "/images/icons/offline.png",
  "/js/sheep.js",
  "/css/sheep.css",
  "/pages/sheep.html",
  "/images/gifs/sheep.gif",
  "/images/icons/sheep.png",
  "/images/about-us-1776.png",
  "/images/accountant.jpg",
  "/images/analytics-engineer.jpg",
  "/images/associate.jpg",
  "/images/background.jpg",
  "/images/billing-specialist.jpg",
  "/images/business-analyst.jpg",
  "/images/corporate-actuary.jpg",
  "/images/hr-manager.jpg",
  "/images/img-1.JPG",
  "/images/img-2.JPG",
  "/images/img-3.JPG",
  "/images/img-4.jpg",
  "/images/img-5.JPG",
  "/images/img-6.JPG",
  "/images/img-7.jpg",
  "/images/img-8.JPG",
  "/images/img-9.JPG",
  "/images/japanese-education.jpg",
  "/images/junior-consultant.jpg",
  "/images/mobile-developer.jpg",
  "/images/parallax-1.jpg",
  "/images/parallax-2.jpg",
  "/images/parallax-3.jpg",
  "/images/people-data-specialist.jpg",
  "/images/rimac-electric-revolution.jpg",
  "/images/senior-consultant.jpg",
  "/images/strategy-analyst.jpg",
  "/images/summer-intern.jpg",
  "/images/ukraine-strength-pride.jpg",
  "/images/web-designer.jpg",
  "/images/icons/icon-72x72.png",
  "/images/icons/icon-96x96.png",
  "/images/icons/icon-128x128.png",
  "/images/icons/icon-144x144.png",
  "/images/icons/icon-152x152.png",
  "/images/icons/icon-192x192.png",
  "/images/icons/icon-384x384.png",
  "/images/icons/icon-512x512.png",
  "/images/logos/allstate-logo.png",
  "/images/logos/amnesty-logo.png",
  "/images/logos/anz-logo.png",
  "/images/logos/aviva-logo.png",
  "/images/logos/bugatti-rimac.png",
  "/images/logos/capital-one-logo.png",
  "/images/logos/geico-logo.png",
  "/images/logos/hsbc-logo.png",
  "/images/logos/liberty-mutual-logo.png",
  "/images/logos/netflix-logo.png",
  "/images/logos/prudential-logo.png",
  "/images/logos/sony-life-logo.png",
  "/images/logos/spacex-logo.png",
  "/images/logos/spotify-logo.png",
  "/images/logos/world-vision-logo.png",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://code.jquery.com/jquery-3.7.0.min.js",
  "https://kit.fontawesome.com/959fd8dfca.js",
  "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css",
  "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js",
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
  "https://fonts.googleapis.com/css2?family=Inter&family=Lato:ital@0;1&family=Montserrat:ital@0;1&family=Open+Sans:ital@0;1&family=Poppins:ital,wght@0,400;1,200;1,300&family=Roboto:ital@0;1&display=swap",
  "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js",
  "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js",
  "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js",
];

// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

// install event
self.addEventListener("install", (evt) => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener("activate", (evt) => {
  //console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then((keys) => {
      //console.log(keys);
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener("fetch", (evt) => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches
      .match(evt.request)
      .then((cacheRes) => {
        return (
          cacheRes ||
          fetch(evt.request).then((fetchRes) => {
            return caches.open(dynamicCacheName).then((cache) => {
              cache.put(evt.request.url, fetchRes.clone());
              // check cached items size
              limitCacheSize(dynamicCacheName, 16);
              return fetchRes;
            });
          })
        );
      })
      .catch(() => {
        if (evt.request.url.indexOf(".html") > -1) {
          return caches.match("/pages/fallback.html");
        }
      })
  );
});
