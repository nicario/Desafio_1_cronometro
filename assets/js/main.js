"use strict";

let hora = 0;
let minuto = 0;
let segundo = 0;
let milisegundo = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start () {
  pause();
  cron = setInterval (() => { timer();}, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  hora = 0;
  minuto = 0;
  segundo = 0;
  milisegundo = 0;
  document.getElementById('hora').innetText = '00';
  document.getElementById('minuto').innetText = '00';
  document.getElementById('segundo').innetText = '00';
  document.getElementById('milisegundo').innetText = '00';
}

function timer() {
  if ((milisegundo += 10) == 1000) {
    milisegundo = 0;
    segundo++;
  }
  if (segundo == 60) {
    segundo = 0;
    minuto++;
  }
  if (minuto == 60) {
    minuto = 0;
    hora++;
  }
  document.getElementById('hora').innerText = returnData(hora);
  document.getElementById('minuto').innerText = returnData(minuto);
  document.getElementById('segundo').innerText = returnData(segundo);
  document.getElementById('milisegundo').innerText = returnData(milisegundo);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`
}