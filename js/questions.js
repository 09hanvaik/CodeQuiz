var questionBank = [
    {
        Question: "What does CSS stand for?",
        Answers: ["Cascading Style Sheets", "Coloured Special Sheets", "Colour and Style Sheet", "Counter Strike Solutions"]
    },
    {
        Question: "How can we change the background color of an element in CSS?",
        Answers: [".colour = yellow", "#colour", "colour", "background colour"]
    }

]

var startButton = document.querySelector("#start-screen")
var questions = document.querySelector('#questionsContainer')



function showQuestions(){
startButton.style.display = 'none'
}