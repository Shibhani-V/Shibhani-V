// Change Image Background Color
function changeBackground() {
	let imageContainer = document.querySelector(".image-container");
	imageContainer.style.backgroundColor = imageContainer.style.backgroundColor === "yellow" ? "white" : "yellow";
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