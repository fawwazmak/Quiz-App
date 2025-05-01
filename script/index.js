let questions = [
    {shape: "square", question: "Who is the main actor of demon slayer?", options: [
        {optn: "Tanjiro", status: "wrong"},
        {optn: "Ramen", status: "right"},
        {optn: "Yagami", status: "wrong"},
        {optn: "inosuke", status: "wrong"},
        {optn: "hashira", status: "wrong"},
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

let questionSpace = document.getElementById("question-container");


for (let i = 0; i < questions.length; i++) {
    const title = document.createElement('h1');
    const optionsContainer = document.createElement("div");
    let options = questions[i].options.map(option => `<div class="option"><p>${option.optn}</p></div>`).join('');
    optionsContainer.innerHTML = `${options}`;

    title.textContent = questions[i].question;
    title.className = 'child';
    questionSpace.appendChild(title);

    questionSpace.appendChild(optionsContainer);
    optionsContainer.id = "options"
}