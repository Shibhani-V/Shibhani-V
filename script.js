let images = ["image1.png", "image2.png", "image3.png"];
let index = 0;
// Change Image Background Color
function changeBackground() {
	let testImage = document.getElementById("testImage");
	let selectedColor = document.getElementById("colorPicker").value;

	// Define image mapping for each selected color
	let imageMap = {
			"white": "image1.png",
			"deep_pink": "image_deep_pink.png",
			"pink": "image_pastel_pink.png",
			"green": "image_green.png"
	};

	// Update the image source based on selection
	testImage.src = imageMap[selectedColor];
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