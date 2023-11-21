# CodeQuiz
# Hansal's Portfolio

## Description
This project mainly uses Javascript alongside HTML and CSS to present the user with a multiple choice quiz. 
It evaluates all the answers (that give audio feedback when clicked!) and stores the timer that is counting down as a score in the local storage.

* Please view the 'Credits' section below for the sources I used to implement my ideas.

## User Story
This section is taken directly from EdX FE Bootcamp challenge's description:

AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers


## Acceptance Criteria

This section is taken directly from EdX FE Bootcamp challenge's description:

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

## Link to published site
https://09hanvaik.github.io/HansalsPortfolio/

## Screenshot of site
![Screenshot of my site]()

## Installation

No installation steps required.

## Credits

I have used the following sites in my project as either and inspiration or to overcome a hurdle:
* MCQs content taken from: https://www.interviewbit.com/css-mcq/
* Quiz tutorial: https://simplestepscode.com/javascript-quiz-tutorial/
* How to access text/innerHTML content: https://www.w3schools.com/jsref/prop_node_textcontent.asp
* Timeout function: https://www.w3schools.com/js/js_timing.asp
* Get current id: https://stackoverflow.com/questions/4825295/onclick-to-get-the-id-of-the-clicked-button
* How to not overwrite local storage: https://stackoverflow.com/questions/19635077/adding-objects-to-array-in-localstorage

## Pseudo code I wrote to help me:

* using js, add first set of questions to questions div
* if wrong id is clicked, then minus timer
* if right id is clicked then present next set of questions
* at end of questions, add score to local storage


