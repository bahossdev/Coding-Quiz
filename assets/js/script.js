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
// TODO: Type Question number
// TODO: function to receive the answer
// TODO: function to check the accuracy and get feedback
// TODO: function for clicking next
// TODO: function to store scores
// TODO: function to show final result
// TODO: function to get initial
// TODO: function 



var i = 0; 
var correctAnswers = 0;
var incorrectAnswers = 0;
var timer;
var timerCount;

var QN = document.getElementById("number");
var questionNumber = document.createElement("questionNumber");
var nextBTN = document.getElementById ("nextBTN");
var question = document.getElementById("question");
var questionText = document.createElement("questionText");
var choiceButtons = [];
var feedback = document.createElement("feedback");
feedback.classList.add("feedback-style");
// feedback.setAttribute("style", "feedback-style");

//  To show question number, their contents (question and its choices):
function showQuestion(i) {
    var currentQuestion = allQuestions[i];
    questionNumber.textContent = " " + (i + 1) + ":";
    questionText.textContent = allQuestions[i].question;
    QN.appendChild(questionNumber);
    question.appendChild(questionText);

    for (var j = 0; j < currentQuestion.choices.length; j++) {
        var choiceBTN = document.createElement("choiceBTN");
        choiceBTN.classList.add("choiceBTN");
        choiceBTN.textContent = currentQuestion.choices[j];
        question.appendChild(choiceBTN);
        choiceButtons.push(choiceBTN);
        choiceBTN.addEventListener("click", checkAnswer);
    }
}
showQuestion(i);


// add a flag to check whether the user has already made a choice for the current question. If a choice has been made, it disables the event listeners for the choice buttons until the next question.

function disableChoiceButtons(){
    choiceButtons.forEach(button => {
        button.removeEventListener("click", checkAnswer);
    });
}

function checkAnswer(event) {
    console.log(event.target);
    disableChoiceButtons();

    if (event.target.textContent === allQuestions[i].correct) {
        event.target.classList.add('correctGreen');
        feedback.textContent = "correct! 🤩";
        question.appendChild(feedback);
        correctAnswers++;
    } else{
        event.target.classList.add('incorrectRed');
        feedback.textContent = "incorrect! 🫠 The correct answer is: " + allQuestions[i].correct;
        question.appendChild(feedback);
        incorrectAnswers++;
    };


};

nextBTN.addEventListener("click", nextQuestion);

function nextQuestion () {
i++;
while (question.firstChild) {
    question.removeChild(question.firstChild);
}
console.log("❓: " + i);
console.log("✅: " + correctAnswers);
console.log("❌: " + incorrectAnswers);
showQuestion(i);
}
