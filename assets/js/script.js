// Array including all questions and their multiple-choices:

let allQuestions = [{ 
    question: "What is the purpose of the HTML 'meta' tag?",
    choices: ["To define a paragraph", "To specify metadata about a document", "To create a link to an external stylesheet", "To insert a media element"],
    correct: "To specify metadata about a document"
}, 
{ 
    question: "What does the '===' operator do in JavaScript?",
    choices: ["Checks for equality without type conversion", "Assigns a value to a variable", "Performs arithmetic addition", "Checks for equality with type conversion"],
    correct: "Checks for equality with type conversion"
}, 
{ 
    question: "How can you apply a style to an element with the id 'example' in CSS?",
    choices: ["#example", ".example", "element.example", "id: example"],
    correct: "#example"
}, 
{ 
    question: "What is the purpose of the 'document.getElementById()' method in JavaScript?",
    choices: ["It gets the value of an input field.", "It retrieves an HTML element based on its id.", "It sets the id of an element within the document.", "It creates a new HTML element."],
    correct: "It gets the value of an input field."
}, 
{ 
    question: "How can you center align a block-level element in CSS?",
    choices: ["text-align: center;", "align: center;", "margin: auto;", "center: true;"],
    correct: "margin: auto;"
}, 
{ 
    question: "How can you include external CSS in an HTML document?",
    choices: ["<style> tag", "<link> tag", "<css> tag", "<external> tag"],
    correct: "<link> tag"
}, 
{ 
    question: "Which HTML element is used to create a dropdown list?",
    choices: ["'<dropdown>'", "'<select>'", "'<list>'", "'<options>'"],
    correct: "'<select>'"
}, 
{ 
    question: "Which of the following is NOT a self-closing tag",
    choices: ["<img/>", "<meta/>", "<link/>", "<html/>"],
    correct: "<html/>"
}, 
{ 
    question: "How do you use the getElementById method in JavaScript to retrieve an HTML element with the id 'myElement'?",
    choices: ['getElement("myElement")', 'document.getMyElement("Element")', 'document.getElementById("myElement")', 'element.getElementById("myElement")'],
    correct: 'document.getElementById("myElement")'
}, 
{ 
    question: "How would you set the 'src' attribute of an image element with the id 'myImage' to 'image.jpg' using JavaScript?",
    choices: ['setAttr("myImage", "src", "image.jpg")', 'document.getElementById("myImage").setAttribute("src", "image.jpg")', 'setAttribute("src", "image.jpg")', 'document.getAttribute("src", "image.jpg")'],
    correct: 'document.getElementById("myImage").setAttribute("src", "image.jpg")'
}
]

// Declare variables and elements (some with styling)

let i = 0; 
let correctAnswers = 0;
let incorrectAnswers = 0;
let timer;
let timerCount;
let highScores = [];
let choiceButtons = [];

let headingEl = document.createElement("heading");
let heading = document.getElementById("heading");
let cardTextEl = document.createElement("cardText");
let cardText = document.getElementById("cardText");
let feedback = document.createElement("feedback");
feedback.classList.add("feedback");

let startBTN = document.getElementById("startBTN");
let nextBTN = document.getElementById ("nextBTN");
let timerElement = document.getElementById("timer");
let correctCount = document.createElement("correctN");
let incorrectCount = document.createElement("incorrectN");
let form = document.createElement("form");
let textInput = document.createElement("input");
let label = document.createElement("label");
textInput.type = "text";
textInput.name = "initials";
label.textContent = "Please enter your initials: ";
textInput.placeholder = "Your initials here...";

let submitBTN = document.createElement("input");
submitBTN.type = "submit";
submitBTN.classList.add("submitBTN");
submitBTN.textContent = "Submit";

// Event listeners for the start and next buttons  
startBTN.addEventListener("click", startQuiz);
nextBTN.addEventListener("click", nextQuestion);

// Retrieve highscores from the local storage
let highScoresList = document.getElementById("highScoresList");

// Add event listener on the text "View Highscores" from the HTML
let highScoresMenu = document.getElementById("highScores");
highScoresMenu.addEventListener("click", function () {
    let storedHighScores = JSON.parse(localStorage.getItem("highScoresList")) || [];
    document.getElementById("startBTN").classList.add("hide");    
    displayHighScores(storedHighScores);
  });

// Create welcome note text
headingEl.textContent = "Welcome to Code Quiz!";
cardTextEl.textContent = "In this quiz you will be given 60 seconds to answer multiple-choice questions about HTML, CSS, JS, and Web APIs. You can check your time at the righ-top corner, and the highscores at the left-top corner. Ready? Press Start button to begin. Good luck!";
heading.appendChild(headingEl);
cardText.appendChild(cardTextEl);

// Function to start the quiz
function startQuiz() {
heading.removeChild(headingEl);
cardText.removeChild(cardTextEl);
document.querySelector("#nextBTN.hide").classList.remove('hide');
document.getElementById("startBTN").classList.add("hide");    
timerCount = 60;
document.querySelector("h2").classList.add('hide');
startTimer();
showQuestion(i);
}

