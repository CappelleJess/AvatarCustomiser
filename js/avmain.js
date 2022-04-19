window.onload = function() {

var woman = new Image();
      var woman_nbr = Math.floor(Math.random()*25)+1;
      var woman_nm = "img/preset/woman/woman" + woman_nbr + ".png";
      woman.src = woman_nm;

      woman.onload = function() {
        womanrandom();
      }

      function womanrandom() {

        let image = document.getElementById('avatar');
        const ctx = image.getContext('2d');

        ctx.drawImage(woman, 0, 0);
      }
    }