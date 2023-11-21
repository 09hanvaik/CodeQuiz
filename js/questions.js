var questionBank = [
    {
        Question: "What does CSS stand for?",
        Answers: ["Cascading Style Sheets", "Coloured Special Sheets", "Colour and Style Sheet", "Counter Strike Solutions"],
        CorrectAnswer: "Cascading Style Sheets"
    },
    {
        Question: "How can we change the background color of an element in CSS?",
        Answers: [".colour = yellow", "#colour", "colour", "background colour"],
        CorrectAnswer: "background colour"
    },
    {
        Question: "What are the valid ways CSS can be written in?",
        Answers: ["Inline", "External", "Internal CSS", "All of the above"],
        CorrectAnswer: "All of the above"
    },
    {
        Question: "What type of CSS is generally recommended for designing large web pages?",
        Answers: ["Inline", "External", "Internal CSS", "All of the above"],
        CorrectAnswer: "External"
    },
    {
        Question: "Can negative calues be allowed in padding property?",
        Answers: ["Yes", "No", "Depends on property", "Only inline"],
        CorrectAnswer: "No"
    }

];

var currentQuestionNumber = 0;
var timer 
var correctSound = new Audio("assets/sfx/correct.wav");
var incorrectSound = new Audio("assets/sfx/incorrect.wav")


function startTimer(){
    timer = setInterval(function () {document.getElementById("time").innerHTML -= 1}, 1000);;
}


function getRandom(arr){
    var n = Math.floor(Math.random() * arr.length);
    return arr[n];
  }

//passwordArray.sort((a,b) => Math.random() - 0.5); 

function showQuestions(){
    document.getElementById("start-screen").style.display = 'none';
    document.getElementById("questionsContainer").style.display = 'block';
}

function loopQuestions(){
    
    //Reset the colour values after checking answer
    document.getElementById("optionOne").style.backgroundColor = "#563d7c";
    document.getElementById("optionTwo").style.backgroundColor = "#563d7c";
    document.getElementById("optionThree").style.backgroundColor = "#563d7c";
    document.getElementById("optionFour").style.backgroundColor = "#563d7c";

    //Set the questions in the HTML placeholders
    if (currentQuestionNumber<questionBank.length){
        document.getElementById("question").innerHTML = questionBank[currentQuestionNumber].Question;
        document.getElementById("optionOne").innerHTML = questionBank[currentQuestionNumber].Answers[0];
        document.getElementById("optionTwo").innerHTML = questionBank[currentQuestionNumber].Answers[1];
        document.getElementById("optionThree").innerHTML = questionBank[currentQuestionNumber].Answers[2];
        document.getElementById("optionFour").innerHTML = questionBank[currentQuestionNumber].Answers[3];
    }
    
}

function checkAnswer(getButtonID){

    //if last question, then go to end score
    if (currentQuestionNumber == (questionBank.length-1)){
        clearTimeout(timer);
        showScore();
    }

    // if button is the correct answer then colour answer green and go to next question
    if (document.getElementById(getButtonID).textContent == questionBank[currentQuestionNumber].CorrectAnswer){
        document.getElementById(getButtonID).style.backgroundColor = "green";
        correctSound.play();
        currentQuestionNumber++;
        setTimeout(loopQuestions, 300);
    }
    // if button is the wrong answer then colour answer red and go to next question
    else if (document.getElementById(getButtonID).textContent != questionBank[currentQuestionNumber].CorrectAnswer){
        document.getElementById(getButtonID).style.backgroundColor = "red";
        document.getElementById("time").innerHTML -= 10;
        incorrectSound.play();
        currentQuestionNumber++;
        setTimeout(loopQuestions, 300);
    }
}
    
function showScore(){
    document.getElementById("questionsContainer").style.display = 'none';
    document.getElementById("end-screen").style.display = 'block';
    document.getElementById("final-score").innerHTML = document.getElementById("time").textContent;
}


function storeScore(){
    //Intialise empty arrays to store local storage items and new items to push into highscore.
    currentInitials = [];
    currentScores = [];

    //If both objects in storage are not null
    if (localStorage.getItem("initial") && localStorage.getItem("score")){
        //Then for each item in storage, push into above arrays as individual elements.
        for (var i = 0; i<JSON.parse(localStorage.getItem("score")).length; i++){
            currentScores.push(JSON.parse(localStorage.getItem("score"))[i]);
            currentInitials.push(JSON.parse(localStorage.getItem("initial"))[i]);
        }

    }
    //If user input is not null then...
    if (document.getElementById("initials").value){
    currentScores.push(document.getElementById("time").textContent); //push curent user score into array
    currentInitials.push(document.getElementById("initials").value); //push curent user name into array
    localStorage.setItem("score", JSON.stringify(currentScores)); //push scores array into storage
    localStorage.setItem("initial", JSON.stringify(currentInitials)); //push names array into storage
    window.location.href = "highscores.html"; //go to highscore page
    }


}
