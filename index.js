const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate').forEach(el => observer.observe(el));


const questions = document.querySelectorAll('.faq-question');
  const toggleAllBtn = document.querySelector('.toggle-all');

  questions.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      item.classList.toggle('open');
    });
  });

  toggleAllBtn.addEventListener('click', () => {
    const isOpen = toggleAllBtn.textContent.includes('Show');
    document.querySelectorAll('.faq-item').forEach((item) => {
      item.classList.toggle('open', isOpen);
    });
    toggleAllBtn.textContent = isOpen ? 'Hide All Answers' : 'Show All Answers';
  });

  document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.section-3 img');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const index = [...images].indexOf(img);

          setTimeout(() => {
            img.classList.add('slide-in');
          }, index * 200); // 200ms delay per image

          observer.unobserve(img); // Only animate once
        }
      });
    }, { threshold: 0.2 });

    images.forEach(img => observer.observe(img));
  });

  
    document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburgerBtn");
    const navLinks = document.getElementById("navLinks");
    const closeBtn = document.getElementById("closeBtn");

    hamburger.addEventListener("click", () => {
      navLinks.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link =>
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      })
    );
  });

  