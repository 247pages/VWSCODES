let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('downloadButton').style.display = 'block';
});

document.getElementById('downloadButton').addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(outcome === 'accepted' ? 'PWA installed' : 'PWA installation dismissed');
    deferredPrompt = null;
  }
});

if (window.matchMedia('(display-mode: standalone)').matches) {
  document.getElementById('downloadButton').style.display = 'none';
}
