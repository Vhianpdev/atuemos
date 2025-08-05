document.addEventListener('DOMContentLoaded', () => {
  console.log('Site do Ministério Jovem carregado e pronto para inspirar!');

  // Scroll suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }

      // Fecha menu no clique de link (mobile)
      if (window.innerWidth <= 768) {
        menu.classList.remove('active');
        burger.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Menu hambúrguer
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('nav ul');

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');

    // Atualiza aria-expanded para acessibilidade
    const expanded = burger.classList.contains('active');
    burger.setAttribute('aria-expanded', expanded);
  });

  // Permitir abrir/fechar menu com tecla Enter ou Espaço no burger
  burger.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      burger.click();
    }
  });
});
