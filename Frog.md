---
layout: default
title: Frog
---
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
        }

        #quiz-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        h1 {
            text-align: center;
            color: #009688;
        }

        #question {
            font-size: 18px;
            margin-bottom: 15px;
            color: #333;
        }

        .option {
            display: block;
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            background-color: #009688;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }

        .option:hover {
            background-color: #00716d;
        }

        #result {
            font-size: 18px;
            text-align: center;
            margin-top: 20px;
            color: #333;
        }

        #score-container {
            text-align: center;
            margin-top: 20px;
        }

        #score-bar {
            background-color: #4CAF50;
            height: 20px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div id="quiz-container">
        <h1>Frog Quiz</h1>
        <div id="question-container">
            <p id="question"></p>
        </div>
        <div id="options-container">
            <button class="option" onclick="checkAnswer(this.textContent)">Option 1</button>
            <button class="option" onclick="checkAnswer(this.textContent)">Option 2</button>
            <button class="option" onclick="checkAnswer(this.textContent)">Option 3</button>
            <button class="option" onclick="checkAnswer(this.textContent)">Option 4</button>
        </div>
        <p id="result"></p>
        <div id="score-container">
            <p>Your Score:</p>
            <div id="score-bar" style="width: 100%; background-color: #4CAF50;"></div>
        </div>
    </div>

    <script>
    const questions = [
        {
            question: "What is the scientific name for the American Bullfrog?",
            options: ["Lithobates catesbeianus", "Rana sylvatica", "Atelopus zeteki", "Dendrobatidae family"],
            correctAnswer: "Lithobates catesbeianus"
        },
        {
            question: "What is the scientific name for the Red-eyed Tree Frog?",
            options: ["Agalychnis callidryas", "Rana aurora", "Hyperolius marmoratus", "Hyla gratiosa"],
            correctAnswer: "Agalychnis callidryas"
        },
        {
            question: "What is the scientific name for the Poison Dart Frog?",
            options: ["Dendrobatidae family", "Trachycephalus resinifictrix", "Phyllobates terribilis", "Duellmanohyla soralia"],
            correctAnswer: "Dendrobatidae family"
        },
        {
            question: "Where does the Red-eyed Tree Frog primarily live?",
            options: ["Rainforests of Central America", "Deserts of North America", "Mountains of Asia", "Savannahs of Africa"],
            correctAnswer: "Rainforests of Central America"
        },
        {
            question: "What is the primary predator of the Poison Dart Frog?",
            options: ["Snakes", "Eagles", "Crocodiles", "Cats"],
            correctAnswer: "Snakes"
        },
        {
            question: "What is the main prey of the Goliath Frog?",
            options: ["Insects", "Small Fish", "Birds", "Plants"],
            correctAnswer: "Insects"
        },
        {
            question: "Where can you find the Tomato Frog?",
            options: ["Madagascar", "Australia", "Amazon Rainforest", "North America"],
            correctAnswer: "Madagascar"
        },
        {
            question: "What is the primary habitat of the Glass Frog?",
            options: ["Tropical Rainforests", "Deserts", "Swamps", "Grasslands"],
            correctAnswer: "Tropical Rainforests"
        },
        {
            question: "What is the primary predator of the Barking Tree Frog?",
            options: ["Owls", "Foxes", "Alligators", "Wolves"],
            correctAnswer: "Owls"
        },
        {
            question: "What type of habitat does the White's Tree Frog prefer?",
            options: ["Woodlands and Rainforests", "Deserts", "Mountains", "Swamps"],
            correctAnswer: "Woodlands and Rainforests"
        },
        {
            question: "What is the primary prey of the Painted Reed Frog?",
            options: ["Insects", "Small Fish", "Birds", "Amphibians"],
            correctAnswer: "Insects"
        },
        {
            question: "Where is the Eastern Spadefoot Toad commonly found?",
            options: ["North America", "Asia", "Africa", "Australia"],
            correctAnswer: "North America"
        },
        {
            question: "What type of habitat does the Plains Leopard Frog prefer?",
            options: ["Ponds, Lakes, and Marshes", "Mountains", "Deserts", "Tundra"],
            correctAnswer: "Ponds, Lakes, and Marshes"
        },
        {
            question: "What type of habitat does the American Bullfrog prefer?",
            options: ["Ponds, Lakes, and Rivers", "Deserts", "Rainforests", "Mountains"],
            correctAnswer: "Ponds, Lakes, and Rivers"
        },
        {
            question: "What is the primary predator of the Red-eyed Tree Frog?",
            options: ["Snakes", "Owls", "Jaguars", "Caimans"],
            correctAnswer: "Snakes"
        },
        {
            question: "What is the main prey of the Poison Dart Frog?",
            options: ["Ants", "Beetles", "Mosquitoes", "Flies"],
            correctAnswer: "Ants"
        },
        {
            question: "Where does the Wood Frog hibernate during winter?",
            options: ["Underground", "In Trees", "In Rivers", "In Caves"],
            correctAnswer: "Underground"
        },
        {
            question: "What is the unique feature of the Goliath Frog?",
            options: ["Largest Frog in the World", "Bioluminescent Skin", "Mimics the Color of Leaves", "Translucent Skin"],
            correctAnswer: "Largest Frog in the World"
        },
        {
            question: "What is the Tomato Frog's warning coloration?",
            options: ["Bright Red", "Green", "Yellow", "Brown"],
            correctAnswer: "Bright Red"
        },
        {
            question: "How do Glass Frogs get their name?",
            options: ["Translucent Belly", "Glass-Like Skin", "Reflective Eyes", "Glassy Croaking Sound"],
            correctAnswer: "Translucent Belly"
        },
        {
            question: "What is the primary habitat of the African Clawed Frog?",
            options: ["African Lakes and Rivers", "Deserts", "Arctic Tundra", "Caves"],
            correctAnswer: "African Lakes and Rivers"
        },
        {
            question: "What is the most toxic frog in the world?",
            options: ["Golden Poison Dart Frog", "Blue Poison Dart Frog", "Green Tree Frog", "Fire-bellied Toad"],
            correctAnswer: "Golden Poison Dart Frog"
        },
        {
            question: "Where is the Panamanian Golden Frog endemic to?",
            options: ["Panama", "Madagascar", "Australia", "Amazon Rainforest"],
            correctAnswer: "Panama"
        }
    ];

        let currentQuestionIndex = 0;
        const questionElement = document.getElementById("question");
        const options = document.querySelectorAll(".option");
        const resultElement = document.getElementById("result");
        const scoreBar = document.getElementById("score-bar");
        let score = 0;

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function displayQuestion() {
            const currentQuestion = questions[currentQuestionIndex];
            questionElement.textContent = currentQuestion.question;
            shuffleArray(currentQuestion.options);
            options.forEach((option, index) => {
                option.textContent = currentQuestion.options[index];
            });
        }

        function checkAnswer(selectedAnswer) {
            const correctAnswer = questions[currentQuestionIndex].correctAnswer;

            if (selectedAnswer === correctAnswer) {
                resultElement.textContent = "Correct!";
                score++;
            } else {
                resultElement.textContent = "Incorrect. The correct answer is " + correctAnswer;
            }

            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                questionElement.textContent = "Quiz complete!";
                document.getElementById("options-container").style.display = "none";
                const percentage = (score / questions.length) * 100;
                scoreBar.style.width = percentage + "%";
                resultElement.textContent = `You scored ${score} out of ${questions.length} questions (${percentage}%)`;
            }
        }

        displayQuestion();
    </script>
