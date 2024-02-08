let counter = 0;

setInterval(function(){
    const btnplus = document.querySelector('.plus');
    const btnless = document.querySelector('.less');
    const number = document.querySelector('.number');

    btnplus.onclick = function(){
        counter += 1;
        number.textContent = counter;
    };

    btnless.onclick = function(){
        counter -= 1;
        number.textContent = counter;
    };

    counter++;
    number.textContent = counter;
}, 1000)