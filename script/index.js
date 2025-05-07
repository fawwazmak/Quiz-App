let questions = [
    {shape: "square", question: "Who is the main actor of demon slayer?", options: [
        {optn: "Tanjiro", status: "wrong"},
        {optn: "Ramen", status: "right"},
        {optn: "Yagami", status: "wrong"},
        {optn: "inosuke", status: "wrong"},
        {optn: "Zenitsu", status: "wrong"},
    ]},
    {shape: "square", question: "Who is the main actor of Death note?", options: [
        {optn: "Tanjiro", status: "wrong"},
        {optn: "Ramen", status: "right"},
        {optn: "Yagami", status: "wrong"},
        {optn: "inosuke", status: "wrong"},
        {optn: "hashira", status: "wrong"},
    ]},
    {shape: "square", question: "Which state is the capital of Nigeria?", options: [
        {optn: "Tanjiro", status: "wrong"},
        {optn: "Ramen", status: "right"},
        {optn: "Yagami", status: "wrong"},
        {optn: "inosuke", status: "wrong"},
        {optn: "hashira", status: "wrong"},
    ]},
    {shape: "square", question: "When was Prophet Muhammad given birth to?", options: [
        {optn: "Tanjiro", status: "wrong"},
        {optn: "Ramen", status: "right"},
        {optn: "Yagami", status: "wrong"},
        {optn: "inosuke", status: "wrong"},
        {optn: "hashira", status: "wrong"},
    ]},
    {shape: "square", question: "What was Naruto's favorite food?", options: [
        {optn: "Tanjiro", status: "wrong"},
        {optn: "Ramen", status: "right"},
        {optn: "Yagami", status: "wrong"},
        {optn: "inosuke", status: "wrong"},
        {optn: "hashira", status: "wrong"},
    ]},
    {shape: "square", question: "Who is the main actor of demon slayer?", options: [
        {optn: "Tanjiro", status: "wrong"},
        {optn: "Ramen", status: "right"},
        {optn: "Yagami", status: "wrong"},
        {optn: "inosuke", status: "wrong"},
        {optn: "hashira", status: "wrong"},
    ]},
];
let startQuiz = document.getElementById("start");
let questionSpace = document.getElementById("question-container");
let scoreSect = document.getElementById("score-sect")
let title = document.getElementById("question");
let mainScore = document.getElementById("main-score");
let scorePercent = document.getElementById("percent");
let x = 0;
let score = 0;
let showTime = document.getElementById("timer")

startQuiz.addEventListener("click", () => {
    document.getElementById("welcome-container").style.display = "none";
    questionSpace.style.display = "block";
    showQuestions();
})




function showQuestions() {
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; 
    const currentQuestion = questions[x];
    title.textContent = currentQuestion.question;

    let timer;

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

    timer = setTimeout(() => handleAnswer(null), 1000);
    
}