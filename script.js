// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Array of frog information
    const frogInfo = [
        { name: 'Frog 1', description: 'This is Frog 1. It is known for...', image: '/images/grenouille.png' },
        { name: 'Frog 2', description: 'This is Frog 2. It is known for...', image: '/images/greening.png' },
        { name: 'Frog 3', description: 'This is Frog 3. It is known for...', image: '/images/fathead.png' },
        { name: 'Frog 4', description: 'This is Frog 4. It is known for...', image: '/images/yellow-toed.png' },
        { name: 'Frog 5', description: 'This is Frog 5. It is known for...', image: '/images/yellow.png' },
        { name: 'Frog 6', description: 'This is Frog 6. It is known for...', image: '/images/red-eyed-tree.png' },
    ];

    // Function to update Frog Information Panel
    function updateFrogInfo(frogIndex) {
        const frog = frogInfo[frogIndex];
        const frogInfoPanel = document.querySelector('.Frog-info');
        frogInfoPanel.innerHTML = `<h2>${frog.name}</h2><p>${frog.description}</p><img src="${frog.image}" alt="${frog.name}">`;
    }

    // Event listeners for frog slots
    const frogSlots = document.querySelectorAll('.Frog-slot');
    frogSlots.forEach((frogSlot, index) => {
        frogSlot.addEventListener('click', () => {
            updateFrogInfo(index);
        });
    });
});

