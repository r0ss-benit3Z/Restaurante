document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); 

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

    
            if (email && password) {
                
                window.location.href = '../pagina.principal/principal.html'; 
            } else {
                alert('Por favor, ingresa tu correo electrónico y contraseña.'); 
            }
        });
    }
});