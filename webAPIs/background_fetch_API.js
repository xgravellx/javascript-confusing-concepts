navigator.serviceWorker.ready.then(async (swReg) => {
    const bgFetch = await swReg.backgroundFetch.fetch('my-fetch', ['/ep-5.mp3', 'ep-5-artwork.jpg'], {
      title: 'Episode 5: Interesting things.',
      icons: [{
        sizes: '300x300',
        src: '/ep-5-icon.png',
        type: 'image/png',
      }],
      downloadTotal: 60 * 1024 * 1024,
    });
  });