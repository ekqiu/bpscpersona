document.getElementById("userResponse").value = "";


let storyline = [
    "In the heart of a moonless night, the world teetered on the precipice of doom. The president’s office buzzed with urgency, the air thick with tension. The fate of humanity hung in the balance, and you found yourself thrust into an adventure beyond your mind.",
    "The aliens were no ordinary visitors. Their ships, sleek and ominous, hovered over major cities, casting eerie shadows on the streets below. Their arrival was swift, their intentions clear: domination. But the president, ever the diplomat, believed in the power of gestures. “We must offer them something,” he declared, his eyes steely. “A peace offering.”",
    "And so, with minutes ticking away, I embarked on a quest. My mission: to create a gift that would sway the extraterrestrial conquerors. You assembled a team with people who are all highly skilled in their many professions.",
]

// a list of questions to ask the user
let questions = [
    "What's your name?",
    "What type of gift should you create for the mysterious aliens? Remember, the traditional gift honors tradition, while the creative gift sparks curiosity and bridges worlds. Choose wisely—the fate of Earth may depend on it! 🌍🚀",
    "And with minutes ticking away, you embarked on a quest. Your mission: to create a gift that would sway the extraterrestrial conquerors. Now that you have selected the gift, how should you get your team to create the gift?",
    "Now that your gift is ready, how should you welcome the unexpected guests?",
    "All of a sudden, the gift broke into pieces! How should you deal with this?",
    "The aliens have landed, but they don’t seem very happy. The president is ready to command the army to launch their attack, but you are unsure if that would be the right decision.",
]

let choices = [
    [],
    ["Welcome Basket: Fill a woven basket with essentials: fresh fruits, artisanal bread, and a handwritten note expressing your hospitality.","Soundtrack of Earth: Curate a playlist featuring music from different cultures, genres, and eras. Let the aliens experience our diverse musical tapestry."],
    ["Forget about them, I’ll just do it myself. We will be wasting precious time if everyone were to be involved.","Get everyone to assemble! More people means a better outcome."],
    ["Formally welcome them, to show your respect and prepare a cup of tea to make them feel welcomed.","Get a choir to sing a hit pop song for them! A little fun never hurt anyone."],
    ["Redo the whole gift all over again. You can’t afford to mess it up!","Attempt to put the pieces back into place. There’s no time left!"],
    ["Launch attack! There’s no way we’re going to lose our home like this.","Continue as planned, they could just be tired."],
]
let responses = [];
let questionIndex = 1;

function displayNextQuestion() {
    if (questionIndex < questions.length) {
        document.getElementById("qbox").textContent = questions[questionIndex];
        document.getElementById("text1").textContent = choices[questionIndex][0];
        document.getElementById("text2").textContent = choices[questionIndex][1];
        questionIndex++;
        if (questionIndex === questions.length) {
            document.getElementById("progress").textContent = "Finish";
        }
    }
}

document.getElementById("progress").addEventListener("click", function () {
    if (document.getElementById("progress").textContent === "Start") {
        document.getElementById("userResponse").style.display = "block";
        document.getElementById("questions").insertAdjacentHTML("afterbegin", `<div id="qbox">${questions[0]}</div>`);
        document.getElementById("progress").textContent = "Next";
    } else if (document.getElementById("progress").textContent === "Next") {

        // if response is from userResponse, push the name to responses array, else push the option id to responses array
        if (document.getElementById("userResponse").value !== "") {
            responses.push(document.getElementById("userResponse").value);
        } else {
            // get the radio button that is checked
            const radioButtons = document.getElementsByName("choice");
            for (let i = 0; i < radioButtons.length; i++) {
                if (radioButtons[i].checked) {
                    responses.push(radioButtons[i].value);
                    break;
                }
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
                }
            }

        document.getElementById("questions").style.display = "none";
        document.getElementById("persona").innerHTML = `<p>${responses}</p>`;
        document.getElementById("persona").style.display = "block";
    }
});
