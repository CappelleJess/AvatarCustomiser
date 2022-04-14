var random_images_array = ["", "",];

function getRandomImage(imgAr, path) {
  path = path || 'img/preset/';
  var num = Math.floor(Math.random() * imgAr.length);
  var img = imgAr [];
  var ImgStr = '<img src="' + path + img + 'alt = ""';
  document.write(imgStr); document.close();
}