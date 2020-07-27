/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'media';
// Incrementing OFFLINE_VERSION will kick off the install event and force
// previously cached resources to be updated from the network.
// const OFFLINE_VERSION = 1;
const OFFLINE_URL = '/index.html';
const KEY_MAP = {
  interaction: 'event',
  client: 'customer',
  os_name: 'operating_system_name',
  x1: 'utm_source',
  x2: 'utm_medium',
  x3: 'utm_campaign',
  landing_url: 'campaign_url'
};

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll([
        '/index.html'
      ]);
    })
  );
})

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Enable navigation preload if it's supported.
    // See https://developers.google.com/web/updates/2017/02/navigation-preload
    if ('navigationPreload' in self.registration) {
      await self.registration.navigationPreload.enable();
    }
  })());

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // We only want to call event.respondWith() if this is a navigation request
  // for an HTML page.
  if (event.request.method !== 'GET') return;

  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        // First, try to use the navigation preload response if it's supported.
        const preloadResponse = await event.preloadResponse;
        if (preloadResponse) {
          return preloadResponse;
        }

        const networkResponse = await fetch(event.request);
        return networkResponse;
      } catch (error) {
        // catch is only triggered if an exception is thrown, which is likely
        // due to a network error.
        // If fetch() returns a valid HTTP response with a response code in
        // the 4xx or 5xx range, the catch() will NOT be called.
        console.log('Fetch failed; returning offline page instead.', error);

        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(OFFLINE_URL);
        return cachedResponse;
      }
    })());
  }

  // If our if() condition is false, then this fetch handler won't intercept the
  // request. If there are any other fetch handlers registered, they will get a
  // chance to call event.respondWith(). If no fetch handlers call
  // event.respondWith(), the request will be handled by the browser as if there
  // were no service worker involvement.
});

self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;
  const url = event.request.url
  let modifyRequest = event.request
  const getQueryParams = (url) => {
    let queryParams = {};
    const queryString = url.split('?')[1]
    const params = queryString.split('&')
    for (var i = 0; i < params.length; i++) {
        var pair = params[i].split('=');
        queryParams[pair[0]] = decodeURIComponent(pair[1]);
    }
    return queryParams;
  }
  
  const mapQueryParams = (queryParamsObj = {}) => {
    const mapQueryStr = []
    for (let key in queryParamsObj) {
      const updatedKey = KEY_MAP[key]
      const value = queryParamsObj[key]
      mapQueryStr.push(`${updatedKey}=${value}`)
    }
  
    return mapQueryStr.join('&')
  }

  if (url.indexOf('.gif') !== -1) {
    const url = event.request.url.split('?')[0]
    const queryParamsObj = getQueryParams(event.request.url)
    const finalUrl = `${url}?${mapQueryParams(queryParamsObj)}`
    modifyRequest = new Request(
      finalUrl,
      {
        method: event.request.method,
        mode: event.request.mode
      }
    )
  }
  console.log(modifyRequest)
  event.respondWith(
    caches.match(modifyRequest)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(modifyRequest).then(
          function(response) {
            // Check if we received a valid response
            console.log('service workder', response)
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (CACHE_NAME !== cacheName &&  cacheName.startsWith('media')) {
            return caches.delete(cacheName);
          }
          return false
        })
      );
    })
  );
});