var random_images_array = ["", "",];

const queryString = window.location.search;
        const params = new URLSearchParams(queryString);
        let gender = params.get('gender');
        if (gender != 'man') gender = 'woman';
        gender = gender + "/";
        console.log(gender);

function getRandomImage(imgAr, path) {
  path = path || 'img/preset/';
  var num = Math.floor(Math.random() * imgAr.length);
  var img = imgAr;
  var ImgStr = '<img src="' + path + img + 'alt = ""';
  document.write(imgStr); document.close();
}