/* ── NAV SCROLL */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => nav?.classList.toggle('solid', scrollY > 40));

/* ── BURGER */
const burger = document.getElementById('burger');
const menu = document.getElementById('navMenu');
burger?.addEventListener('click', () => {
  menu.classList.toggle('open');
  const s = burger.querySelectorAll('span');
  s[0].style.transform = menu.classList.contains('open') ? 'rotate(45deg) translate(5px,5px)' : '';
  s[1].style.opacity   = menu.classList.contains('open') ? '0' : '1';
  s[2].style.transform = menu.classList.contains('open') ? 'rotate(-45deg) translate(5px,-5px)' : '';
});
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
}));

/* ── ACTIVE LINK */
const page = location.pathname.split('/').pop() || 'index.html';
menu?.querySelectorAll('a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});

/* ── SCROLL REVEAL */
new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.09 }).observe
// manual loop
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.09 });
document.querySelectorAll('.r').forEach(el => revealObs.observe(el));

/* ── COUNTER ANIMATION */
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.to;
    const suffix = el.dataset.sfx || '';
    const dur = 1600;
    const start = performance.now();
    const tick = now => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterObs.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-to]').forEach(el => counterObs.observe(el));

/* ── GALLERY LIGHTBOX */
const lb = document.getElementById('lb');
document.querySelectorAll('.gl-item img').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    if (!lb) return;
    lb.querySelector('img').src = img.src;
    lb.querySelector('.lb-cap').textContent = img.alt;
    lb.classList.add('show');
    document.body.style.overflow = 'hidden';
  });
});
lb?.addEventListener('click', e => {
  if (e.target === lb || e.target.classList.contains('lb-x')) {
    lb.classList.remove('show');
    document.body.style.overflow = '';
  }
});

/* ── ACTIVITY FILTER */
window.filterActs = (btn, cat) => {
  document.querySelectorAll('[data-filter-btn]').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('[data-cat]').forEach(card => {
    card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
  });
};

/* ── CONTACT FORM (Formspree) */
document.getElementById('cf')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn = this.querySelector('[type=submit]');
  const ok = document.getElementById('cfOk');
  const err = document.getElementById('cfErr');
  btn.disabled = true;
  btn.textContent = '⏳ جاري الإرسال...';
  try {
    const res = await fetch(this.action, {
      method:'POST', body: new FormData(this),
      headers: { Accept: 'application/json' }
    });
    if (res.ok) {
      this.reset(); ok.style.display='block'; err.style.display='none';
      btn.textContent = '✅ تم الإرسال';
    } else { throw new Error(); }
  } catch {
    err.style.display='block';
    btn.disabled=false;
    btn.textContent='★ إرسال الرسالة';
  }
});
