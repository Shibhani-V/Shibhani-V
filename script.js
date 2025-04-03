let images = ["image1.png", "image2.png", "image3.png"];
let index = 0;
// Change Image Background Color
function changeBackground() {
	let selectedColor = document.getElementById("colorPicker").value;
    
  // Mapping color names to corresponding images
  let imageMap = {
		"white": "image1.png",
		"deep_pink": "image1_deep_pink.png",
    "pink": "image1_pastel_pink.png",
    "green": "image1_green.png"
	};

  // Change the image source dynamically
  document.getElementById("testImage").src = imageMap[selectedColor];
}

// Carousel Functionality
function nextImage() {
	index = (index + 1) % images.length;
	document.getElementById("carouselImage").src = images[index];
}

// Cookies Popup
function acceptCookies() {
	document.getElementById("cookiePopup").style.display = "none";
}