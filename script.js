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
    choice1: ['something','cool', 'item', 'answer'],
    answer: 'item'
    
};

let question2 = {
    question: 'What is HTML?',
    choice1: ['different', 'djdjd','markup', 'answer'],
    answer: 'different'

};

let question3 = {
    question: 'What is JS?',
    choice1: ['APP','cool','item', 'answer'],
    answer: 'cool'

};


let question4 = {
    question: 'What is abc?',
    choice1: ['letters','random','item','answer'],
    answer: 'answer'
};

let questionOptions = [question1, question2, question3, question4];
console.log(questionOptions);


// questionOptions.forEach((question, index) => {
//     let questionDisplay = document.createElement('p'); 
//     questionDisplay.classList.add('card');
//     let card = document.querySelector('.card');
//     questionDisplay.textContent = questionOptions.question;
//     card.appendChild(questionDisplay); 

//     let button = document.createElement('button');
//     button.setAttribute('type', 'button');
//     button.setAttribute('id', 'choice' + (choiceIndex + 1));
//     let correctChoice = choice === question.answer;
//     if(correctChoice){
//         button.setAttribute('data-choice', 'correct');
//     } else {
//         button.setAttribute('data-choice', 'wrong');
//     }
//     button.textContent = choice;
//     card.appendChild(button);
// })

function startquiz() {
    // event selector for clicking start button
    startButton.addEventListener("click", function(){
        introRules.setAttribute('style', "display: none");
        questionCard.setAttribute('style', "display: flex");
        startingQuestion.textContent = question1.question;
        startchoice1.textContent = question1.choice1[0];
        startchoice2.textContent = question1.choice1[1];
        startchoice3.textContent = question1.choice1[2];
        startchoice4.textContent = question1.choice1[3];
        timer();

    })


}


function switchQuestions() {
    answerChoice.addEventListener('click', function(event) {
        let element = event.target;
    if(element.dataset.choice === 'correct'){
        switchToQuetion2();
        // switchToQuetion4();

    } else if(element.dataset.choice === 'wrong') {
        secondsLeft -= 5;
    }



})
}



startquiz();
switchQuestions();


function timer() {
    let timerInterval = setInterval(function(){
    secondsLeft--;
    timeDisplay.textContent = 'Time Left: ' + secondsLeft;

    if(secondsLeft === 0) {
        clearInterval(timerInterval);
    } 

    },1000);
}

function switchToQuetion2() {
    startingQuestion.textContent = question2.question;
        startchoice1.textContent = question2.choice1[0];
        startchoice2.textContent = question2.choice1[1];
        startchoice3.textContent = question2.choice1[2];
        startchoice4.textContent = question2.choice1[3];
}

function switchToQuetion3() {
    startingQuestion.textContent = question3.question;
        startchoice1.textContent = question3.choice1[0];
        startchoice2.textContent = question3.choice1[1];
        startchoice3.textContent = question3.choice1[2];
        startchoice4.textContent = question3.choice1[3];
}

function switchToQuetion4() {
    startingQuestion.textContent = question4.question;
        startchoice1.textContent = question4.choice1[0];
        startchoice2.textContent = question4.choice1[1];
        startchoice3.textContent = question4.choice1[2];
        startchoice4.textContent = question4.choice1[3];
}