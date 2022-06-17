const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const score = document.querySelector('.score')


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500)
}

let x = 0;

const pontos = setInterval(function () {
    x++;
    score.innerHTML = 'Score:'+ x;
    
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
        
        clearInterval(loop);
        clearInterval(pontos)
    }

}, 10);

document.addEventListener('keydown', jump);

