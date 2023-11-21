// Define arrays including questions and choices:

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

// TODO: function to start the quiz and timer

// TODO: function to check the accuracy and get feedback
// TODO: function for clicking next
// TODO: function to store scores
// TODO: function to show final result
// TODO: function to get initial
// TODO: function 

// Declaring variables and elements

let i = 0; 
let correctAnswers = 0;
let incorrectAnswers = 0;
let timer;
let timerCount;
let highScores = [];

let welcome = document.getElementById("welcome");
let welcomeHeading = document.createElement("welcome");
let welcomeText = document.getElementById("welcome-text");
let welcomeNote = document.createElement("welcome-text");
let timerElement = document.getElementById("timer");
let QuestionN = document.getElementById("number");
let startBTN = document.getElementById("startBTN");
let nextBTN = document.getElementById ("nextBTN");
let cardText = document.getElementById("card-text");
let questionNumber = document.createElement("questionNumber");
let questionText = document.createElement("questionText");
let choiceButtons = [];
let feedback = document.createElement("feedback");
let correctCount = document.createElement("correctN");
let incorrectCount = document.createElement("incorrectN");



feedback.classList.add("feedback-style");
// feedback.setAttribute("style", "feedback-style");
startBTN.addEventListener("click", startQuiz);
nextBTN.addEventListener("click", nextQuestion);


welcomeHeading.textContent = "Welcome to Code Quiz!";
welcomeNote.textContent = "In this quiz you will be given 60 seconds to answer multiple-choice questions about HTML, CSS, JS, and Web APIs. You can check your time at the righ-top corner, and the highscores at the left-top corner. Ready? Press Start button to begin. Good luck!";
welcome.appendChild(welcomeHeading);
welcomeText.appendChild(welcomeNote);


function startQuiz() {
    let welcomeCard = document.getElementById("welcome-card");
    welcomeCard.remove();
    document.querySelector(".card.hide").classList.remove('hide');    
    timerCount = 15;
    startTimer();
    showQuestion(i);
}

function startTimer (){
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent ="Time: " + timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            disableChoiceButtons();
            timeIsUp();
        }
    }, 1000);
    console.log(timerCount);
}

function reduceTime () {
    if (timerCount > 5) {
        timerCount -= 5;
    } else {
        timerCount = 0;
        timeIsUp();
    }
}

function timeIsUp () {
    alert("⌛️ Time is up!! ⌛️");
    disableChoiceButtons();
    showFinalResult();
    clearInterval(timer);
    // return startTimer;
}
// To show question number, their contents (question and its choices):
function showQuestion(i) {
    let currentQuestion = allQuestions[i];
    questionNumber.textContent = "Question " + (i + 1) + ":";
    questionText.textContent = allQuestions[i].question;
    QuestionN.appendChild(questionNumber);
    cardText.appendChild(questionText);

    for (let j = 0; j < currentQuestion.choices.length; j++) {
        let choiceBTN = document.createElement("choiceBTN");
        choiceBTN.classList.add("choiceBTN");
        choiceBTN.textContent = currentQuestion.choices[j];
        cardText.appendChild(choiceBTN);
        choiceButtons.push(choiceBTN);
        choiceBTN.addEventListener("click", checkAnswer);
    }
}

// To navigate to the next question:
function nextQuestion () {
    if (i < 9){
        i++;
        while (cardText.firstChild) {
            cardText.removeChild(cardText.firstChild);
        }
        console.log("❓: " + i);
        console.log("✅: " + correctAnswers);
        console.log("❌: " + incorrectAnswers);
        showQuestion(i);
    } else {
        questionNumber.textContent = "Time is up!";
        showFinalResult()
    }
}
// To disable the eventlistener after the first choice:
function disableChoiceButtons(){
    choiceButtons.forEach(button => {
        button.removeEventListener("click", checkAnswer);
    });
}

// To check the accuracy of the answer and give feedback:
function checkAnswer(event) {
    console.log(event.target);
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

// To show final result after qusetions are finished or when time is up:
function showFinalResult(){
    while (cardText.firstChild) { 
        cardText.removeChild(cardText.firstChild);
    };
    nextBTN.style.display = "none";
    questionNumber.textContent = " "
    correctCount.textContent = "Correct: " + correctAnswers;
    questionNumber.appendChild(correctCount);

    let form = document.createElement("form");
    let textInput = document.createElement("input");
    let label = document.createElement("label");
    textInput.type = "text";
    textInput.name = "initials";
    label.textContent = "Please enter your initials: ";
    textInput.placeholder = "Your initials here...";

    let submitBTN = document.createElement("input");
    submitBTN.type = "submit";
    submitBTN.setAttribute("style", "#submitBTN")
    submitBTN.textContent = "Submit";

    form.appendChild(label);
    form.appendChild(textInput);
    form.appendChild(submitBTN);
    cardText.appendChild(form);

    submitBTN.addEventListener("click", function(event) {
        event.preventDefault();
        let initials = textInput.value;
        console.log(initials);

        let userData = {
            initials: initials,
            correctAnswers: correctAnswers
        };
        highScores.push(userData);
        
        localStorage.setItem("highScoresList", JSON.stringify(highScores));

        displayHighScores();

        document.getElementById("highScoresList").classList.remove("hide");

        return timeIsUp;
    
});
}


function displayHighScores(){
    questionNumber.textContent = "Thank You!"
    let highScoresList = document.getElementById("highScoresList");
    highScoresList.innerHTML = "";

    // Retrieve high scores from local storage
    let storedHighScores = JSON.parse(localStorage.getItem("highScoresList")) || [];

    // Sort high scores by correctAnswers in descending order
    storedHighScores.sort((a, b) => b.correctAnswers - a.correctAnswers);

    // Display high scores in the list
    storedHighScores.forEach(score => {
        let listItem = document.createElement("li");
        listItem.textContent = `${score.initials}: ${score.correctAnswers} correct answers`;
        highScoresList.appendChild(listItem);
    });

}


// submitBTN.addEventListener("click", function (event) {
//     event.preventDefault();
//     let initials = textInput.value.trim();

//     if (initials !== "") {
//         // Store the current user's data
//         let userData = {
//             initials: initials,
//             correctAnswers: correctAnswers
//         };

//         // Retrieve existing high scores or initialize an empty array
//         let storedHighScores = JSON.parse(localStorage.getItem("highScores")) || [];

//         // Add the current user's data to the array
//         storedHighScores.push(userData);

//         // Save all high scores to local storage
//         localStorage.setItem("highScores", JSON.stringify(storedHighScores));

//         // Display high scores dynamically
//         displayHighScores();

//         // Show the high scores section
//         document.getElementById("highScores").classList.remove("hide");
//     } else {
//         alert("Please enter your initials before submitting.");
//     }
// });