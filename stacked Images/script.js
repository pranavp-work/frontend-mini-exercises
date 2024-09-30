let currentIndex = 0;
const images = document.querySelectorAll('.stacked-img');
const totalImages = images.length;

function rotateImages() {
    // Hide the current image
    images[currentIndex].classList.remove('show');
    images[currentIndex].classList.add('hide');

    // Calculate the next index
    currentIndex = (currentIndex + 1) % totalImages;

    // Show the next image
    images[currentIndex].classList.remove('hide');
    images[currentIndex].classList.add('show');
}

// Start with the first image visible
images[0].classList.add('show');

// Rotate images every 3 seconds
setInterval(rotateImages, 3000);
