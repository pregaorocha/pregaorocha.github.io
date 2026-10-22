/**
 * PREGÃO ROCHA — IMPACTO COMERCIAL
 * Scripts da proposta alternativa: barra móvel inteligente e scroll reveal suave
 */

document.addEventListener('DOMContentLoaded', () => {
  const heroMainCta = document.getElementById('heroMainCta');
  const mobileStickyBar = document.getElementById('mobileStickyBar');

  if (!mobileStickyBar || !heroMainCta) return;

  // Barra flutuante só surge quando o botão principal sai do campo de visão
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          mobileStickyBar.classList.remove('is-shown');
        } else {
          mobileStickyBar.classList.add('is-shown');
        }
      });
    }, {
      root: null,
      threshold: 0.1
    });

    observer.observe(heroMainCta);
  } else {
    // Fallback tradicional
    window.addEventListener('scroll', () => {
      if (window.scrollY > 380) {
        mobileStickyBar.classList.add('is-shown');
      } else {
        mobileStickyBar.classList.remove('is-shown');
      }
    }, { passive: true });
  }

  // Revelação progressiva das seções durante a rolagem (respeitando prefers-reduced-motion)
  const revealCards = document.querySelectorAll('.furniture-editorial-card, .timeline-block, .region-box-layout');

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    revealCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      revealObserver.observe(card);
    });
  }
});
