/**
 * PREGÃO ROCHA — MODELO VERDE POSITIVO
 * Comportamentos de UI leves, barra flutuante mobile e revelação suave ao rolar
 */

document.addEventListener('DOMContentLoaded', () => {
  const heroMainCta = document.getElementById('heroMainCta');
  const floatingMobileBar = document.getElementById('floatingMobileBar');

  if (floatingMobileBar && heroMainCta) {
    // Barra móvel inferior surge de forma limpa quando o botão principal sai da viewport
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            floatingMobileBar.classList.remove('is-shown');
          } else {
            floatingMobileBar.classList.add('is-shown');
          }
        });
      }, {
        root: null,
        threshold: 0.1
      });

      observer.observe(heroMainCta);
    } else {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 360) {
          floatingMobileBar.classList.add('is-shown');
        } else {
          floatingMobileBar.classList.remove('is-shown');
        }
      }, { passive: true });
    }
  }

  // Revelação progressiva das seções durante a rolagem (apenas desktop ou browsers que suportam bem)
  const isMobile = window.innerWidth <= 768;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealCards = document.querySelectorAll('.gallery-card, .step-card-pos, .coverage-box-positive');

  if (!isMobile && !prefersReducedMotion && 'IntersectionObserver' in window) {
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
  } else {
    // No mobile ou com acessibilidade de movimento reduzido, garante visibilidade imediata 100%
    revealCards.forEach(card => {
      card.style.opacity = '1';
      card.style.transform = 'none';
    });
  }

  // Interatividade dos cards de móveis: selecionar ao clicar / tocar no mobile
  const galleryCards = document.querySelectorAll('.gallery-card');
  galleryCards.forEach(card => {
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-pressed', 'false');

    const toggleSelection = (e) => {
      const isSelected = card.classList.toggle('is-selected');
      card.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
    };

    card.addEventListener('click', toggleSelection);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleSelection(e);
      }
    });
  });
});
