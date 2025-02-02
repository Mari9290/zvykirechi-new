const cloudFirst = document.querySelector('#cloudFirst');
const cloudSec = document.querySelector('#cloudSec');
const drop = document.querySelector('#drop');
const dropa = document.querySelector('#dropa');
const dropb = document.querySelector('#dropb');
const dropc = document.querySelector('#dropc');
const dropd = document.querySelector('#dropd');
const drope = document.querySelector('#drope');
const dropf = document.querySelector('#dropf');
const dropg = document.querySelector('#dropg');
const droph = document.querySelector('#droph');
const dropq = document.querySelector('#dropq');
const dropw = document.querySelector('#dropw');
const dropr = document.querySelector('#dropr');
const dropt = document.querySelector('#dropt');
const dropy = document.querySelector('#dropy');
const dropu = document.querySelector('#dropu');
const dropi = document.querySelector('#dropi');
const dropo = document.querySelector('#dropo');
const dropp = document.querySelector('#dropp');
const drops = document.querySelector('#drops');
const dropk = document.querySelector('#dropk');
const dropl = document.querySelector('#dropl');
const dropz = document.querySelector('#dropz');
const dropx = document.querySelector('#dropx');
const dropv = document.querySelector('#dropv');

const sprout = document.querySelector('#sprout');
const textSec = document.querySelector('#textSec');
const textMain = document.querySelector('#textMain');
const textFirst = document.querySelector('#textFirst');
const play = document.querySelector('#play');
const btn = document.querySelector('#btn');


play.addEventListener('click', firstStep);
function firstStep() {
    play.style.display = 'none';
    textMain.style.display = 'none';
    textFirst.style.display = 'none';
    cloudFirst.classList.add('started-raining');
    cloudSec.classList.add('started-raining-two');
    sprout.classList.add('rise');
    btn.style.display = 'block';
    drop.classList.add('drop-go');
    dropa.classList.add('drop-goa');
    dropb.classList.add('drop-gob');
    dropc.classList.add('drop-goc');
    dropd.classList.add('drop-god');
    drope.classList.add('drop-goe');
    dropf.classList.add('drop-gof');
    dropg.classList.add('drop-gog');
    droph.classList.add('drop-goh');
    dropq.classList.add('drop-goq');
    dropw.classList.add('drop-gow');
    dropr.classList.add('drop-gor');
    dropt.classList.add('drop-got');
    dropy.classList.add('drop-goy');
    dropu.classList.add('drop-gou');
    dropi.classList.add('drop-goi');
    dropo.classList.add('drop-goo');
    dropp.classList.add('drop-gop');
    drops.classList.add('drop-gos');
    dropk.classList.add('drop-gok');
    dropl.classList.add('drop-gol');
    dropz.classList.add('drop-goz');
    dropx.classList.add('drop-gox');
    dropv.classList.add('drop-gov');

    setTimeout(function() {
        textMain.style.display = 'block';
        textSec.style.display = 'block';
        textMain.classList.add('shine');
        cloudFirst.style.display = 'none';
        cloudSec.style.display = 'none';
    }, 5000);
}
