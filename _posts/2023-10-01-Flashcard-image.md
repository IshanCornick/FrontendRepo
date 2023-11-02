---
toc: true
comments: true
layout: post
title: Flash cards to study
description: Flash cards
type: hacks
courses: { compsci: {week: 6} }
---
<!DOCTYPE html>
<html>
<head>
    <title>Frog Flash Cards</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .flash-card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }

        .flash-card {
            width: 200px;
            height: 300px;
            background-color: #fff;
            border: 1px solid #ccc;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            margin: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: transform 0.2s;
        }

        .flash-card img {
            max-width: 100%;
            max-height: 150px;
            object-fit: contain;
        }

        .flash-card .back {
            display: none;
        }

        .flash-card.flipped .front {
            display: none;
        }

        .flash-card.flipped .back {
            display: block;
        }
    </style>
</head>
<body>
    <div class="flash-card-container" id="flash-card-container"></div>

    <script>
        const flashCardContainer = document.getElementById("flash-card-container");

        // Data for frogs (replace with your own data)
        const frogs = [
            { name: "African Clawed Frog (Xenopus laevis)", image_url: "frog1.jpg" },
            { name: "Red-Eyed Tree Frog", image_url: "tree_frog.jpg" },
            { name: "Blue Poison Dart Frog", image_url: "dart_frog.jpg" },
            // Add more frog data here
        ];  


        frogs.forEach(frog => {
            createFlashCard(frog);
        });

        function createFlashCard(frog) {
            const card = document.createElement("div");
            card.classList.add("flash-card");
            card.innerHTML = `
                <div class="front">
                    <img src="${frog.image_url}" alt="Frog Image">
                </div>
                <div class="back">
                    <p>${frog.name}</p>
                </div>
            `;

            card.addEventListener("click", () => {
                card.classList.toggle("flipped");
            });

            flashCardContainer.appendChild(card);
        }
    </script>
</body>
</html>

