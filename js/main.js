/* ============================================================
   CYBEROAK · Shared JavaScript
   ============================================================ */

// ── Navbar scroll effect ──
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ── Mobile hamburger ──
const hamburger = document.querySelector('.nav-hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// ── Active nav link ──
(function setActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// ── Intersection Observer: fade-in on scroll ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── Accordion ──
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const body = btn.nextElementSibling;
    const isOpen = btn.classList.contains('active');
    // Close all
    document.querySelectorAll('.accordion-btn').forEach(b => {
      b.classList.remove('active');
      b.nextElementSibling.classList.remove('open');
    });
    // Open clicked if was closed
    if (!isOpen) {
      btn.classList.add('active');
      body.classList.add('open');
    }
  });
});

// ── Legal sidebar active link ──
(function legalNavHighlight() {
  const legalLinks = document.querySelectorAll('.legal-nav a');
  if (!legalLinks.length) return;
  const sections = document.querySelectorAll('.legal-content h2[id]');
  if (!sections.length) return;
  const handler = () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    legalLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  };
  window.addEventListener('scroll', handler, { passive: true });
})();

// ── Smooth scroll for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Counter animation ──
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 1800;
  const start = performance.now();
  const isDecimal = target % 1 !== 0;

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const value = target * ease;
    el.textContent = prefix + (isDecimal ? value.toFixed(1) : Math.floor(value)) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting && !e.target.dataset.counted) {
      e.target.dataset.counted = 'true';
      animateCounter(e.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number[data-target]').forEach(el => counterObserver.observe(el));
