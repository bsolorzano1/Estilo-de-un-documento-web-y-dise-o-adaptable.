document.addEventListener('DOMContentLoaded', () => {
  // --- Funcionalidad del Modal ---
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const myModal = document.getElementById('myModal');

  if (openModalBtn && closeModalBtn && myModal) {
    // Abrir modal
    openModalBtn.addEventListener('click', () => {
      myModal.style.display = 'flex'; // Usar flex para centrar el contenido
    });

    // Cerrar modal con el botón X
    closeModalBtn.addEventListener('click', () => {
      myModal.style.display = 'none';
    });

    // Cerrar modal al hacer clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
      if (event.target === myModal) {
        myModal.style.display = 'none';
      }
    });
  }

  // --- Funcionalidad del Acordeón ---
  const accordionButtons = document.querySelectorAll('.accordion__button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const accordionItem = button.parentElement;
      const accordionContent = button.nextElementSibling;

      // Cierra todos los demás acordeones
      accordionButtons.forEach(otherButton => {
        if (otherButton !== button) {
          otherButton.classList.remove('active');
          otherButton.parentElement.querySelector('.accordion__content').style.maxHeight = null;
        }
      });

      // Abre o cierra el acordeón actual
      button.classList.toggle('active');
      if (accordionContent.style.maxHeight) {
        accordionContent.style.maxHeight = null;
      } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      }
    });
  });
});