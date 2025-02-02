const next = document.querySelector('#next');
const album = document.querySelector('#album');
const instr = document.querySelector('#instr');
const header = document.querySelector('#header');
const final = document.querySelector('#final');
const reloadGame = document.querySelector('#reloadGame');
const audioChpok = document.querySelector('#audioChpok');
const audioSalut = document.querySelector('#audioSalut');
const characterOne = document.querySelector('#characterOne');
const characterTwo = document.querySelector('#characterTwo');
const characterThree = document.querySelector('#characterThree');
const characterFour = document.querySelector('#characterFour');
const characterFive = document.querySelector('#characterFive');
const characterSix = document.querySelector('#characterSix');
const characterSeven = document.querySelector('#characterSeven');
const characterEight = document.querySelector('#characterEight');
const home = document.querySelector('#home');

next.addEventListener('click', manulAlbum);

function manulAlbum () {
    audioSalut.play();
    album.style.display = 'none';
    final.style.display = 'flex';
    reloadGame.style.display = 'block';
    home.style.display = 'block';
    next.style.display = 'none';
    instr.style.display = 'none';
}

characterOne.addEventListener('click', () =>{
    audioChpok.play();
    characterOne.classList.toggle('anim-album');
    characterOne.setAttribute('src', 'img/figuresJs/wow.png')
    setTimeout(function() {
        characterOne.setAttribute('src', 'img/figuresJs/album.png')
    }, 1000);
} );

characterTwo.addEventListener('click', () =>{
    audioChpok.play();
    characterTwo.classList.toggle('anim-album');
    characterTwo.setAttribute('src', 'img/figuresJs/wow.png')
    setTimeout(function() {
        characterTwo.setAttribute('src', 'img/figuresJs/album.png')
    }, 1000);
} );

characterThree.addEventListener('click', () =>{
    audioChpok.play();
    characterThree.classList.toggle('anim-album');
    characterThree.setAttribute('src', 'img/figuresJs/wow.png')
    setTimeout(function() {
        characterThree.setAttribute('src', 'img/figuresJs/album.png')
    }, 1000);
} );

characterFour.addEventListener('click', () =>{
    audioChpok.play();
    characterFour.classList.toggle('anim-album');
    characterFour.setAttribute('src', 'img/figuresJs/wow.png')
    setTimeout(function() {
        characterFour.setAttribute('src', 'img/figuresJs/album.png')
    }, 1000);
} );

characterFive.addEventListener('click', () =>{
    audioChpok.play();
    characterFive.classList.toggle('anim-album');
    characterFive.setAttribute('src', 'img/figuresJs/wow.png')
    setTimeout(function() {
        characterFive.setAttribute('src', 'img/figuresJs/album.png')
    }, 1000);
} );

characterSix.addEventListener('click', () =>{
    audioChpok.play();
    characterSix.classList.toggle('anim-album');
    characterSix.setAttribute('src', 'img/figuresJs/wow.png')
    setTimeout(function() {
        characterSix.setAttribute('src', 'img/figuresJs/album.png')
    }, 1000);
} );

characterSeven.addEventListener('click', () =>{
    audioChpok.play();
    characterSeven.classList.toggle('anim-album');
    characterSeven.setAttribute('src', 'img/figuresJs/wow.png')
    setTimeout(function() {
        characterSeven.setAttribute('src', 'img/figuresJs/album.png')
    }, 1000);
} );

characterEight.addEventListener('click', () =>{
    audioChpok.play();
    characterEight.classList.toggle('anim-album');
    characterEight.setAttribute('src', 'img/figuresJs/wow.png')
    setTimeout(function() {
        characterEight.setAttribute('src', 'img/figuresJs/album.png')
    }, 1000);
} );

