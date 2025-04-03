// Change Image Background Color
function changeBackground() {
	let image = document.getElementById("testImage");
	image.style.backgroundColor = image.style.backgroundColor === "yellow" ? "transparent" : "yellow";
}

// Carousel Functionality
let images = ["image1.png", "image2.png", "image3.png"];
let index = 0;

function nextImage() {
	index = (index + 1) % images.length;
	document.getElementById("carouselImage").src = images[index];
}

// Cookies Popup
function acceptCookies() {
	document.getElementById("cookiePopup").style.display = "none";
}