/* main.js */

document.addEventListener("DOMContentLoaded", function() {
    let backhair = body = clothes = eyebrows = eyes = mouth = nose = fronthair = new Image();
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let path = "items/";

    backhair.src = path + "backhair/backhair" + random(25, 1);
    body.src = path + "body/body" + random(25, 1);
    clothes.src = path + "clothes/clothes" + random(12, 1);
    eyebrows.src = path + "eyebrows/eyebrows" + random(20, 1);
    eyes.src = path + "eyes/eyes" + random(25, 1);
    mouth.src = path + "mouth/mouth" + random(25, 1);
    nose.src = path + "noses/nose" + random(4, 1);
    fronthair.src = path + "fronthair/fronthair" + random(25, 1);

    window.onload = function () {
        ctx.drawImage(backhair, 0, 0);
        ctx.drawImage(body, 0, 0);
        ctx.drawImage(clothes, 0, 0);
        ctx.drawImage(eyebrows, 0, 0);
        ctx.drawImage(eyes, 0, 0);
        ctx.drawImage(mouth, 0, 0);
        ctx.drawImage(nose, 0, 0);
        ctx.drawImage(fronthair, 0, 0);
    }

    function random(a, b) {
        return Math.floor(Math.random() * a) + b + ".png";
    }
});
