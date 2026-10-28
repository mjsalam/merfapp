(() => {
  const call = document.getElementById('call-merf');
  const drawer = document.getElementById('demo-drawer');
  const close = document.getElementById('close-demo');
  const reply = document.getElementById('signal-reply');
  const section = document.querySelector('.signal');
  const scraps = [
    ['FIELD NOTE', 'You found it.', 'The thought you wanted to keep. Right here, where you left it.'],
    ['REFERENCE / 002', 'A very good idea.', 'Pack a notebook. Look up more often. Keep the things that make you curious.'],
    ['CHECKLIST / 003', 'Before departure.', 'Keys. Coffee. That one file. A healthy respect for the space-time continuum.']
  ];
  let index = 0;
  function render() {
    document.getElementById('demo-type').textContent = scraps[index][0];
    document.getElementById('demo-title').textContent = scraps[index][1];
    document.getElementById('demo-body').textContent = scraps[index][2];
    document.getElementById('demo-count').textContent = `0${index + 1} / 03`;
  }
  function dismiss() {
    drawer.hidden = true;
    call.setAttribute('aria-expanded', 'false');
    section.classList.remove('called');
    reply.textContent = 'Standing by. Your scraps aren’t going anywhere.';
    call.focus();
  }
  call.addEventListener('click', () => {
    drawer.hidden = false;
    call.setAttribute('aria-expanded', 'true');
    section.classList.add('called');
    reply.textContent = 'CONTACT ESTABLISHED. No wormhole required.';
    close.focus();
  });
  close.addEventListener('click', dismiss);
  drawer.addEventListener('keydown', event => { if (event.key === 'Escape') { event.preventDefault(); dismiss(); } });
  document.getElementById('demo-next').addEventListener('click', () => { index = (index + 1) % scraps.length; render(); });
  document.getElementById('demo-prev').addEventListener('click', () => { index = (index + scraps.length - 1) % scraps.length; render(); });
})();
