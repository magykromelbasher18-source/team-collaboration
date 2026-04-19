const PAGE = "hair";
const services = [
  {
    id: 1,
    name: "Luxury Bridal Hair",
    category: "bridal",
    tier: "luxury",
    price: 320,
    duration: "3–4 hrs",
    rating: 5.0,
    reviews: 118,
    image:
      "https://images.unsplash.com/photo-1554519934-e32b1629d9ee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFpcnxlbnwwfHwwfHx8Mg%3D%3D",
    desc: "Complete bridal hair styling with a full trial session, day-of styling, and veil placement.",
    includes: [
      "Trial Session",
      "Day-of Styling",
      "Veil Placement",
      "Touch-up Kit",
    ],
  },
  {
    id: 2,
    name: "Bridal Hair Trial",
    category: "bridal",
    tier: "premium",
    price: 140,
    duration: "2 hrs",
    rating: 4.9,
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1619218533116-f050e7d91d91?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFpcnxlbnwwfHwwfHx8Mg%3D%3D",
    desc: "A full rehearsal of your chosen bridal hairstyle before the big day.",
    includes: ["Style Consultation", "Full Trial Styling", "Photo Reference"],
  },
  {
    id: 3,
    name: "Bridesmaids Hair",
    category: "bridal",
    tier: "premium",
    price: 100,
    duration: "1.5 hrs",
    rating: 4.8,
    reviews: 63,
    image:
      "https://images.unsplash.com/photo-1614020863825-28a0bb7e3c3c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGFpcnxlbnwwfHwwfHx8Mg%3D%3D",
    desc: "Beautiful, coordinated styling for your bridesmaids to complement the bridal look.",
    includes: ["Style Consultation", "Full Styling", "Finishing Spray"],
  },
  {
    id: 4,
    name: "Silk Blowout",
    category: "styling",
    tier: "essential",
    price: 65,
    duration: "45 min–1 hr",
    rating: 4.9,
    reviews: 298,
    image:
      "https://images.unsplash.com/photo-1574621100236-d25b64cfd647?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhaXJ8ZW58MHx8MHx8fDI%3D",
    desc: "A smooth, frizz-free blowout that leaves hair silky, shiny, and full of volume.",
    includes: ["Wash & Condition", "Blowdry", "Finish Serum"],
  },
  {
    id: 5,
    name: "Beachy Waves",
    category: "styling",
    tier: "essential",
    price: 70,
    duration: "1 hr",
    rating: 4.8,
    reviews: 214,
    image:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhaXJ8ZW58MHx8MHx8fDI%3D",
    desc: "Relaxed, effortless waves perfect for any occasion from casual to chic.",
    includes: ["Heat Prep", "Wave Styling", "Hold Spray"],
  },
  {
    id: 6,
    name: "Sleek Blowout + Style",
    category: "styling",
    tier: "premium",
    price: 95,
    duration: "1.5 hrs",
    rating: 4.9,
    reviews: 167,
    image:
      "https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhaXJ8ZW58MHx8MHx8fDI%3D",
    desc: "A premium blowout followed by sleek straightening or bouncy curls — your choice.",
    includes: [
      "Wash & Deep Condition",
      "Blowdry",
      "Style Finish",
      "Shine Serum",
    ],
  },
  {
    id: 7,
    name: "Updo & Occasion Style",
    category: "styling",
    tier: "premium",
    price: 110,
    duration: "1.5 hrs",
    rating: 4.9,
    reviews: 143,
    image:
      "https://images.unsplash.com/photo-1573651235591-221193be5229?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhhaXJ8ZW58MHx8MHx8fDI%3D",
    desc: "Elegant updos, chignons, half-ups, and occasion styles for events and special days.",
    includes: ["Style Consultation", "Full Updo", "Finishing Pins & Spray"],
  },
  {
    id: 8,
    name: "Balayage",
    category: "color",
    tier: "luxury",
    price: 280,
    duration: "3–4 hrs",
    rating: 5.0,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1602549179763-ce6c9df961b7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhhaXJ8ZW58MHx8MHx8fDI%3D",
    desc: "Sun-kissed, hand-painted color that blends naturally for a low-maintenance, high-impact look.",
    includes: [
      "Color Consultation",
      "Balayage Application",
      "Toner",
      "Blowdry",
    ],
  },
  {
    id: 9,
    name: "Full Highlights",
    category: "color",
    tier: "premium",
    price: 190,
    duration: "2.5–3 hrs",
    rating: 4.9,
    reviews: 122,
    image:
      "https://images.unsplash.com/photo-1512084747998-038941f49b84?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhaXJ8ZW58MHx8MHx8fDI%3D",
    desc: "Classic foil highlights throughout the hair for dimension and brightness.",
    includes: [
      "Color Consultation",
      "Full Foil Application",
      "Toner",
      "Blowdry",
    ],
  },
  {
    id: 10,
    name: "Root Touch-Up",
    category: "color",
    tier: "essential",
    price: 75,
    duration: "1.5 hrs",
    rating: 4.8,
    reviews: 176,
    image:
      "https://images.unsplash.com/photo-1556229165-8aa0ceaa93a7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhaXJ8ZW58MHx8MHx8fDI%3D",
    desc: "A targeted root color refresh to cover regrowth and restore your color's vibrancy.",
    includes: ["Root Color Application", "Processing", "Blowdry"],
  },
  {
    id: 11,
    name: "Keratin Smoothing Treatment",
    category: "treatment",
    tier: "luxury",
    price: 250,
    duration: "3 hrs",
    rating: 5.0,
    reviews: 71,
    image:
      "https://images.unsplash.com/photo-1472747624745-ce92d32d3c24?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhaXJ8ZW58MHx8MHx8fDI%3D",
    desc: "A professional keratin treatment that eliminates frizz and leaves hair sleek for up to 3 months.",
    includes: [
      "Hair Analysis",
      "Keratin Application",
      "Sealing Blowdry",
      "Aftercare Guide",
    ],
  },
  {
    id: 12,
    name: "Deep Conditioning Mask",
    category: "treatment",
    tier: "essential",
    price: 55,
    duration: "1 hr",
    rating: 4.8,
    reviews: 134,
    image:
      "https://images.unsplash.com/photo-1633381521050-26bb467d9d5a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhhaXJ8ZW58MHx8MHx8fDI%3D",
    desc: "An intensive moisture treatment for dry, damaged, or color-treated hair.",
    includes: ["Wash", "Mask Application", "Steam Treatment", "Blowdry"],
  },
  {
    id: 13,
    name: "Women's Haircut & Style",
    category: "cut",
    tier: "essential",
    price: 60,
    duration: "1 hr",
    rating: 4.9,
    reviews: 243,
    image:
      "https://images.unsplash.com/photo-1503830232159-4b417691001e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhhaXJ8ZW58MHx8MHx8fDI%3D",
    desc: "A precision cut tailored to your face shape and lifestyle, finished with a blowdry.",
    includes: ["Consultation", "Precision Cut", "Blowdry", "Style Finish"],
  },
  {
    id: 14,
    name: "Luxury Cut + Treatment",
    category: "cut",
    tier: "luxury",
    price: 150,
    duration: "2 hrs",
    rating: 5.0,
    reviews: 66,
    image:
      "https://media.istockphoto.com/id/2225834607/photo/smiling-young-woman-combing-her-hair-in-bathroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=qj7l82oe8fYKNkiBTphvyJwCPfoSbFUD94TKcc0R2Eo=",
    desc: "A transformative cut paired with a deep conditioning treatment for the ultimate hair experience.",
    includes: [
      "In-depth Consultation",
      "Precision Cut",
      "Deep Conditioning",
      "Premium Blowdry",
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
      return `<div class="product-card" data-id="${s.id}"><div class="product-img-wrap"><img src="${s.image}" alt="${s.name}" loading="lazy"/><span class="product-badge ${tierClass(s.tier)}">${tierLabel(s.tier)}</span><div class="product-actions"><button class="action-btn wish-btn ${inWish ? "wishlisted" : ""}" data-id="${s.id}" aria-label="Wishlist">${inWish ? "♥" : "♡"}</button><button class="action-btn quickview-btn" data-id="${s.id}" aria-label="Quick view">🔍</button></div></div><div class="product-info"><p class="product-brand">${s.category.charAt(0).toUpperCase() + s.category.slice(1)}</p><h3 class="product-name">${s.name}</h3><p class="product-duration">⏱ ${s.duration}</p><div class="product-stars">${renderStars(s.rating)} <span>(${s.reviews})</span></div><div class="product-bottom"><div class="product-price">From $${s.price}</div><button class="add-to-cart-btn ${inCart ? "in-cart" : ""}" data-id="${s.id}">${inCart ? "✓ Added" : "Add to Cart"}</button></div></div></div>`;
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
  showGlobalToast(added ? `♥ "${s.name}" saved!` : "♡ Removed from wishlist");
  renderServices();
  renderWishSidebar();
}
function openQuickModal(id) {
  const s = services.find((x) => x.id === id);
  if (!s) return;
  const inCart = cartHas(id, PAGE);
  document.getElementById("modalContent").innerHTML =
    `<div class="booking-header"><span class="product-badge ${tierClass(s.tier)}" style="position:static;display:inline-block;margin-bottom:10px;">${tierLabel(s.tier)}</span><h2>${s.name}</h2><p>${s.desc}</p><p style="margin-bottom:0.5rem;"><strong>Includes:</strong> ${s.includes.join(" · ")}</p><p style="color:var(--text-muted);font-size:13px;">⏱ ${s.duration}</p><div class="booking-price">From $${s.price}</div></div><form class="booking-form" id="quickForm" novalidate><div><label>Your Full Name</label><input type="text" id="bName" placeholder="e.g. Sara Ahmed"/></div><div><label>Email Address</label><input type="email" id="bEmail" placeholder="you@example.com"/></div><div><label>Phone Number</label><input type="tel" id="bPhone" placeholder="+20 100 000 0000"/></div><div><label>Special Requests (optional)</label><textarea id="bNotes" placeholder="Hair length, texture, inspiration images..."></textarea></div><button type="submit" class="btn-primary" style="width:100%;justify-content:center;">${inCart ? "✓ Already in Cart — Go to Cart →" : "Add to Cart 🛒"}</button></form>`;
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
      clientName: name,
      clientEmail: email,
      clientPhone: document.getElementById("bPhone").value.trim(),
      notes: document.getElementById("bNotes").value.trim(),
      date: "",
      time: "",
    });
    document.getElementById("quickModal").classList.remove("open");
    showGlobalToast(`🛒 "${s.name}" added to cart!`);
    renderServices();
  });
  document.getElementById("quickModal").classList.add("open");
}
function renderWishSidebar() {
  const el = document.getElementById("wishItems"),
    footer = document.getElementById("wishFooter"),
    list = wishGet();
  if (!list.length) {
    el.innerHTML =
      '<p class="sidebar-empty">No saved services yet.<br/>Click ♡ on a service to save it!</p>';
    footer.style.display = "none";
    return;
  }
  el.innerHTML = list
    .map(
      (w) =>
        `<div class="wish-item"><img class="wish-item-img" src="${w.image}" alt="${w.name}"/><div class="wish-item-info"><p class="wish-item-name">${w.name}</p><p class="wish-item-page">${w.page}</p><p class="wish-item-price">From $${w.price}</p></div><div class="wish-item-actions"><button class="wish-atc-btn" data-id="${w.id}" data-page="${w.page}">+ Cart</button><button class="wish-remove-btn" data-id="${w.id}" data-page="${w.page}">✕</button></div></div>`,
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
      showGlobalToast("♡ Removed");
    }),
  );
  footer.style.display = "block";
}

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
document
  .getElementById("closeModal")
  .addEventListener("click", () =>
    document.getElementById("quickModal").classList.remove("open"),
  );
document.getElementById("quickModal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget)
    document.getElementById("quickModal").classList.remove("open");
});
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
document.getElementById("newsletterBtn").addEventListener("click", () => {
  const v = document.getElementById("newsletterEmail").value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
    showGlobalToast("⚠ Please enter a valid email.");
    return;
  }
  document.getElementById("newsletterEmail").value = "";
  showGlobalToast("✦ Subscribed!");
});
renderServices();
