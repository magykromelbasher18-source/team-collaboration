const PAGE = "makeup";
const services = [
  {
    id: 1,
    name: "Full Bridal Glam",
    category: "bridal",
    tier: "luxury",
    price: 350,
    duration: "3–4 hrs",
    rating: 5.0,
    reviews: 142,
    image:
      "https://i.pinimg.com/736x/23/73/1d/23731da4dbe39a55a65b7bb3884e7f32.jpg",
    desc: "Complete bridal makeup with a full trial session, luxury products, and a touch-up kit included.",
    includes: [
      "Trial Session",
      "Day-of Application",
      "Touch-up Kit",
      "Lash Application",
    ],
  },
  {
    id: 2,
    name: "Bridal Trial Session",
    category: "bridal",
    tier: "premium",
    price: 150,
    duration: "2 hrs",
    rating: 4.9,
    reviews: 98,
    image:
      "https://static.showit.co/800/Mo0YNtuLF77HnTd6ezPZ-g/301451/keira_edit_3.jpg",
    desc: "A dedicated trial run to perfect your bridal look before the big day.",
    includes: [
      "Full Makeup Application",
      "Style Consultation",
      "Photo Session",
    ],
  },
  {
    id: 3,
    name: "Engagement Shoot Makeup",
    category: "bridal",
    tier: "premium",
    price: 180,
    duration: "1.5 hrs",
    rating: 4.8,
    reviews: 74,
    image:
      "https://images.unsplash.com/photo-1711128639071-001871ea08fe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFrZXVwJTIwbW9kZWx8ZW58MHx8MHx8fDI%3D",
    desc: "Camera-ready makeup designed to look stunning in photos.",
    includes: ["Full Face Makeup", "Lash Application", "Setting Spray"],
  },
  {
    id: 4,
    name: "Event Glam Package",
    category: "event",
    tier: "luxury",
    price: 220,
    duration: "2 hrs",
    rating: 4.9,
    reviews: 211,
    image: "https://themakeupevents.pl/lib/tf1ce0/209A7173-min-mc634axv.jpg",
    desc: "Full glam for galas, charity events, awards nights, or any special occasion.",
    includes: [
      "Full Face Makeup",
      "Contouring",
      "Lash Application",
      "Setting Spray",
    ],
  },
  {
    id: 5,
    name: "Party Night Makeup",
    category: "event",
    tier: "essential",
    price: 90,
    duration: "1 hr",
    rating: 4.7,
    reviews: 183,
    image:
      "https://assets.teenvogue.com/photos/69332d189bf1f98889da7d47/1:1/w_3648,h_3648,c_limit/zara88.jpg",
    desc: "Bold and beautiful makeup for a night out, birthday party, or casual celebration.",
    includes: ["Full Face Makeup", "Lash Application"],
  },
  {
    id: 6,
    name: "Graduation Makeup",
    category: "event",
    tier: "essential",
    price: 80,
    duration: "45 min",
    rating: 4.8,
    reviews: 97,
    image:
      "https://images.squarespace-cdn.com/content/v1/63b9c5a2f6ac1158c5a60078/f7e1cf54-cdd3-40bb-b69b-45e28c842abb/graduation%2Bmakeup%2Band%2Bhairstyling%2Bwith%2BRuth%2BB%2BMedrano%2BBeauty.JPG",
    desc: "Polished, camera-ready makeup to celebrate your big achievement.",
    includes: ["Full Face Makeup", "Finishing Spray"],
  },
  {
    id: 7,
    name: "Editorial Shoot",
    category: "editorial",
    tier: "luxury",
    price: 400,
    duration: "3–5 hrs",
    rating: 5.0,
    reviews: 56,
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqiEv9HnEscuvAEg3gFfUFevTl69XtTGYpYAcNiTnY1a9o4piGoJdGE45uMaZIuUwGpGwMC4KDhCt8q_U4WQ6ahVSXv-AlcWyAYnYZAsP01tq-AEWwdaaHOOUQUn24DdEyew_iJi5_QNAGoI4epYI-gK57zJgPZmx2Pu49tBb1VM6sRLirqAh0x6cy71I/s6490/ABC_1635_RTCH.jpg",
    desc: "High-fashion, creative makeup for magazine shoots, campaigns, and fashion editorials.",
    includes: [
      "Concept Consultation",
      "Multiple Looks",
      "On-set Touch-ups",
      "Luxury Products",
    ],
  },
  {
    id: 8,
    name: "Creative / SFX Makeup",
    category: "editorial",
    tier: "premium",
    price: 250,
    duration: "2–3 hrs",
    rating: 4.9,
    reviews: 45,
    image:
      "https://images.unsplash.com/photo-1606158436222-1896b18c5d25?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1ha2V1cCUyMG1vZGVsfGVufDB8fDB8fHwy",
    desc: "Avant-garde and special effects makeup for artistic projects, performances, or themed events.",
    includes: ["Concept Design", "Full Application", "On-site Adjustments"],
  },
  {
    id: 9,
    name: "1-on-1 Makeup Lesson",
    category: "lesson",
    tier: "premium",
    price: 130,
    duration: "2 hrs",
    rating: 4.9,
    reviews: 120,
    image:
      "https://images.unsplash.com/photo-1616358278773-e5e4154a336f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1ha2V1cCUyMG1vZGVsfGVufDB8fDB8fHwy",
    desc: "A personalized lesson tailored to your skill level and goals.",
    includes: [
      "Personalized Lesson Plan",
      "Product Recommendations",
      "Practice Time",
    ],
  },
  {
    id: 10,
    name: "Beginner Basics Class",
    category: "lesson",
    tier: "essential",
    price: 70,
    duration: "1.5 hrs",
    rating: 4.8,
    reviews: 88,
    image:
      "https://images.unsplash.com/photo-1674045692313-433f7b439bf2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFrZXVwJTIwbW9kZWx8ZW58MHx8MHx8fDI%3D",
    desc: "Foundation, concealer, brows, and a simple eye look — perfect for beginners.",
    includes: ["Step-by-step Tutorial", "Product Guide"],
  },
  {
    id: 11,
    name: "Glow Facial + Makeup",
    category: "skincare",
    tier: "luxury",
    price: 280,
    duration: "2.5 hrs",
    rating: 4.9,
    reviews: 67,
    image:
      "https://images.unsplash.com/photo-1676439977206-b5ffdfc03da2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFrZXVwJTIwbW9kZWx8ZW58MHx8MHx8fDI%3D",
    desc: "A relaxing facial followed by a dewy, skin-first makeup look.",
    includes: [
      "Mini Facial",
      "Skin Prep",
      "Dewy Makeup Application",
      "Skincare Consultation",
    ],
  },
  {
    id: 12,
    name: "Skin Prep & Consultation",
    category: "skincare",
    tier: "essential",
    price: 60,
    duration: "45 min",
    rating: 4.7,
    reviews: 52,
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1ha2V1cCUyMG1vZGVsfGVufDB8fDB8fHwy",
    desc: "Learn how to prep and prime your skin for long-lasting, flawless makeup application.",
    includes: ["Skin Analysis", "Routine Advice", "Product Recommendations"],
  },
  {
    id: 13,
    name: "Clean Girl Makeup",
    category: "skincare",
    tier: "essential",
    price: 95,
    duration: "1 hr",
    rating: 4.9,
    reviews: 143,
    image:
      "https://usercontent.one/wp/www.thesundaysnug.com/wp-content/uploads/2024/04/Picture_of_clean_makeup_on_dark_skin.jpg?media=1694892413",
    desc: "Minimal, skin-focused makeup that celebrates your natural complexion.",
    includes: [
      "Skin Prep",
      "Minimal Makeup Application",
      "Natural Finish Spray",
    ],
  },
];

