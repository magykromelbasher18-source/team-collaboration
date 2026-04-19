const PAGE = "lashes";
const services = [
  {
    id: 1,
    name: "Classic Lash Extensions",
    category: "extensions",
    tier: "premium",
    price: 120,
    duration: "1.5–2 hrs",
    rating: 4.9,
    reviews: 203,
    image:
      "https://images.unsplash.com/photo-1674049406467-824ea37c7184?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhc2hlc3xlbnwwfHwwfHx8Mg%3D%3D",
    desc: "One extension per natural lash for a clean, natural, mascara-like finish.",
    includes: [
      "One-to-One Application",
      "Natural Fibre Lashes",
      "Aftercare Kit",
    ],
  },
  {
    id: 2,
    name: "Volume Lash Set (2D–5D)",
    category: "extensions",
    tier: "premium",
    price: 160,
    duration: "2–2.5 hrs",
    rating: 5.0,
    reviews: 178,
    image:
      "https://images.unsplash.com/photo-1674049406179-d7bf2c263e71?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhc2hlc3xlbnwwfHwwfHx8Mg%3D%3D",
    desc: "Hand-crafted fans of 2–5 fine lashes per natural lash for a full, voluminous effect.",
    includes: ["Fan Application", "Ultra-Fine Fibres", "Aftercare Guidance"],
  },
  {
    id: 3,
    name: "Mega Volume Lash Set",
    category: "extensions",
    tier: "luxury",
    price: 220,
    duration: "2.5–3 hrs",
    rating: 5.0,
    reviews: 142,
    image:
      "https://images.unsplash.com/photo-1587910234573-d6fc84743bc8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhc2hlc3xlbnwwfHwwfHx8Mg%3D%3D",
    desc: "The most dramatic volume set — 6D+ fans for an ultra-lush, full-glam look.",
    includes: [
      "6D+ Fan Application",
      "Premium Fibres",
      "Retention Sealer",
      "Aftercare Kit",
    ],
  },
  {
    id: 4,
    name: "Hybrid Lash Set",
    category: "extensions",
    tier: "premium",
    price: 145,
    duration: "2 hrs",
    rating: 4.9,
    reviews: 116,
    image:
      "https://images.unsplash.com/photo-1585433405076-9626d637cc83?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhc2hlc3xlbnwwfHwwfHx8Mg%3D%3D",
    desc: "A mix of classic and volume fans for a textured, wispy look.",
    includes: ["Classic + Volume Mix", "Custom Styling", "Aftercare Kit"],
  },
  {
    id: 5,
    name: "Lash Lift",
    category: "lift",
    tier: "essential",
    price: 70,
    duration: "1 hr",
    rating: 4.8,
    reviews: 267,
    image:
      "https://images.unsplash.com/photo-1493422884938-abd42cfa0f29?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhc2hlc3xlbnwwfHwwfHx8Mg%3D%3D",
    desc: "A semi-permanent curl that lifts your natural lashes from the root.",
    includes: ["Perming Solution", "Lifting Process", "Setting Solution"],
  },
  {
    id: 6,
    name: "Lash Lift & Tint",
    category: "lift",
    tier: "premium",
    price: 95,
    duration: "1.5 hrs",
    rating: 5.0,
    reviews: 198,
    image:
      "https://images.unsplash.com/photo-1630655491563-fe6ea47d06f5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhc2hlc3xlbnwwfHwwfHx8Mg%3D%3D",
    desc: "A lash lift paired with a tint for darkened, defined, wide-open eyes.",
    includes: ["Lift Treatment", "Lash Tint", "Nourishing Serum"],
  },
  {
    id: 7,
    name: "Luxury Lash Lift + Brow Lamination",
    category: "lift",
    tier: "luxury",
    price: 150,
    duration: "2 hrs",
    rating: 5.0,
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1683719312734-e31de63957ab?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhc2glMjBleHRlbnNpb25zfGVufDB8fDB8fHwy",
    desc: "A complete eye-opening treatment: lifted lashes + laminated, brushed-up brows.",
    includes: [
      "Lash Lift & Tint",
      "Brow Lamination",
      "Brow Tint",
      "Nourishing Serums",
    ],
  },
  {
    id: 8,
    name: "Lash & Brow Tint",
    category: "tint",
    tier: "essential",
    price: 45,
    duration: "45 min",
    rating: 4.7,
    reviews: 145,
    image:
      "https://images.unsplash.com/photo-1657271516922-6eab2182f17d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhc2glMjBleHRlbnNpb25zfGVufDB8fDB8fHwy",
    desc: "Professional tinting for both lashes and brows — darker, defined, long-lasting.",
    includes: ["Lash Tint", "Brow Tint", "Patch Test Included"],
  },
  {
    id: 9,
    name: "Brow Lamination",
    category: "tint",
    tier: "premium",
    price: 75,
    duration: "1 hr",
    rating: 4.9,
    reviews: 134,
    image:
      "https://images.unsplash.com/photo-1721540343335-142d9a064d94?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhc2glMjBleHRlbnNpb25zfGVufDB8fDB8fHwy",
    desc: "Sleek, brushed-up brows that stay perfectly groomed all day.",
    includes: ["Lamination Solution", "Brow Shaping", "Setting Gel"],
  },
  {
    id: 10,
    name: "Strip Lash Application",
    category: "strip",
    tier: "essential",
    price: 35,
    duration: "30 min",
    rating: 4.8,
    reviews: 312,
    image:
      "https://images.unsplash.com/photo-1718720410592-74cb359182f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxhc2glMjBleHRlbnNpb25zfGVufDB8fDB8fHwy",
    desc: "Professional strip lash application for events — perfectly placed for a flawless look.",
    includes: [
      "Lash Selection",
      "Professional Glue Application",
      "Blending with Eyeliner",
    ],
  },
  {
    id: 11,
    name: "Luxury Strip Lash Set",
    category: "strip",
    tier: "luxury",
    price: 80,
    duration: "1 hr",
    rating: 5.0,
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1553540751-988bd7918c7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhc2glMjBleHRlbnNpb25zfGVufDB8fDB8fHwy",
    desc: "Premium handmade strip lashes applied and styled for a high-fashion look.",
    includes: [
      "Premium Lash Selection",
      "Application",
      "Eye Makeup Touch-up",
      "Take-Home Lashes",
    ],
  },
  {
    id: 12,
    name: "Lash Extension Removal",
    category: "removal",
    tier: "essential",
    price: 30,
    duration: "30 min",
    rating: 4.9,
    reviews: 189,
    image:
      "https://images.unsplash.com/photo-1718720410616-8a03416f9f4d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhc2glMjBleHRlbnNpb25zfGVufDB8fDB8fHwy",
    desc: "Safe and gentle removal of lash extensions with professional dissolving cream.",
    includes: ["Solvent Removal", "Natural Lash Conditioning"],
  },
  {
    id: 13,
    name: "Lash Infill",
    category: "extensions",
    tier: "premium",
    price: 90,
    duration: "1–1.5 hrs",
    rating: 4.9,
    reviews: 221,
    image:
      "https://media.istockphoto.com/id/1179655332/photo/makeup-artist-applying-false-eyelash.webp?a=1&b=1&s=612x612&w=0&k=20&c=qKtlpyW5vWo__ScH4QK7yE6VScOasFYV1yAYi6FBuCc=",
    desc: "A maintenance infill to refresh your extensions and keep your set looking full.",
    includes: ["Gap Filling", "Cleaning & Preparation", "Aftercare Reminder"],
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
  let l = [...services];
  if (activeCategory !== "all")
    l = l.filter((s) => s.category === activeCategory);
  if (activeTier !== "all") l = l.filter((s) => s.tier === activeTier);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    l = l.filter(
      (s) =>
        s.name.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q),
    );
  }
  if (sortBy === "price-asc") l.sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") l.sort((a, b) => b.price - a.price);
  if (sortBy === "rating") l.sort((a, b) => b.rating - a.rating);
  if (sortBy === "name") l.sort((a, b) => a.name.localeCompare(b.name));
  return l;
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
      const ic = cartHas(s.id, PAGE),
        iw = wishHas(s.id, PAGE);
      return `<div class="product-card" data-id="${s.id}"><div class="product-img-wrap"><img src="${s.image}" alt="${s.name}" loading="lazy"/><span class="product-badge ${tierClass(s.tier)}">${tierLabel(s.tier)}</span><div class="product-actions"><button class="action-btn wish-btn ${iw ? "wishlisted" : ""}" data-id="${s.id}">${iw ? "♥" : "♡"}</button><button class="action-btn quickview-btn" data-id="${s.id}">🔍</button></div></div><div class="product-info"><p class="product-brand">${s.category.charAt(0).toUpperCase() + s.category.slice(1)}</p><h3 class="product-name">${s.name}</h3><p class="product-duration">⏱ ${s.duration}</p><div class="product-stars">${renderStars(s.rating)} <span>(${s.reviews})</span></div><div class="product-bottom"><div class="product-price">From $${s.price}</div><button class="add-to-cart-btn ${ic ? "in-cart" : ""}" data-id="${s.id}">${ic ? "✓ Added" : "Add to Cart"}</button></div></div></div>`;
    })
    .join("");
  grid.querySelectorAll(".add-to-cart-btn").forEach((b) =>
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      const s = services.find((x) => x.id === parseInt(b.dataset.id));
      if (!s) return;
      if (cartHas(s.id, PAGE)) {
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
    }),
  );
  grid.querySelectorAll(".wish-btn").forEach((b) =>
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      const s = services.find((x) => x.id === parseInt(b.dataset.id));
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
      showGlobalToast(added ? `♥ "${s.name}" saved!` : "♡ Removed");
      renderServices();
      renderWishSidebar();
    }),
  );
  grid.querySelectorAll(".quickview-btn").forEach((b) =>
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      openQuickModal(parseInt(b.dataset.id));
    }),
  );
  grid
    .querySelectorAll(".product-card")
    .forEach((c) =>
      c.addEventListener("click", () => openQuickModal(parseInt(c.dataset.id))),
    );
}
function openQuickModal(id) {
  const s = services.find((x) => x.id === id);
  if (!s) return;
  const ic = cartHas(id, PAGE);
  document.getElementById("modalContent").innerHTML =
    `<div class="booking-header"><span class="product-badge ${tierClass(s.tier)}" style="position:static;display:inline-block;margin-bottom:10px;">${tierLabel(s.tier)}</span><h2>${s.name}</h2><p>${s.desc}</p><p style="margin-bottom:0.5rem;"><strong>Includes:</strong> ${s.includes.join(" · ")}</p><p style="color:var(--text-muted);font-size:13px;">⏱ ${s.duration}</p><div class="booking-price">From $${s.price}</div></div><form class="booking-form" id="quickForm" novalidate><div><label>Your Full Name</label><input type="text" id="bName" placeholder="e.g. Sara Ahmed"/></div><div><label>Email Address</label><input type="email" id="bEmail" placeholder="you@example.com"/></div><div><label>Phone Number</label><input type="tel" id="bPhone" placeholder="+20 100 000 0000"/></div><div><label>Special Requests (optional)</label><textarea id="bNotes" placeholder="Sensitivity notes, style references..."></textarea></div><button type="submit" class="btn-primary" style="width:100%;justify-content:center;">${ic ? "✓ Already in Cart — Go to Cart →" : "Add to Cart 🛒"}</button></form>`;
  document.getElementById("quickForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (ic) {
      document.getElementById("quickModal").classList.remove("open");
      window.location.href = "cart.html";
      return;
    }
    const n = document.getElementById("bName").value.trim(),
      em = document.getElementById("bEmail").value.trim();
    if (!n || !em) {
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
      clientName: n,
      clientEmail: em,
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
      '<p class="sidebar-empty">No saved services yet.<br/>Click ♡ to save!</p>';
    footer.style.display = "none";
    return;
  }
  el.innerHTML = list
    .map(
      (w) =>
        `<div class="wish-item"><img class="wish-item-img" src="${w.image}" alt="${w.name}"/><div class="wish-item-info"><p class="wish-item-name">${w.name}</p><p class="wish-item-page">${w.page}</p><p class="wish-item-price">From $${w.price}</p></div><div class="wish-item-actions"><button class="wish-atc-btn" data-id="${w.id}" data-page="${w.page}">+ Cart</button><button class="wish-remove-btn" data-id="${w.id}" data-page="${w.page}">✕</button></div></div>`,
    )
    .join("");
  el.querySelectorAll(".wish-atc-btn").forEach((b) =>
    b.addEventListener("click", () => {
      const w = wishGet().find(
        (x) => x.id == b.dataset.id && x.page === b.dataset.page,
      );
      if (w && !cartHas(parseInt(b.dataset.id), b.dataset.page)) {
        cartAdd(w);
        showGlobalToast(`🛒 "${w.name}" added!`);
      } else showGlobalToast("Already in cart!");
    }),
  );
  el.querySelectorAll(".wish-remove-btn").forEach((b) =>
    b.addEventListener("click", () => {
      wishRemove(parseInt(b.dataset.id), b.dataset.page);
      renderWishSidebar();
      showGlobalToast("♡ Removed");
    }),
  );
  footer.style.display = "block";
}
document.querySelectorAll(".cat-tab").forEach((t) =>
  t.addEventListener("click", () => {
    document
      .querySelectorAll(".cat-tab")
      .forEach((x) => x.classList.remove("active"));
    t.classList.add("active");
    activeCategory = t.dataset.cat;
    renderServices();
  }),
);
document.querySelectorAll(".tier-tab").forEach((t) =>
  t.addEventListener("click", () => {
    document
      .querySelectorAll(".tier-tab")
      .forEach((x) => x.classList.remove("active"));
    t.classList.add("active");
    activeTier = t.dataset.tier;
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
    .forEach((t) =>
      t.classList.toggle("active", t.dataset.cat === "extensions"),
    );
  activeCategory = "extensions";
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
