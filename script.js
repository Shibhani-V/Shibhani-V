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
    "green": "image1_green.png",
		"iphone_15": "image2.png"
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

// script.js
function updateTime() {
  const timeElement = document.getElementById('current-time');
  const now = new Date();
  const formatted = now.toLocaleTimeString(); // e.g., "3:25:45 PM"
  timeElement.textContent = formatted;
}

// Initial call
updateTime();

// Update every second (optional)
setInterval(updateTime, 1000);