</body>
</html>


<Frog game>
<html>
<head>
  <title>Basic Frogger HTML Game</title>
  <meta charset="UTF-8">
  <style>
  html, body {
    height: 100%;
    margin: 0;
  }

  body {
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
</head>
<body>
<canvas width="624" height="720" id="game"></canvas>
<script>
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const grid = 48;
const gridGap = 10;

// a simple sprite prototype function
function Sprite(props) {
  // shortcut for assigning all object properties to the sprite
  Object.assign(this, props);
}
Sprite.prototype.render = function() {
  context.fillStyle = this.color;

  // draw a rectangle sprite
  if (this.shape === 'rect') {
    // by using a size less than the grid we can ensure there is a visual space
    // between each row
    context.fillRect(this.x, this.y + gridGap / 2, this.size, grid - gridGap);
  }
  // draw a circle sprite. since size is the diameter we need to divide by 2
  // to get the radius. also the x/y position needs to be centered instead of
  // the top-left corner of the sprite
  else {
    context.beginPath();
    context.arc(
      this.x + this.size / 2, this.y + this.size / 2,
      this.size / 2 - gridGap / 2, 0, 2 * Math.PI
    );
    context.fill();
  }
}

const frogger = new Sprite({
  x: grid * 6,
  y: grid * 13,
  color: 'greenyellow',
  size: grid,
  shape: 'circle'
});
const scoredFroggers = [];

// a pattern describes each obstacle in the row
const patterns = [
  // end bank is safe
  null,

  // log
  {
    spacing: [2],      // how many grid spaces between each obstacle
    color: '#c55843',  // color of the obstacle
    size: grid * 4,    // width (rect) / diameter (circle) of the obstacle
    shape: 'rect',     // shape of the obstacle (rect or circle)
    speed: 0.75        // how fast the obstacle moves and which direction
  },

  // turtle
  {
    spacing: [0,2,0,2,0,2,0,4],
    color: '#de0004',
    size: grid,
    shape: 'circle',
    speed: -1
  },

  // long log
  {
    spacing: [2],
    color: '#c55843',
    size: grid * 7,
    shape: 'rect',
    speed: 1.5
  },

  // log
  {
    spacing: [3],
    color: '#c55843',
    size: grid * 3,
    shape: 'rect',
    speed: 0.5
  },

  // turtle
  {
    spacing: [0,0,1],
    color: '#de0004',
    size: grid,
    shape: 'circle',
    speed: -1
  },

  // beach is safe
  null,

  // truck
  {
    spacing: [3,8],
    color: '#c2c4da',
    size: grid * 2,
    shape: 'rect',
    speed: -1
  },

  // fast car
  {
    spacing: [14],
    color: '#c2c4da',
    size: grid,
    shape: 'rect',
    speed: 0.75
  },

  // car
  {
    spacing: [3,3,7],
    color: '#de3cdd',
    size: grid,
    shape: 'rect',
    speed: -0.75
  },

  // bulldozer
  {
    spacing: [3,3,7],
    color: '#0bcb00',
    size: grid,
    shape: 'rect',
    speed: 0.5
  },

  // car
  {
    spacing: [4],
    color: '#e5e401',
    size: grid,
    shape: 'rect',
    speed: -0.5
  },

  // start zone is safe
  null
];

// rows holds all the sprites for that row
const rows = [];
for (let i = 0; i < patterns.length; i++) {
  rows[i] = [];

  let x = 0;
  let index = 0;
  const pattern = patterns[i];

  // skip empty patterns (safe zones)
  if (!pattern) {
    continue;
  }

  // allow there to be 1 extra pattern offscreen so the loop is seamless
  // (especially for the long log)
  let totalPatternWidth =
    pattern.spacing.reduce((acc, space) => acc + space, 0) * grid +
    pattern.spacing.length * pattern.size;
  let endX = 0;
  while (endX < canvas.width) {
    endX += totalPatternWidth;
  }
  endX += totalPatternWidth;

  // populate the row with sprites
  while (x < endX) {
    rows[i].push(new Sprite({
      x,
      y: grid * (i + 1),
      index,
      ...pattern
    }));

    // move the next sprite over according to the spacing
    const spacing = pattern.spacing;
    x += pattern.size + spacing[index] * grid;
    index = (index + 1) % spacing.length;
  }
}

// game loop
function loop() {
  requestAnimationFrame(loop);
  context.clearRect(0,0,canvas.width,canvas.height);

  // draw the game background
  // water
  context.fillStyle = '#000047';
  context.fillRect(0, grid, canvas.width, grid * 6);

  // end bank
  context.fillStyle = '#1ac300';
  context.fillRect(0, grid, canvas.width, 5);
  context.fillRect(0, grid, 5, grid);
  context.fillRect(canvas.width - 5, grid, 5, grid);
  for (let i = 0; i < 4; i++) {
    context.fillRect(grid + grid * 3 * i, grid, grid * 2, grid);
  }

  // beach
  context.fillStyle = '#8500da';
  context.fillRect(0, 7 * grid, canvas.width, grid);

  // start zone
  context.fillRect(0, canvas.height - grid * 2, canvas.width, grid);

  // update and draw obstacles
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r];

    for (let i = 0; i < row.length; i++) {
      const sprite = row[i]
      sprite.x += sprite.speed;
      sprite.render();

      // loop sprite around the screen
      // sprite is moving to the left and goes offscreen
      if (sprite.speed < 0 && sprite.x < 0 - sprite.size) {

        // find the rightmost sprite
        let rightMostSprite = sprite;
        for (let j = 0; j < row.length; j++) {
          if (row[j].x > rightMostSprite.x) {
            rightMostSprite = row[j];
          }
        }

        // move the sprite to the next spot in the pattern so it continues
        const spacing = patterns[r].spacing;
        sprite.x =
          rightMostSprite.x + rightMostSprite.size +
          spacing[rightMostSprite.index] * grid;
        sprite.index = (rightMostSprite.index + 1) % spacing.length;
      }

      // sprite is moving to the right and goes offscreen
      if (sprite.speed > 0 && sprite.x > canvas.width) {

        // find the leftmost sprite
        let leftMostSprite = sprite;
        for (let j = 0; j < row.length; j++) {
          if (row[j].x < leftMostSprite.x) {
            leftMostSprite = row[j];
          }
        }

        // move the sprite to the next spot in the pattern so it continues
        const spacing = patterns[r].spacing;
        let index = leftMostSprite.index - 1;
        index = index >= 0 ? index : spacing.length - 1;
        sprite.x = leftMostSprite.x - spacing[index] * grid - sprite.size;
        sprite.index = index;
      }
    }
  }

  // draw frogger
  frogger.x += frogger.speed || 0;
  frogger.render();

  // draw scored froggers
  scoredFroggers.forEach(frog => frog.render());

  // check for collision with all sprites in the same row as frogger
  const froggerRow = frogger.y / grid - 1 | 0;
  let collision = false;
  for (let i = 0; i < rows[froggerRow].length; i++) {
    let sprite = rows[froggerRow][i];

    // axis-aligned bounding box (AABB) collision check
    // treat any circles as rectangles for the purposes of collision
    if (frogger.x < sprite.x + sprite.size - gridGap &&
        frogger.x + grid - gridGap > sprite.x &&
        frogger.y < sprite.y + grid &&
        frogger.y + grid > sprite.y) {
      collision = true;

      // reset frogger if got hit by car
      if (froggerRow > rows.length / 2) {
        frogger.x = grid * 6;
        frogger.y = grid * 13;
      }
      // move frogger along with obstacle
      else {
        frogger.speed = sprite.speed;
      }
    }
  }

  if (!collision) {
    // if fogger isn't colliding reset speed
    frogger.speed = 0;

    // frogger got to end bank (goal every 3 cols)
    const col = (frogger.x + grid / 2) / grid | 0;
    if (froggerRow === 0 && col % 3 === 0 &&
        // check to see if there isn't a scored frog already there
        !scoredFroggers.find(frog => frog.x === col * grid)) {
      scoredFroggers.push(new Sprite({
        ...frogger,
        x: col * grid,
        y: frogger.y + 5
      }));
    }

    // reset frogger if not on obstacle in river
    if (froggerRow < rows.length / 2 - 1) {
      frogger.x = grid * 6;
      frogger.y = grid * 13;
    }
  }
}

// listen to keyboard events to move frogger
document.addEventListener('keydown', function(e) {
  // left arrow key
  if (e.which === 37) {
    frogger.x -= grid;
  }
  // right arrow key
  else if (e.which === 39) {
    frogger.x += grid;
  }

  // up arrow key
  else if (e.which === 38) {
    frogger.y -= grid;
  }
  // down arrow key
  else if (e.which === 40) {
    frogger.y += grid;
  }

  // clamp frogger position to stay on screen
  frogger.x = Math.min( Math.max(0, frogger.x), canvas.width - grid);
  frogger.y = Math.min( Math.max(grid, frogger.y), canvas.height - grid * 2);
});

// start the game
requestAnimationFrame(loop);
</script>
</body>
</html>
