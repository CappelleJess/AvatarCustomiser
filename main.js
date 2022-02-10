/* main.js */

document.addEventListener("DOMContentLoaded", function() {
    let backhair = body = eyes = eyebrows = mouth = nose = fronthair = clothes = new Image();
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let path = "items/";

    clothes.src = path + "clothes/clothes" + random (3, 1);
    backhair.src = path + "backhair/backhair" + random(4, 1);
    body.src = path + "body/body" + random(5, 1);
    face.src = path + "faces/face" + random(5, 1);
    eyebrows.src = path + "eyebrows/eyebrows" + random(5, 1);
    mouth.src = path + "mouth/mouth" + random(4, 1);
    nose.src = path + "noses/nose" + random(5, 1);
    fronthair.src = path + "fronthair/fronthair" + random(4, 1);

    window.onload = function () {
        ctx.drawImage(clothes, 0, 0);
        ctx.drawImage(backhair, 0, 0);
        ctx.drawImage(body, 0, 0);
        ctx.drawImage(eyes, 0, 0);
        ctx.drawImage(eyebrows, 0, 0);
        ctx.drawImage(mouth, 0, 0);
        ctx.drawImage(nose, 0, 0);
        ctx.drawImage(fronthair, 0, 0);
    }

    function random(a, b) {
        return Math.floor(Math.random() * a) + b + ".png";
    }
});
