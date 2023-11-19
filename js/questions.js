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

]

var currentQuestionNumber = 0

function getRandom(arr){
    var n = Math.floor(Math.random() * arr.length);
    return arr[n];
  }

//passwordArray.sort((a,b) => Math.random() - 0.5); 

function showQuestions(){
    document.getElementById("start-screen").style.display = 'none';
    document.getElementById("questionsContainer").style.display = 'block';
}
console.log(questionBank.length)
function loopQuestions(){
    console.log(currentQuestionNumber)
    
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
    else{ //Hide Questions and show Endscreen with scores
        document.getElementById("questionContainer").style.display = 'none';
        document.getElementById("end-screen").style.display = 'block';
    }
    
}

function checkAnswer(getButtonID){
    
    if (document.getElementById(getButtonID).textContent == questionBank[currentQuestionNumber].CorrectAnswer){
        document.getElementById(getButtonID).style.backgroundColor = "green";
    }
    else {
        document.getElementById(getButtonID).style.backgroundColor = "red";
    }
    currentQuestionNumber++;
    setTimeout(loopQuestions, 300);
    
}