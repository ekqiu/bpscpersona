import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyBszGH9mYtZTbVgw8hL_sbvUrmQ1Uzuc1E");

document.getElementById("userResponse").value = "";


async function determineStyle() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = "Generate a question to ask a person to determine their leadership style"

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    //return the persona according to the text given
}

// a list of questions to ask the user
questions = [
    "What's your name?",
    "What is your favorite food?",
    "What is your favorite movie?",
    "What is your favorite book?",
    "What is your favorite song?",
]
let responses = [];
let questionIndex = 1;

function displayNextQuestion() {
    if (questionIndex < questions.length) {
        document.getElementById("qbox").textContent = questions[questionIndex];
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

        responses.push(document.getElementById("userResponse").value);
        document.getElementById("userResponse").value = "";

        document.getElementById("userResponse").style.display = "none";



        // Display the next question
        displayNextQuestion();

    } else if (document.getElementById("progress").textContent === "Finish") {
        responses.push(document.getElementById("userResponse").value);

        document.getElementById("questions").style.display = "none";
        document.getElementById("persona").innerHTML = `<p>${responses}</p>`;
        document.getElementById("persona").style.display = "block";
    }
});
