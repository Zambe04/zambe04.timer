//creazione dei buttons
let buttons = document.getElementsByClassName('buttons')[0];

function createElement(tagName, textContent, className){

    const newElement = document.createElement(tagName);
    newElement.textContent = textContent;
    newElement.classList.add(className);
    buttons.appendChild(newElement);
    return newElement;
};

const btnLess = createElement("button", "-", "button");
const btnPlus = createElement("button", "+", "button");

//creo il counter e la funzione che incrementa il timer

const number = createElement("div", "", "number");
document.querySelector('.timer').appendChild(number);
let counter = 0;

function timerIncrease(amount){
    counter += amount;
};

document.addEventListener("click", function(event){
    let target = event.target;

    if(event.target.textContent === "+"){
        timerIncrease(1);
    }
    if(event.target.textContent === "-"){
        timerIncrease(-1);
    }
    number.textContent = counter;
});

setInterval(function(){

    number.textContent = counter;
    timerIncrease(1);
    
}, 1000);
