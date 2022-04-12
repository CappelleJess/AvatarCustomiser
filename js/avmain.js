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
        let canvas = createCanvas (150, 150);
        canvas.parent('gallery');
    }

    function drawBackground() {
        background(random(255), random(255), random(255));
    }

});