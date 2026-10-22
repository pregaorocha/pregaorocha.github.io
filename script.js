/**
 * PREGÃO ROCHA — LANDING PAGE SCRIPTS
 * Motion design sutil, acessibilidade e controle inteligente do botão WhatsApp
 */

document.addEventListener('DOMContentLoaded', () => {
  const heroCtaButton = document.getElementById('heroCtaButton');
  const floatingBar = document.getElementById('floatingBar');

  if (!floatingBar || !heroCtaButton) return;

  // Usa IntersectionObserver para mostrar a barra flutuante mobile de forma inteligente
  // A barra só surge quando o botão principal do hero é rolado para fora do campo visual
  if ('IntersectionObserver' in window) {
    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Quando o botão principal está visível, recolhe a barra inferior
          floatingBar.classList.remove('is-visible');
        } else {
          // Quando o usuário rolou além do hero, exibe a barra com ação imediata
          floatingBar.classList.add('is-visible');
        }
      });
    }, {
      root: null,
      threshold: 0.15
    });

    ctaObserver.observe(heroCtaButton);
  } else {
    // Fallback para navegadores legados
    window.addEventListener('scroll', () => {
      if (window.scrollY > 420) {
        floatingBar.classList.add('is-visible');
      } else {
        floatingBar.classList.remove('is-visible');
      }
    }, { passive: true });
  }

  // Animação de revelação suave durante o scroll para cartões de móveis e etapas
  const revealElements = document.querySelectorAll('.timeline-step-card, .furniture-card, .coverage-banner-box');
  
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const scrollRevealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    revealElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      scrollRevealObserver.observe(el);
    });
  }
});
