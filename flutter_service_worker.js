'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "427aadbb6fc2150bdbf5089d769f6256",
"version.json": "854d6f1d406e9e2e2f653a345f15766f",
"index.html": "155f2dd08c9149324830ccc6b19a2115",
"/": "155f2dd08c9149324830ccc6b19a2115",
"main.dart.js": "07de9377815dd1d3716dead72b1c3c89",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "acd7d423a0c271f655532f589a2a3754",
"icons/Icon-192.png": "a024020d1e0b327c004031aab31cf858",
"icons/Icon-maskable-192.png": "a024020d1e0b327c004031aab31cf858",
"icons/Icon-maskable-512.png": "5ac1098f0cb0751bf3c5a21bc0979b9a",
"icons/Icon-512.png": "5ac1098f0cb0751bf3c5a21bc0979b9a",
"manifest.json": "5e71b921a1518127c70a95c5b0210a3b",
"assets/AssetManifest.json": "fb6417693617afe57aa42a9ee6f85a38",
"assets/NOTICES": "d252d1a4baac9db1d23c0a8bc1f832cd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "6753ca28d6d470715ed95f7b5a1352f2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "67f4ab3d3f5cc53182dc9b913aff1d8c",
"assets/fonts/MaterialIcons-Regular.otf": "1f85fd5160b56495bb05195b7a4545ef",
"assets/assets/images/icon.png": "8f730cb1725bee40f615949da22dffaf",
"assets/assets/images/app-icon-background.png": "6d7915c07e48b0608045c2d63cf67aab",
"assets/assets/images/logo.png": "ec0691139020f5323cb1f9127884347f",
"assets/assets/images/equipment/tp.jpg": "c2e37c592fdb88ec35c4344bf37b9a37",
"assets/assets/images/equipment/pnxbig.jpg": "717cd3af4de555cba56eb6f2958d5776",
"assets/assets/images/equipment/laryng.png": "4bcfcd65e2212f55ff169d34a0fe7076",
"assets/assets/images/equipment/instructions/screen4.jpg": "775668ba7988c1196827110e5a347df6",
"assets/assets/images/equipment/instructions/screen1.png": "a19d7d29c7388fdfaa609782d76cca88",
"assets/assets/images/equipment/instructions/screen2.jpg": "234c7dc01278d920932f653635b852cb",
"assets/assets/images/equipment/instructions/screenshot1.png": "04a4019a2f94422e45658913c446f826",
"assets/assets/images/equipment/skladanie1.jpg": "4ecebd9f1c3cb9393e93cf82672ccbfc",
"assets/assets/images/equipment/ug/ug.png": "5ffea4f2a0b730a2dff47b578667b143",
"assets/assets/images/equipment/ug/ug2.png": "35bc5fbbcea691dd3d29fa0a5d869486",
"assets/assets/images/equipment/ug/ug3.png": "95bb96a3abb2e3e4cb5baae82c961618",
"assets/assets/images/equipment/skladanie3.jpg": "76e7b19a88c46a375699a6b1b118a18e",
"assets/assets/images/equipment/skladanie2.jpg": "1a2b022c78802127890055f5118ce251",
"assets/assets/images/equipment/odchylkeda.jpg": "c914c63c99fba5f5835cc4c67daf5b8b",
"assets/assets/images/equipment/skladanie6.jpg": "7bf6bf66d9b823bf722c70e160635289",
"assets/assets/images/equipment/newborn.jpg": "8e03b97f931f5dc77fac7d92be65f48b",
"assets/assets/images/equipment/pad1.jpg": "18d2f079165d85cca6792278302d00a5",
"assets/assets/images/equipment/wenflon.jpg": "c8d4be1d3427f5a3a72a81e0e1ab9d9b",
"assets/assets/images/equipment/dodechy.jpg": "9b0c4d8dddce8a0dc389a141e237b9e2",
"assets/assets/images/equipment/pad2.jpg": "0aa967b04e67c5c8e455b5c05d53eb0e",
"assets/assets/images/equipment/quicktrach.jpg": "d9dd79e988f58d10dcea9a92ce282d20",
"assets/assets/images/equipment/skladanie5.jpg": "f8b2fea5da11f5c0bd391a000b4f34e0",
"assets/assets/images/equipment/defi.jpg": "f22cc2d4029745121ec75510c755c3fd",
"assets/assets/images/equipment/pad3.jpg": "14aeff726951737361f7daa4c9afdcb7",
"assets/assets/images/equipment/skladanie4.jpg": "6ded7bb47d7356e2a6d15e8e4574c5ec",
"assets/assets/images/equipment/quicktrach2.jpg": "28f0c744f4d48200d3226dcb4cf20471",
"assets/assets/images/equipment/kneekid2.jpg": "2f2b2d4b1a0c890b6f72bb5605156dda",
"assets/assets/images/equipment/biodro.jpg": "ba8a9216087219c50680522e4efe321c",
"assets/assets/images/equipment/io.jpg": "6491663f297324e2216508626fd6582e",
"assets/assets/images/equipment/quicktrach1.jpg": "3b81f1047dfaae1dcb280859ee808a62",
"assets/assets/images/equipment/wyciaganie.jpg": "e827871db0d24ef9730d6e6e9cc436fb",
"assets/assets/images/equipment/budowa.jpg": "98e563fb94a86bc2d352a1965d6d9b0d",
"assets/assets/images/equipment/wklucie.jpg": "88fa2ec97066b6106b5c9b99fcd7c977",
"assets/assets/images/equipment/czarne1.jpg": "f9b02af9c69db876132a3302c702a04a",
"assets/assets/images/equipment/miednica.jpg": "557e1a6b63f6608b331dd241ff9d6773",
"assets/assets/images/equipment/ramiona.jpg": "2ee3ba384aa8d8c211ff5bd787102e38",
"assets/assets/images/equipment/zapiety.jpg": "214189877a65d9aa8553f0ea45875984",
"assets/assets/images/equipment/czarne3.jpg": "8ef7527a07e33aa3ef25133544da98a1",
"assets/assets/images/equipment/czarne2.jpg": "88a9bfb7aac26d9bf9e37afe961af976",
"assets/assets/images/equipment/podkladkaked.jpg": "9c47b315e6eca297d3084ffc916b9cc3",
"assets/assets/images/equipment/pupa.jpg": "e3e1610b7042276320d0f240d8f053ab",
"assets/assets/images/equipment/uniesienie.jpg": "0dc9350d53a67908bc391181f33edd35",
"assets/assets/images/equipment/maska.jpg": "0f74a37031eab2c937d955be2082f6e3",
"assets/assets/images/equipment/glowa.jpg": "6b26f7210aabfbc701337999a0841791",
"assets/assets/images/equipment/sliver.jpg": "177747fe0fb718e240253d75fe3c9cc4",
"assets/assets/images/equipment/zacisk.jpg": "c2c6cc5c0e7e216435eb86c8406f514a",
"assets/assets/images/equipment/obrot.jpg": "0196019f9d9870ed4076146a891b1a31",
"assets/assets/images/equipment/passrodek.jpg": "2e1f5e2b3c3cc391227aa25616863902",
"assets/assets/images/equipment/zyla2.jpg": "eec823a3434bbf95ff16865cd3308933",
"assets/assets/images/equipment/splash_screen.png": "8d6f0348d1a64454c26af187d6d66a09",
"assets/assets/images/equipment/nogi2.jpg": "d886f7bc05ad57915c1b9870073d2546",
"assets/assets/images/equipment/laryng2.png": "b0bf42e7f52ad125cb0a4738088006f3",
"assets/assets/images/equipment/odma_bok/odma_bok.png": "fccab43128dc90f015346a79e7bfd566",
"assets/assets/images/equipment/odma_bok/odma_bok1.png": "bbd69d64f998d8ce3c09042045737ad2",
"assets/assets/images/equipment/zyla1.jpg": "7e2772343b2310972d1f93d9d632f007",
"assets/assets/images/equipment/nogi1.jpg": "207a925d3bb7558539291af3af05c193",
"assets/assets/images/equipment/skladanie9.jpg": "5ad6dc30b6ed4bc1c9291752fbfb2f94",
"assets/assets/images/equipment/kneeadlt2.jpg": "ad066476210c517a0fbb9b4b00b788bd",
"assets/assets/images/equipment/nadgarstek.jpg": "80b2c99fa1f2b2d44e3de3dc77a159fe",
"assets/assets/images/equipment/skladanie8.jpg": "8d574a8c96ca990baea9afcc57a0191f",
"assets/assets/images/equipment/pedipac.jpg": "905ab8a8c47aa571394f34dec62a20fe",
"assets/assets/images/equipment/ked.jpg": "b4baeead31b707f92c1eb00938cbbb34",
"assets/assets/images/equipment/ulozenie.jpg": "a4407b9ffbc29901edc2a1f5aa18604e",
"assets/assets/images/equipment/uszy.jpg": "abb40ab71bc51b5a5a03a3fd5fc76505",
"assets/assets/images/kid.png": "393de8cc1274565b54cc49be0fc9806c",
"assets/assets/images/app-icon-foreground.png": "2514e870006289a61b00569d3f423a3d",
"assets/assets/splash.png": "b1ff35439a14978eec316d183a070b07",
"assets/assets/translations/pl.json": "d67b7a8160932a493489c5ff610595e1",
"assets/assets/translations/en.json": "d67b7a8160932a493489c5ff610595e1",
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
