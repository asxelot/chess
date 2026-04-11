const CACHE = 'chess-v2';
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
  'pieces/cburnett/wK.svg','pieces/cburnett/wQ.svg','pieces/cburnett/wR.svg','pieces/cburnett/wB.svg','pieces/cburnett/wN.svg','pieces/cburnett/wP.svg',
  'pieces/cburnett/bK.svg','pieces/cburnett/bQ.svg','pieces/cburnett/bR.svg','pieces/cburnett/bB.svg','pieces/cburnett/bN.svg','pieces/cburnett/bP.svg',
  'pieces/chessnut/wK.svg','pieces/chessnut/wQ.svg','pieces/chessnut/wR.svg','pieces/chessnut/wB.svg','pieces/chessnut/wN.svg','pieces/chessnut/wP.svg',
  'pieces/chessnut/bK.svg','pieces/chessnut/bQ.svg','pieces/chessnut/bR.svg','pieces/chessnut/bB.svg','pieces/chessnut/bN.svg','pieces/chessnut/bP.svg',
  'pieces/fantasy/wK.svg','pieces/fantasy/wQ.svg','pieces/fantasy/wR.svg','pieces/fantasy/wB.svg','pieces/fantasy/wN.svg','pieces/fantasy/wP.svg',
  'pieces/fantasy/bK.svg','pieces/fantasy/bQ.svg','pieces/fantasy/bR.svg','pieces/fantasy/bB.svg','pieces/fantasy/bN.svg','pieces/fantasy/bP.svg',
  'pieces/merida/wK.svg','pieces/merida/wQ.svg','pieces/merida/wR.svg','pieces/merida/wB.svg','pieces/merida/wN.svg','pieces/merida/wP.svg',
  'pieces/merida/bK.svg','pieces/merida/bQ.svg','pieces/merida/bR.svg','pieces/merida/bB.svg','pieces/merida/bN.svg','pieces/merida/bP.svg',
  'pieces/staunty/wK.svg','pieces/staunty/wQ.svg','pieces/staunty/wR.svg','pieces/staunty/wB.svg','pieces/staunty/wN.svg','pieces/staunty/wP.svg',
  'pieces/staunty/bK.svg','pieces/staunty/bQ.svg','pieces/staunty/bR.svg','pieces/staunty/bB.svg','pieces/staunty/bN.svg','pieces/staunty/bP.svg'
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
