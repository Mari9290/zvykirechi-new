//Модальное окно
let popupBgt = document.querySelector('.popup__bgt');
let popupt = document.querySelector('.popupt');
let openPopupButtonst = document.querySelectorAll('.open-popupt'); 
let closePopupButtont = document.querySelector('.close-popupt'); 
openPopupButtonst.forEach((buttont) => { 
    buttont.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBgt.classList.add('active'); 
        popupt.classList.add('active');
    })
});
closePopupButtont.addEventListener('click',() => {
    popupBgt.classList.remove('active'); 
    popupt.classList.remove('active'); 
});
document.addEventListener('click', (e) => {
    if(e.target === popupBgt) { 
        popupBgt.classList.remove('active'); 
        popupt.classList.remove('active');
    }
});