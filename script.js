document.addEventListener('DOMContentLoaded', () => {
  // --- FORMULARIO DE CONTACTO ---
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = {
        nombre: form.nombre.value,
        email: form.email.value,
        mensaje: form.mensaje.value,
      };

      console.log('Datos a enviar:', formData);
      alert('Gracias por contactarnos, ' + formData.nombre + '!');
      form.reset();
    });
  }

  // --- ANIMACIONES POR SCROLL ---
  const secciones = document.querySelectorAll("section.seccion");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animar-fade");
        entry.target.style.animationDelay = `${i * 0.2}s`;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  secciones.forEach((section) => {
    section.classList.add("animar-fade");
  });

  // --- ANIMAR ELEMENTOS INICIALES (excepto secciones) ---
  const animarElementos = document.querySelectorAll(".galeria, .testimonios, .redes-sociales");
  animarElementos.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.animation = `fadeInUp 1s ease forwards`;
    el.style.animationDelay = `${i * 0.2}s`;
  });

  // --- ANIMACIÓN A ITEMS INDIVIDUALES DE GALERÍA ---
  const galeriaItems = document.querySelectorAll('.galeria img, .galeria video');
  galeriaItems.forEach((item, i) => {
    item.style.opacity = 0;
    item.style.animation = `zoomIn 0.8s ease forwards`;
    item.style.animationDelay = `${i * 0.15}s`;
  });

  // --- ANIMACIÓN AL CLIC EN BOTONES ---
  const botones = document.querySelectorAll('.boton');
  botones.forEach((boton) => {
    boton.addEventListener('click', () => {
      boton.classList.add('clicked');
      setTimeout(() => {
        boton.classList.remove('clicked');
      }, 300);
    });
  });

  // --- BOTÓN SUBIR AL INICIO ---
  const btnSubir = document.getElementById("btnSubir");
  if (btnSubir) {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnSubir.style.display = "block";
      } else {
        btnSubir.style.display = "none";
      }
    });

    btnSubir.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // --- SLIDER MANUAL ---
  const sliders = document.querySelectorAll(".slider-wrapper");
  sliders.forEach((sliderWrapper) => {
    const slider = sliderWrapper.querySelector(".slider-manual");
    const slides = slider.querySelectorAll("img");
    let index = 0;

    const updateSlider = () => {
      const width = sliderWrapper.querySelector(".slider-container").offsetWidth;
      slider.style.transform = `translateX(-${index * width}px)`;
    };

    const leftButton = sliderWrapper.querySelector(".flecha-izquierda");
    const rightButton = sliderWrapper.querySelector(".flecha-derecha");

    if (leftButton && rightButton) {
      leftButton.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        updateSlider();
      });

      rightButton.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        updateSlider();
      });
    }

    window.addEventListener("resize", updateSlider);
    updateSlider();
  });
});
/* --- ANIMACIÓN POR SCROLL CON ZOOM --- */
document.addEventListener('DOMContentLoaded', () => {
  const secciones = document.querySelectorAll('.zoom-scroll');

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observer.unobserve(entrada.target); // Quita si quieres repetir al volver a aparecer
      }
    });
  }, {
    threshold: 0.15
  });

  secciones.forEach(seccion => {
    observer.observe(seccion);
  });
});
