const characterOne = document.querySelector('#characterOne');
const characterTwo = document.querySelector('#characterTwo');
const characterThree = document.querySelector('#characterThree');
const characterFour = document.querySelector('#characterFour');

const next = document.querySelector('#next');
const nextImage = document.querySelector('#nextImage');
const textRepit = document.querySelector('#textRepit');

const audioOne = document.querySelector('#audioOne');
const audioTwo = document.querySelector('#audioTwo');
const audioThree = document.querySelector('#audioThree');
const audioFour = document.querySelector('#audioFour');
const audioFive = document.querySelector('#audioFive');
const audioSix = document.querySelector('#audioSix');

const startOne = document.querySelector('#startOne');
const startTwo = document.querySelector('#startTwo');
const startThree = document.querySelector('#startThree');
const startSecond = document.querySelector('#startSecond');
const startOneSecond = document.querySelector('#startOneSecond');
const startTwoSecond = document.querySelector('#startTwoSecond');

//первый плей первая дорожка МА

startOne.addEventListener('click', soundMerger);

function soundMerger () {
    audioOne.play();
    startOne.style.opacity = '0';
    next.style.opacity = '0';
    characterOne.classList.toggle('animOne');
    characterTwo.classList.toggle('animTwo');
    characterOne.classList.toggle('color-green');

      setTimeout(function() {
        characterTwo.classList.toggle('color-green');
      }, 1200);

      setTimeout(function() {
        startOne.style.opacity = '1';
        next.style.opacity = '1';
        characterOne.classList.toggle('animOne');
        characterTwo.classList.toggle('animTwo');
        characterOne.classList.toggle('color-green');
        characterTwo.classList.toggle('color-green');
      }, 3000);
}

//первый плей вторая дорожка МО

startSecond.addEventListener('click', soundMergerSecond);

function soundMergerSecond () {
    audioTwo.play();
    startSecond.style.opacity = '0';
    next.style.opacity = '0';
    characterThree.classList.toggle('animOne');
    characterFour.classList.toggle('animTwo');
    characterThree.classList.toggle('color-green');

    setTimeout(function() {
      characterFour.classList.toggle('color-green');
      }, 1200);

      setTimeout(function() {
        startSecond.style.opacity = '1';
        next.style.opacity = '1';
        characterThree.classList.toggle('animOne');
        characterFour.classList.toggle('animTwo');
        characterThree.classList.toggle('color-green');
        characterFour.classList.toggle('color-green');
      }, 3000);
}

//кнопка некст и смена картинок

next.addEventListener('click', nextSound);

function nextSound () {
  startOne.style.display = 'none';
  startSecond.style.display = 'none';
  startTwo.style.display = 'block';
  startOneSecond.style.display = 'block';
  next.style.display = 'none';
  nextImage.style.display = 'block';
  characterTwo.setAttribute('src', 'img/squirrel/Usquirrel.png');
  characterFour.setAttribute('src', 'img/squirrel/Isquirrel.png');
  nextImage.addEventListener('click', nextSoundTwo);
}

//третий плей

startTwo.addEventListener('click', soundMergerNext);

function soundMergerNext () {
      audioThree.play();
      startTwo.style.opacity = '0';
      nextImage.style.opacity = '0';
      characterOne.classList.toggle('animOne');
      characterTwo.classList.toggle('animTwo');
      characterOne.classList.toggle('color-green');
  
        setTimeout(function() {
          characterTwo.classList.toggle('color-green');
        }, 1200);
  
        setTimeout(function() {
          startTwo.style.opacity = '1';
          nextImage.style.opacity = '1';
          characterOne.classList.toggle('animOne');
          characterTwo.classList.toggle('animTwo');
          characterOne.classList.toggle('color-green');
          characterTwo.classList.toggle('color-green');
        }, 3000);
}

//четвертый плей

startOneSecond.addEventListener('click', soundMergerNextSecond);

function soundMergerNextSecond () {
      audioFour.play();
      startOneSecond.style.opacity = '0';
      nextImage.style.opacity = '0';
      characterThree.classList.toggle('animOne');
      characterFour.classList.toggle('animTwo');
      characterThree.classList.toggle('color-green');
  
      setTimeout(function() {
        characterFour.classList.toggle('color-green');
        }, 1200);
  
        setTimeout(function() {
          startOneSecond.style.opacity = '1';
          nextImage.style.opacity = '1';
          characterThree.classList.toggle('animOne');
          characterFour.classList.toggle('animTwo');
          characterThree.classList.toggle('color-green');
          characterFour.classList.toggle('color-green');
        }, 3000);
}

//кнопка некст и смена картинок последняя

function nextSoundTwo () {
    startTwo.style.display = 'none';
    startOneSecond.style.display = 'none';
    startThree.style.display = 'block';
    startTwoSecond.style.display = 'block';
    nextImage.style.display = 'none';
    repiat.style.display = 'block';
    next.style.display = 'none';
    characterTwo.setAttribute ('src', 'img/squirrel//Ysquirrel.png');
    characterFour.setAttribute ('src', 'img/squirrel//AEsquirrel.png');
    repiat.addEventListener('click', nextSoundLast);
}

//пятый плей

startThree.addEventListener('click', soundMergerNextLast);

function soundMergerNextLast () {
    audioFive.play();
    startThree.style.opacity = '0';
    repiat.style.opacity = '0';
    characterOne.classList.toggle('animOne');
    characterTwo.classList.toggle('animTwo');
    characterOne.classList.toggle('color-green');

      setTimeout(function() {
        characterTwo.classList.toggle('color-green');
      }, 1200);

      setTimeout(function() {
        startThree.style.opacity = '1';
        repiat.style.opacity = '1';
        characterOne.classList.toggle('animOne');
        characterTwo.classList.toggle('animTwo');
        characterOne.classList.toggle('color-green');
        characterTwo.classList.toggle('color-green');
      }, 3000);
}

//шестой плей

startTwoSecond.addEventListener('click', soundMergerNextSecondLast);

function soundMergerNextSecondLast () {
    audioSix.play();
    startTwoSecond.style.opacity = '0';
    repiat.style.opacity = '0';
    characterThree.classList.toggle('animOne');
    characterFour.classList.toggle('animTwo');
    characterThree.classList.toggle('color-green');

    setTimeout(function() {
      characterFour.classList.toggle('color-green');
      }, 1200);

      setTimeout(function() {
        startTwoSecond.style.opacity = '1';
        repiat.style.opacity = '1';
        characterThree.classList.toggle('animOne');
        characterFour.classList.toggle('animTwo');
        characterThree.classList.toggle('color-green');
        characterFour.classList.toggle('color-green');
      }, 3000);
}


function nextSoundLast () {
    location.reload()
  }