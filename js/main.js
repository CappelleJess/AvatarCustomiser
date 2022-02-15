/* main.js v0.1 by djphil (CC-BY-NC-SA 4.0) */

document.addEventListener("DOMContentLoaded", function() {
    let canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        let download_btn = document.getElementById('download_btn');
        let background_btn = document.getElementById('background_btn');
        let colors = ["white", "lightblue", "lightyellow", "lightgreen"];
        let path = "img/";

        let backhair_nbr = get_random_image(25, 1);
        let body_nbr = get_random_image(25, 1);
        let clothe_nbr = get_random_image(12, 1);
        let eyebrow_nbr = get_random_image(20, 1);
        let eye_nbr = get_random_image(25, 1);
        let mouth_nbr = get_random_image(25, 1);
        let nose_nbr = get_random_image(4, 1);
        let fronthair_nbr = get_random_image(25, 1);

        let backhair_img = new Image();
        let body_img = new Image();
        let clothe_img = new Image();
        let eyebrow_img = new Image();
        let eye_img = new Image();
        let mouth_img = new Image();
        let nose_img = new Image();
        let fronthair_img = new Image();

        backhair_img.crossOrigin = "anonymous";
        body_img.crossOrigin = "anonymous";
        clothe_img.crossOrigin = "anonymous";
        eyebrow_img.crossOrigin = "anonymous";
        eye_img.crossOrigin = "anonymous";
        nose_img.crossOrigin = "anonymous";
        mouth_img.crossOrigin = "anonymous";
        fronthair_img.crossOrigin = "anonymous";

        backhair_img.src = path + "backhairs/backhair" + backhair_nbr;
        body_img.src = path + "bodys/body" + body_nbr;
        clothe_img.src = path + "clothes/clothes" + clothe_nbr;
        eyebrow_img.src = path + "eyebrows/eyebrows" + eyebrow_nbr;
        eye_img.src = path + "eyes/eyes" + eye_nbr;
        mouth_img.src = path + "mouths/mouth" + mouth_nbr;
        nose_img.src = path + "noses/nose" + nose_nbr;
        fronthair_img.src = path + "fronthairs/fronthair" + fronthair_nbr;

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
            ctx.drawImage(clothe_img, 0, 0);
            ctx.drawImage(eyebrow_img, 0, 0);
            ctx.drawImage(eye_img, 0, 0);
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
