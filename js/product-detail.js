
const imageList = [
  'asset/iphone12.jpg',
  'asset/cloth.jpg',
  'asset/book.jpg'
];

let currentIndex = 0;
const mainImage = document.getElementById('main-image');

function showImage(index) {
  currentIndex = index;
  mainImage.src = imageList[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % imageList.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  showImage(currentIndex);
}

// Optional: clicking thumbnail updates main image too
document.querySelectorAll('.thumbnails img').forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    showImage(index);
  });
});


