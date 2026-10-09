/* Static content stays available when JavaScript is disabled. */
document.documentElement.classList.add('js');

const navButton = document.querySelector('#nav-toggle');
const navigation = document.querySelector('#mobile-navigation');
const closeButton = navigation.querySelector('.close-navigation');
let navigationFocusTarget = navButton;
navButton.addEventListener('click', () => {
  navigationFocusTarget = navButton;
  navigation.showModal();
  document.body.classList.add('nav-open');
  navButton.setAttribute('aria-expanded', 'true');
  closeButton.focus();
});
function closeNavigation() { navigation.close(); }
closeButton.addEventListener('click', closeNavigation);
navigation.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const controls = [...navigation.querySelectorAll('a[href], button:not([disabled])')];
  const current = controls.indexOf(document.activeElement);
  const next = event.shiftKey
    ? (current <= 0 ? controls.length - 1 : current - 1)
    : (current + 1) % controls.length;
  event.preventDefault();
  controls[next].focus();
});
navigation.addEventListener('close', () => {
  document.body.classList.remove('nav-open');
  navButton.setAttribute('aria-expanded', 'false');
  navigationFocusTarget.focus({ preventScroll: true });
});
navigation.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    const heading = document.querySelector(link.hash)?.querySelector('h2');
    if (heading) {
      heading.setAttribute('tabindex', '-1');
      navigationFocusTarget = heading;
    }
    closeNavigation();
  });
});
matchMedia('(min-width: 900px)').addEventListener('change', event => {
  if (event.matches && navigation.open) closeNavigation();
});

const categoryButtons = [...document.querySelectorAll('[data-category]')];
const menuPanels = [...document.querySelectorAll('.menu-panel')];
function selectCategory(id) {
  if (!menuPanels.some(panel => panel.id === `category-${id}`)) return;
  categoryButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === id)));
  menuPanels.forEach(panel => { panel.hidden = panel.id !== `category-${id}`; });
}
document.querySelector('.menu-filters').hidden = false;
selectCategory('galettes');
categoryButtons.forEach(button => button.addEventListener('click', () => selectCategory(button.dataset.category)));
document.querySelectorAll('[data-open]').forEach(link => link.addEventListener('click', () => selectCategory(link.dataset.open)));

const video = document.querySelector('#ambiente-video');
const playButton = document.querySelector('#play-video');
const videoMessage = document.querySelector('#video-message');
playButton.hidden = false;
playButton.addEventListener('click', async () => {
  if (!video.paused) { video.pause(); return; }
  try {
    if (video.ended) video.currentTime = 0;
    await video.play();
    videoMessage.textContent = '';
  } catch { videoMessage.textContent = 'Não foi possível iniciar o vídeo. Experimente os controlos de reprodução.'; }
});
function updateVideoButton() {
  playButton.innerHTML = video.paused
    ? '<svg class="icon" aria-hidden="true"><use href="#i-play"/></svg> Ver o vídeo'
    : '<span aria-hidden="true">Ⅱ</span> Pausar o vídeo';
}
video.addEventListener('play', updateVideoButton);
video.addEventListener('pause', updateVideoButton);
video.addEventListener('ended', updateVideoButton);

const mapButton = document.querySelector('#load-map');
mapButton.hidden = false;
mapButton.addEventListener('click', () => {
  const container = document.querySelector('#map-container');
  const iframe = document.createElement('iframe');
  iframe.title = 'Localização do Bom Crepe Bistro em Alvalade, Lisboa';
  iframe.src = 'https://maps.google.com/maps?q=Bom+Crepe+Bistro,+Rua+Marquesa+de+Alorna+30A,+Lisboa&z=16&output=embed';
  iframe.referrerPolicy = 'no-referrer-when-downgrade';
  iframe.allowFullscreen = true;
  const link = document.createElement('a');
  link.className = 'map-external-link';
  link.href = 'https://www.google.com/maps/dir/?api=1&destination=Bom+Crepe+Bistro%2C+Rua+Marquesa+de+Alorna+30A%2C+Lisboa';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'Obter direções no Google Maps ↗';
  container.querySelector('.map-placeholder').replaceWith(iframe, link);
  document.querySelector('#map-status').textContent = 'Mapa do Google ativado. Também pode abrir as direções noutro separador.';
  link.focus({ preventScroll: true });
});
