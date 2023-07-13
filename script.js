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

let score = localStorage.getItem('score');
timeDisplay.textContent = score;

let question1 = {
    question: 'What is css?',
    choices: ['something','cool', 'styling', 'answer'],
    answer: 'styling'
};

let question2 = {
    question: 'What is HTML?',
    choices: ['different', 'djdjd','markup', 'answer'],
    answer: 'markup'
};

let question3 = {
    question: 'What is JS?',
    choices: ['APP','logic','item', 'answer'],
    answer: 'logic'
};

let question4 = {
    question: 'What is abc?',
    choices: ['letters','random','item','something'],
    answer: 'letters'
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
                } else {
                    endQuiz();
                }
            } else {
                secondsLeft -= 5;
            }
        })
    }

    function endQuiz() {
        clearInterval(timerInterval);
        localStorage.setItem('score', score);
        window.location.href = "highscore.html?score=" + score;
        // Add any additional logic for ending the quiz
    }
}

let timerInterval;

function timer() {
    timerInterval = setInterval(function(){
        secondsLeft--;
        timeDisplay.textContent = 'Time Left: ' + secondsLeft;
        score = secondsLeft;
        
        if(secondsLeft <= 0) {
            timeDisplay.textContent = 'Time Left: 0';
            clearInterval(timerInterval);
            localStorage.setItem('score', score);
            endQuiz();
        }
    }, 1000);
}

console.log(score);

startquiz();