let activeCategory = "all",
  activeTier = "all",
  searchQuery = "",
  sortBy = "default";

function renderStars(r) {
  return (
    "★".repeat(Math.floor(r)) +
    (r % 1 >= 0.5 ? "½" : "") +
    "☆".repeat(5 - Math.floor(r) - (r % 1 >= 0.5 ? 1 : 0))
  );
}
function tierLabel(t) {
  return t === "luxury"
    ? "✦ Luxury"
    : t === "premium"
      ? "Premium"
      : "Essential";
}
function tierClass(t) {
  return "badge-" + t;
}

function getFiltered() {
  let list = [...services];
  if (activeCategory !== "all")
    list = list.filter((s) => s.category === activeCategory);
  if (activeTier !== "all") list = list.filter((s) => s.tier === activeTier);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(
      (s) =>
        s.name.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q),
    );
  }
  if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
  if (sortBy === "rating") list.sort((a, b) => b.rating - a.rating);
  if (sortBy === "name") list.sort((a, b) => a.name.localeCompare(b.name));
  return list;
}

function renderServices() {
  const grid = document.getElementById("productsGrid"),
    noRes = document.getElementById("noResults"),
    list = getFiltered();
  if (!list.length) {
    grid.innerHTML = "";
    noRes.style.display = "block";
    return;
  }
  noRes.style.display = "none";
  grid.innerHTML = list
    .map((s) => {
      const inCart = cartHas(s.id, PAGE),
        inWish = wishHas(s.id, PAGE);
      return `<div class="product-card" data-id="${s.id}">
      <div class="product-img-wrap">
        <img src="${s.image}" alt="${s.name}" loading="lazy"/>
        <span class="product-badge ${tierClass(s.tier)}">${tierLabel(s.tier)}</span>
        <div class="product-actions">
          <button class="action-btn wish-btn ${inWish ? "wishlisted" : ""}" data-id="${s.id}" aria-label="Wishlist">${inWish ? "♥" : "♡"}</button>
          <button class="action-btn quickview-btn" data-id="${s.id}" aria-label="Quick view">🔍</button>
        </div>
      </div>
      <div class="product-info">
        <p class="product-brand">${s.category.charAt(0).toUpperCase() + s.category.slice(1)}</p>
        <h3 class="product-name">${s.name}</h3>
        <p class="product-duration">⏱ ${s.duration}</p>
        <div class="product-stars">${renderStars(s.rating)} <span>(${s.reviews})</span></div>
        <div class="product-bottom">
          <div class="product-price">From $${s.price}</div>
          <button class="add-to-cart-btn ${inCart ? "in-cart" : ""}" data-id="${s.id}">${inCart ? "✓ Added" : "Add to Cart"}</button>
        </div>
      </div>
    </div>`;
    })
    .join("");
  grid.querySelectorAll(".add-to-cart-btn").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      handleAddToCart(parseInt(btn.dataset.id));
    }),
  );
  grid.querySelectorAll(".wish-btn").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      handleWishToggle(parseInt(btn.dataset.id));
    }),
  );
  grid.querySelectorAll(".quickview-btn").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openQuickModal(parseInt(btn.dataset.id));
    }),
  );
  grid
    .querySelectorAll(".product-card")
    .forEach((card) =>
      card.addEventListener("click", () =>
        openQuickModal(parseInt(card.dataset.id)),
      ),
    );
}

