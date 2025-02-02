const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const audioChpok = document.querySelector('#audioChpok');
const hard = document.querySelector('#hard');
const next = document.querySelector('#next');
const reloadGame = document.querySelector('#reloadGame');



/* Исчезание по клику */

one.addEventListener('click', startOne)
function startOne () {
    audioChpok.play();
    one.style.opacity = '0';
}

two.addEventListener('click', startTwo)
function startTwo () {
    audioChpok.play();
    two.style.opacity = '0';
}

three.addEventListener('click', startThree)
function startThree () {
    audioChpok.play()
    three.style.opacity = '0';
}

four.addEventListener('click', startFour) 
function startFour() {
    audioChpok.play();
    four.style.opacity = '0';
}

next.addEventListener('click', newElement);


const oneSyllable = document.querySelector('#oneSyllable');
const twoSyllable = document.querySelector('#twoSyllable');
const threeSyllable = document.querySelector('#threeSyllable');
const fourSyllable = document.querySelector('#fourSyllable');

/*Смена картинок*/

function newElement () {
    one.style.opacity = '1';
    two.style.opacity = '1';
    three.style.opacity = '1';
    four.style.opacity = '1';
oneSyllable.setAttribute ('src', 'img/syllables/2.png');
twoSyllable.setAttribute ('src', 'img/syllables/4.png');
threeSyllable.setAttribute ('src', 'img/syllables/1.png');
fourSyllable.setAttribute ('src', 'img/syllables/3.png');
next.addEventListener('click', nextElement);
}


function nextElement () {
    one.style.opacity = '1';
    two.style.opacity = '1';
    three.style.opacity = '1';
    four.style.opacity = '1';
oneSyllable.setAttribute ('src', 'img/syllables/3.png');
twoSyllable.setAttribute ('src', 'img/syllables/1.png');
threeSyllable.setAttribute ('src', 'img/syllables/4.png');
fourSyllable.setAttribute ('src', 'img/syllables/2.png');
next.addEventListener('click', next1Element);
}

function next1Element () {
    one.style.opacity = '1';
    two.style.opacity = '1';
    three.style.opacity = '1';
    four.style.opacity = '1';
oneSyllable.setAttribute ('src', 'img/syllables/4.png');
twoSyllable.setAttribute ('src', 'img/syllables/3.png');
threeSyllable.setAttribute ('src', 'img/syllables/2.png');
fourSyllable.setAttribute ('src', 'img/syllables/1.png');
next.addEventListener('click', next2Element);
}

function next2Element () {
    one.style.opacity = '1';
    two.style.opacity = '1';
    three.style.opacity = '1';
    four.style.opacity = '1';
oneSyllable.setAttribute ('src', 'img/syllables/3.png');
twoSyllable.setAttribute ('src', 'img/syllables/4.png');
threeSyllable.setAttribute ('src', 'img/syllables/1.png');
fourSyllable.setAttribute ('src', 'img/syllables/2.png');
next.addEventListener('click', next3Element);
}

function next3Element () {
    one.style.opacity = '1';
    two.style.opacity = '1';
    three.style.opacity = '1';
    four.style.opacity = '1';
oneSyllable.setAttribute ('src', 'img/syllables/4.png');
twoSyllable.setAttribute ('src', 'img/syllables/2.png');
threeSyllable.setAttribute ('src', 'img/syllables/3.png');
fourSyllable.setAttribute ('src', 'img/syllables/1.png');
next.addEventListener('click', next4Element);
}

function next4Element () {
    one.style.opacity = '1';
    two.style.opacity = '1';
    three.style.opacity = '1';
    four.style.opacity = '1';
oneSyllable.setAttribute ('src', 'img/syllables/2.png');
twoSyllable.setAttribute ('src', 'img/syllables/1.png');
threeSyllable.setAttribute ('src', 'img/syllables/4.png');
fourSyllable.setAttribute ('src', 'img/syllables/3.png');
next.addEventListener('click', next5Element);
}

function next5Element () {
    one.style.opacity = '1';
    two.style.opacity = '1';
    three.style.opacity = '1';
    four.style.opacity = '1';
oneSyllable.setAttribute ('src', 'img/syllables/1.png');
twoSyllable.setAttribute ('src', 'img/syllables/4.png');
threeSyllable.setAttribute ('src', 'img/syllables/3.png');
fourSyllable.setAttribute ('src', 'img/syllables/2.png');
next.addEventListener('click', next6Element);
}

function next6Element () {
    location.reload();
}






