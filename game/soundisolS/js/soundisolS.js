const person = document.querySelector('#person');
const seed = document.querySelector('#seed');
const leaf = document.querySelector('#leaf');
const text = document.querySelector('#text');
const textBlock = document.querySelector('#textBlock');
const audioLeaf = document.querySelector('#audioLeaf');
const btnNext = document.querySelector('#btnNext');


leaf.addEventListener('click', firstStep);
function firstStep() {
    audioLeaf.play();
    leaf.style.display = 'none';
    text.style.display = 'block';
    textBlock.classList.add('shine');
    btnNext.style.display = 'block';
}