function handleAddToCart(id) {
  const s = services.find((x) => x.id === id);
  if (!s) return;
  if (cartHas(id, PAGE)) {
    window.location.href = "cart.html";
    return;
  }
  cartAdd({
    id: s.id,
    page: PAGE,
    name: s.name,
    price: s.price,
    image: s.image,
    tier: s.tier,
    duration: s.duration,
    desc: s.desc,
    includes: s.includes,
    date: "",
    time: "",
  });
  showGlobalToast(`🛒 "${s.name}" added to cart!`);
  renderServices();
}

function handleWishToggle(id) {
  const s = services.find((x) => x.id === id);
  if (!s) return;
  const item = {
    id: s.id,
    page: PAGE,
    name: s.name,
    price: s.price,
    image: s.image,
    tier: s.tier,
    duration: s.duration,
    desc: s.desc,
    includes: s.includes,
  };
  const added = wishToggle(item);
  showGlobalToast(
    added ? `♥ "${s.name}" saved to wishlist!` : "♡ Removed from wishlist",
  );
  renderServices();
  renderWishSidebar();
}

function openQuickModal(id) {
  const s = services.find((x) => x.id === id);
  if (!s) return;
  const inCart = cartHas(id, PAGE);
  document.getElementById("modalContent").innerHTML = `
    <div class="booking-header">
      <span class="product-badge ${tierClass(s.tier)}" style="position:static;display:inline-block;margin-bottom:10px;">${tierLabel(s.tier)}</span>
      <h2>${s.name}</h2><p>${s.desc}</p>
      <p style="margin-bottom:0.5rem;"><strong>Includes:</strong> ${s.includes.join(" · ")}</p>
      <p style="color:var(--text-muted);font-size:13px;">⏱ ${s.duration}</p>
      <div class="booking-price">From $${s.price}</div>
    </div>
    <form class="booking-form" id="quickForm" novalidate>
      <div><label>Your Full Name</label><input type="text" id="bName" placeholder="e.g. Sara Ahmed"/></div>
      <div><label>Email Address</label><input type="email" id="bEmail" placeholder="you@example.com"/></div>
      <div><label>Phone Number</label><input type="tel" id="bPhone" placeholder="+20 100 000 0000"/></div>
      <div><label>Special Requests (optional)</label><textarea id="bNotes" placeholder="Any notes or specific requests..."></textarea></div>
      <button type="submit" class="btn-primary" style="width:100%;justify-content:center;">${inCart ? "✓ Already in Cart — Go to Cart →" : "Add to Cart 🛒"}</button>
    </form>`;
  document.getElementById("quickForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (inCart) {
      document.getElementById("quickModal").classList.remove("open");
      window.location.href = "cart.html";
      return;
    }
    const name = document.getElementById("bName").value.trim(),
      email = document.getElementById("bEmail").value.trim();
    if (!name || !email) {
      showGlobalToast("⚠ Name and email are required.");
      return;
    }
    const item = {
      id: s.id,
      page: PAGE,
      name: s.name,
      price: s.price,
      image: s.image,
      tier: s.tier,
      duration: s.duration,
      desc: s.desc,
      includes: s.includes,
      clientName: name,
      clientEmail: email,
      clientPhone: document.getElementById("bPhone").value.trim(),
      notes: document.getElementById("bNotes").value.trim(),
      date: "",
      time: "",
    };
    cartAdd(item);
    document.getElementById("quickModal").classList.remove("open");
    showGlobalToast(`🛒 "${s.name}" added to cart!`);
    renderServices();
  });
  document.getElementById("quickModal").classList.add("open");
}

