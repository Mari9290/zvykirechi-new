const tiket = document.querySelector('#tiket');
const tiketTwo = document.querySelector('#tiketTwo');
const tiketThree = document.querySelector('#tiketThree');
const tiketFour = document.querySelector('#tiketFour');
const tiketFive = document.querySelector('#tiketFive');
const tiketSix = document.querySelector('#tiketSix');
const tiketSeven = document.querySelector('#tiketSeven');
const tiketEight = document.querySelector('#tiketEight');
const tiketNine = document.querySelector('#tiketNine');
const tiketTen = document.querySelector('#tiketTen');
const tiketEleven = document.querySelector('#tiketEleven');

const mainDiv = document.querySelector('#mainDiv');

const exampleOne = document.querySelector('#exampleOne');
const exampleTwo = document.querySelector('#exampleTwo');
const exampleThree = document.querySelector('#exampleThree');
const exampleFour = document.querySelector('#exampleFour');
const exampleFive = document.querySelector('#exampleFive');
const exampleSix = document.querySelector('#exampleSix');
const exampleSeven = document.querySelector('#exampleSeven');
const exampleEight = document.querySelector('#exampleEight');
const exampleNine = document.querySelector('#exampleNine');
const exampleTen = document.querySelector('#exampleTen');
const exampleEleven = document.querySelector('#exampleEleven');

const next = document.querySelector('#next');
const nextTwo = document.querySelector('#nextTwo');
const nextThree = document.querySelector('#nextThree');
const nextFour = document.querySelector('#nextFour');
const nextFive = document.querySelector('#nextFive');
const nextSix = document.querySelector('#nextSix');
const nextSeven = document.querySelector('#nextSeven');
const nextEight = document.querySelector('#nextEight');
const nextNine = document.querySelector('#nextNine');
const nextTen = document.querySelector('#nextTen');
const nextEleven = document.querySelector('#nextEleven');

const audioOne = document.querySelector('#audioOne');
const audioTwo = document.querySelector('#audioTwo');
const audioThree = document.querySelector('#audioThree');
const audioFour = document.querySelector('#audioFour');
const audioFive = document.querySelector('#audioFive');
const audioSix = document.querySelector('#audioSix');
const audioSeven = document.querySelector('#audioSeven');
const audioEight = document.querySelector('#audioEight');
const audioNine = document.querySelector('#audioNine');
const audioTen = document.querySelector('#audioTen');
const audioEleven = document.querySelector('#audioEleven');


const instruction = document.querySelector('#instruction');

const show = document.querySelector('#show');


tiket.addEventListener('click', gimnastik);
function gimnastik () {
    audioOne.play();
    exampleOne.style.display = 'block';
    show.style.display = 'block';
    mainDiv.style.display = 'none';
    instruction.textContent = 'Отправляемся в путешествие по нашим заданиям! Поднимаем парус и вперёд! Повторяй за лисой: рот широко открыт, подбородок неподвижен, язык держи наверху за резцами до тех пор, пока хвостик лисы не пересчитает все деревья и не вернется в исходное положение. Язык держится четко, рот не прикрывается, язык не опускается и не дрожит. ';
}

tiketTwo.addEventListener('click', gimnastikTwo);
function gimnastikTwo () {
    audioTwo.play();
    exampleTwo.style.display = 'block';
    show.style.display = 'block';
    mainDiv.style.display = 'none';
    instruction.textContent = 'Покатаем язычок на качелях! Вместе с манулом двигаем языком вверх и вниз за резцы. Четко и в такт музыке и манулу. Следите за тем, чтобы движение было полное, рот не прикрывался, язык не дрожал.';
}

tiketThree.addEventListener('click', gimnastikThree);
function gimnastikThree () {
    exampleThree.style.display = 'block';
    audioThree.play();
    show.style.display = 'block';
    mainDiv.style.display = 'none';
    instruction.textContent = 'Сможешь повторить за бобром? Держи рот «Окошком» ровно столько же, сколько и он. Кто дольше: ты или он? Не прикрывай рот во время упражнения – окошко должно быть открыто полностью, пока не исчезнут все брёвна! ';
}

