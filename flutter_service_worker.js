'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "aa504358563b0f9bf68b782ac90448c4",
"version.json": "642446f5cd067b7cbc6923e335ecd3bf",
"index.html": "db15a81cf51cd2d4216e607256d8d1a7",
"/": "db15a81cf51cd2d4216e607256d8d1a7",
"main.dart.js": "ca3913311caa2f175c0b54a974fad7c3",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "45dd345597b3d3df13ba890b83f1e2b4",
"icons/Icon-192.png": "2428157e070a40edc6e04b8cfca6b3b1",
"icons/Icon-maskable-192.png": "2428157e070a40edc6e04b8cfca6b3b1",
"icons/Icon-maskable-512.png": "a43a4dcf1404fc1b729e5b7a3df60861",
"icons/Icon-512.png": "a43a4dcf1404fc1b729e5b7a3df60861",
"manifest.json": "c911bcbaf6ffb7a93cec8e45dd119aab",
"assets/images/tp.jpg": "c2e37c592fdb88ec35c4344bf37b9a37",
"assets/images/pnxbig.jpg": "717cd3af4de555cba56eb6f2958d5776",
"assets/images/laryng.png": "4bcfcd65e2212f55ff169d34a0fe7076",
"assets/images/skladanie1.jpg": "4ecebd9f1c3cb9393e93cf82672ccbfc",
"assets/images/skladanie3.jpg": "76e7b19a88c46a375699a6b1b118a18e",
"assets/images/skladanie2.jpg": "1a2b022c78802127890055f5118ce251",
"assets/images/odchylkeda.jpg": "c914c63c99fba5f5835cc4c67daf5b8b",
"assets/images/skladanie6.jpg": "7bf6bf66d9b823bf722c70e160635289",
"assets/images/newborn.jpg": "8e03b97f931f5dc77fac7d92be65f48b",
"assets/images/pad1.jpg": "18d2f079165d85cca6792278302d00a5",
"assets/images/wenflon.jpg": "c8d4be1d3427f5a3a72a81e0e1ab9d9b",
"assets/images/dodechy.jpg": "9b0c4d8dddce8a0dc389a141e237b9e2",
"assets/images/pad2.jpg": "0aa967b04e67c5c8e455b5c05d53eb0e",
"assets/images/quicktrach.jpg": "d9dd79e988f58d10dcea9a92ce282d20",
"assets/images/skladanie5.jpg": "f8b2fea5da11f5c0bd391a000b4f34e0",
"assets/images/defi.jpg": "f22cc2d4029745121ec75510c755c3fd",
"assets/images/pad3.jpg": "14aeff726951737361f7daa4c9afdcb7",
"assets/images/skladanie4.jpg": "6ded7bb47d7356e2a6d15e8e4574c5ec",
"assets/images/drawer.jpg": "76550cd29841578886a1acfad8c49023",
"assets/images/quicktrach2.jpg": "28f0c744f4d48200d3226dcb4cf20471",
"assets/images/kneekid2.jpg": "2f2b2d4b1a0c890b6f72bb5605156dda",
"assets/images/biodro.jpg": "ba8a9216087219c50680522e4efe321c",
"assets/images/io.jpg": "6491663f297324e2216508626fd6582e",
"assets/images/quicktrach1.jpg": "3b81f1047dfaae1dcb280859ee808a62",
"assets/images/wyciaganie.jpg": "e827871db0d24ef9730d6e6e9cc436fb",
"assets/images/budowa.jpg": "98e563fb94a86bc2d352a1965d6d9b0d",
"assets/images/wklucie.jpg": "88fa2ec97066b6106b5c9b99fcd7c977",
"assets/images/czarne1.jpg": "f9b02af9c69db876132a3302c702a04a",
"assets/images/miednica.jpg": "557e1a6b63f6608b331dd241ff9d6773",
"assets/images/ramiona.jpg": "2ee3ba384aa8d8c211ff5bd787102e38",
"assets/images/zapiety.jpg": "214189877a65d9aa8553f0ea45875984",
"assets/images/czarne3.jpg": "8ef7527a07e33aa3ef25133544da98a1",
"assets/images/czarne2.jpg": "88a9bfb7aac26d9bf9e37afe961af976",
"assets/images/apgar_kid.jpg": "7fc1be1cad8d465979a7b514f8712c0f",
"assets/images/podkladkaked.jpg": "9c47b315e6eca297d3084ffc916b9cc3",
"assets/images/pupa.jpg": "e3e1610b7042276320d0f240d8f053ab",
"assets/images/uniesienie.jpg": "0dc9350d53a67908bc391181f33edd35",
"assets/images/maska.jpg": "0f74a37031eab2c937d955be2082f6e3",
"assets/images/glowa.jpg": "6b26f7210aabfbc701337999a0841791",
"assets/images/sliver.jpg": "177747fe0fb718e240253d75fe3c9cc4",
"assets/images/zacisk.jpg": "c2c6cc5c0e7e216435eb86c8406f514a",
"assets/images/obrot.jpg": "0196019f9d9870ed4076146a891b1a31",
"assets/images/passrodek.jpg": "2e1f5e2b3c3cc391227aa25616863902",
"assets/images/zyla2.jpg": "eec823a3434bbf95ff16865cd3308933",
"assets/images/nogi2.jpg": "d886f7bc05ad57915c1b9870073d2546",
"assets/images/laryng2.png": "b0bf42e7f52ad125cb0a4738088006f3",
"assets/images/zyla1.jpg": "7e2772343b2310972d1f93d9d632f007",
"assets/images/nogi1.jpg": "207a925d3bb7558539291af3af05c193",
"assets/images/skladanie9.jpg": "5ad6dc30b6ed4bc1c9291752fbfb2f94",
"assets/images/kneeadlt2.jpg": "ad066476210c517a0fbb9b4b00b788bd",
"assets/images/nadgarstek.jpg": "80b2c99fa1f2b2d44e3de3dc77a159fe",
"assets/images/skladanie8.jpg": "8d574a8c96ca990baea9afcc57a0191f",
"assets/images/pedipac.jpg": "905ab8a8c47aa571394f34dec62a20fe",
"assets/images/ked.jpg": "b4baeead31b707f92c1eb00938cbbb34",
"assets/images/ulozenie.jpg": "a4407b9ffbc29901edc2a1f5aa18604e",
"assets/images/uszy.jpg": "abb40ab71bc51b5a5a03a3fd5fc76505",
"assets/AssetManifest.json": "0b2def2e0c7ee5e33dc2628863bf0dd5",
"assets/NOTICES": "5cc79428e56a860d2d196c86861d730c",
"assets/FontManifest.json": "83bdc857405ee6fb5316e05f4a715cfe",
"assets/AssetManifest.bin.json": "fb4aa149a63fa2355e9753b7613d7e72",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "279bb4448111f498c741157e41a82b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b898d100725fb9252281c3dfd726b43c",
"assets/fonts/MaterialIcons-Regular.otf": "bc543f78da3660139dec42c2a6395790",
"assets/assets/icon/icon.png": "4b9b52acffdf0b5d9de98b2dd3adc2be",
"assets/assets/icon/app-icon-background.png": "391ed3521e071cbdbf648342b5e12873",
"assets/assets/icon/app-icon-foreground.png": "16db5779993af9f13694d2bfcf9dff4e",
"assets/assets/fonts/montserrat/Montserrat-Medium.ttf": "a98626e1aef6ceba5dfc1ee7112e235a",
"assets/assets/fonts/montserrat/Montserrat-Light.ttf": "100b38fa184634fc89bd07a84453992c",
"assets/assets/fonts/montserrat/Montserrat-Bold.ttf": "88932dadc42e1bba93b21a76de60ef7a",
"assets/assets/fonts/montserrat/Montserrat-SemiBold.ttf": "c88cecbffad6d8e731fd95de49561ebd",
"assets/assets/fonts/montserrat/Montserrat-Regular.ttf": "9c46095118380d38f12e67c916b427f9",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
