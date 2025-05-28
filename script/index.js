let questions = [
    {question: "Who is the main actor of demon slayer?", options: [
        {optn: "Tanjiro", status: "right"},
        {optn: "Ramen", status: "wrong"},
        {optn: "Yagami", status: "wrong"},
        {optn: "inosuke", status: "wrong"},
        {optn: "Zenitsu", status: "wrong"},
    ]},
    {question: "Who is the main actor of Death note?", options: [
        {optn: "Tanjiro", status: "wrong"},
        {optn: "Ramen", status: "wrong"},
        {optn: "Yagami", status: "right"},
        {optn: "inosuke", status: "wrong"},
        {optn: "hashira", status: "wrong"},
    ]},
    {question: "Which state is the capital of Nigeria?", options: [
        {optn: "Osun", status: "wrong"},
        {optn: "Lagos", status: "wrong"},
        {optn: "Abuja", status: "right"},
        {optn: "Kwara", status: "wrong"},
        {optn: "Kebbi", status: "wrong"},
    ]},
    {question: "When was Prophet Muhammad given birth to?", options: [
        {optn: "520 AD", status: "wrong"},
        {optn: "570 AD", status: "right"},
        {optn: "550 AD", status: "wrong"},
        {optn: "140 AD", status: "wrong"},
        {optn: "563 AD", status: "wrong"},
    ]},
    {question: "What was Naruto's favorite food?", options: [
        {optn: "Beans", status: "wrong"},
        {optn: "Ramen", status: "right"},
        {optn: "Tofu", status: "wrong"},
        {optn: "Pizza", status: "wrong"},
        {optn: "Rice", status: "wrong"},
    ]},
    {question: "Who is the main Villian of demon slayer?", options: [
        {optn: "Muzan", status: "right"},
        {optn: "Hashira", status: "wrong"},
        {optn: "Nezuko", status: "wrong"},
        {optn: "inosuke", status: "wrong"},
        {optn: "Zenitsu", status: "wrong"},
    ]},
    {question: "Who is the Flame Hashira featured in the movie Demon slayer?", options: [
        {optn: "Tomioka", status: "wrong"},
        {optn: "Kocho", status: "wrong"},
        {optn: "Rengoku", status: "right"},
        {optn: "Uzui", status: "wrong"},
        {optn: "Zenitsu", status: "wrong"},
    ]},
];
let startQuiz = document.getElementById("start");
let welcomeSpace = document.getElementById("welcome-container");
let questionSpace = document.getElementById("question-container");
let scoreSect = document.getElementById("score-sect")
let title = document.getElementById("question");
let mainScore = document.getElementById("main-score");
let scorePercent = document.getElementById("percent");
let scoreComment = document.getElementById("comment");
let x = 0;
let score = 0;
let showTime = document.getElementById("timer")
let restart = document.getElementById("restart");
let switchMode = document.getElementById("switch-mode");
let crrntQues = document.getElementById("progress")

startQuiz.addEventListener("click", beginQuiz);
restart.addEventListener("click", beginQuiz);
document.addEventListener("keydown", keyHandler);


function beginQuiz() {
    welcomeSpace.style.display = "none";
    questionSpace.style.display = "block";
    scoreSect.style.display = "none";
    showQuestions();
    document.removeEventListener("keydown", keyHandler)
}

function keyHandler(e) {
    if(e.key === "Enter") beginQuiz();
}

function showQuestions() {
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; 
    const currentQuestion = questions[x];
    title.textContent = currentQuestion.question;
    crrntQues.innerText = `${x} of ${questions.length}`

    let timer;
    let timeLeft = 10;
    showTime.innerText = timeLeft;


    const countdownInterval = setInterval(() => {
        timeLeft--;
        function formatTime(seconds) {
            const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
            const secs = String(seconds % 60).padStart(2, '0');
            return `${mins}:${secs}`;
        }
        
        showTime.innerText = formatTime(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);

    function handleAnswer(optn) {
        clearTimeout(timer);
        if (x < questions.length) {
            if (optn && optn.status === "right") {
                score++;
            }
            x++;

            if (x < questions.length) {
                showQuestions(); 
            } else {
                questionSpace.style.display = "none";
                scoreSect.style.display = "block";
                percent = (score / questions.length) * 100;
                mainScore.innerText = `${score} / ${questions.length} ==> ${percent.toFixed(1)}%`;
                scorePercent.style.height = `${percent}%`

                if (percent < 50) {
                    scoreComment.innerText = "Try Again"
                } else if (percent >= 50 && percent < 70) {
                    scoreComment.innerText = "Good Job, you can do better"
                } else {
                    scoreComment.innerText = "Excellent"
                }
                x = 0;
                score = 0;
            }
        }
        console.log(x, score);
        if (!optn) {
            console.log("No answer selected – timeout");
        }
    }

    
    currentQuestion.options.forEach(optn => {
        let option = document.createElement("div");
        option.id = "option-div";
        option.innerHTML = optn.optn;
        optionsContainer.appendChild(option);

        option.addEventListener("click", () => handleAnswer(optn));
    });

    timer = setTimeout(() => handleAnswer(null), 10000);
}


switchMode.addEventListener("click", () => {
    document.body.classList.toggle("body-dark");
    startQuiz.classList.toggle("start-dark");
    showTime.classList.toggle("timer-dark");
    restart.classList.toggle("timer-dark");
    scorePercent.classList.toggle("percent-dark")
})