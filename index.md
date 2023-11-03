---
layout: default
title: Student Blog
---

<html lang="en-US">
<head>
    <!-- Your existing meta tags and script tags -->
    <link rel="stylesheet" type="text/css" href="style.css">  
    <style>
        body {
            background-image: url('https://images7.alphacoders.com/133/1334999.png');
            margin: 0;
        }
        h1 {
            color: #FDE74C;
        }
        .frog-button {
            background-color: #6BBE45;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            margin: 10px;
            font-size: 16px;
            border-radius: 5px;
        }
        .frog-image {
            width: 850px; /* Adjust the width as needed */
            height: contain; /* Maintain aspect ratio */
        }
        /* Additional CSS styles for frog-related elements */
        /* Rest of your CSS */
        .frog {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            cursor: pointer;
            transition: transform 0.2s;
        }
        .frog:hover {
            transform: translateX(-50%) translateY(-10px);
        }
        .raindrop {
    position: absolute;
    background-color: #00f;
    opacity: 0.5;
    pointer-events: none;
    width: 60px; /* Increase the width */
    height: 40px; /* Increase the height */
}
        @keyframes fall {
            0% {
                transform: translateY(-20px);
                opacity: 1;
            }
            100% {
                transform: translateY(calc(400vh + 120px));
                opacity: 2;
            }
        }
</style>
</head>
<body>
    <!-- Your HTML content -->
    <body id="index">
      <!-- CompSci content -->
        <!-- Your existing HTML content with frog-themed enhancements -->

<div>
        <form action="/submit" method="post">
            <button type="button" class="frog-button" id="plains-leopard-frog" onclick="redirectToPlains()">
                <img src="https://www.sdherps.org/media/206.jpg" alt="Plains Leopard Frog" class="frog-image" border="0" />
                <br>
                Plains Leopard Frog
            </button>
        </form>

<script>
            function redirectToPlains() {
                window.location.href = '/FrontendRepo/frog/Leopard';
            }
        </script>
 </div>

<div>
        <form action="/submit" method="post">
            <button type="button" class="frog-button" id="sumaco-horned-frog" onclick="redirectToSumaco()">
                <img src="https://i.etsystatic.com/44827699/r/il/c12059/5155904904/il_fullxfull.5155904904_8pwi.jpg" alt="Sumaco Horned Frog" class="frog-image" border="0" />
                <br>
                Sumaco Horned Frog
            </button>
        </form>

<script>
            function redirectToSumaco() {
                window.location.href = '/FrontendRepo/frog/Sumaco';
            }
        </script>
</div>

<div>
        <form action="/submit" method="post">
            <button type="button" class="frog-button" id="peruvian-toad" onclick="redirectToPeruvian()">
                <img src="https://i.etsystatic.com/41972288/r/il/8267a5/5235525500/il_1588xN.5235525500_1nen.jpg" alt="Peruvian Toad" class="frog-image" border="0" />
                <br>
                Peruvian Toad
            </button>
        </form>

<script>
            function redirectToPeruvian() {
                window.location.href = '/FrontendRepo/frog/Peruvian';
            }
        </script>
 </div>

<div style="margin-top: 50px;">
    <p>Here's a random quote:</p>
    <blockquote style="font-style: italic;">
        "In the frog's world, it's not easy being green." - Kermit the Frog
    </blockquote>
</div>

<!-- Frog Interaction -->
<img src="images/Goliath Frog (Conraua goliath) .jpeg" alt="Frog" class="frog" id="frog" width= "150" onclick="frogJump()">
<script>
    function frogJump() {
        const frog = document.getElementById("frog");
// Generate random positions for the frog's jump
        const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Adjust 100 to the frog's width
        const randomY = Math.floor(Math.random() * (window.innerHeight - 100)); // Adjust 100 to the frog's height
// Apply the random position to the frog
        frog.style.left = randomX + "px";
        frog.style.top = randomY + "px";
 // Add the jump animation class
        frog.classList.add("jump-animation");
    }
</script>
<style>
    .frog {
        position: absolute;
        transition: transform 0.2s;
        border-radius: 50%; /* Make the image round */
    }
    .jump-animation {
        animation: jump 1s ease-in-out forwards;
    }
    @keyframes jump {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-50px);
        }
    }
</style>

<style>
    .frog {
        position: absolute;
        transition: transform 0.2s;
    }
    .jump-animation {
        animation: jump 1s ease-in-out forwards;
    }
    @keyframes jump {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-50px);
        }
    }
</style>

<style>
    .jump-animation {
        animation: jump 1s ease-in-out infinite;
    }
    @keyframes jump {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-50px);
        }
    }
</style>




<style>
    @keyframes jump {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-50px);
        }
    }
</style>
<script>
        const numRaindrops = 200;

        for (let i = 0; i < numRaindrops; i++) {
            createRaindrop();
        }

        function createRaindrop() {
            const raindrop = document.createElement("div");
            raindrop.className = "raindrop";
            document.body.appendChild(raindrop);

            const startX = Math.random() * window.innerWidth;
            const startY = Math.random() * window.innerHeight;

            raindrop.style.left = startX + "px";
            raindrop.style.top = startY + "px";

            const animationDuration = Math.random() * 2 + 3;
            const animationDelay = Math.random() * 2;

            raindrop.style.width = Math.random() * 2 + 1 + "px";
            raindrop.style.height = Math.random() * 10 + 5 + "px";

            raindrop.style.animation = `fall ${animationDuration}s linear ${animationDelay}s infinite`;

            raindrop.addEventListener("animationiteration", () => {
                const startX = Math.random() * window.innerWidth;
                raindrop.style.left = startX + "px";
            });
        }
    </script>
</body>
</html>


