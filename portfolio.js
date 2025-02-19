// Функция для установки стилей для иконок
function setSocialIconsStyles() {
    const socialIconsLinks = document.querySelectorAll('.social-icons .icon-link');
  
    // Настройка основных стилей
    socialIconsLinks.forEach(link => {
      link.style.display = 'inline-flex';
      link.style.justifyContent = 'center';
      link.style.alignItems = 'center';
      link.style.width = '4rem';
      link.style.height = '4rem';
      link.style.backgroundColor = 'transparent';
      link.style.border = '0.2rem solid #b74b4b';
      link.style.fontSize = '2rem';
      link.style.borderRadius = '50%';
      link.style.margin = '3rem 1.5rem 3rem 0';
      link.style.transition = '0.3s ease';
    });
  
    // Стиль при наведении мыши
    socialIconsLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.color = 'black';
        link.style.transform = 'scale(1.3) translateY(-5px)';
        link.style.backgroundColor = '#b74b4b';
        link.style.boxShadow = '0 0 25px #b74b4b';
      });
  
      link.addEventListener('mouseleave', () => {
        link.style.color = '';
        link.style.transform = '';
        link.style.backgroundColor = '';
        link.style.boxShadow = '';
      });
    });
  }
  
  // Вызов функции при загрузке страницы
  window.onload = setSocialIconsStyles;