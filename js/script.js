const screen = document.querySelector('.game-board')
const season = document.querySelector('.season')
const season2 = document.querySelector('.estacao')
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const score = document.querySelector('.score')
const scoree = document.querySelector('.scoree')
const message = document.querySelector('.message')
const boss = document.querySelector('.spaceship')
const ballLaser = document.querySelector('.ballLaser')
const laser = document.querySelector('.laser')
const win = document.querySelector('.win')



const jump = () => {
    const key = event.key;

    switch (key) {
        case "ArrowUp":
            mario.classList.add('jump');

            setTimeout(() => {

                mario.classList.remove('jump');

            }, 500)
        break;
        case "ArrowDown":
            mario.classList.remove('jump');
            break;
    }
}

let x = 0;
let estacao = '';


function seasonOfyear() {
    if (x > 0 && x <= 250) {
        estacao = "Verão";
        screen.style.background = 'linear-gradient(#87CEEB,#E0F6FF)';
        season.innerHTML = 'Estação:' + estacao;
    }
    else if (x > 250 && x <= 500) {
        estacao = "Outono";
        season2.style.backgroundImage = "url('https://img1.picmix.com/output/stamp/normal/1/7/2/7/1017271_51a01.gif')";
        screen.style.background = 'linear-gradient(#ffba3a, #ffffff)';
        screen.style.borderBottom = '15px solid #ff9900';
        season.innerHTML = 'Estação:' + estacao;
    }
    else if (x > 500 && x <= 750) {

        estacao = "Inverno";
        season2.style.backgroundImage = "url('https://acegif.com/wp-content/gif/snwflks-106.gif')";
        screen.style.background = 'linear-gradient(#dca2ee, #e49797, #f3eaea)';
        screen.style.borderBottom = '15px solid #00eeff';
        season.innerHTML = 'Estação:' + estacao;
    }
    else if (x > 750 && x < 900) {
        estacao = "Primavera";
        season2.style.backgroundImage = 'none';
        screen.style.background = 'linear-gradient(#87CEEB, #aff79a, #eee789)';
        screen.style.borderBottom = '15px solid #3cff00';
        season.innerHTML = 'Estação:' + estacao;
    }
    else {
        estacao = 'Boss'
        season.innerHTML = 'Estação:' + estacao
        screen.style.background = 'linear-gradient(#000000,#29144b)';
    }
}
function theBoss() {
    if (x > 900 && x < 986) {
        boss.style.animation = 'boss-animation 2s linear';
        boss.style.visibility = 'inherit';

        if (x > 920) {
            ballLaser.style.animation = 'ballLaser-animation 2s linear';
            ballLaser.style.visibility = 'inherit';

            pipe.style.animation = 'none';
            pipe.style.right = '-80px';
        }
        if (x > 945) {
            ballLaser.style.visibility = 'hidden';

            laser.style.visibility = 'inherit';
            laser.style.width = '1700px';
        }
        if (x > 965) {
            laser.style.animation = 'laser-animation 2s linear';
        }
        if (x > 967) {
            boss.style.animation = 'boss-animationPt2 2s linear';
        }
    }
    else if (x >= 1000) {
        win.innerHTML = "You win!!!";
        message.style.visibility = 'inherit'
        clearInterval(loop);
        clearInterval(pontos)
    }
    else {
        boss.style.visibility = 'hidden';

        laser.style.visibility = 'hidden';
        laser.style.width = '1px';

        pipe.style.animation = 'pipe-animation 1.5s infinite linear';

        
    }
}

const pontos = setInterval(function () {
    x++;
    score.innerHTML = 'Score:' + x;
    scoree.innerHTML = 'Score:' + x;

    seasonOfyear()
    theBoss()

}, 100);



const loop = setInterval(() => {

    //console.log('loop')

    const laserPosition = laser.offsetLeft;
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    //console.log(pipePosition)
    //console.log(laserPosition)
    //console.log(marioPosition)

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
    // lógica meio burra 
    if (laserPosition < 0 && marioPosition > 140) {

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

//VITORIA
//TABELA
//GUARDAR SCORES
//MUSICA
//AUMENTAR VELOCIDADE