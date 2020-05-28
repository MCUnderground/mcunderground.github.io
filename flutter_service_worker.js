'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b22cb184c5a56569be6e52b33cd3eac5",
".git/config": "0095e2a78917a6deaa9660a5c7343551",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "86bdb4ae17462731274376d38a8dcf6d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "0fde82a100a154deca7f668e72167f48",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a0fa3bac7ac54353a5cdf20365b67b9f",
".git/logs/refs/heads/master": "a0fa3bac7ac54353a5cdf20365b67b9f",
".git/logs/refs/remotes/origin/master": "5491d9c26a14ab530eb00f141edc4d71",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0c/212e4f454a1fd53de14ce781fd334b6936c0d6": "b9b8a9ff9b22140a80686787dd7d2beb",
".git/objects/0c/35c8218be5038017365093147bfc6e0ca531fc": "7c0f65e172304a08b229a0e23d69dbb3",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/13/e0df5b0fbcf5012eb2ae8b07526ad653c4aad6": "b14de6c85cbdca218dccee006ac0707a",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/18/1952c64caee8295206ceb4805d3fb900af06f1": "b3cf58347a0facda3ea5edf2fd409e75",
".git/objects/19/0e8e367ec669c4179e3ea7f9ce16fe4c1e4888": "108bec6d46d668d3956db596ff9e8f26",
".git/objects/1a/f3cf41757b89ac0625774b62def66a913a2d24": "22d5c01500d7c4f0d834cf3fcb1f7287",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/393c0e6661aff527143daa1e7602bef025c111": "42c68c6552930ec52ede5121013a24c9",
".git/objects/39/d82c61069d6b2ed24f2f142e3f760aee5e5ca4": "38c26812143fe005b221dec29d5505a7",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/49/cf667db7f58e9a82ca4f2e630e7871ee0dea94": "23c5ea52c29852d039487ed786e667cb",
".git/objects/4d/85f9c3c4c67b0e64c87f8a6a1333758012f71e": "ac4dde6dcfe7b57c034bda8ed94c3d33",
".git/objects/55/52d6352108726336c44b328d062c2ed7e0b595": "c5e0e2c7849903261e5a714b8f1ccff5",
".git/objects/5d/5efbbe9759fe99180bce12cd16c323905cb5a6": "2148b2e551823a50624f73b1529a9a7b",
".git/objects/69/ba1b7c5067683374d2930f0768a385b957fede": "504fc4229c3515e7aaa6e2d33e1af8b8",
".git/objects/6a/00dcae932dadf0b7fdb691195e3d9ba86f217b": "b7084cc4cbfac98fb9054dbee1c9c5c2",
".git/objects/71/db09cbf4e3ad2e8289fab70022fd6ff512d529": "d7abadfe88031d608042b02cb36fcd14",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/81/bdc721207e059db44dab354f84fbfd4850f3e2": "79e43ad2f96cafd8da874aa3f39d8d12",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/4f13b657ca050e86f64dfb962d16446b9e2c54": "f5a1f99aa887a3dcfe4847d45bb782d4",
".git/objects/91/aea393762459b4d7453fd15a37d64648ae34d1": "8bbe20356c2e91fe557175a0401a9a1d",
".git/objects/91/e6a127a04c442e5e14538c702e25c52d200852": "4d328aedca97f7f2a7a6bf8eb01dfa06",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/96/e3586e8fe28484dde518866e3af86bc94108ff": "ec13b48d69767084876c1efa866b81b7",
".git/objects/ab/dbcfface7883f0eb500011fdcff078285e90cf": "1bc10c1d6ae54e5023e544b1c3a41223",
".git/objects/ad/93beeb6bec021eb29a90d645c2e6ec4d9055a4": "0f3d907084505aba4e5d1a4e5e455d1c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/f287772c49965f8eb69d56f9fc33570c524091": "a0d85f3b68b91fd6dd72bf16b08e500a",
".git/objects/c0/45feaf08d376eabb94639e3ed4dbf9024e5df0": "92482daa15f3cad22ac3e7869d4b9e97",
".git/objects/d9/23887be85627aa940a83f492c723f023f35576": "20de357d406690e802c7854eec2042fc",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e2/e1c3b195c86a5a1ad3f056a2e9c1d8d9a1213c": "91b60fd2feb015c7344908951020847a",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/ORIG_HEAD": "52708947350c117ab15823e9e6250fa9",
".git/refs/heads/master": "066110a81392dff3afa4172dfd17f42c",
".git/refs/remotes/origin/master": "066110a81392dff3afa4172dfd17f42c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "7f1df1ee47854388e684afc0845ea820",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2def70cdfb9efbc99017bc85e0c5e804",
"/": "2def70cdfb9efbc99017bc85e0c5e804",
"main.dart.js": "a74f2c229f09ba892c9625d9063a3d10",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
