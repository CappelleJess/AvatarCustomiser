let getRandomImage = () => {
  var images = new Array();

  var randomNum1 = Math.floor(Math.random() * images.length);
  var randomNum2 = Math.floor(Math.random() * images.length);

    if (randomNum1 == randomNum2) {
      return getRandomImage();
    }

  document.getElementById("").src = images[randomNum1];
  document.getElementById("").src = images[randomNum2];
};