function renderWishSidebar() {
  const el = document.getElementById("wishItems"),
    footer = document.getElementById("wishFooter");
  const list = wishGet().filter((x) => x); // all pages
  if (!list.length) {
    el.innerHTML =
      '<p class="sidebar-empty">No saved services yet.<br/>Click ♡ on a service to save it!</p>';
    footer.style.display = "none";
    return;
  }
  el.innerHTML = list
    .map(
      (w) => `
    <div class="wish-item">
      <img class="wish-item-img" src="${w.image}" alt="${w.name}"/>
      <div class="wish-item-info">
        <p class="wish-item-name">${w.name}</p>
        <p class="wish-item-page">${w.page}</p>
        <p class="wish-item-price">From $${w.price}</p>
      </div>
      <div class="wish-item-actions">
        <button class="wish-atc-btn" data-id="${w.id}" data-page="${w.page}">+ Cart</button>
        <button class="wish-remove-btn" data-id="${w.id}" data-page="${w.page}">✕</button>
      </div>
    </div>`,
    )
    .join("");
  el.querySelectorAll(".wish-atc-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      const w = wishGet().find(
        (x) => x.id == btn.dataset.id && x.page === btn.dataset.page,
      );
      if (w && !cartHas(parseInt(btn.dataset.id), btn.dataset.page)) {
        cartAdd(w);
        showGlobalToast(`🛒 "${w.name}" added to cart!`);
        renderServices();
      } else showGlobalToast("Already in cart!");
    }),
  );
  el.querySelectorAll(".wish-remove-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      wishRemove(parseInt(btn.dataset.id), btn.dataset.page);
      renderWishSidebar();
      renderServices();
      showGlobalToast("♡ Removed from wishlist");
    }),
  );
  footer.style.display = "block";
}

