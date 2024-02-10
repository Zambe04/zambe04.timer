//creazione dei buttons

let buttons = document.getElementsByClassName('buttons')[0];
const newBtnLess = document.createElement('button');
const newBtnPlus = document.createElement('button')

newBtnPlus.textContent = "+";
newBtnLess.textContent = "-";
newBtnPlus.classList.add("button");
newBtnLess.classList.add("button");

buttons.appendChild(newBtnLess);
buttons.appendChild(newBtnPlus);

//creo il counter e la funzione che incrementa il timer

const number = document.createElement('div');
number.classList.add('number');
document.querySelector('.timer').appendChild(number);
let counter = 0;

//in questo modo ho una funzione più versatile

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
