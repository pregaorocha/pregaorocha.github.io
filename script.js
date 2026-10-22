/**
 * Pregão Rocha - Landing Page Scripts
 * Otimizações de UX e comportamento dinâmico leve
 */

document.addEventListener('DOMContentLoaded', () => {
  const heroCta = document.getElementById('cta-whatsapp-hero');
  const floatingBar = document.getElementById('floatingBar');

  if (!floatingBar || !heroCta) return;

  // Usa IntersectionObserver para exibir a barra flutuante mobile
  // somente após o botão do hero sair de tela, evitando duplicidade visual
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Se o CTA principal do hero estiver visível, esconde a barra flutuante
        if (entry.isIntersecting) {
          floatingBar.style.transform = 'translateY(100%)';
          floatingBar.style.opacity = '0';
          floatingBar.style.transition = 'transform 0.25s ease, opacity 0.25s ease';
        } else {
          // Quando o usuário rola e o CTA principal sai do topo, exibe suavemente
          floatingBar.style.transform = 'translateY(0)';
          floatingBar.style.opacity = '1';
        }
      });
    }, {
      root: null,
      threshold: 0.1
    });

    observer.observe(heroCta);
  } else {
    // Fallback simples caso não suporte IntersectionObserver
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        floatingBar.style.display = 'block';
      } else {
        floatingBar.style.display = 'none';
      }
    }, { passive: true });
  }
});
