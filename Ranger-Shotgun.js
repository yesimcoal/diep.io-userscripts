// ==UserScript==
// @name         Ranger Shotgun
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  (SANDBOX ONLY)Upgrade to Ranger and Press 'Shift' to turn ON/OFF (This can kill glass tanks in one shot!). Also, when you die, make sure that the script is off.
// @author       Mahtabby
// @match        https://diep.io/
// @icon         https://www.google.com/s2/favicons?domain=diep.io
// @grant        none
// ==/UserScript==

var random;
var color = "White";

function changeTank() {
  input.keyDown(220);
  input.keyUp(220);
}

function autoFire() {
  input.keyDown(69);
  input.keyUp(69);
}

var onOff = "OFF";

function toggle() {
  if (!random) {
    random = setTimeout(changeTank , 10);
    onOff = "ON";
    color = "Lime";
  } else {
    clearInterval(random);
    random = null;
    onOff = "OFF";
    color = "Red";
  }
}

window.addEventListener("keydown" , Tostart , false)
function Tostart(key) {
  if (key.keyCode == "16") {
    autoFire()
    toggle()
 }
}

const ctx = canvas.getContext("2d");
setTimeout(() => {
    let gui = () => {
        ctx.fillStyle = color;
        ctx.lineWidth = 2.25;
        ctx.font = 1.25 + "em Ubuntu";
        ctx.strokeStyle = "Black";
        ctx.strokeText(`[SHIFT] Ranger Shotgun: ${onOff}`, 947, 30);
        ctx.fillText(`[SHIFT] Ranger Shotgun: ${onOff}`, 947, 30);
        window.requestAnimationFrame(gui);
    }
    gui();
    setTimeout(() => {
        gui();
    },5000);
}, 1000);
