const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });
}

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach((el) => observer.observe(el));

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const contactForm = document.querySelector('[data-contact-form]');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = encodeURIComponent(formData.get('name') || 'Portfolio Visitor');
    const email = encodeURIComponent(formData.get('email') || '');
    const message = encodeURIComponent(formData.get('message') || '');
    const subject = `Portfolio message from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    window.location.href = `mailto:vijayduhan8610@gmail.com?subject=${subject}&body=${body}`;
  });
}

const introHero = document.querySelector(".intro-hero");
const heroContent = document.querySelector(".hero-content");
const bigVD = document.querySelector(".big-vd");

window.addEventListener("scroll", () => {
  if (!introHero || !heroContent || !bigVD) return;

  const heroTop = introHero.offsetTop;
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  let progress = (scrollY - heroTop) / (windowHeight * 0.75);
  progress = Math.min(Math.max(progress, 0), 1);

  const moveUp = 70 - progress * 70;

  heroContent.style.transform = `translateY(${moveUp}vh)`;
  heroContent.style.opacity = progress;

  bigVD.style.transform = `scale(${1 + progress * 0.08})`;
  bigVD.style.opacity = `${1 - progress * 0.35}`;
});

