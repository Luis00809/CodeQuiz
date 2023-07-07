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


function startquiz() {
    // event selector for clicking start button
    startButton.addEventListener("click", function(){
        // hide /or remove(?) intro rules/start button 
        introRules.setAttribute('style', "display: none");
        questionCard.setAttribute('style', "display: flex");
    })

    // now display quiz block
}

startquiz();