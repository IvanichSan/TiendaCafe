document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        const usuario = form.querySelector('input[type="text"]').value;
        const contraseña = form.querySelector('input[type="password"]').value;

        if (!usuario || !contraseña) {
            event.preventDefault();
            alert('Por favor, complete todos los campos');
        }
    });
});

const botones = document.querySelectorAll('.botones');

botones.forEach(boton => {
    boton.addEventListener('mouseenter', () => {
        boton.style.backgroundColor = '#8d6e63';
    });
    boton.addEventListener('mouseleave', () => {
        boton.style.backgroundColor = '#6d4c41';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.cafe-img');

    images.forEach(image => {
        image.addEventListener('click', function() {

            if (image.style.transform === 'scale(3)') {
                image.style.transform = 'scale(1)';
            } else {
                
                image.style.transform = 'scale(3)';
            }
        });
    });
});