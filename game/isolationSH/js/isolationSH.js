const characterOne = document.querySelector('#characterOne');
const characterTwo = document.querySelector('#characterTwo');

const next = document.querySelector('#next');
const hard = document.querySelector('#hard');

let popupBgyes = document.querySelector('.popup__bgyes');
let popupyes = document.querySelector('.popupyes');
let closePopupButtonyes = document.querySelector('.close-popupyes'); 

//первый плей первая дорожка

startOne.addEventListener('click', soundMerger);

function soundMerger () {
    startOne.style.opacity = '0';
    next.style.opacity = '0';
    hard.style.opacity = '0';
    characterOne.classList.toggle('animOne');
      setTimeout(function() {
        characterOne.classList.toggle('animOne');
        characterTwo.classList.toggle('animTwo');
        characterTwo.classList.toggle('color-green');
        popupBgyes.classList.add('active'); // Добавляем класс 'active' для фона
        popupyes.classList.add('active'); // И для самого окна
        closePopupButtonyes.addEventListener('click',() => { // Вешаем обработчик на крестик
            popupBgyes.classList.remove('active'); // Убираем активный класс с фона
            popupyes.classList.remove('active'); // И с окна
        });
        document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
            if(e.target === popupBgyes) { // Если цель клика - фот, то:
                popupBgyes.classList.remove('active'); // Убираем активный класс с фона
                popupyes.classList.remove('active'); // И с окна
            }
        });
      }, 3000);
      setTimeout(function() {
        startOne.style.opacity = '1';
        next.style.opacity = '1';
        hard.style.opacity = '1';
      }, 4000);
};


next.addEventListener('click', nextSound);

function nextSound () {
  characterTwo.setAttribute ('src', 'img/pers/sea.png');
  next.addEventListener('click', nextSoundTwo);
}

function nextSoundTwo () {
    characterTwo.setAttribute ('src', 'img/pers/northPole.png');
    next.addEventListener('click', nextSoundThree);
}


function nextSoundThree () {
  characterTwo.setAttribute ('src', 'img/pers/wigwam.png');
  next.addEventListener('click', nextSoundFour);
}


function nextSoundFour () {
  next.style.display = 'none';
  repiat.style.display = 'block';
  characterTwo.setAttribute ('src', 'img/pers/temple.png');
  repiat.addEventListener('click', nextSoundLast);
}


function nextSoundLast () {
    location.reload()
  }