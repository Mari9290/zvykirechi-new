const sun = document.querySelector('#sun');
const foxWow = document.querySelector('#foxWow');
const sunflover = document.querySelector('#sunflover');
const textThe = document.querySelector('#textThe');
const textMain = document.querySelector('#textMain');
const textOne = document.querySelector('#textOne');
const play = document.querySelector('#play');
const btn = document.querySelector('#btn');
const sprout = document.querySelector('#sprout');
const person = document.querySelector('#person');


play.addEventListener('click', firstStep);
function firstStep() {
    play.style.display = 'none';
    textMain.style.display = 'none';
    textOne.style.display = 'none';
    sun.classList.add('sun-move');
    sunflover.classList.add('rise');
    foxWow.classList.add('rise');
    btn.style.display = 'block';
    setTimeout(function() {
        sprout.style.display = 'none';
        person.style.display = 'none';
        textMain.style.display = 'block';
        textThe.style.display = 'block';
        textMain.classList.add('shine');
        sun.style.display = 'none';
    }, 5000);
}
