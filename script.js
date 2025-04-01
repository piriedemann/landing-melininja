// Animación suave para el scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efecto de aparición al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.module-card').forEach((el) => observer.observe(el));

// Animación del botón CTA
const ctaButtons = document.querySelectorAll('.primary-button, .cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05) translateY(-2px)';
    });
    
    button.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
    
    button.addEventListener('click', function() {
        // Aquí puedes agregar la lógica para el proceso de inscripción
        alert('¡Gracias por tu interés! Pronto te contactaremos.');
    });
}); 