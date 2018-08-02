// YOUR TASK: Add more pictures!
var pictures = ['/imgs/images.jpeg','./imgs/images (1).jpeg','./imgs/images (2).jpeg','./imgs/images (3).jpeg','./imgs/sea1.jpeg','./imgs/dog.jpg'];
var currentIndex = 0;

function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }

document.getElementsByTagName("img")[0].src = pictures[currentIndex];
}

//grab the button
//add the event listener

document.getElementsByTagName("img")[0].addEventListener("click", showNextPicture);