tiketFour.addEventListener('click', gimnastikFour);
function gimnastikFour () {
    exampleFour.style.display = 'block';
    audioFour.play();
    show.style.display = 'block';
    mainDiv.style.display = 'none';
    instruction.textContent = 'Белочка проголодалась – повтори за ней упражнение (а после можешь и перекусить😊 ). Открывай и закрывай рот в такт музыке вместе с белочкой. Старайся открывать как можно шире, как будто кусаешь огромный торт! Приятного аппетита!';
}

tiketFive.addEventListener('click', gimnastikFive);
function gimnastikFive () {
    exampleFive.style.display = 'block';
    audioFive.play();
    show.style.display = 'block';
    mainDiv.style.display = 'none';
    instruction.textContent = 'Лиса очень рада тебя видеть – улыбнись и ты ей в ответ! Растяни губы в улыбке и покажи все свои зубы. Улыбайся до тех пор, пока хвостик лисы не пересчитает все деревья и не вернется в исходное положение. Давай делиться хорошим настроением!';
}

tiketSix.addEventListener('click', gimnastikSix);
function gimnastikSix () {
    exampleSix.style.display = 'block';
    audioSix.play();
    show.style.display = 'block';
    mainDiv.style.display = 'none';
    instruction.textContent = 'Бобер играет в слоника, присоединяйся! Тяни губы вперед, как хобот слона и держи их, пока не исчезнут все брёвна! ';
}

tiketSeven.addEventListener('click', gimnastikSeven);
function gimnastikSeven () {
    exampleSeven.style.display = 'block';
    audioSeven.play();
    show.style.display = 'block';
    mainDiv.style.display = 'none';
    instruction.textContent = 'Повторяй за манулом – двигай губами в такт музыке, сменяя упражнения Улыбка и Хоботок. Не торопись, но и не делай медленнее, чем он.';
}

tiketEight.addEventListener('click', gimnastikEight);
function gimnastikEight () {
    exampleEight.style.display = 'block';
    audioEight.play();
    show.style.display = 'block';
    mainDiv.style.display = 'none';
    instruction.textContent = 'Бобер сделал из языка иголку – он тянет язык вперед (параллельно полу), напрягая кончик и делая его острым, как настоящая игла! Держи «иголку», пока не исчезнут все брёвна! Не помогаем себе головой, подбородком или руками – язык двигается сам, не дрожит, рот широко открыт. Может устроим соревнование? Кто дольше держит иголочку – ты или бобёр?';
}

tiketNine.addEventListener('click', gimnastikNine);
function gimnastikNine () {
    exampleNine.style.display = 'block';
    audioNine.play();
    show.style.display = 'block';
    mainDiv.style.display = 'none';
    instruction.textContent = 'Белочка притворяется маятником часов. Посмотри – у нее даже хвост танцует! Повторяй движения языком за белочкой в такт – рот в улыбке, язык двигается вправо и влево от одного угла рта к другому. Не помогаем себе головой, подбородком или руками – язык двигается сам, совсем как маятник!';
}

tiketTen.addEventListener('click', gimnastikTen);
function gimnastikTen () {
    exampleTen.style.display = 'block';
    audioTen.play();
    show.style.display = 'block';
    mainDiv.style.display = 'none';
    instruction.textContent = 'Ой! Бобёр надулся как воздушный шар! Попробуй и ты – надуй щёки сильно-сильно, напряги губы и держи «шарик», пока не исчезнут все брёвна! Может устроим соревнование? Чей шарик дольше не сдуется?';
}

tiketEleven.addEventListener('click', gimnastikEleven);
function gimnastikEleven () {
    exampleEleven.style.display = 'block';
    audioEleven.play();
    show.style.display = 'block';
    mainDiv.style.display = 'none';
    instruction.textContent = 'Мы отлично поработали! А теперь язычок отдохнёт. Повтори за лисой – расслабь язычок, сделай его широким, как лопатка и положи на нижнюю губу. Держи «лопатку», пока хвостик лисы не пересчитает все деревья и не вернется в исходное положение.';
}



