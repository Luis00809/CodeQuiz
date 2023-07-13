
// let scoreDisplay = document.querySelector('#scoreDisplay');
let urlParams = new URLSearchParams(window.location.search);
let score = urlParams.get('score');
// scoreDisplay.textContent = score;
let initlaButton = document.querySelector('#initialBtn');
let initialSelecor = document.querySelector('#displayInitial');

let initial = localStorage.getItem('initial');

initlaButton.addEventListener('click', function(event){
    event.preventDefault;
    let initial = document.querySelector('#initial').value;
    localStorage.setItem('initial', initial);
})

console.log(score + ' hello');


let displayScore = document.querySelector('#displayScore');

displayScore.textContent = score + ' seconds left!';

initialSelecor.textContent = initial + ' = '+ score;

// function for adding a new display of score and initial