document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('.register-form');
    console.log("funciona formulario1");
    if (registerForm) {
        console.log("funciona formulario");
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault(); 

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden.'); 
                return; 
            }

            
            if (name && email && password) {
                console.log("funciona");
                
                window.location.href = '../pagina.principal/principal.html'; 
            } else {
                alert('Por favor, completa todos los campos.'); 
            }
        });
    }
});