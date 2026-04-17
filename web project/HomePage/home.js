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
const searchInput = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar .search-btn");
const clearBtn = document.querySelector(".search-bar .clear-btn");
const productCards = document.querySelectorAll(".product-card");
const featuredCards = document.querySelectorAll(".featured-card");

// Cart state
let cart = JSON.parse(localStorage.getItem("pamperCart") || "[]");

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

brand.addEventListener("click", function () {
  smoothScroll("#home");
});

navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = link.getAttribute("href");
    smoothScroll(target);

    // Close sidebar on mobile after clicking nav link
    if (sidebar.classList.contains("open")) {
      toggleSidebar();
    }

    // Update active nav link
    navLinks.forEach(function (navLink) {
      navLink.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// Also handle sidebar menu links
const sidebarLinks = document.querySelectorAll(".sidebar-menu a");
sidebarLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = link.getAttribute("href");
    smoothScroll(target);
    toggleSidebar();
  });
});

// Image Slider
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  slides.forEach(function (slide, i) {
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
  slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

nextBtn.addEventListener("click", function () {
  nextSlide();
  stopSlideShow();
  startSlideShow();
});

prevBtn.addEventListener("click", function () {
  prevSlide();
  stopSlideShow();
  startSlideShow();
});

// Start slideshow on page load
startSlideShow();

const addToCartBtns = document.querySelectorAll(".add-to-cart");

addToCartBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const card = btn.closest(".product-card");
    const productName = card.querySelector("h3").textContent;
    const productPrice = card.querySelector(".price").textContent;

    cart.push({ name: productName, price: productPrice });
    localStorage.setItem("pamperCart", JSON.stringify(cart));
    alert(
      `"${productName}" has been added to your cart!\nCart total: ${cart.length} item(s).`,
    );
  });
});

// Search functionality
function filterItems(items, query) {
  const lowerQuery = query.toLowerCase();
  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(lowerQuery) ? "block" : "none";
  });
}

function performSearch() {
  const query = searchInput.value.trim();
  if (query === "") {
    [productCards, featuredCards].forEach(function (cards) {
      cards.forEach(function (card) {
        card.style.display = "block";
      });
    });
    clearBtn.style.display = "none";
  } else {
    filterItems(productCards, query);
    filterItems(featuredCards, query);
    clearBtn.style.display = "inline-block";
  }
}

function clearSearch() {
  searchInput.value = "";
  performSearch();
}

searchInput.addEventListener("input", performSearch);
searchBtn.addEventListener("click", performSearch);
clearBtn.addEventListener("click", clearSearch);
searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    performSearch();
  }
});

// Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

document
  .querySelectorAll(".featured-card, .product-card")
  .forEach(function (card) {
    observer.observe(card);
  });

// Loading effect
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});