/* Filters */
document.querySelectorAll(".cat-tab").forEach((tab) =>
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".cat-tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    activeCategory = tab.dataset.cat;
    renderServices();
  }),
);
document.querySelectorAll(".tier-tab").forEach((tab) =>
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tier-tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    activeTier = tab.dataset.tier;
    renderServices();
  }),
);
document.getElementById("searchInput").addEventListener("input", (e) => {
  searchQuery = e.target.value.trim();
  renderServices();
});
document.getElementById("sortSelect").addEventListener("change", (e) => {
  sortBy = e.target.value;
  renderServices();
});

/* Wishlist sidebar */
document.getElementById("wishlistNavBtn").addEventListener("click", () => {
  renderWishSidebar();
  document.getElementById("wishSidebar").classList.add("open");
  document.getElementById("wishOverlay").classList.add("open");
});
document.getElementById("closeWish").addEventListener("click", () => {
  document.getElementById("wishSidebar").classList.remove("open");
  document.getElementById("wishOverlay").classList.remove("open");
});
document.getElementById("wishOverlay").addEventListener("click", () => {
  document.getElementById("wishSidebar").classList.remove("open");
  document.getElementById("wishOverlay").classList.remove("open");
});

/* Modal close */
document
  .getElementById("closeModal")
  .addEventListener("click", () =>
    document.getElementById("quickModal").classList.remove("open"),
  );
document.getElementById("quickModal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget)
    document.getElementById("quickModal").classList.remove("open");
});

/* Hero */
document
  .getElementById("shopNowBtn")
  .addEventListener("click", () =>
    document
      .querySelector(".products-section")
      .scrollIntoView({ behavior: "smooth" }),
  );
document
  .getElementById("lookbookBtn")
  .addEventListener("click", () =>
    document
      .querySelector(".looks-section")
      .scrollIntoView({ behavior: "smooth" }),
  );
document.getElementById("featureShopBtn").addEventListener("click", () => {
  document
    .querySelectorAll(".cat-tab")
    .forEach((t) => t.classList.toggle("active", t.dataset.cat === "bridal"));
  activeCategory = "bridal";
  renderServices();
  document
    .querySelector(".products-section")
    .scrollIntoView({ behavior: "smooth" });
});

window.showLook = function (cat) {
  document
    .querySelectorAll(".cat-tab")
    .forEach((t) => t.classList.toggle("active", t.dataset.cat === cat));
  activeCategory = cat;
  renderServices();
  document
    .querySelector(".products-section")
    .scrollIntoView({ behavior: "smooth" });
};

/* Newsletter */
document.getElementById("newsletterBtn").addEventListener("click", () => {
  const v = document.getElementById("newsletterEmail").value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
    showGlobalToast("⚠ Please enter a valid email.");
    return;
  }
  document.getElementById("newsletterEmail").value = "";
  showGlobalToast("✦ Subscribed! Welcome to the Beauty911 family.");
});

renderServices();
