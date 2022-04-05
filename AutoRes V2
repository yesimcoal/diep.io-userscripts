// ==UserScript==
// @name         Auto Respawn V2 Set a name
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  use abcs wasm hook.
// @author       Tariteur(awesomecats way of making line 13..)
// @match        https://diep.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=diep.io
// @grant        none
// ==/UserScript==

setInterval(() => {
    Hook.send([2, ...new TextEncoder().encode(`${name}`)]);
});
var name=this.innerHTML = 'T to change';
function Name() {
    var a = prompt('Enter Name(max=17):         And press O');
    name=a;
}
document.addEventListener("keydown", (kc) => {
        if (kc.keyCode === 84) {
            Name();
        }
    });
