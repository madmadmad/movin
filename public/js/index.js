var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data.json'
})

setTimeout(function () {
  animation.play();
}, 2000);
