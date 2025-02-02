const open = document.querySelector('#open');
const answer = document.querySelector('#answer');

open.addEventListener('click', () => {
    answer.classList.toggle('open');
    open.classList.toggle('arrow');
});

const openS = document.querySelector('#openS');
const answerS = document.querySelector('#answerS');

openS.addEventListener('click', () => {
    answerS.classList.toggle('open');
    openS.classList.toggle('arrow');
});

const openT = document.querySelector('#openT');
const answerT = document.querySelector('#answerT');

openT.addEventListener('click', () => {
    answerT.classList.toggle('open');
    openT.classList.toggle('arrow');
});

const openF = document.querySelector('#openF');
const answerF = document.querySelector('#answerF');

openF.addEventListener('click', () => {
    answerF.classList.toggle('open');
    openF.classList.toggle('arrow');
});