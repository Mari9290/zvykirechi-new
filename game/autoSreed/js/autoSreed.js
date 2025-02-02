//инпуты
const oneOption = document.querySelector('#oneOption');
const twoOption = document.querySelector('#twoOption');
const threeOption = document.querySelector('#threeOption');
const fourOption = document.querySelector('#fourOption');

//картинки
const oneImg = document.querySelector('#oneImg');
const twoImg = document.querySelector('#twoImg');
const threeImg = document.querySelector('#threeImg');
const fourImg = document.querySelector('#fourImg');

//текст
const oneAudio = 'ЛИ-СА';
const twoAudio = 'КИ-СА';
const threeAudio = 'КО-СА';
const fourAudio = 'КО-ЗА';

//кнопки
const submit = document.querySelector('#submit');
const back = document.querySelector('#back');
const wparText = document.querySelector('#wparText');
const textReed = document.querySelector('#textReed');
const btnplay = document.querySelector('#btnplay');

//Модальное окно
let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let popupBgch = document.querySelector('.popup__bgch'); // Фон попап окна число
let popupch = document.querySelector('.popupch'); // Само окно число
let popupBgyes = document.querySelector('.popup__bgyes'); // Фон попап окна 
let popupyes = document.querySelector('.popupyes'); // Само окно
let popupBgno = document.querySelector('.popup__bgno'); // Фон попап окна
let popupno = document.querySelector('.popupno'); // Само окно
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
let closePopupButtonch = document.querySelector('.close-popupch'); // Кнопка для скрытия окна
let closePopupButtonyes = document.querySelector('.close-popupyes'); // Кнопка для скрытия окна
let closePopupButtonno = document.querySelector('.close-popupno'); // Кнопка для скрытия окна

btnplay.addEventListener('click', startGame);

function startGame (){
    btnplay.style.display = 'none';
    wparText.style.display = 'block';
    submit.style.display = 'block';
    const randTexts = [{id:1, name:oneAudio}, {id:2, name:twoAudio}, {id:3, name:threeAudio}, {id:4, name:fourAudio}];
    const answer = Math.floor(Math.random()*4)+1;
    let randText = randTexts.find(item => item.id == answer);
    textReed.textContent = randText.name;

submit.addEventListener('click', play);

function play(e) {
    e.preventDefault();
    let points = 0;
    if (document.querySelector('#oneOption').checked) {
        points = 1;
    }
    if (document.querySelector('#twoOption').checked) {
        points = 2;
    }
    if (document.querySelector('#threeOption').checked) {
        points = 3;
    }
    if (document.querySelector('#fourOption').checked) {
        points = 4;
    }

    if(points < answer || points > answer){
        popupBgno.classList.add('active'); // Добавляем класс 'active' для фона
        popupno.classList.add('active'); // И для самого окна
        closePopupButtonno.addEventListener('click',() => { // Вешаем обработчик на крестик
            popupBgno.classList.remove('active'); // Убираем активный класс с фона
            popupno.classList.remove('active'); // И с окна
        });
        document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
            if(e.target === popupBgno) { // Если цель клика - фот, то:
                popupBgno.classList.remove('active'); // Убираем активный класс с фона
                popupno.classList.remove('active'); // И с окна
            }
    });
    }
    else {
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

    setTimeout(function(){
        location.reload()
    }, 5000)
    }

}
}




