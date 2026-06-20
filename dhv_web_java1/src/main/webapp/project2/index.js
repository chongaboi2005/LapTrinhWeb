const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answerSContainer = document.getElementById("answer-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-question");
const ScoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
    {
        question: "Mã trường Đại học Hùng Vương Tp.HCM là?",
        answers: [
            {text: "HHD", correct: false},
            {text: "VHD", correct: false},
            {text: "DHV", correct: true},
            {text: "VVH", correct: false},
        ],
    },

    {
        question: "Cơ sở chính của trường tại đường nào?",
        answers: [
            {text: "Nguyễn Trãi", correct: false},
            {text: "Lê Đức Thọ", correct: true},
            {text: "Kinh Dương Vương", correct: false},
            {text: "New York", correct: false},
        ],
    },

    {
        question: "Tên linh vật của trường là?",
        answers: [
            {text: "Heo đi bộ", correct: false},
            {text: "Con vịt", correct: false},
            {text: "Trống đồng", correct: false},
            {text: "Lạc Lạc", correct: true},
        ],
    },

    {
        question: "Trường có bao nhiêu Khoa?",
        answers: [
            {text: "5", correct: false},
            {text: "6", correct: false},
            {text: "8", correct: true},
            {text: "9", correct: false},
        ],
    },

    {
        question: "Trường có bao nhiêu Viện?",
        answers: [
            {text: "6", correct: false},
            {text: "8", correct: false},
            {text: "5", correct: true},
            {text: "2", correct: false},
        ],
    },
];

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

startButton.addEventListener("click",startQuiz);
restartButton.addEventListener("click",restartQuiz);

function startQuiz()
{
    console.log("quiz started");
    currentQuestionIndex = 0;
    score = 0;
    ScoreSpan.textContent = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
}

function showQuestion()
{
    answersDisabled = false;
    const currentQuestion = quizQuestions[currentQuestionIndex];
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    const progresPercent = (currentQuestionIndex/quizQuestions.length) * 100;
    progressBar.style.width = progresPercent + "%";
    questionText.textContent = currentQuestion.question;

    answerSContainer.innerHTML = "";
    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");
        button.dataset.correct = answer.correct;
        button.addEventListener("click",selectAnswer);
        answerSContainer.appendChild(button);
    })
}

function selectAnswer(event)
{
    if(answersDisabled) return
    answersDisabled = true;
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    Array.from(answerSContainer.children).forEach((button) =>
    {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        else if(button === selectedButton) {
            button.classList.add("incorrect");
        }
    });
    
    if(isCorrect)
    {
        score++;
        ScoreSpan.textContent = score;
    }

    setTimeout(() =>
    {
        currentQuestionIndex++;
        if(currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        }
        else {
            showResults();
        }
    }, 1000);
}

function showResults() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");
    finalScoreSpan.textContent = score;
    const percentage = (score/quizQuestions.length) * 100;

    if(percentage === 100)
    {
        resultMessage.textContent = "Tuyệt vời!";
    }
    else if(percentage >= 80)
    {
        resultMessage.textContent = "Giỏi quá!";
    }
    else if(percentage >= 60)
    {
        resultMessage.textContent = "Khá đấy!";
    }
    else if(percentage >= 40)
    {
        resultMessage.textContent = "Tạm tạm!";
    }
    else
    {
        resultMessage.textContent = "Cần học lại!";
    }
}

function restartQuiz()
{
    console.log("quiz re-started");
    resultScreen.classList.remove("active");
    startQuiz();
}