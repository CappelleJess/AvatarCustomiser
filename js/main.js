/* main.js v0.1 by djphil (CC-BY-NC-SA 4.0) */

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

    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        const download_btn = document.getElementById('download_btn');
        const background_btn = document.getElementById('background_btn');
        const colors = ["lightcoral", "lightblue", "lightpink", "lightgreen"];
        const path = "img/";

        const queryString = window.location.search;
        const params = new URLSearchParams(queryString);
        let gender = params.get('gender');
        if (gender != 'man') gender = 'woman';
        gender = gender + "/";
        console.log(gender);

        // window.openSelect = function(id) {
        //     var x = document.getElementsByClassName("class");
        //     for (i = 0; i < x.length; i++) {
        //         x[i].style.display = "none";  
        //     }
        // document.getElementById(id).style.display = "block";  
        // };

        window.mySelect = function(id) {
            var x = document.getElementById(id);
            if (x.className.indexOf("w3-show") == -1) {
                x.className += " w3-show";
            } else { 
                x.className = x.className.replace(" w3-show", "");
            }
        };

        let matched = get_random_image(35, 1);
            let blondhair_nbr = get_random_img(7, 1);
            let gingerhair_nbr = get_random_img(7, 1);
            let auburnhair_nbr = get_random_img(7, 1);
            let chestnuthair_nbr = get_random_img(7, 1);
            let blackhair_nbr = get_random_img(7, 1);
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
            let blondhair_img = new Image();
            let gingerhair_img = new Image();
            let auburnhair_img = new Image();
            let chestnuthair_img = new Image();
            let blackhair_img = new Image();
        let body_img = new Image();
        let clothes_img = new Image();
        let eyebrows_img = new Image();
        let eyes_img = new Image();
        let mouth_img = new Image();
        let nose_img = new Image();
        let accessories_img = new Image();
        let fronthair_img = new Image();

        backhair_img.crossOrigin = "anonymous";
            blondhair_img.crossOrigin = "anonymous";
            gingerhair_img.crossOrigin = "anonymous";
            auburnhair_img.crossOrigin = "anonymous";
            chestnuthair_img.crossOrigin = "anonymous";
            blackhair_img.crossOrigin = "anonymous";
        body_img.crossOrigin = "anonymous";
        clothes_img.crossOrigin = "anonymous";
        eyebrows_img.crossOrigin = "anonymous";
        eyes_img.crossOrigin = "anonymous";
        nose_img.crossOrigin = "anonymous";
        mouth_img.crossOrigin = "anonymous";
        accessories_img.crossOrigin = "anonymous";
        fronthair_img.crossOrigin = "anonymous";

        backhair_img.src = path + gender + "backhair/backhair" + backhair_nbr;
            blondhair_img.src = path + gender + "backhair/blond/blond" + blondhair_nbr;
            gingerhair_img.src = path + gender + "backhair/ginger/ginger" + blondhair_nbr;
            auburnhair_img.src = path + gender + "backhair/auburn/auburn" + auburnhair_nbr,
            chestnuthair_img.src = path + gender + "backhair/chestnut/chestnut" + chestnuthair_nbr;
            blackhair_img.src = path + gender + "backhair/black/black" + blackhair_nbr;
        body_img.src = path + "unisex/body/body" + body_nbr;
        clothes_img.src = path + "unisex/clothes/clothes" + clothes_nbr;
        eyebrows_img.src = path + "unisex/eyebrows/eyebrows" + eyebrows_nbr;
        eyes_img.src = path + gender + "eyes/eyes" + eyes_nbr;
        mouth_img.src = path + gender + "mouth/mouth" + mouth_nbr;
        nose_img.src = path + "unisex/nose/nose" + nose_nbr;
        accessories_img.src = path + "unisex/accessories/accessories" + accessories_nbr;
        fronthair_img.src = path + gender + "fronthair/fronthair" + fronthair_nbr;

        let background_color = get_random_color();

        window.draw_backhair = function() {
            ctx.drawImage(blondhair_img, 0, 0);
        }

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

        function get_random_color() {
            return colors[parseInt(Math.random() * colors.length)];
        }
    }

    else {alert('Sorry, your browser do not support canvas ...');}
});