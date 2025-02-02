const pausemuse = document.querySelector('#pausemuse');
const playmuse = document.querySelector('#playmuse');

function muteMe(elem) {
    elem.muted = true;
    elem.pause();
}
function mutePage() {
    document.querySelectorAll("audio").forEach( elem => muteMe(elem) );
}
function muteNo(elem) {
    elem.muted = false;
}
function mutePageNo() {
    document.querySelectorAll("audio").forEach( elem => muteNo(elem) );
}
pausemuse.addEventListener('click', function (){
    mutePage();
    pausemuse.style.display = 'none';
    playmuse.style.display = 'inline';
});
playmuse.addEventListener('click', function () {
    pausemuse.style.display = 'inline';
    playmuse.style.display = 'none';
    mutePageNo();
});
