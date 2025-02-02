const characterOne = document.querySelector('#characterOne');
const characterTwo = document.querySelector('#characterTwo');
const characterThree = document.querySelector('#characterThree');
const characterFour = document.querySelector('#characterFour');
const audioChpok = document.querySelector('#audioChpok');


characterOne.addEventListener('click', () => {
    audioChpok.play();
    characterOne.setAttribute ('src', 'img/figuresJs/fly.png');
})

characterTwo.addEventListener('click', () => {
    audioChpok.play();
    characterTwo.setAttribute ('src', 'img/figuresJs/owl.png');
})

characterThree.addEventListener('click', () => {
    audioChpok.play();
    characterThree.setAttribute ('src', 'img/figuresJs/perfume.png');
})

characterFour.addEventListener('click', () => {
    audioChpok.play();
    characterFour.setAttribute ('src', 'img/figuresJs/sled.png');
})