var imgs = document.querySelectorAll("img");
var counter = 0;

imgs.forEach((img, index) => {
  if (index === 0) {
    img.style.height = "400px";
  } else {
    img.style.height = "0";
  }
});

var current = 0;
function hideImg(n) {
  // imgs[n].style.display = "none";
  imgs[n].style.height = "0";
  imgs[n].style.transform = "rotate(0deg)";

}
function showImg(n) {
  // imgs[n].style.display = "block";
  imgs[n].style.height = "400px";
  imgs[n].style.transform = "rotate(360deg)";
}

function previous() {
  hideImg(counter);
  counter--;
  if (counter === -1) {
    counter = imgs.length - 1;
  }
  showImg(counter);
}
function next() {
  hideImg(counter);
  counter++;
  if (counter === imgs.length) {
    counter = 0;
  }
  showImg(counter);
}
