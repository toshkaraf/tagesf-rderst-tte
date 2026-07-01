'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e9a6e8fb7765e6a1113b5d20831ba98e",
"assets/AssetManifest.bin.json": "8ad5ce8ae0e7b42a8288ef50cb702d64",
"assets/AssetManifest.json": "1bb99c60bbd38addf12e78ef534aefa3",
"assets/assets/sounds/correct.mp3": "1c9a8a11fb2e3b0bc9653dd86d658b74",
"assets/assets/sounds/incorrect.mp3": "1506875cd2b698b595dcfcfa73fcd3b5",
"assets/assets/sounds/new_question.mp3": "d3c5446d2b39f24613f4a278e4aea0ce",
"assets/assets/sounds/README.md": "582ead327ddf81edc6e97e2001dc1407",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "18768906a255d953a5ce839d0b7d7690",
"assets/lib/data/Fragen/Detailed/%25D0%259A%25D0%2590%25D0%25A0%25D0%25A2%25D0%2590_%25D0%2592%25D0%259E%25D0%259F%25D0%25A0%25D0%259E%25D0%25A1%25D0%259E%25D0%2592.md": "0a9ae1b2e7b9dd4968377cf23f97ac0b",
"assets/lib/data/Fragen/Detailed/detailed_201_215_complete.json": "8850a35263912aa324ccdc824ff400a9",
"assets/lib/data/Fragen/Detailed/detailed_201_230_complete.json": "55e916dca24b207db3d0df91265dd533",
"assets/lib/data/Fragen/Detailed/detailed_231_250_complete.json": "62984f60ec5945249a4081ca847e2f43",
"assets/lib/data/Fragen/Detailed/detailed_251_300_complete.json": "1e6c42d4b1e66f4361c6d3017441fff0",
"assets/lib/data/Fragen/Detailed/detailed_301_350_complete.json": "ff9f238d4e62bf90f20222941c4209ba",
"assets/lib/data/Fragen/Detailed/detailed_351_400_complete.json": "7f7389cb1c5f0518ca95782c7c17c1fb",
"assets/lib/data/Fragen/Detailed/detailed_401_450_complete.json": "89fec8109bb70e5fa44ac687bea2d0d7",
"assets/lib/data/Fragen/Detailed/detailed_41_55.json": "ce2d3ab8dd316245b47ee99bf2a33655",
"assets/lib/data/Fragen/Detailed/detailed_451_500_complete.json": "c5293f1e8db49a45eaed3f721d3a8b60",
"assets/lib/data/Fragen/Detailed/detailed_501_550_greece_b2.json": "662d62169833ad3c41bfcc1f202103af",
"assets/lib/data/Fragen/Detailed/detailed_questions_01_25.json": "9df928db47207fcd8082c95adc4247b5",
"assets/lib/data/Fragen/Detailed/detailed_questions_101_115_complete.json": "5b928f05b17f9b669c06a4e49574e1c3",
"assets/lib/data/Fragen/Detailed/detailed_questions_26_40.json": "419fa33dac3579e3c53a65e325b04c48",
"assets/lib/data/Fragen/Detailed/detailed_questions_56_70_final.json": "dd6657435e47c842bd6c2511b19785f2",
"assets/lib/data/Fragen/Detailed/detailed_questions_71_85_final.json": "22b9ef6f5a2b13905a805bf21d647874",
"assets/lib/data/Fragen/Detailed/detailed_questions_86_100_final.json": "ba077ad62906776d7ef61d5d2be6e6e1",
"assets/lib/data/Fragen/Detailed/early_modern_7001_7047.json": "669e81074cc6fae0fe6a6c304f20c588",
"assets/lib/data/Fragen/Detailed/early_modern_7048_7147.json": "b9cae719a53bb71216a1068541779817",
"assets/lib/data/Fragen/Detailed/early_modern_7148_7247.json": "08dcc40b4d4067e524676db44f440158",
"assets/lib/data/Fragen/Detailed/early_modern_7248_7347.json": "ccbd0961840d953175daab840c941467",
"assets/lib/data/Fragen/Detailed/medieval_6001_6100.json": "e51e2f8b24d4f58180173c31c0b6a6ac",
"assets/lib/data/Fragen/Detailed/medieval_6101_6200.json": "c438116236597d7fd2db9642308a1039",
"assets/lib/data/Fragen/Detailed/medieval_6201_6300.json": "491dec6defeee83ffef268f029f3ea4f",
"assets/lib/data/Fragen/Detailed/medieval_6301_6400.json": "d2de66cab958d88260d7106f84b56923",
"assets/lib/data/Fragen/Detailed/medieval_6401_6500.json": "38159d55e2b72e7bc44440662c70f04c",
"assets/lib/data/Fragen/Detailed/medieval_6501_6600.json": "4e9688eb26e32a30065227813c3b0ead",
"assets/lib/data/Fragen/Detailed/medieval_6601_6700.json": "87af670454925b99f39a56166d004e6d",
"assets/lib/data/Fragen/Detailed/medieval_6701_6800.json": "ec5a4a398bd975a4328ceb109da0b8ff",
"assets/lib/data/Fragen/Detailed/medieval_6801_6900.json": "f2d237e8288487cdc749452fffea49bb",
"assets/lib/data/Fragen/Detailed/medieval_6901_7000.json": "1d02596cab014cc776a12cbd805e1e29",
"assets/NOTICES": "3c3ef02b7910fb7abe0d08b24e82a88a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "66b7040044c9e5ab44f49d564be11d66",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "846a67bca4a1de84135872586e3f0d09",
"icons/Icon-192.png": "66b7040044c9e5ab44f49d564be11d66",
"icons/Icon-512.png": "66b7040044c9e5ab44f49d564be11d66",
"icons/Icon-maskable-192.png": "66b7040044c9e5ab44f49d564be11d66",
"icons/Icon-maskable-512.png": "66b7040044c9e5ab44f49d564be11d66",
"index.html": "c8c1707b1224736f8bac460d4c15ada6",
"/": "c8c1707b1224736f8bac460d4c15ada6",
"main.dart.js": "79a495562430aa79bcca55381ac6853c",
"manifest.json": "99618e6ea961d2a749b43e74c13d1923",
"version.json": "9e8f4a2fde48611e9e82a4b4c9a9ee79"};
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
