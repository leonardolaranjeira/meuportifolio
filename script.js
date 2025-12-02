
// Menu escondido para celular


/*
 - Contar os slides (.slide).

 - Criar as bolinhas (indicadores) e marcar a bolinha active.

 - Mudar o transform: translateX() do .slider-track quando as setas ou bolinhas forem clicadas.
 */

document.getElementById('perfil').addEventListener('click', function() {
    // 1. Usa o método scrollTo para rolar a janela (window)
    window.scrollTo({
        // Define o topo (0) como a posição de destino
        top: 0, 
        // Define o comportamento da rolagem como suave (smooth)
        behavior: 'smooth' 
    });
});

 /**
   * Mobile nav toggle
   */
  const mobileNav = document.querySelector('#bars_menu');

  function mobileNavToogle() {
    const isExpanded = document.querySelector('body').classList.toggle('mobile-menu');
    mobileNav.classList.toggle('listar');
    mobileNav.classList.toggle('fechar');

    mobileNav.setAttribute('aria-expanded', isExpanded);
  }
  if (mobileNav) {
    mobileNav.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#menu a').forEach(menu => {
    menu.addEventListener('click', () => {
      if (document.querySelector('#bars_menu')) {
        mobileNavToogle();
      }
    });

  });
