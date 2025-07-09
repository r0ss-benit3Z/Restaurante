document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const userName = sessionStorage.getItem('userName');

    if (userName) {
        greetingElement.textContent = `¡Hola, ${userName}!`;
    } else {
        greetingElement.textContent = `¡Hola, Invitado!`;
    }

    const navButtons = document.querySelectorAll('.nav-button');
    const sectionContents = document.querySelectorAll('.section-content');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSectionId = button.dataset.section + '-section';

            navButtons.forEach(btn => btn.classList.remove('active'));
            sectionContents.forEach(section => section.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(targetSectionId).classList.add('active');
        });
    });

    const panchoSearchInput = document.getElementById('pancho-search');
    const panchoCards = document.querySelectorAll('.pancho-card');

    panchoSearchInput.addEventListener('keyup', (event) => {
        const searchTerm = event.target.value.toLowerCase();

        panchoCards.forEach(card => {
            const panchoName = card.querySelector('h3').textContent.toLowerCase();
            const panchoDescription = card.querySelector('p').textContent.toLowerCase();

            if (panchoName.includes(searchTerm) || panchoDescription.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});