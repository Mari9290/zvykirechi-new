const next = document.querySelector('#next');
const back = document.querySelector('#back');

const photos = ['img/doc/2.jpg', 'img/doc/3.jpg', 'img/doc/4.jpg', 'img/doc/5.jpg', 'img/doc/6.jpg', 
    'img/doc/7.jpg', 'img/doc/8.jpg', 'img/doc/9.jpg', 'img/doc/10.jpg', 'img/doc/11.jpg', 'img/doc/12.jpg', 
    'img/doc/13.jpg', 'img/doc/14.jpg', 'img/doc/15.jpg', 'img/doc/16.jpg', 'img/doc/17.jpg', 'img/doc/18.jpg'];

let i = 0;
next.addEventListener('click', () => {
    i++;
    if (i>photos.length-1){
        i=0
    }
    document.querySelector('#pic').src = photos[i];
})

back.addEventListener('click', () => {
    i--;
    if (i<0){
        i=photos.length-1
    }
    document.querySelector('#pic').src=photos[i];
})