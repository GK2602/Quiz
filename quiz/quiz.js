const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: 0
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionTextElement = document.getElementById("question-text");
    questionTextElement.textContent = quizQuestions[currentQuestionIndex].question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    for (let i = 0; i < quizQuestions[currentQuestionIndex].options.length; i++) {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.textContent = quizQuestions[currentQuestionIndex].options[i];
        optionElement.addEventListener("click", selectOption);
        optionsContainer.appendChild(optionElement);
    }
}

function selectOption(event) {
    const selectedOption = event.target;
    const selectedOptionIndex = Array.from(selectedOption.parentNode.children).indexOf(selectedOption);

    if (selectedOptionIndex === quizQuestions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

function displayScore() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";

    const scoreElement = document.createElement("h2");
    scoreElement.textContent = `Your Score: ${score}/${quizQuestions.length}`;
    quizContainer.appendChild(scoreElement);

    const percentageElement = document.createElement("p");
    const percentage = (score / quizQuestions.length) * 100;
    percentageElement.textContent = `Percentage Correct: ${percentage.toFixed(2)}%`;
    quizContainer.appendChild(percentageElement);
}

displayQuestion();
