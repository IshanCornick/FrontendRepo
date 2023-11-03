document.addEventListener("DOMContentLoaded", function() {
    // Generate raindrops
    for (let i = 0; i < 100; i++) {
        createRaindrop();
    }

    // Function to create a raindrop
    function createRaindrop() {
        const raindrop = document.createElement("div");
        raindrop.className = "raindrop";
        raindrop.style.left = Math.random() * 100 + "vw";
        raindrop.style.width = Math.random() * 4 + 1 + "px"; // Randomize width
        raindrop.style.height = Math.random() * 20 + 10 + "px"; // Randomize height
        raindrop.style.animationDuration = Math.random() * 2 + 1 + "s"; // Randomize animation duration
        raindrop.style.opacity = Math.random() * 0.6 + 0.3; // Randomize opacity
        raindrop.style.animationDelay = Math.random() + "s"; // Randomize delay
        document.body.appendChild(raindrop);

        // Remove raindrops after animation
        raindrop.addEventListener("animationiteration", function() {
            document.body.removeChild(raindrop);
            createRaindrop();
        });
    }
});
