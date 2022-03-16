/* main.js v0.1 by djphil (CC-BY-NC-SA 4.0) */

document.addEventListener("DOMContentLoaded", function() {
    var queryString = location.search;
    let params = new URLSearchParams(queryString);
    let gender = parseInt(params.get('gender'));
    let gender = params.get('gender').toString();
    let gender = params.get('gender');
    console.log(gender);

        fetch("json/assets.json").then(Response => Response.json()).then(data => {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            console.log(data[i].img);
            console.log(data[i].color);
        }
    });

    let canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        const download_btn = document.getElementById('download_btn');
        const background_btn = document.getElementById('background_btn');
        const colors = ["white", "lightyellow", "lightcoral", "lightblue", "lightpink", "lightgreen"];
        const path = "img/";

        const query = window.location.search;
        const param = new URLSearchParams(query);
        let gender = param.get('gender');
        if (gender != 'male') gender = 'female';
        gender = gender +  "/";

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

        backhair_img.src = path + gender + "backhairs/backhair" + backhair_nbr;
        body_img.src = path + "both/bodys/body" + body_nbr;
        clothe_img.src = path + "both/clothes/clothes" + clothe_nbr;
        eyebrow_img.src = path + "both/eyebrows/eyebrows" + eyebrow_nbr;
        eye_img.src = path + gender + "eyes/eyes" + eye_nbr;
        mouth_img.src = path + gender + "mouths/mouth" + mouth_nbr;
        nose_img.src = path + "both/noses/nose" + nose_nbr;
        accessorie_img.src = path + "both/accessories/accessories" + accessorie_nbr; 
        fronthair_img.src = path + gender + "fronthairs/fronthair" + fronthair_nbr;

        let background_color = get_random_color();

        window.onload = function() {
            draw_avatar();
        };

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
            ctx.drawImage(accessories_img, 0, 0);            
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
