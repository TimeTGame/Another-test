function byId(e){return document.getElementById(e);}
window.addEventListener('load', mInit, false);

function mInit() {
var tgt = byId('ImageButton1');
tgt.secondSource = 'Shrek2.jpg';
}

function byId(e){return document.getElementById(e);}

function action() {
var tgt = byId('ImageButton1');
var tmp = tgt.src;
tgt.src = tgt.secondSource;
tgt.secondSource = tmp;
};
