/* main.js v0.1 by djphil (CC-BY-NC-SA 4.0) */

document.addEventListener("DOMContentLoaded", function() {
    let canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        let download = document.getElementById('download');
        let colors = ["lightblue", "lightyellow", "lightgreen"];
        let path = "img/";

        let backhair = new Image();
        let body = new Image();
        let clothes = new Image();
        let eyebrows = new Image();
        let eyes = new Image();
        let mouth = new Image();
        let nose = new Image();
        let fronthair = new Image();

        backhair.src = path + "backhair/backhair" + random(25, 1);
        body.src = path + "body/body" + random(25, 1);
        clothes.src = path + "clothes/clothes" + random(12, 1);
        eyebrows.src = path + "eyebrows/eyebrows" + random(20, 1);
        eyes.src = path + "eyes/eyes" + random(25, 1);
        mouth.src = path + "mouth/mouth" + random(25, 1);
        nose.src = path + "nose/nose" + random(4, 1);
        fronthair.src = path + "fronthair/fronthair" + random(25, 1);

        window.onload = function() {
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];;
            ctx.fillRect(0, 0, 500, 500);
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
    }

    else {alert('Sorry, your browser do not support canvas ...');}

        download_btn.addEventListener('click', function(e) {
        var link = document.createElement('a');
        link.download = 'avatar.png';
        link.href = canvas.toDataURL()
        link.click();
        link.delete;
        });
});
