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
    localStorage.setItem("score", document.getElementById("time").textContent);
    localStorage.setItem("initial", document.getElementById("initials").value);
    window.location.href = "highscores.html";
    highScoreLineValue = localStorage.getItem("intial");
    highScoreLineList = document.createElement('li');
    highScoreLineList.appendChild(document.createTextNode(highScoreLineValue));
    document.getElementById("highscores").appendChild(highScoreLineList);


}
