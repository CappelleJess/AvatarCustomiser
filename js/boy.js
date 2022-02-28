/* main.js v0.1 by djphil (CC-BY-NC-SA 4.0) */

document.addEventListener("DOMContentLoaded", function() {
    let canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        let download_btn = document.getElementById('download_btn');
        let background_btn = document.getElementById('background_btn');
        let colors = ["lightcoral", "lightblue", "lightpink", "lightgreen"];
        let path = "img/";

        let backhair_nbr = get_random_image(35, 1);
        let body_nbr = get_random_image(25, 1);
        let clothes_nbr = get_random_image(12, 1);
        let eyebrows_nbr = get_random_image(20, 1);
        let eyes_nbr = get_random_image(30, 1);
        let mouth_nbr = get_random_image(25, 1);
        let nose_nbr = get_random_image(4, 1);
        let fronthair_nbr = get_random_image(35, 1);

        let backhair_img = new Image();
        let body_img = new Image();
        let clothes_img = new Image();
        let eyebrows_img = new Image();
        let eyes_img = new Image();
        let mouth_img = new Image();
        let nose_img = new Image();
        let fronthair_img = new Image();

        backhair_img.crossOrigin = "anonymous";
        body_img.crossOrigin = "anonymous";
        clothes_img.crossOrigin = "anonymous";
        eyebrows_img.crossOrigin = "anonymous";
        eyes_img.crossOrigin = "anonymous";
        nose_img.crossOrigin = "anonymous";
        mouth_img.crossOrigin = "anonymous";
        fronthair_img.crossOrigin = "anonymous";

        backhair_img.src = path + "backhair/man/backhair" + backhair_nbr;
        body_img.src = path + "body/body" + body_nbr;
        clothes_img.src = path + "clothes/clothes" + clothes_nbr;
        eyebrows_img.src = path + "eyebrows/eyebrows" + eyebrows_nbr;
        eyes_img.src = path + "eyes/man/eyes" + eyes_nbr;
        mouth_img.src = path + "mouth/man/mouth" + mouth_nbr;
        nose_img.src = path + "nose/nose" + nose_nbr;
        fronthair_img.src = path + "fronthair/man/fronthair" + fronthair_nbr;

        let background_color = get_random_color();

        window.onload = function() {
            draw_avatar();
        }

        background_btn.addEventListener('click', function(e) {
            background_color = get_random_color();
            draw_avatar();
        });

        download_btn.addEventListener('click', function(e) {
            var link = document.createElement('a');
            link.download = 'avatar.png';
            link.href = canvas.toDataURL()
            link.click();
            link.delete;
        });

        function draw_avatar() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = background_color;
            ctx.fillRect(0, 0, 500, 500);
            ctx.drawImage(backhair_img, 0, 0);
            ctx.drawImage(body_img, 0, 0);
            ctx.drawImage(clothes_img, 0, 0);
            ctx.drawImage(eyebrows_img, 0, 0);
            ctx.drawImage(eyes_img, 0, 0);
            ctx.drawImage(mouth_img, 0, 0);
            ctx.drawImage(nose_img, 0, 0);
            ctx.drawImage(fronthair_img, 0, 0);
        }

        function get_random_image(a, b) {
            return Math.floor(Math.random() * a) + b + ".png";
        }

        function get_random_color() {
            return colors[parseInt(Math.random() * colors.length)];
        }
    }

    else {alert('Sorry, your browser do not support canvas ...');}
});
