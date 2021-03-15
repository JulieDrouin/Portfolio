
const info = document.getElementById('animText');
const text = "RECHERCHE CONTRAT DE PROFESSIONNALISATION";
const like = "Live, Work, Create"
let index = 0;

const randomSpeed = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const play = () => {
    info.innerHTML = text.slice(0, index);
    index++;
    if(index > text.length) {
        index = 0;

    }
    clearInterval(timer);
    timer = setInterval(play, randomSpeed(50, 300));
}


let timer = setInterval(play, 300);
// let timer2 = setInterval(play2, 300);d