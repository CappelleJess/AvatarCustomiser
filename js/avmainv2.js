/* avmain.js v0.1 by djphil (CC-BY-NC-SA 4.0) */

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementsByClassName('canvas');
    const canvas_size = 150;

    for(let i = 0; i < canvas.length; i++) {
        if (canvas[i].getContext) {
            const ctx = canvas[i].getContext('2d');
            const download_btn = document.getElementById('download_btn_' + i);
            // const background_btn = document.getElementById('background_btn');
            const colors = ["lightcoral", "lightblue", "lightpink", "lightgreen"];
            const path = "img/";

            const queryString = window.location.search;
            const params = new URLSearchParams(queryString);
            let gender = params.get('gender');
            if (gender != 'man') gender = 'woman';
            gender = gender + "/";

            let matched = get_random_image(35, 1);
            let backhair_nbr = matched;
            let body_nbr = get_random_image(25, 1);
            let clothes_nbr = get_random_image(12, 1);
            let eyebrows_nbr = matched;
            let eyes_nbr = get_random_image(30, 1);
            let mouth_nbr = get_random_image(25, 1);
            let nose_nbr = get_random_image(4, 1);
            let accessories_nbr = get_random_image(12, 1);        
            let fronthair_nbr = matched;

            let backhair_img = new Image();
            let body_img = new Image();
            let clothes_img = new Image();
            let eyebrows_img = new Image();
            let eyes_img = new Image();
            let mouth_img = new Image();
            let nose_img = new Image();
            let accessories_img = new Image();
            let fronthair_img = new Image();

            backhair_img.crossOrigin = "anonymous";
            body_img.crossOrigin = "anonymous";
            clothes_img.crossOrigin = "anonymous";
            eyebrows_img.crossOrigin = "anonymous";
            eyes_img.crossOrigin = "anonymous";
            nose_img.crossOrigin = "anonymous";
            mouth_img.crossOrigin = "anonymous";
            accessories_img.crossOrigin = "anonymous";
            fronthair_img.crossOrigin = "anonymous";

            backhair_img.src = path + gender + "backhair/backhair" + backhair_nbr;
            body_img.src = path + "unisex/body/body" + body_nbr;
            clothes_img.src = path + "unisex/clothes/clothes" + clothes_nbr;
            eyebrows_img.src = path + "unisex/eyebrows/eyebrows" + eyebrows_nbr;
            eyes_img.src = path + gender + "eyes/eyes" + eyes_nbr;
            mouth_img.src = path + gender + "mouth/mouth" + mouth_nbr;
            nose_img.src = path + "unisex/nose/nose" + nose_nbr;
            accessories_img.src = path + "unisex/accessories/accessories" + accessories_nbr;
            fronthair_img.src = path + gender + "fronthair/fronthair" + fronthair_nbr;

            let background_color = get_random_color();

            set_canvas_size(i);

            backhair_img.onload = function() {draw_avatar();}
            body_img.onload = function() {draw_avatar();}
            clothes_img.onload = function() {draw_avatar();}
            eyebrows_img.onload = function() {draw_avatar();}
            eyes_img.onload = function() {draw_avatar();}
            nose_img.onload = function() {draw_avatar();}
            mouth_img.onload = function() {draw_avatar();}
            accessories_img.onload = function() {draw_avatar();}
            fronthair_img.onload = function() {draw_avatar();}

            /*
            background_btn.addEventListener('click', function(e) {
                background_color = get_random_color();
                draw_avatar();
            });
            */

            download_btn.addEventListener('click', function(e) {
                var link = document.createElement('a');
                link.download = 'avatar_' + i + '.png';
                link.href = canvas[i].toDataURL();
                link.click();
                link.delete;
            });

            function draw_avatar() {
                ctx.clearRect(0, 0, canvas[i].width, canvas[i].height);
                ctx.fillStyle = background_color;
                ctx.fillRect(0, 0, canvas[i].width, canvas[i].height);
                ctx.drawImage(backhair_img, 0, 0, canvas[i].width, canvas[i].height);
                ctx.drawImage(body_img, 0, 0, canvas[i].width, canvas[i].height);
                ctx.drawImage(clothes_img, 0, 0, canvas[i].width, canvas[i].height);
                ctx.drawImage(eyebrows_img, 0, 0, canvas[i].width, canvas[i].height);
                ctx.drawImage(eyes_img, 0, 0, canvas[i].width, canvas[i].height);
                ctx.drawImage(mouth_img, 0, 0, canvas[i].width, canvas[i].height);
                ctx.drawImage(nose_img, 0, 0, canvas[i].width, canvas[i].height);
                ctx.drawImage(accessories_img, 0, 0, canvas[i].width, canvas[i].height);            
                ctx.drawImage(fronthair_img, 0, 0, canvas[i].width, canvas[i].height);
            }

            function get_random_image(a, b) {
                return Math.floor(Math.random() * a) + b + ".png";
            }

            function get_random_color() {
                return colors[parseInt(Math.random() * colors.length)];
            }
        }

        else {alert('Sorry, your browser do not support canvas ...');}
    }

    function set_canvas_size(i) {
        canvas[i].width = canvas_size;
        canvas[i].height = canvas_size;
        canvas[i].style.width = canvas[i].width + 'px';
        canvas[i].style.height = canvas[i].height + 'px';
    }
});
