const CACHE = 'chess-v4';
const ASSETS = [
  './',
  'index.html',
  'chess.js',
  'manifest.json',
  'favicon.ico',
  'icon.svg',
  'icon-192.png',
  'icon-512.png',
  'apple-touch-icon.png',
  'pieces/alpha/wK.svg','pieces/alpha/wQ.svg','pieces/alpha/wR.svg','pieces/alpha/wB.svg','pieces/alpha/wN.svg','pieces/alpha/wP.svg','pieces/alpha/bK.svg','pieces/alpha/bQ.svg','pieces/alpha/bR.svg','pieces/alpha/bB.svg','pieces/alpha/bN.svg','pieces/alpha/bP.svg',
  'pieces/california/wK.svg','pieces/california/wQ.svg','pieces/california/wR.svg','pieces/california/wB.svg','pieces/california/wN.svg','pieces/california/wP.svg','pieces/california/bK.svg','pieces/california/bQ.svg','pieces/california/bR.svg','pieces/california/bB.svg','pieces/california/bN.svg','pieces/california/bP.svg',
  'pieces/cardinal/wK.svg','pieces/cardinal/wQ.svg','pieces/cardinal/wR.svg','pieces/cardinal/wB.svg','pieces/cardinal/wN.svg','pieces/cardinal/wP.svg','pieces/cardinal/bK.svg','pieces/cardinal/bQ.svg','pieces/cardinal/bR.svg','pieces/cardinal/bB.svg','pieces/cardinal/bN.svg','pieces/cardinal/bP.svg',
  'pieces/cburnett/wK.svg','pieces/cburnett/wQ.svg','pieces/cburnett/wR.svg','pieces/cburnett/wB.svg','pieces/cburnett/wN.svg','pieces/cburnett/wP.svg','pieces/cburnett/bK.svg','pieces/cburnett/bQ.svg','pieces/cburnett/bR.svg','pieces/cburnett/bB.svg','pieces/cburnett/bN.svg','pieces/cburnett/bP.svg',
  'pieces/chessnut/wK.svg','pieces/chessnut/wQ.svg','pieces/chessnut/wR.svg','pieces/chessnut/wB.svg','pieces/chessnut/wN.svg','pieces/chessnut/wP.svg','pieces/chessnut/bK.svg','pieces/chessnut/bQ.svg','pieces/chessnut/bR.svg','pieces/chessnut/bB.svg','pieces/chessnut/bN.svg','pieces/chessnut/bP.svg',
  'pieces/companion/wK.svg','pieces/companion/wQ.svg','pieces/companion/wR.svg','pieces/companion/wB.svg','pieces/companion/wN.svg','pieces/companion/wP.svg','pieces/companion/bK.svg','pieces/companion/bQ.svg','pieces/companion/bR.svg','pieces/companion/bB.svg','pieces/companion/bN.svg','pieces/companion/bP.svg',
  'pieces/cooke/wK.svg','pieces/cooke/wQ.svg','pieces/cooke/wR.svg','pieces/cooke/wB.svg','pieces/cooke/wN.svg','pieces/cooke/wP.svg','pieces/cooke/bK.svg','pieces/cooke/bQ.svg','pieces/cooke/bR.svg','pieces/cooke/bB.svg','pieces/cooke/bN.svg','pieces/cooke/bP.svg',
  'pieces/dubrovny/wK.svg','pieces/dubrovny/wQ.svg','pieces/dubrovny/wR.svg','pieces/dubrovny/wB.svg','pieces/dubrovny/wN.svg','pieces/dubrovny/wP.svg','pieces/dubrovny/bK.svg','pieces/dubrovny/bQ.svg','pieces/dubrovny/bR.svg','pieces/dubrovny/bB.svg','pieces/dubrovny/bN.svg','pieces/dubrovny/bP.svg',
  'pieces/fantasy/wK.svg','pieces/fantasy/wQ.svg','pieces/fantasy/wR.svg','pieces/fantasy/wB.svg','pieces/fantasy/wN.svg','pieces/fantasy/wP.svg','pieces/fantasy/bK.svg','pieces/fantasy/bQ.svg','pieces/fantasy/bR.svg','pieces/fantasy/bB.svg','pieces/fantasy/bN.svg','pieces/fantasy/bP.svg',
  'pieces/firi/wK.svg','pieces/firi/wQ.svg','pieces/firi/wR.svg','pieces/firi/wB.svg','pieces/firi/wN.svg','pieces/firi/wP.svg','pieces/firi/bK.svg','pieces/firi/bQ.svg','pieces/firi/bR.svg','pieces/firi/bB.svg','pieces/firi/bN.svg','pieces/firi/bP.svg',
  'pieces/fresca/wK.svg','pieces/fresca/wQ.svg','pieces/fresca/wR.svg','pieces/fresca/wB.svg','pieces/fresca/wN.svg','pieces/fresca/wP.svg','pieces/fresca/bK.svg','pieces/fresca/bQ.svg','pieces/fresca/bR.svg','pieces/fresca/bB.svg','pieces/fresca/bN.svg','pieces/fresca/bP.svg',
  'pieces/gioco/wK.svg','pieces/gioco/wQ.svg','pieces/gioco/wR.svg','pieces/gioco/wB.svg','pieces/gioco/wN.svg','pieces/gioco/wP.svg','pieces/gioco/bK.svg','pieces/gioco/bQ.svg','pieces/gioco/bR.svg','pieces/gioco/bB.svg','pieces/gioco/bN.svg','pieces/gioco/bP.svg',
  'pieces/governor/wK.svg','pieces/governor/wQ.svg','pieces/governor/wR.svg','pieces/governor/wB.svg','pieces/governor/wN.svg','pieces/governor/wP.svg','pieces/governor/bK.svg','pieces/governor/bQ.svg','pieces/governor/bR.svg','pieces/governor/bB.svg','pieces/governor/bN.svg','pieces/governor/bP.svg',
  'pieces/icpieces/wK.svg','pieces/icpieces/wQ.svg','pieces/icpieces/wR.svg','pieces/icpieces/wB.svg','pieces/icpieces/wN.svg','pieces/icpieces/wP.svg','pieces/icpieces/bK.svg','pieces/icpieces/bQ.svg','pieces/icpieces/bR.svg','pieces/icpieces/bB.svg','pieces/icpieces/bN.svg','pieces/icpieces/bP.svg',
  'pieces/kiwen-suwi/wK.svg','pieces/kiwen-suwi/wQ.svg','pieces/kiwen-suwi/wR.svg','pieces/kiwen-suwi/wB.svg','pieces/kiwen-suwi/wN.svg','pieces/kiwen-suwi/wP.svg','pieces/kiwen-suwi/bK.svg','pieces/kiwen-suwi/bQ.svg','pieces/kiwen-suwi/bR.svg','pieces/kiwen-suwi/bB.svg','pieces/kiwen-suwi/bN.svg','pieces/kiwen-suwi/bP.svg',
  'pieces/kosal/wK.svg','pieces/kosal/wQ.svg','pieces/kosal/wR.svg','pieces/kosal/wB.svg','pieces/kosal/wN.svg','pieces/kosal/wP.svg','pieces/kosal/bK.svg','pieces/kosal/bQ.svg','pieces/kosal/bR.svg','pieces/kosal/bB.svg','pieces/kosal/bN.svg','pieces/kosal/bP.svg',
  'pieces/leipzig/wK.svg','pieces/leipzig/wQ.svg','pieces/leipzig/wR.svg','pieces/leipzig/wB.svg','pieces/leipzig/wN.svg','pieces/leipzig/wP.svg','pieces/leipzig/bK.svg','pieces/leipzig/bQ.svg','pieces/leipzig/bR.svg','pieces/leipzig/bB.svg','pieces/leipzig/bN.svg','pieces/leipzig/bP.svg',
  'pieces/letter/wK.svg','pieces/letter/wQ.svg','pieces/letter/wR.svg','pieces/letter/wB.svg','pieces/letter/wN.svg','pieces/letter/wP.svg','pieces/letter/bK.svg','pieces/letter/bQ.svg','pieces/letter/bR.svg','pieces/letter/bB.svg','pieces/letter/bN.svg','pieces/letter/bP.svg',
  'pieces/maestro/wK.svg','pieces/maestro/wQ.svg','pieces/maestro/wR.svg','pieces/maestro/wB.svg','pieces/maestro/wN.svg','pieces/maestro/wP.svg','pieces/maestro/bK.svg','pieces/maestro/bQ.svg','pieces/maestro/bR.svg','pieces/maestro/bB.svg','pieces/maestro/bN.svg','pieces/maestro/bP.svg',
  'pieces/merida/wK.svg','pieces/merida/wQ.svg','pieces/merida/wR.svg','pieces/merida/wB.svg','pieces/merida/wN.svg','pieces/merida/wP.svg','pieces/merida/bK.svg','pieces/merida/bQ.svg','pieces/merida/bR.svg','pieces/merida/bB.svg','pieces/merida/bN.svg','pieces/merida/bP.svg',
  'pieces/monarchy/wK.svg','pieces/monarchy/wQ.svg','pieces/monarchy/wR.svg','pieces/monarchy/wB.svg','pieces/monarchy/wN.svg','pieces/monarchy/wP.svg','pieces/monarchy/bK.svg','pieces/monarchy/bQ.svg','pieces/monarchy/bR.svg','pieces/monarchy/bB.svg','pieces/monarchy/bN.svg','pieces/monarchy/bP.svg',
  'pieces/mono/wK.svg','pieces/mono/wQ.svg','pieces/mono/wR.svg','pieces/mono/wB.svg','pieces/mono/wN.svg','pieces/mono/wP.svg','pieces/mono/bK.svg','pieces/mono/bQ.svg','pieces/mono/bR.svg','pieces/mono/bB.svg','pieces/mono/bN.svg','pieces/mono/bP.svg',
  'pieces/mpchess/wK.svg','pieces/mpchess/wQ.svg','pieces/mpchess/wR.svg','pieces/mpchess/wB.svg','pieces/mpchess/wN.svg','pieces/mpchess/wP.svg','pieces/mpchess/bK.svg','pieces/mpchess/bQ.svg','pieces/mpchess/bR.svg','pieces/mpchess/bB.svg','pieces/mpchess/bN.svg','pieces/mpchess/bP.svg',
  'pieces/pixel/wK.svg','pieces/pixel/wQ.svg','pieces/pixel/wR.svg','pieces/pixel/wB.svg','pieces/pixel/wN.svg','pieces/pixel/wP.svg','pieces/pixel/bK.svg','pieces/pixel/bQ.svg','pieces/pixel/bR.svg','pieces/pixel/bB.svg','pieces/pixel/bN.svg','pieces/pixel/bP.svg',
  'pieces/reillycraig/wK.svg','pieces/reillycraig/wQ.svg','pieces/reillycraig/wR.svg','pieces/reillycraig/wB.svg','pieces/reillycraig/wN.svg','pieces/reillycraig/wP.svg','pieces/reillycraig/bK.svg','pieces/reillycraig/bQ.svg','pieces/reillycraig/bR.svg','pieces/reillycraig/bB.svg','pieces/reillycraig/bN.svg','pieces/reillycraig/bP.svg',
  'pieces/rhosgfx/wK.svg','pieces/rhosgfx/wQ.svg','pieces/rhosgfx/wR.svg','pieces/rhosgfx/wB.svg','pieces/rhosgfx/wN.svg','pieces/rhosgfx/wP.svg','pieces/rhosgfx/bK.svg','pieces/rhosgfx/bQ.svg','pieces/rhosgfx/bR.svg','pieces/rhosgfx/bB.svg','pieces/rhosgfx/bN.svg','pieces/rhosgfx/bP.svg',
  'pieces/riohacha/wK.svg','pieces/riohacha/wQ.svg','pieces/riohacha/wR.svg','pieces/riohacha/wB.svg','pieces/riohacha/wN.svg','pieces/riohacha/wP.svg','pieces/riohacha/bK.svg','pieces/riohacha/bQ.svg','pieces/riohacha/bR.svg','pieces/riohacha/bB.svg','pieces/riohacha/bN.svg','pieces/riohacha/bP.svg',
  'pieces/shapes/wK.svg','pieces/shapes/wQ.svg','pieces/shapes/wR.svg','pieces/shapes/wB.svg','pieces/shapes/wN.svg','pieces/shapes/wP.svg','pieces/shapes/bK.svg','pieces/shapes/bQ.svg','pieces/shapes/bR.svg','pieces/shapes/bB.svg','pieces/shapes/bN.svg','pieces/shapes/bP.svg',
  'pieces/spatial/wK.svg','pieces/spatial/wQ.svg','pieces/spatial/wR.svg','pieces/spatial/wB.svg','pieces/spatial/wN.svg','pieces/spatial/wP.svg','pieces/spatial/bK.svg','pieces/spatial/bQ.svg','pieces/spatial/bR.svg','pieces/spatial/bB.svg','pieces/spatial/bN.svg','pieces/spatial/bP.svg',
  'pieces/staunty/wK.svg','pieces/staunty/wQ.svg','pieces/staunty/wR.svg','pieces/staunty/wB.svg','pieces/staunty/wN.svg','pieces/staunty/wP.svg','pieces/staunty/bK.svg','pieces/staunty/bQ.svg','pieces/staunty/bR.svg','pieces/staunty/bB.svg','pieces/staunty/bN.svg','pieces/staunty/bP.svg',
  'pieces/tatiana/wK.svg','pieces/tatiana/wQ.svg','pieces/tatiana/wR.svg','pieces/tatiana/wB.svg','pieces/tatiana/wN.svg','pieces/tatiana/wP.svg','pieces/tatiana/bK.svg','pieces/tatiana/bQ.svg','pieces/tatiana/bR.svg','pieces/tatiana/bB.svg','pieces/tatiana/bN.svg','pieces/tatiana/bP.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).then(r => {
      const clone = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, clone));
      return r;
    }).catch(() => caches.match(e.request))
  );
});
