document.addEventListener("DOMContentLoaded", function() {

  var img = document.createElement("img");
  const path = "img/preset/";

  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  let gender = params.get('gender');
  if (gender != 'man') gender = 'woman';
  gender = gender + "/";
  console.log(gender);

  let woman_nbr = get_random_image(25, 1);
  let man_nbr = get_random_image(7, 1);

  let woman_img = new Image();
  let man_img = new Image();

  woman_img.crossOrigin = "anonymous";
  man_img.crossOrigin = "anonymous";

  woman_img.src = path + gender + "woman" + woman_nbr;
  man_img.src = path + gender + "man" + man_nbr;

  window.onload = function() {
    draw_avatar()
  };

})