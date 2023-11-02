---
layout: default
title: Student Blog
---


<h1>Discover Amazing Frogs!</h1>

<div>
        <form action="/submit" method="post">
            <button type="submit" class="frog-button">
                <img src="https://inkart.net/wp-content/uploads/2020/12/ornate_horned_frog-1.jpg" alt="Ornate Horned Frog" class="frog-image" border="0" />
                <br>
                Ornate Horned Frog
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

<script>
    function redirectToMarkdown() {
        window.location.href = '_posts/2023-10-10-Sumaco.md';
    }
</script>
    </div>

<div style="margin-top: 50px;">
        <p>Here's a random quote:</p>
        <blockquote style="font-style: italic;">
            "In the frog's world, it's not easy being green." - Kermit the Frog
        </blockquote>
    </div>

</body>
</html>

