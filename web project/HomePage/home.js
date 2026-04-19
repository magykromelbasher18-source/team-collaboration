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

// Shared cart is handled by shared-cart.js
// Make sure shared-cart.js is loaded before home.js in home.html

// Sidebar Toggle
function toggleSidebar() {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
}

hamburger.addEventListener("click", toggleSidebar);
closeSidebar.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", toggleSidebar);

// Open sidebar from hero buttons
const bookButtons = document.querySelectorAll(".book-btn");
bookButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // Scroll to services section instead of just opening sidebar
    smoothScroll("#services");
  });
});

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
    const target = link.getAttribute("href");
    if (target.startsWith("#")) {
      e.preventDefault();
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
    }
    // For external links like ../hair/hair.html, allow default navigation
  });
});

// Also handle sidebar menu links
const sidebarLinks = document.querySelectorAll(".sidebar-menu a");
sidebarLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // Don't prevent default for external links - let them navigate
    const href = link.getAttribute("href");
    if (href && href.startsWith("../")) {
      // External link - allow navigation
      return;
    }
    // Internal link - prevent default and smooth scroll
    e.preventDefault();
    smoothScroll(href);
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
    const productPriceText = card.querySelector(".price").textContent;
    const productPrice =
      parseFloat(productPriceText.replace(/[^0-9.]/g, "")) || 0;
    let productImage = card.querySelector("img")?.getAttribute("src") || "";
    if (
      productImage &&
      !productImage.startsWith("http") &&
      !productImage.startsWith("../")
    ) {
      productImage = `../HomePage/${productImage}`;
    }
    const itemId = `home-${productName.toLowerCase().replace(/\s+/g, "-")}`;
    const item = {
      id: itemId,
      page: "home",
      image: productImage,
      name: productName,
      price: productPrice,
      tier: "essential",
      duration: "Flexible",
      includes: ["Home service", "Beauty care"],
    };

    if (cartHas(item.id, item.page)) {
      window.location.href = "../cart/cart.html";
      return;
    }

    cartAdd(item);
    alert(
      `"${productName}" has been added to your cart!\nCart total: ${cartCount()} item(s).`,
    );
  });
});

// Featured Services "Book Now" buttons
const featuredBookButtons = document.querySelectorAll(".featured .btn");
featuredBookButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const card = btn.closest(".featured-card");
    const serviceTitle = card.querySelector("h3").textContent.toLowerCase();

    // Redirect to appropriate service page based on service type
    if (serviceTitle.includes("hair")) {
      window.location.href = "../hair/hair.html";
    } else if (
      serviceTitle.includes("manicure") ||
      serviceTitle.includes("pedicure")
    ) {
      window.location.href = "../nails/nails.html";
    } else if (serviceTitle.includes("eyelash")) {
      window.location.href = "../lashes/lashes.html";
    } else {
      // Default fallback - open sidebar
      if (!sidebar.classList.contains("open")) {
        toggleSidebar();
      }
    }
  });
});

// Service Category Links (HAYYY list items)
const serviceCategories = document.querySelectorAll(".HAYYY li");
serviceCategories.forEach(function (category) {
  category.addEventListener("click", function () {
    const categoryId = category.id;
    if (categoryId === "hair") {
      window.location.href = "../hair/hair.html";
    } else if (categoryId === "nails") {
      window.location.href = "../nails/nails.html";
    } else if (categoryId === "lashes") {
      window.location.href = "../lashes/lashes.html";
    } else if (categoryId === "makeup") {
      window.location.href = "../makeup/makeup.html";
    }
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
