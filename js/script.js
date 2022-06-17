const screen = document.querySelector('.game-board')
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const score = document.querySelector('.score')
const scoree = document.querySelector('.scoree')
const message = document.querySelector('.message')


const jump = () => {
    const key = event.key;

    switch(key){
        case "ArrowUp":
            mario.classList.add('jump');

            setTimeout(() => {
        
                mario.classList.remove('jump');
        
            }, 500)        
    }
}

let x = 0;

const pontos = setInterval(function () {
    x++;
    score.innerHTML = 'Score:'+ x;
    scoree.innerHTML = 'Score:'+ x;
    
    if(x >= 500 && x <= 600){
        screen.style.background = 'linear-gradient(#000000,#29144b)'
    
    }
    else{
        screen.style.background = 'linear-gradient(#87CEEB,#E0F6FF)'
    }

}, 100);


const loop = setInterval(() => {



    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(pipePosition)

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        score.style.animation = 'none';
        score.style.color = 'red';

        message.style.visibility = 'inherit'

        clearInterval(loop);
        clearInterval(pontos)
    }
    

}, 10);

document.addEventListener('keydown', jump);


