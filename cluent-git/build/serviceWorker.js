const CACHE_NAME = "version1"
const urlsTocash = ["index.html", "offline.html"]

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((Cache) => {
            console.log("OPEN")
            return Cache.addAll(urlsTocash)
        })
    )
})

this.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((res) => {
            return fetch(event.request).catch(() => caches.match('offile.html'))
        })
    )
})

this.addEventListener('activate', (event) => {
    const cacheWhiteList = []
    cacheWhiteList.push(CACHE_NAME)
    event.waitUntil(caches.keys().then((cacheNames) => Promise.all(
        cacheNames.map((cacheName) => {
            if (!cacheWhiteList.includes(cacheNames)) {
                return caches.delete(cacheName)
            }

        })
    )))
})