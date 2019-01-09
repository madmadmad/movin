var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'house.json'
})

setTimeout(function () {
  animation.play();
}, 1000);
