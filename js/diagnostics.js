// Диагностик лист до года
const button = document.querySelector('#btnDL');
const btnDisplay1 = document.querySelector('#btnDisplay1');
const showTicket = document.querySelector('#showTicket');
const displayTest1 = document.querySelector('#displayTest1');

button.addEventListener('click', result);
function result(e) {
    e.preventDefault();
    let points = 0;

    if (document.querySelector('#answer1').checked) {
        points ++;
    }

    if (document.querySelector('#answer2').checked) {
        points ++;
    }

    if (document.querySelector('#answer3').checked) {
        points ++;
    }

    if (document.querySelector('#answer4').checked) {
        points ++;
    }

    if (document.querySelector('#answer5').checked) {
        points ++;
    }

    if (document.querySelector('#answer6').checked) {
        points ++;
    }

    if (document.querySelector('#answer7').checked) {
        points ++;
    }

    if (document.querySelector('#answer8').checked) {
        points ++;
    }

    if (document.querySelector('#answer9').checked) {
        points ++;
    }

    if (document.querySelector('#answer10').checked) {
        points ++;
    }

    const show = document.querySelector('#show')
    

    if (points >= 6) {
        show.textContent = 'Скорее всего, все ОК. Ведите дневник развития ребенка и наблюдайте динамику. Можно заниматься развитием речи дополнительно, для лучших результатов. Нажмите на кнопку, чтобы посмотреть варианты подписки на наши развивающие игры.'
    }

    if (points < 6) {
        show.textContent = 'Этот результат означает, что есть над чем поработать. Лучше обратиться к неврологу и специалисту раннего развития для очной оценки ситуации и получению рекомендаций. Без паники! У нас есть игры для развития разных сторон речи - нажмите на кнопку, чтобы посмотреть варианты подписки.'
    }

    button.style.display = 'none';
}

btnDisplay1.addEventListener('click',() => {
    displayTest1.style.display = 'block';
    showTicket.style.display = 'none';
});

// тест от 1 до 2

const button2 = document.querySelector('#btnDL2');

button2.addEventListener('click', result2);

function result2(e) {
    e.preventDefault();
    let points = 0;

    if (document.querySelector('#answer11').checked) {
        points ++;
    }

    if (document.querySelector('#answer12').checked) {
        points ++;
    }

    if (document.querySelector('#answer13').checked) {
        points ++;
    }

    if (document.querySelector('#answer14').checked) {
        points ++;
    }

    if (document.querySelector('#answer15').checked) {
        points ++;
    }

    const show2 = document.querySelector('#show2')
    

    if (points >= 4) {
        show2.textContent = 'Скорее всего, все ОК. Ведите дневник развития ребенка и наблюдайте динамику. Можно заниматься развитием речи дополнительно, для лучших результатов. Нажмите на кнопку, чтобы посмотреть варианты подписки на наши развивающие игры.'
    }

    if (points < 4) {
        show2.textContent = 'Этот результат означает, что есть над чем поработать. Лучше обратиться к неврологу и специалисту раннего развития для очной оценки ситуации и получению рекомендаций. Без паники! У нас есть игры для развития разных сторон речи - нажмите на кнопку, чтобы посмотреть варианты подписки.'
    }
    button2.style.display = 'none';
}


const btnDisplay2 = document.querySelector('#btnDisplay2');
const displayTest2 = document.querySelector('#displayTest2');

btnDisplay2.addEventListener('click',() => {
    displayTest2.style.display = 'block';
    showTicket.style.display = 'none';
});
// тест от 2 до 3

const button3 = document.querySelector('#btnDL3');
button3.addEventListener('click', result3);

function result3(e) {
    e.preventDefault();
    let points = 0;

    if (document.querySelector('#answer21').checked) {
        points ++;
    }

    if (document.querySelector('#answer22').checked) {
        points ++;
    }

    if (document.querySelector('#answer23').checked) {
        points ++;
    }

    if (document.querySelector('#answer24').checked) {
        points ++;
    }

    if (document.querySelector('#answer25').checked) {
        points ++;
    }

    if (document.querySelector('#answer26').checked) {
        points ++;
    }

    const show3 = document.querySelector('#show3')
    

    if (points >= 5) {
        show3.textContent = 'Скорее всего, все ОК. Ведите дневник развития ребенка и наблюдайте динамику. Можно заниматься развитием речи дополнительно, для лучших результатов. Нажмите на кнопку, чтобы посмотреть варианты подписки на наши развивающие игры.'
    }

    if (points < 5) {
        show3.textContent = 'Этот результат означает, что есть над чем поработать. Лучше обратиться к неврологу и специалисту раннего развития для очной оценки ситуации и получению рекомендаций. Без паники! У нас есть игры для развития разных сторон речи - нажмите на кнопку, чтобы посмотреть варианты подписки.'
    }
    button3.style.display = 'none';
}


const btnDisplay3 = document.querySelector('#btnDisplay3');
const displayTest3 = document.querySelector('#displayTest3');

btnDisplay3.addEventListener('click',() => {
    displayTest3.style.display = 'block';
    showTicket.style.display = 'none';
});

// тест от 3 до 4

const button4 = document.querySelector('#btnDL4');
button4.addEventListener('click', result4);

