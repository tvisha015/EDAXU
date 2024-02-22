let profileDropdownList = document.querySelector(".profile-dropdown-list");
let btn = document.querySelector(".profile-dropdown-btn");

let classList = profileDropdownList.classList;

const toggle = () => classList.toggle("active");

window.addEventListener("click", function (e) {
  if (!btn.contains(e.target)) classList.remove("active");
});


const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const totalSlides = slides.length;
const slideWidth = slides[0].clientWidth;

function nextSlide() {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  updateSlider();
}

function updateSlider() {
  const offset = -currentIndex * slideWidth;
  slider.style.transform = `translateX(${offset}px)`;
}

// Start the sliding animation
setInterval(nextSlide, 2000); // Change slide every 3 seconds



window.onload = function() {
  const slider = document.querySelector('.custom-slider');
  const slides = document.querySelectorAll('.custom-slide');
  let currentIndex = 1; // Start with the first duplicated slide

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length - 3) { // Adjust to account for additional slides
      currentIndex = 1;
      slider.style.transition = 'none'; // Disable transition for instant jump to the first duplicate slide
    }
    updateSlider();
  }

  function updateSlider() {
    const offset = -currentIndex * slides[0].offsetWidth;
    slider.style.transform = `translateX(${offset}px)`;
    slider.style.transition = 'transform 0.3s ease'; // Re-enable transition after moving to the first duplicate slide
  }

  setInterval(nextSlide, 1000); // Change slide every 3 seconds
};

