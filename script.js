document.getElementById("userResponse").value = "";

let storyline = [
  [
    "In the heart of a moonless night, the world teetered on the precipice of doom. The president’s office buzzed with urgency, the air thick with tension. The fate of humanity hung in the balance, and you found yourself thrust into an adventure beyond your mind.",
    "1.png",
  ],
  [
    "The aliens were no ordinary visitors. Their ships, sleek and ominous, hovered over major cities, casting eerie shadows on the streets below. Their arrival was swift, their intentions clear: domination. But the president, ever the diplomat, believed in the power of gestures. “We must offer them something,” she declared, her eyes steely. “A peace offering.”",
    "2.png",
  ],
  [
    "And so, with minutes ticking away, I embarked on a quest. My mission: to create a gift that would sway the extraterrestrial conquerors. You assembled a team with people who are all highly skilled in their many professions.",
    "3.png",
  ],
];

// a list of questions to ask the user
let questions = [
  ["Before we begin, what is your name?", "5.png"],
  [
    "What type of gift should you create for the mysterious aliens? Remember, the traditional gift honors tradition, while the creative gift sparks curiosity and bridges worlds. Choose wisely—the fate of Earth may depend on it! 🌍🚀",
    "4.png",
  ],
  [
    "And with minutes ticking away, you embarked on a quest. Your mission: to create a gift that would sway the extraterrestrial conquerors. Now that you have selected the gift, how should you get your team to create the gift?",
    "5.png",
  ],
  [
    "Now that your gift is ready, how should you welcome the unexpected guests?",
    "4.png",
  ],
  [
    "All of a sudden, the gift broke into pieces! How should you deal with this?",
    "7.png",
  ],
  [
    "Now that you have refined your gift, the aliens need a place to be hosted. Where are you going to bring them?",
    "8.png",
  ],
  [
    "The aliens have landed, but they don’t seem very happy. The president is ready to command the army to launch their attack, but you are unsure if that would be the right decision.",
    "9.png",
  ],
];

let choices = [
  [],
  [
    "Welcome Basket: Fill a woven basket with essentials: fresh fruits, artisanal bread, and a handwritten note expressing your hospitality.",
    "Soundtrack of Earth: Curate a playlist featuring music from different cultures, genres, and eras. Let the aliens experience our diverse musical tapestry.",
  ],
  [
    "Forget about them, I’ll just do it myself. We will be wasting precious time if everyone were to be involved.",
    "Get everyone to assemble! More people means a better outcome.",
  ],
  [
    "Formally welcome them, to show your respect and prepare a cup of tea to make them feel welcomed.",
    "Get a choir to sing a hit pop song for them! A little fun never hurt anyone.",
  ],
  [
    "Redo the whole gift all over again. You can’t afford to mess it up!",
    "Attempt to put the pieces back into place. There’s no time left!",
  ],
  [
    "A grand ballroom in the Istana, where the president can keep an eye on them.",
    "A lush garden in the countryside, where the aliens can relax and enjoy the fresh air.",
  ],
  [
    "Launch attack! There’s no way we’re going to lose our home like this.",
    "Continue as planned, they could just be tired.",
  ],
];

let outcomes = [
  [
    "They were easily defeated, although they didn’t seem like they were fighting back. Was this the right choice?",
    "10.png",
  ],
  [
    "They were very happy with what you have come up with, but the alien leader smirked at you. What’s going to happen?",
    "11.png",
  ],
];

let responses = [];
let questionIndex = 0;
let storylineIndex = 0;
let storedName = "";

function displayNextQuestion() {
  if (questionIndex < questions.length) {
    const radioButtons = document.getElementsByName("choice");
    for (let i = 0; i < radioButtons.length; i++) {
      radioButtons[i].checked = false;
    }
    document.getElementById("qbox").textContent = questions[questionIndex][0];
    document.getElementById("text1").textContent = choices[questionIndex][0];
    document.getElementById("text2").textContent = choices[questionIndex][1];
    document.getElementById(
      "img"
    ).src = `images/${questions[questionIndex][1]}`;
    questionIndex++;
    if (questionIndex === questions.length) {
      document.getElementById("progress").textContent = "Finish";
    }
  }
}

