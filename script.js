// start with the start screen without displaying question & answer choices

// on start screen display the rules with a start button

// once start button is cliked, hide that original display

// create time interval function

// display question with answer choices 
    // 1. create a function to display question when "start" button is clicked
    // 2. fucntion for overriding question text
    // 3. function for overriding answer choices
    // 4.event operator for right and wrong answer choices

// event operator for once a selection is made the next question appears
 
let startButton = document.querySelector("#start");
let introRules = document.querySelector('.intro');
let questionCard = document.querySelector(".hide");

let answerChoice = document.querySelector('.container');
console.log(answerChoice);

let startingQuestion = document.querySelector('.question');
let startchoice1 = document.querySelector('#choice1');
let startchoice2 = document.querySelector('#choice2');
let startchoice3 = document.querySelector('#choice3');
let startchoice4 = document.querySelector('#choice4');
let secondsLeft = 20;
let timeDisplay = document.querySelector('.timer');


let question1 = {
    question: 'What is css?',
    choices: ['something','cool', 'item', 'answer'],
    answer: 'item'
    
};

let question2 = {
    question: 'What is HTML?',
    choices: ['different', 'djdjd','markup', 'answer'],
    answer: 'different'

};

let question3 = {
    question: 'What is JS?',
    choices: ['APP','cool','item', 'answer'],
    answer: 'cool'

};


let question4 = {
    question: 'What is abc?',
    choices: ['letters','random','item','answer'],
    answer: 'answer'
};

let questionOptions = [question1, question2, question3, question4];
console.log(questionOptions);




function startquiz() {
    let currentQuestionIndex = 0;

    startButton.addEventListener("click", function(){
        introRules.setAttribute('style', "display: none");
        questionCard.setAttribute('style', "display: flex");
        showQuestion(currentQuestionIndex);
        switchQuestions();
        timer();
    })

    function showQuestion (index) {
        let question = questionOptions[index];
        startingQuestion.textContent = question.question;
            startchoice1.textContent = question.choices[0];
            startchoice2.textContent = question.choices[1];
            startchoice3.textContent = question.choices[2];
            startchoice4.textContent = question.choices[3];
    }
    console.log(startingQuestion.textContent);

    function switchQuestions() {
        answerChoice.addEventListener('click', function(event) {
            let element = event.target;
        if(element.textContent === questionOptions[currentQuestionIndex].answer){
            currentQuestionIndex++;
            if(currentQuestionIndex < questionOptions.length) {
                showQuestion(currentQuestionIndex);
            }

        } else if(element.textContent !== questionOptions[currentQuestionIndex].answer) {
            secondsLeft -= 5;
        }
    })
    }
}

function timer() {
    let timerInterval = setInterval(function(){
    secondsLeft--;
    timeDisplay.textContent = 'Time Left: ' + secondsLeft;

    if(secondsLeft <= 0) {
        timeDisplay.textContent = 'Time Left: 0';
        clearInterval(timerInterval);
    } 

    },1000);
}


startquiz();
