//Модальное окно
let popupBgh = document.querySelector('.popup__bgh');
let popuph = document.querySelector('.popuph');
let openPopupButtonsh = document.querySelectorAll('.open-popuph'); 
let closePopupButtonh = document.querySelector('.close-popuph'); 
openPopupButtonsh.forEach((buttonh) => { 
    buttonh.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBgh.classList.add('active'); 
        popuph.classList.add('active');
    })
});
closePopupButtonh.addEventListener('click',() => {
    popupBgh.classList.remove('active'); 
    popuph.classList.remove('active'); 
});
document.addEventListener('click', (e) => {
    if(e.target === popupBgh) { 
        popupBgh.classList.remove('active'); 
        popuph.classList.remove('active');
    }
});