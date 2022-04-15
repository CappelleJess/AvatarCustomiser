
const queryString = window.location.search;
        const params = new URLSearchParams(queryString);
        let gender = params.get('gender');
        if (gender != 'man') gender = 'woman';
        gender = gender + "/";
        console.log(gender);
  const path = "img/preset/";
  const download_btn = document.getElementById('download_btn');

  let woman_nbr = getRandomImage(25, 1);
  let man_nbr = getRandomImage(7, 1);

  let woman_img = new Image();
  let man_img = new Image();

  woman_img.crossOrigin = "anonymous";
  man_img.src = "anonymous";

  woman_img.src = path + gender + "woman/woman" + woman_nbr;
  man_img.src = path + gender + "man/man" + man_nbr; 

  var num = Math.floor(Math.random() * imgAr.length);
  var img = imgAr;
  document.write(imgStr); document.close();

  download_btn.addEventListener('click', function(e) {
  var link = document.createElement('a');
  link.download = 'avatar.png';
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
  });

function getRandomImage(imgAr, path) {

}