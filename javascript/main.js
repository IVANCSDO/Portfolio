function highlightNavLinks() {
    const sections = document.querySelectorAll("section"); // Obtener todas las secciones
  
    sections.forEach((section) => {
      const navLink = document.querySelector('a[href="#' + section.id + '"]'); // Obtener el enlace de navegación correspondiente a la sección
  
      if (isInViewport(section)) {
        navLink.classList.add("pri"); // Agregar la clase "active" al enlace si la sección está visible
      } else {
        navLink.classList.remove("pri"); // Quitar la clase "active" del enlace si la sección no está visible
      }
    });
  }
  
  // Función auxiliar para verificar si un elemento está visible en el viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Event Listener de scroll que llama a la función highlightNavLinks
  window.addEventListener('scroll', highlightNavLinks);
  