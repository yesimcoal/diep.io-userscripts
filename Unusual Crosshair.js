// ==UserScript==
// @name         (Diep.io) Crosshair
// @author       geometry
// @description  [V to change color.]Shows mouse location. Can change blend modes. Credit to schlong for base script.
// @match        *://diep.io/*
// @grant        unsafeWindow
// @version      0.2
// @namespace    https://greasyfork.org/?
// ==/UserScript==

(() => {
    "use strict";
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    //zeach scale code
    var scale = window.localStorage['no_retina'] ? 1.0 : window.devicePixelRatio;

    let mouseX;
    let mouseY;
    //blue red green purple black white yellow pink
    let c1 = ["#00b0e1", "#f04f54", "#00c25d", "#be7ff5", "#000000", "#FFFFFF", "#ffe46b", "#FF69B4"];
    let team = 0;
    let xhairVisible = true;
    let xhairSize = 70;
    let xAngle = 0;

    window.onkeydown = function(event) {
        //V - toggle colors
        if (event.keyCode === 86) {
            team = (team + 1) % 8;
        }
        //B - toggle crosshair
        if (event.keyCode === 66) {
            xhairVisible = !xhairVisible;
        }
        //minus - decrease size
        if (event.keyCode === 189) {
            if (xhairSize >= 40) {
                xhairSize -= 10;
            }
        }
        //plus - increase size
        if (event.keyCode === 187) {
            if (xhairSize <= 120) {
                xhairSize += 10;
            }
        }
    }

    function mousemove(event) {
        if (event.clientX) {
            mouseX = event.clientX * scale;
            mouseY = event.clientY * scale;
        }
    }
    window.addEventListener('mousemove', mousemove);

    var mouseDown = 0;
    var mSize = 0;

    document.body.onmousedown = function(evt) {
        if (evt.button == 2) {
            ++mouseDown;
        }
    }
    document.body.onmouseup = function(evt) {
        if (evt.button == 2) {
            --mouseDown;
        }
    }

    const loadAt = setInterval(() => {
        if (document.getElementById("loading").innerText == "") {
            setTimeout(() => {
                let _requestAnimationFrame = () => {

                    if (xhairVisible) {

                        //xhair main
                        ctx.beginPath();
                        ctx.arc(mouseX, mouseY, xhairSize, 0, 2 * Math.PI, false);
                        ctx.lineWidth = 3;
                        ctx.strokeStyle = c1[team];
                        ctx.fillStyle = c1[team] + "40";
                        ctx.fill();
                        ctx.stroke();

                        //xhair center
                        ctx.beginPath();
                        ctx.arc(mouseX, mouseY, 15 + mSize, 0, 2 * Math.PI, false);
                        ctx.fillStyle = c1[team] + "90";
                        ctx.fill();

                        if (xhairSize > 50){
                            //xhair sides
                            ctx.beginPath();
                            ctx.lineWidth = xhairSize / 10;
                            ctx.arc(mouseX, mouseY, xhairSize, (xAngle * Math.PI) - .8, (xAngle * Math.PI) + .8, false);
                            ctx.strokeStyle = c1[team];
                            ctx.stroke();
                            //other side
                            ctx.beginPath();
                            ctx.arc(mouseX, mouseY, xhairSize, (xAngle * Math.PI) - Math.PI - .8, (xAngle * Math.PI) - Math.PI + .8, false);
                            ctx.stroke();
                        }
                    }

                    xAngle += 0.005;
                    if (xAngle > 2) {
                        xAngle = 0;
                    }

                    if (mouseDown) {
                        if (mSize < xhairSize - 25) {
                            mSize += 1;
                        }
                    } else {
                        if (mSize > 0) {
                            mSize -= 1;
                        }
                    }

                    window.requestAnimationFrame(_requestAnimationFrame);
                }
                _requestAnimationFrame();
            }, 100);
            clearInterval(loadAt);
        }
    });
})();
