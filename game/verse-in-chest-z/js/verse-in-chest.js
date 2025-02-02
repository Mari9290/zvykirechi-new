const scroll = document.querySelector('#scroll');
const chest = document.querySelector('#chest');
const person = document.querySelector('#person');
const chestOpenOne = document.querySelector('#chestOpenOne');
const chestOpenTwo = document.querySelector('#chestOpenTwo');
const chestOpenThree = document.querySelector('#chestOpenThree');
const chestOpenFour = document.querySelector('#chestOpenFour');
const chestOpenFive = document.querySelector('#chestOpenFive');
const chestOpenSix = document.querySelector('#chestOpenSix');
const chestOpenSeven = document.querySelector('#chestOpenSeven');
const figureChestOpen = document.querySelector('.content__figure-chest-open');
const figureChest = document.querySelector('.content__figure-chest');
const figureScroll = document.querySelector('.content__figure-scroll');
const audioBum = document.querySelector('#audioBum');
const audioMon = document.querySelector('#audioMon');

chest.addEventListener('click', startGame);

function startGame (){
    figureChest.style.display = 'none';
    figureChestOpen.style.display = 'block';
    figureScroll.classList.add("content__figure-scroll-opacity");
    audioBum.play();
};

chestOpenOne.addEventListener('click', nextChest);

function nextChest () {
    audioBum.play();
    chestOpenOne.style.display = 'none'
    chestOpenTwo.style.display = 'block'
    scroll.setAttribute('src', 'img/content/2.svg');
    figureScroll.classList.add("content__figure-scroll-anim");
    chestOpenTwo.addEventListener('click', nextChestTwo);
};

function nextChestTwo () {
    audioBum.play();
    chestOpenTwo.style.display = 'none'
    chestOpenThree.style.display = 'block'
    scroll.setAttribute('src', 'img/content/3.svg');
    figureScroll.classList.add("content__figure-scroll-anim-one");
    chestOpenThree.addEventListener('click', nextChestThree);
};

function nextChestThree () {
    audioBum.play();
    chestOpenThree.style.display = 'none'
    chestOpenFour.style.display = 'block'
    scroll.setAttribute('src', 'img/content/4.svg');
    figureScroll.classList.add("content__figure-scroll-anim-two");
    chestOpenFour.addEventListener('click', nextChestFour);
};

function nextChestFour () {
    audioBum.play();
    chestOpenFour.style.display = 'none'
    chestOpenFive.style.display = 'block'
    scroll.setAttribute('src', 'img/content/5.svg');
    figureScroll.classList.add("content__figure-scroll-anim-three");
    chestOpenFive.addEventListener('click', nextChestFive);
};

function nextChestFive () {
    audioBum.play();
    chestOpenFive.style.display = 'none'
    chestOpenSix.style.display = 'block'
    scroll.setAttribute('src', 'img/content/6.svg');
    figureScroll.classList.add("content__figure-scroll-anim-four");
    chestOpenSix.addEventListener('click', nextChestSix);
};

function nextChestSix () {
    audioBum.play();
    chestOpenSix.style.display = 'none'
    chestOpenSeven.style.display = 'block'
    scroll.setAttribute('src', 'img/content/7.svg');
    figureScroll.classList.add("content__figure-scroll-anim-five");
    chestOpenSeven.addEventListener('click', nextChestSeven);
};

function nextChestSeven () {
    audioMon.play();
    chestOpenSeven.style.display = 'none'
    figureChestOpen.style.display = 'none'
    figureChest.style.display = 'block'
    scroll.setAttribute ('src', 'img/content/treasure.png');
    person.setAttribute ('src', 'img/content/beaver_the_king.svg');
    figureScroll.classList.add("content__figure-scroll-anim-six");
    figureChest.addEventListener('click', final);
};

function final () {
    location.reload()
}
