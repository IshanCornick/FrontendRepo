---
layout: default
title: Student Blog
---

<html>
<head>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            text-align: center;
            background-color: #C8E6C9
            margin: 0;
            padding: 10; /* Remove padding to cover the entire viewport */
        }

        /* Create a container div with a light green background */
        .container {
            background-color: #C8E6C9; /* Light green color code */
            padding: 20px; /* Add padding to the container */
        }

        h1 {
            color: #4CAF50;
        }

        .frog-button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            margin: 10px;
            font-size: 16px;
            border-radius: 5px;
        }

        .frog-image {
            max-width: 100%;
            height: auto;
            max-height: 250px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <!-- Create a container div to set the background color -->
    <div class="container">
        <h1>Discover Amazing Frogs!</h1>

        <!-- Rest of your HTML content -->

<div>
        <form action="/submit" method="post">
            <button type="submit" class="frog-button" id="plains-leopard-frog"
            onclick="redirectToMarkdown()">
                <img src="https://www.sdherps.org/media/206.jpg" alt="Ornate Horned Frog" class="frog-image" border="0" />
                <br>
                Plains Leopard Frog
            </button>
        </form>
    </div>

<div>
<form action="/submit" method="post">
    <button type="button" class="frog-button" id="sumaco-horned-frog" onclick="redirectToMarkdown()">
        <img src="https://i.etsystatic.com/44827699/r/il/c12059/5155904904/il_fullxfull.5155904904_8pwi.jpg" alt="Sumaco Horned Frog" class="frog-image" border="0" />
        <br>
        Sumaco Horned Frog
    </button>
</form>

<div>
<form action="/submit" method="post">
    <button type="button" class="frog-button" id="peruvian-toad" onclick="redirectToMarkdown()">
        <img src="https://i.etsystatic.com/41972288/r/il/8267a5/5235525500/il_1588xN.5235525500_1nen.jpg" alt="Sumaco Horned Frog" class="frog-image" border="0" />
        <br>
        Peruvian Toad
    </button>
</form>

<script>
    function redirectToMarkdown() {
        window.location.href = '/FrontendRepo/frog/Sumaco';
    }
</script>
</div>


<div style="margin-top: 50px;">
        <p>Here's a random quote:</p>
        <blockquote style="font-style: italic;">
            "In the frog's world, it's not easy being green." - Kermit the Frog
        </blockquote>
    </div>
<div>