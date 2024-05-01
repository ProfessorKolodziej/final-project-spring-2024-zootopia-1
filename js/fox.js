document.addEventListener('DOMContentLoaded', () => {
    const speakerIcon = document.querySelector('.speaker');
    const tigerRoar = new Audio('sound/foxsquall.wav'); 

    speakerIcon.addEventListener('click', () => {
        tigerRoar.play().catch(e => console.error('Error playing sound:', e));
    });
});