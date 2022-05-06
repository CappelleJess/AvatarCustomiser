document.addEventListener("DOMContentLoaded", function() {

        fetch("json/assets.json").then(Response => Response.json()).then(data => {
            for (let i = 0; i < data.length; i++) {
                console.log(data[i]);
                console.log(data[i].img);
                console.log(data[i].gender);
                console.log(data[i].color);
            }
        });

    if (canvas1.getContext || canvas2.getContext || canvas3.getContext || canvas4.getContext || canvas5.getContext) {
        let canvas1 = document.getElementById('canvas1');
        let canvas2 = document.getElementById('canvas2');
        let canvas3 = document.getElementById('canvas3');
        let canvas4 = document.getElementById('canvas4');
        let canvas5 = document.getElementById('canvas5');
        const ctx1 = canvas1.getContext('2d');
        const ctx2 = canvas2.getContext('2d');
        const ctx3 = canvas3.getContext('2d');
        const ctx4 = canvas4.getContext('2d');
        const ctx5 = canvas5.getContext('2d');
        const download_btn = document.getElementById('download_btn');
        const colors = ["lightcoral", "lightblue", "lightpink", "lightgreen"];
        const path = "img/";

        const queryString = window.location.search;
        const params = new URLSearchParams(queryString);
        let gender = params.get('gender');
        if (gender != 'man') gender = 'woman';
        gender = gender + "/";
        console.log(gender);

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

        window.onload = function() {
            draw_avatar1();
        };

        window.onload = function() {
            draw_avatar2();
        };

        window.onload = function() {
            draw_avatar3();
        };

        window.onload = function() {
            draw_avatar4();
        };

        window.onload = function() {
            draw_avatar5();
        };

        window.onload = function() {
            background_color = get_random_color();
            draw_avatar();
        };

        download_btn.addEventListener('click', function(e) {
            var link = document.createElement('a');
            link.download = 'avatar.png';
            link.href = canvases.toDataURL();
            link.click();
            link.delete;
        });

        function draw_avatar1() {
            ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
            ctx1.fillStyle = background_color;
            ctx1.fillRect(0, 0, 300, 300);
            ctx1.drawImage(backhair_img, -100, -70);
            ctx1.drawImage(body_img, -100, -70);
            ctx1.drawImage(clothes_img, -100, -70);
            ctx1.drawImage(eyebrows_img, -100, -70);
            ctx1.drawImage(eyes_img, -100, -70);
            ctx1.drawImage(mouth_img, -100, -70);
            ctx1.drawImage(nose_img, -100, -70);
            ctx1.drawImage(accessories_img, -100, -70);            
            ctx1.drawImage(fronthair_img, -100, -70);
        }

        function draw_avatar2() {
            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
            ctx2.fillStyle = background_color;
            ctx2.fillRect(0, 0, 300, 300);
            ctx2.drawImage(backhair_img, -100, -70);
            ctx2.drawImage(body_img, -100, -70);
            ctx2.drawImage(clothes_img, -100, -70);
            ctx2.drawImage(eyebrows_img, -100, -70);
            ctx2.drawImage(eyes_img, -100, -70);
            ctx2.drawImage(mouth_img, -100, -70);
            ctx2.drawImage(nose_img, -100, -70);
            ctx2.drawImage(accessories_img, -100, -70);            
            ctx2.drawImage(fronthair_img, -100, -70);
        }

        function draw_avatar() {
            ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
            ctx3.fillStyle = background_color;
            ctx3.fillRect(0, 0, 300, 300);
            ctx3.drawImage(backhair_img, -100, -70);
            ctx3.drawImage(body_img, -100, -70);
            ctx3.drawImage(clothes_img, -100, -70);
            ctx3.drawImage(eyebrows_img, -100, -70);
            ctx3.drawImage(eyes_img, -100, -70);
            ctx3.drawImage(mouth_img, -100, -70);
            ctx3.drawImage(nose_img, -100, -70);
            ctx3.drawImage(accessories_img, -100, -70);            
            ctx3.drawImage(fronthair_img, -100, -70);
        }

        function draw_avatar() {
            ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
            ctx4.fillStyle = background_color;
            ctx4.fillRect(0, 0, 300, 300);
            ctx4.drawImage(backhair_img, -100, -70);
            ctx4.drawImage(body_img, -100, -70);
            ctx4.drawImage(clothes_img, -100, -70);
            ctx4.drawImage(eyebrows_img, -100, -70);
            ctx4.drawImage(eyes_img, -100, -70);
            ctx4.drawImage(mouth_img, -100, -70);
            ctx4.drawImage(nose_img, -100, -70);
            ctx4.drawImage(accessories_img, -100, -70);            
            ctx4.drawImage(fronthair_img, -100, -70);
        }

        function draw_avatar() {
            ctx5.clearRect(0, 0, canvas5.width, canvas5.height);
            ctx5.fillStyle = background_color;
            ctx5.fillRect(0, 0, 300, 300);
            ctx5.drawImage(backhair_img, -100, -70);
            ctx5.drawImage(body_img, -100, -70);
            ctx5.drawImage(clothes_img, -100, -70);
            ctx5.drawImage(eyebrows_img, -100, -70);
            ctx5.drawImage(eyes_img, -100, -70);
            ctx5.drawImage(mouth_img, -100, -70);
            ctx5.drawImage(nose_img, -100, -70);
            ctx5.drawImage(accessories_img, -100, -70);            
            ctx5.drawImage(fronthair_img, -100, -70);
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