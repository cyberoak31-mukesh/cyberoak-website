// CYBEROAK · main.js v2
const navbar = document.querySelector('.navbar');
if (navbar) window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 30));

const burger = document.querySelector('.nav-hamburger');
const links = document.querySelector('.nav-links');
if (burger && links) {
  burger.addEventListener('click', () => { burger.classList.toggle('open'); links.classList.toggle('open'); });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { burger.classList.remove('open'); links.classList.remove('open'); }));
}

(function () {
  const cur = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const h = a.getAttribute('href');
    if (h === cur || (cur === '' && h === 'index.html')) a.classList.add('active');
  });
})();

const io = new IntersectionObserver((es) => {
  es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.querySelectorAll('.acc-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const body = btn.nextElementSibling, open = btn.classList.contains('active');
    document.querySelectorAll('.acc-btn').forEach(b => { b.classList.remove('active'); b.nextElementSibling.classList.remove('open'); });
    if (!open) { btn.classList.add('active'); body.classList.add('open'); }
  });
});

(function () {
  const ls = document.querySelectorAll('.legal-nav a');
  if (!ls.length) return;
  const secs = document.querySelectorAll('.legal-content h2[id]');
  window.addEventListener('scroll', () => {
    let cur = '';
    secs.forEach(s => { if (window.scrollY >= s.offsetTop - 110) cur = s.id; });
    ls.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
  }, { passive: true });
})();

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
