document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Funktion til at åbne/lukke menuen ved klik på burger-ikonet
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Markér det aktive link (fra tidligere eksempel)
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
            // Undgå at markere logoet som "aktivt" hvis det ikke er den primære navigation
            if (!link.classList.contains('nav-logo')) {
                 link.classList.add('active');
            }
        }

        // Luk menuen hvis et link klikkes (god UX på mobil)
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// 1. Vælg ALLE elementer med klassen 'slide-image'
const imagesToAnimate = document.querySelectorAll('.case-img');

// 2. Definer observer-funktionen
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Tjekker om elementet er synligt i viewporten
    if (entry.isIntersecting) {
      // 3. Udløs animationen for DETTE element
      entry.target.classList.remove('hidden');
      entry.target.classList.add('visible');
      
      // 4. Stop med at observere dette element, da det er animeret
      observer.unobserve(entry.target);
    }
  });
}, 
);

// 5. Gå igennem alle fundne billeder og bed observeren om at overvåge dem
imagesToAnimate.forEach(image => {
  observer.observe(image);
});

