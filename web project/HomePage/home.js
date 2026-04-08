// DOM Elements
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("close-sidebar");
const overlay = document.getElementById("overlay");
const brand = document.getElementById("brand");
const navLinks = document.querySelectorAll(".nav-menu a");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const addToCartBtns = document.querySelectorAll(".product-card .btn");
const searchInput = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar .search-btn");
const clearBtn = document.querySelector(".search-bar .clear-btn");
const serviceCards = document.querySelectorAll(".service-card");
const productCards = document.querySelectorAll(".product-card");
const featuredCards = document.querySelectorAll(".featured-card");

// Sidebar Toggle
function toggleSidebar() {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
}

hamburger.addEventListener("click", toggleSidebar);
closeSidebar.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", toggleSidebar);

// Smooth Scrolling
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

brand.addEventListener("click", () => smoothScroll("#home"));

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("href");
    smoothScroll(target);

    // Close sidebar on mobile after clicking nav link
    if (window.innerWidth <= 768) {
      toggleSidebar();
    }

    // Update active nav link
    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    link.classList.add("active");
  });
});

// Image Slider
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function startSlideShow() {
  slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  stopSlideShow();
  startSlideShow();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  stopSlideShow();
  startSlideShow();
});

// Start slideshow on page load
startSlideShow();

// Add to Cart functionality (basic)
addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Item added to cart!");
  });
});

// Search functionality (basic filtering)
function filterItems(items, query) {
  const lowerQuery = query.toLowerCase();
  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    if (text.includes(lowerQuery)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function performSearch() {
  const query = searchInput.value.trim();
  if (query === "") {
    // Show all items if search is empty
    [serviceCards, productCards, featuredCards].forEach((cards) => {
      cards.forEach((card) => (card.style.display = "block"));
    });
    clearBtn.style.display = "none";
  } else {
    filterItems(serviceCards, query);
    filterItems(productCards, query);
    filterItems(featuredCards, query);
    clearBtn.style.display = "inline-block";
  }
}

function clearSearch() {
  searchInput.value = "";
  performSearch();
}

// Live search on input
searchInput.addEventListener("input", performSearch);

// Search on button click
searchBtn.addEventListener("click", performSearch);

// Clear search
clearBtn.addEventListener("click", clearSearch);

// Search on Enter key
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    performSearch();
  }
});

// Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

// Observe elements for fade-in animation
document
  .querySelectorAll(".service-card, .featured-card, .product-card")
  .forEach((card) => {
    observer.observe(card);
  });

// Loading effect (simple)
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