function result4(e) {
    e.preventDefault();
    let points = 0;

    if (document.querySelector('#answer31').checked) {
        points ++;
    }

    if (document.querySelector('#answer32').checked) {
        points ++;
    }

    if (document.querySelector('#answer33').checked) {
        points ++;
    }

    if (document.querySelector('#answer34').checked) {
        points ++;
    }

    if (document.querySelector('#answer35').checked) {
        points ++;
    }

    if (document.querySelector('#answer36').checked) {
        points ++;
    }

    if (document.querySelector('#answer37').checked) {
        points ++;
    }

    if (document.querySelector('#answer38').checked) {
        points ++;
    }


    const show4 = document.querySelector('#show4')
    

    if (points >= 6) {
        show4.textContent = 'Скорее всего, все ОК. Ведите дневник развития ребенка и наблюдайте динамику. Можно заниматься развитием речи дополнительно, для лучших результатов. Нажмите на кнопку, чтобы посмотреть варианты подписки на наши развивающие игры'
    }

    if (points < 6) {
        show4.textContent = 'Этот результат означает, что есть над чем поработать. Лучше обратиться к логопеду для очной оценки ситуации и получению рекомендаций. Без паники! У нас есть игры для развития разных сторон речи - нажмите на кнопку, чтобы посмотреть варианты подписки.'
    }

    button4.style.display = 'none';
}

const btnDisplay4 = document.querySelector('#btnDisplay4');
const displayTest4 = document.querySelector('#displayTest4');

btnDisplay4.addEventListener('click',() => {
    displayTest4.style.display = 'block';
    showTicket.style.display = 'none';
});

const button5 = document.querySelector('#btnDL5');
button5.addEventListener('click', result5);

function result5(e) {
    e.preventDefault();
    let points = 0;

    if (document.querySelector('#answer41').checked) {
        points ++;
    }

    if (document.querySelector('#answer42').checked) {
        points ++;
    }

    if (document.querySelector('#answer43').checked) {
        points ++;
    }

    if (document.querySelector('#answer44').checked) {
        points ++;
    }

    if (document.querySelector('#answer45').checked) {
        points ++;
    }

    if (document.querySelector('#answer46').checked) {
        points ++;
    }

    if (document.querySelector('#answer47').checked) {
        points ++;
    }

    if (document.querySelector('#answer48').checked) {
        points ++;
    }

    if (document.querySelector('#answer49').checked) {
        points ++;
    }


    const show5 = document.querySelector('#show5')
    

    if (points >= 7) {
        show5.textContent = 'Скорее всего, все ОК. Ведите дневник развития ребенка и наблюдайте динамику. Можно заниматься развитием речи дополнительно, для лучших результатов. Нажмите на кнопку, чтобы посмотреть варианты подписки на наши развивающие игры.';
    }

    if (points < 7) {
        show5.textContent = 'Этот результат означает, что есть над чем поработать. Лучше обратиться к логопеду для очной оценки ситуации и получению рекомендаций. Без паники! У нас есть игры для развития разных сторон речи - нажмите на кнопку, чтобы посмотреть варианты подписки.';
    }

    button5.style.display = 'none';
}


const btnDisplay5 = document.querySelector('#btnDisplay5');
const displayTest5 = document.querySelector('#displayTest5');

btnDisplay5.addEventListener('click',() => {
    displayTest5.style.display = 'block';
    showTicket.style.display = 'none';
});
// тест от 5 до 6
const button6 = document.querySelector('#btnDL6');
button6.addEventListener('click', result6);

function result6(e) {
    e.preventDefault();
    let points = 0;

    if (document.querySelector('#answer51').checked) {
        points ++;
    }

    if (document.querySelector('#answer52').checked) {
        points ++;
    }

    if (document.querySelector('#answer53').checked) {
        points ++;
    }

    if (document.querySelector('#answer54').checked) {
        points ++;
    }

    if (document.querySelector('#answer55').checked) {
        points ++;
    }

    if (document.querySelector('#answer56').checked) {
        points ++;
    }

    if (document.querySelector('#answer57').checked) {
        points ++;
    }

    if (document.querySelector('#answer58').checked) {
        points ++;
    }

    if (document.querySelector('#answer59').checked) {
        points ++;
    }

    const show6 = document.querySelector('#show6')
    if (points >= 8) {
        show6.textContent = 'Скорее всего, все ОК. Ведите дневник развития ребенка и наблюдайте динамику. Можно заниматься развитием речи дополнительно, для лучших результатов. Оформите подписку, чтобы получить доступ ко всем играм сервиса ЗВУКИ РЕЧИ.'
    }
    if (points < 8) {
        show6.textContent = 'Этот результат означает, что есть над чем поработать. Лучше обратиться к логопеду для очной оценки ситуации и получению рекомендаций. Без паники! У нас есть игры для развития разных сторон речи - оформите подписку, чтобы получить доступ ко всем материалам сайта ЗВУКИ РЕЧИ.'
    }
    button6.style.display = 'none';
}


const btnDisplay6 = document.querySelector('#btnDisplay6');
const displayTest6 = document.querySelector('#displayTest6');

btnDisplay6.addEventListener('click',() => {
    showTicket.style.display = 'none';
    displayTest6.style.display = 'block';
});


