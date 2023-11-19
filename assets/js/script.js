// Define arrays including questions and choices:

let questions = [{ 
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
        corect: 'document.getElementById("myElement")'
    }, 
    { 
        question: "How would you set the 'src' attribute of an image element with the id 'myImage' to 'image.jpg' using JavaScript?",
        choices: ['setAttr("myImage", "src", "image.jpg")', 'document.getElementById("myImage").setAttribute("src", "image.jpg")', 'setAttribute("src", "image.jpg")', 'document.getAttribute("src", "image.jpg")'],
        correct: 'document.getElementById("myImage").setAttribute("src", "image.jpg")'
    }
]

function {

}

var questionText = document.getElementById("question");
var choiceText = document.getElementById("choice");
questionText.setAttribute("value", )