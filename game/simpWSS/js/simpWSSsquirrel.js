const characterOne = document.querySelector('#characterOne');
const characterTwo = document.querySelector('#characterTwo');
const characterThree = document.querySelector('#characterThree');
const characterFour = document.querySelector('#characterFour');
const audioChpok = document.querySelector('#audioChpok');


characterOne.addEventListener('click', () => {
    audioChpok.play();
    characterOne.setAttribute ('src', 'img/figuresJs/beads.png');
})

characterTwo.addEventListener('click', () => {
    audioChpok.play();
    characterTwo.setAttribute ('src', 'img/figuresJs/foxDonuts.png');
})

characterThree.addEventListener('click', () => {
    audioChpok.play();
    characterThree.setAttribute ('src', 'img/figuresJs/catSH.png');
})

characterFour.addEventListener('click', () => {
    audioChpok.play();
    characterFour.setAttribute ('src', 'img/figuresJs/notes.png');
})