// Menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    menuToggle.textContent = isOpen ? '✕' : '☰';
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menú');
      menuToggle.textContent = '☰';
    });
  });
}

// Animaciones de entrada al desplazarse
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}

// Filtro de proyectos: cambia data-category en cada tarjeta para clasificarla
const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle('active', item === button));
    projectCards.forEach(card => {
      const matches = filter === 'todos' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !matches);
    });
  });
});

// Año automático en el pie de página
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// Resalta en la navegación la sección visible
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
if ('IntersectionObserver' in window && sections.length && navLinks.length) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  sections.forEach(section => sectionObserver.observe(section));
}

// Cambio de idioma ES / EN (los textos en inglés están en data-en dentro del HTML)
const langBtn = document.querySelector('#lang-toggle');
const i18nItems = document.querySelectorAll('[data-en]');
i18nItems.forEach(el => { el.dataset.es = el.innerHTML; });
const titles = { es: 'Stilkev | Portafolio de videojuegos', en: 'Stilkev | Game development portfolio' };
function setLang(lang) {
  i18nItems.forEach(el => { el.innerHTML = lang === 'en' ? el.dataset.en : el.dataset.es; });
  document.documentElement.lang = lang;
  document.title = titles[lang];
  if (langBtn) langBtn.textContent = lang === 'en' ? 'ES' : 'EN';
  try { localStorage.setItem('lang', lang); } catch (e) {}
}
if (langBtn) {
  langBtn.addEventListener('click', () => setLang(document.documentElement.lang === 'en' ? 'es' : 'en'));
}
try { if (localStorage.getItem('lang') === 'en') setLang('en'); } catch (e) {}

// Efecto del cursor: resplandor + anillo (solo con mouse)
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const glow = document.createElement('div'); glow.className = 'cursor-glow';
  const ring = document.createElement('div'); ring.className = 'cursor-ring';
  document.body.append(glow, ring);
  let mx = 0, my = 0, rx = 0, ry = 0;
  window.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    glow.style.transform = `translate(${mx}px, ${my}px)`;
    document.body.classList.add('cursor-on');
  });
  document.addEventListener('mouseleave', () => document.body.classList.remove('cursor-on'));
  document.addEventListener('mouseover', e => ring.classList.toggle('hot', !!e.target.closest('a, button, summary')));
  (function follow() {
    rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(follow);
  })();
}
