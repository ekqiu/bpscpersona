const questions = [
  { question: "What is the persona's name?", answers: {
    a: "text",
    b: "text",
    c: "text",
    d: "text",
    e: "text",
  } },
  { question: "What is the persona's name?", answers: {
    a: "text",
    b: "text",
    c: "text",
    d: "text",
    e: "text",
  } },
  { question: "What is the persona's name?", answers: {
    a: "text",
    b: "text",
    c: "text",
    d: "text",
    e: "text",
  } },
  { question: "What is the persona's name?", answers: {
    a: "text",
    b: "text",
    c: "text",
    d: "text",
    e: "text",
  } },
  { question: "What is the persona's name?", answers: {
    a: "text",
    b: "text",
    c: "text",
    d: "text",
    e: "text",
  } },
  { question: "What is the persona's name?", answers: {
    a: "text",
    b: "text",
    c: "text",
    d: "text",
    e: "text",
  } },
];

const results = {a: "Image.png", b: "Image.png", c: "Image.png", d: "Image.png", e: "Image.png"};

const questionContainer = document.getElementById("questions");
const personaContainer = document.getElementById("persona");
  
let persona = {}; // Object to store persona details

let currentQuestionIndex = 0

function displayQuestion() {
  const question = questions[currentQuestionIndex];
  if (question) {
      let html = `<p>${question.question}</p>`;
      if (question.image) {
          html += `<img src="${question.image}" alt="Question ${currentQuestion + 1}">`;
      }
      for (const option in question.answers) {
          html += `<button class="large-rectangular" value="${option}" id="${option}">${question.answers[option].text}</button>`;
      }
      questionContainer.innerHTML = html;
      attachButtonClickHandlers();
  } else {
  
  }
}

function captureAnswers() {
  persona = {};
  questions.forEach((question) => {
    switch (question.type) {
      case "text":
      case "number":
        persona[question.question] = questionContainer.querySelector(`input[type=${question.type}]`).value;
        break;
      case "checkbox":
        const selectedOptions = [];
        questionContainer.querySelectorAll("input[type=checkbox]:checked").forEach((checkbox) => {
          selectedOptions.push(checkbox.value);
        });
        persona[question.question] = selectedOptions;
        break;
    }
  });
}
function generatePersona() {
  captureAnswers(); // Collect user responses

  // Process and format persona details (example)
  persona.fullName = `${persona["What is the persona's name?"]} (Age: ${persona["What is their age?"]})`;
  persona.description = `This ${persona["What is their occupation?"]} enjoys ${persona["What are their hobbies?"]} in their free time.`;

  // Display persona details in the designated div
  personaContainer.innerHTML = `<h2>Generated Persona</h2>
  <p>Name: ${persona.fullName}</p>
  <p>Occupation: ${persona.occupation}</p>
  <p>Hobbies: ${persona.hobbies}</p>
  <p>Description: ${persona.description}</p>`;
}
displayQuestion(); // Show questions on page load

generateBtn.addEventListener("click", generatePersona); // Add click event listener