function generatePersona() {
  let persona = "";
  let name = storedName;
  let approach = 0;
  let execution = 0;
  let numberArray = responses.map(Number);
  console.log(numberArray);

  //if response[i] is even, add to appraoch, else add to execution
  for (let i = 0; i < numberArray.length; i++) {
    if (i % 2 === 0) {
      approach += numberArray[i];
    } else {
      execution += numberArray[i];
    }
  }

  //if aproach is negative, it is visionary, else it is cautious
  if (approach < 0) {
    approach = "V";
  } else {
    approach = "C";
  }

  //if execution is negative, it is optimistic, else it is decisive
  if (execution < 0) {
    execution = "O";
  } else {
    execution = "D";
  }

  persona = `${approach}${execution}`;

  var img = new Image(),
    txt = `${name}'s Persona`,
    url = `ekqiu.github.io/bpscpersona`,
    canvas = document.getElementById("personaa"),
    ctx = canvas.getContext("2d");

  img.onload = () => {
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
    ctx.font = "bold 75px sans-serif";
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillText(txt, 50, 2280);
    ctx.font = "bold 50px sans-serif";
    ctx.fillText(url, 1140, 2340);
  };
  img.src = `images/${persona}.png`;

  return persona;
}

document.getElementById("progress").addEventListener("click", function () {
  console.log(questionIndex);
  if (document.getElementById("progress").textContent === "Start") {
    document.getElementById("desc").style.display = "none";
    document
      .getElementById("questions")
      .insertAdjacentHTML(
        "afterbegin",
        `<img src="images/${storyline[0][1]}" id="img"><div id="qbox">${storyline[0][0]}</div>`
      );
    storylineIndex++;
    document.getElementById("progress").textContent = "Next >";
  } else if (document.getElementById("progress").textContent === "Next >") {
    document.getElementById(
      "img"
    ).src = `images/${storyline[storylineIndex][1]}`;
    document.getElementById("qbox").textContent = storyline[storylineIndex][0];
    storylineIndex++;

    if (storylineIndex == 3) {
      document.getElementById("progress").textContent = "Begin quest";
    }
  } else if (
    document.getElementById("progress").textContent === "Begin quest"
  ) {
    document.getElementById("userResponse").style.display = "block";
    document.getElementById("qbox").textContent = questions[questionIndex][0];
    document.getElementById(
      "img"
    ).src = `images/${questions[questionIndex][1]}`;
    document.getElementById("progress").textContent = "Next >>";
    questionIndex++;
  } else if (document.getElementById("progress").textContent === "Next >>") {
    // if response is from userResponse, push the name to responses array, else push the option id to responses array
    if (document.getElementById("userResponse").value !== "") {
      storedName = document.getElementById("userResponse").value;
    } else if (document.getElementById("userResponse").value === "") {
      // if response is from userResponse, push the name to responses array, else push the option id to responses array
      document.getElementById("userResponse").style.borderColor = "red";
      return;
    }
    document.getElementById("userResponse").value = "";
    document.getElementById("progress").textContent = "Next >>>";

    document.getElementById("userResponse").style.display = "none";
    document.getElementById("radio").style.display = "grid";

    // Display the next question
    displayNextQuestion();
  } else if (document.getElementById("progress").textContent === "Next >>>") {
    // get the radio button that is checked
    const radioButtons = document.getElementsByName("choice");
    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        responses.push(radioButtons[i].value);
        break;
      } else if (i === radioButtons.length - 1) {
        return;
      }
    }

    document.getElementById("userResponse").value = "";

    document.getElementById("userResponse").style.display = "none";
    document.getElementById("radio").style.display = "grid";

    // Display the next question
    displayNextQuestion();
  } else if (document.getElementById("progress").textContent === "Finish") {
    const radioButtons = document.getElementsByName("choice");
    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        responses.push(radioButtons[i].value);
        break;
      } else if (i === radioButtons.length - 1) {
        return;
      }
    }

    let persona = generatePersona();
    document.getElementById("questions").style.display = "none";
    document.getElementById("persona").style.display = "block";
  }
});

document.getElementById("download").addEventListener("click", function () {
  const canvas = document.getElementById("personaa");
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = image;
  link.download = "persona.png";
  link.click();
});