// Function to start the timer
function startTimer (){
timer = setInterval(function() {
    timerCount--;
    timerElement.textContent ="Time left: " + timerCount;
    if (timerCount === 0) {
        clearInterval(timer);
        disableChoiceButtons();
        timeIsUp();
    }
}, 1000);
}

// Function to decrease the time when incorrect option is selected
function reduceTime () {
if (timerCount > 5) {
    timerCount -= 5;
} else {
    timerCount = 0;
    timeIsUp();
}
}

// Function to stop the timer
function timeIsUp () {
alert("⌛️ Time is up!! ⌛️");
timerElement.textContent ="Time left: 0";
disableChoiceButtons();
showFinalResult();
clearInterval(timer);
}
// To show question number, their contents (question and its choices):
function showQuestion(i) {
let currentQuestion = allQuestions[i];
headingEl.textContent = "Question " + (i + 1) + ":";
cardTextEl.textContent = allQuestions[i].question;
heading.appendChild(headingEl);
cardText.appendChild(cardTextEl);

for (let j = 0; j < currentQuestion.choices.length; j++) {
    let choiceBTN = document.createElement("choiceBTN");
    choiceBTN.classList.add("choiceBTN");
    choiceBTN.textContent = currentQuestion.choices[j];
    cardText.appendChild(choiceBTN);
    choiceButtons.push(choiceBTN);
    choiceBTN.addEventListener("click", checkAnswer);
}
}

// Function to navigate to the next question:
function nextQuestion () {
if ((i < 9) && (timerCount > 0)){
    i++;
    while (cardText.firstChild) {
        cardText.removeChild(cardText.firstChild);
    }
    console.log("❓: " + i);
    console.log("✅: " + correctAnswers);
    console.log("❌: " + incorrectAnswers);
    showQuestion(i);
} else if ((i === 9) && (timerCount > 0)) {
    clearInterval(timer);
    showFinalResult();
} else {
    headingEl.textContent = "Time is up!";
    heading.appendChild(headingEl);
    showFinalResult()
}
}
// Function to disable the eventlistener after the first choice:
function disableChoiceButtons(){
choiceButtons.forEach(button => {
    button.removeEventListener("click", checkAnswer);
});
}

// Function to check the accuracy of the answer and give feedback:
function checkAnswer(event) {
disableChoiceButtons();

if (event.target.textContent === allQuestions[i].correct) {
    event.target.classList.add('correctGreen');
    feedback.textContent = "correct! 🤩";
    cardText.appendChild(feedback);
    correctAnswers++;
} else{
    event.target.classList.add('incorrectRed');
    feedback.textContent = "incorrect! 🫠 The correct answer is: " + allQuestions[i].correct;
    cardText.appendChild(feedback);
    incorrectAnswers++;
    reduceTime();
};
};

// Function to get initials and store the score, after questions are finished or when time is up:
function showFinalResult(){
while (cardText.firstChild) { 
    cardText.removeChild(cardText.firstChild);
};
nextBTN.style.display = "none";
headingEl.textContent = " "
correctCount.textContent = "Correct: " + correctAnswers;
heading.appendChild(correctCount);
form.appendChild(label);
form.appendChild(textInput);
form.appendChild(submitBTN);
cardText.appendChild(form);


submitBTN.addEventListener("click", function(event) {
    event.preventDefault();
    let storedHighScores = JSON.parse(localStorage.getItem("highScoresList")) || [];

    let initials;
    initials = textInput.value;
    let userData = {
    initials: initials,
    correctAnswers: correctAnswers
};
    storedHighScores.push(userData);

    localStorage.setItem("highScoresList", JSON.stringify(storedHighScores));

    displayHighScores(storedHighScores);
});
}

// Function to sort and display the highscores
function displayHighScores(storedHighScores){
while (cardText.firstChild) { 
    cardText.removeChild(cardText.firstChild);
};
correctCount.textContent = ""
let highScoresList = document.getElementById("cardText");
highScoresList.innerHTML = "";
headingEl.textContent = "🏆 Highscores: "
storedHighScores.sort((a, b)=> a.correctAnswers>b.correctAnswers ? -1 : 1);
for (let n = 0; n < 10; n++){
    let listItem = document.createElement("li");
    listItem.textContent = storedHighScores[n].initials + " - " + storedHighScores[n].correctAnswers;
    cardText.append(listItem);
    }

    let restartBTN = document.createElement("button");
    restartBTN.textContent = "Restart";
    restartBTN.classList.add("restartBTN");
    restartBTN.addEventListener("click", restartQuiz);
    highScoresList.appendChild(restartBTN);
    document.querySelector("h2").classList.add('hide');
}

// Function to restart the quiz
function restartQuiz() {
  i = 0;
correctAnswers = 0;
incorrectAnswers = 0;
window.location.href="./index.html";
}
