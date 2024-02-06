document.getElementById('start-btn').addEventListener('click', function() {
    // Aquí puedes iniciar el juego o mostrar la primera pregunta
    alert('¡Vamos a empezar!');
    // Esta es solo una función de marcador de posición, deberías reemplazarla con tu lógica de encuesta
});
// Definir las preguntas
const questions = [
    { question: "¿Cuál es tu color favorito?", answers: ["Rojo", "Azul", "Verde", "Amarillo"] },
    { question: "¿Cuál es tu música favorita?", answers: ["Paraíso lunar", "11 y 6", "Fuego", "Tan Distintos"] },
    { question: "¿Cuál es tu libro favorito?", answers: ["El principito", "El Alquimista", "Romeo y Julieta", "Elefante"] },
    { question: "¿Qué tipo de música prefieres?", answers: ["Pop", "Rock", "Jazz", "Clásica"] },
    { question: "¿Cuál es tu hobby favorito?", answers: ["Leer", "Escribir", "Dibujar", "Programar"] },
];
let currentQuestionIndex = 0;

document.getElementById('start-btn').addEventListener('click', function() {
    this.style.display = 'none'; // Ocultar botón de empezar
    displayQuestion(); // Mostrar la primera pregunta
});

function displayQuestion() {
    const questionContainer = document.getElementById('questions-section');
    questionContainer.innerHTML = `
        <h2>${questions[currentQuestionIndex].question}</h2>
        <div class="answers">
            ${questions[currentQuestionIndex].answers.map((answer, index) => `<button class="answer-btn" onclick="selectAnswer(${index})">${answer}</button>`).join('')}
        </div>
        <button id="next-btn" onclick="nextQuestion()" disabled>Siguiente</button>
        <div class="progress-bar">
            <div class="progress" style="width: ${((currentQuestionIndex + 1) / questions.length) * 100}%"></div>
        </div>
    `;
}

function selectAnswer(selectedIndex) {
    const answersButtons = document.querySelectorAll('.answer-btn');
    answersButtons.forEach((button, index) => {
        if (index === selectedIndex) {
            button.classList.add('answer-selected'); // Añade la clase para resaltar el botón seleccionado
        } else {
            button.classList.remove('answer-selected'); // Remueve la clase de los otros botones
        }
    });

    const nextBtn = document.getElementById('next-btn');
    nextBtn.disabled = false; // Habilitar botón de siguiente
}


function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(); // Mostrar la siguiente pregunta
    } else {
        finishQuiz(); // Función para manejar el final del quiz
    }
}

function finishQuiz() {
    const questionContainer = document.getElementById('questions-section');
    questionContainer.innerHTML = `<h2>¡Gracias por participar!</h2><p>Presiona el botón de abajo para ver algo especial.</p><button onclick="showSpecialMessage()">Ver mensaje especial</button>`;
}

function showSpecialMessage() {
    const questionContainer = document.getElementById('questions-section');
    questionContainer.innerHTML = `<h2>¡Sorpresa!</h2><p>¡Quería hacer algo especial para mi chiquita! ¿Quieres ser mi Valentine?</p>`;
}
