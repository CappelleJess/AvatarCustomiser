document.addEventListener("DOMContentLoaded", function() {

        fetch("json/assets.json").then(Response => Response.json()).then(data => {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            console.log(data[i].img);
            console.log(data[i].gender);
            console.log(data[i].color);
        }
    });

    let canvas = document.getElementById('canvas');

    function setup() {
        const ctx = canvas.getElementById('2d');
        const download_btn = document.getElementById('download_btn');
        const path = "img/preset/";
        const queryString = window.location.search;
        const params = new URLSearchParams(queryString);
        let gender = params.get('gender');
        if (gender != 'man') gender = 'woman';
        gender = gender + "/";
        console.log(gender);

        let woman_nbr = get_random_image(25, 1);
        let man_nbr = get_random_image (7, 1);

        let woman_img = new Image();
        let man_img = new Image();

        woman_img.crossOrigin = "anonymous";
        man_img.crossOrigin = "anonymous";

        woman_img.src = path + gender + "woman/woman" + woman_nbr;
        man_img.src = path + gender + "man/man" + man_nbr;

        window.onload = function() {
            draw_avatar();
        };

        download_btn.addEventListener('click', function(e) {
            var link = document.createElement('a');
            link.download = 'avatar.png';
            link.href = canvas.toDataURL();
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

    };