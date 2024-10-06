document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.boxShadow = '0px 0px 10px #FFD700'; // Golden glow effect
    });

    item.addEventListener('mouseleave', () => {
        item.style.boxShadow = 'none';
    });
});


const container = document.querySelector('.member-container');
const memberBoxes = document.querySelectorAll('.member-box');

// Clone boxes for seamless scrolling
memberBoxes.forEach(box => {
    const clone = box.cloneNode(true); // Clone the box
    container.appendChild(clone); // Add clone to the container
});



