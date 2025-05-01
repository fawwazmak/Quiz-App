let questions = [
    {shape: "square", question: "Who is the main actor of demon slayer?", options: ["Tanjiro", "Yagami", "inosuke", "Zenitsu", "hashira"]},
    {shape: "square", question: "Who is the main actor of Death note?", options: ["Tanjiro", "Yagami", "inosuke", "Zenitsu", "hashira"]},
    {shape: "square", question: "Who is the main actor of demon slayer?", options: ["Tanjiro", "Yagami", "inosuke", "Zenitsu", "hashira"]},
    {shape: "square", question: "Who is the main actor of demon slayer?", options: ["Tanjiro", "Yagami", "inosuke", "Zenitsu", "hashira"]},
    {shape: "square", question: "Who is the main actor of demon slayer?", options: ["Tanjiro", "Yagami", "inosuke", "Zenitsu", "hashira"]},
    {shape: "square", question: "Who is the main actor of demon slayer?", options: ["Tanjiro", "Yagami", "inosuke", "Zenitsu", "hashira"]},
];

let questionSpace = document.getElementById("question-container");


for (let i = 0; i < questions.length; i++) {
    const title = document.createElement('h1');
    const optionsContainer = document.createElement("div");
    let options = "";
    
    for (let y = 0; y < questions[i].options.length; y++) {
        
    }

    optionsContainer.innerHTML = `
        <div class="option">
            <p>Hello</p>
        </div>
    `

    // for (let y = 0; y < questions[i].options.length; y++) {
    //     const eachOption = options[y];
    //     optionsContainer.appendChild(eachOption)
    //     console.log(i, y)
    // }

    title.textContent = questions[i].question;
    title.className = 'child';
    questionSpace.appendChild(title);

    questionSpace.appendChild(optionsContainer);
    optionsContainer.className = "options"
}