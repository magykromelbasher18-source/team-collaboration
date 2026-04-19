const PAGE = "nails";
const services = [
  {
    id: 1,
    name: "Luxury Gel Manicure",
    category: "manicure",
    tier: "luxury",
    price: 85,
    duration: "1.5 hrs",
    rating: 5.0,
    reviews: 214,
    image:
      "https://images.unsplash.com/photo-1587729927069-ef3b7a5ab9b4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmFpbHN8ZW58MHx8MHx8fDI%3D",
    desc: "Premium gel polish with cuticle care, shaping, and a long-lasting high-shine finish.",
    includes: ["Cuticle Care", "Nail Shaping", "Gel Application", "Top Coat"],
  },
  {
    id: 2,
    name: "Classic Manicure",
    category: "manicure",
    tier: "essential",
    price: 40,
    duration: "45 min",
    rating: 4.8,
    reviews: 189,
    image:
      "https://images.unsplash.com/photo-1690749138086-7422f71dc159?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5haWxzfGVufDB8fDB8fHwy",
    desc: "A timeless manicure with regular polish, shaping, and hand massage.",
    includes: ["Nail Shaping", "Regular Polish", "Hand Massage"],
  },
  {
    id: 3,
    name: "French Gel Manicure",
    category: "manicure",
    tier: "premium",
    price: 70,
    duration: "1 hr",
    rating: 4.9,
    reviews: 145,
    image:
      "https://images.unsplash.com/photo-1567169556820-a566b9f53776?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5haWxzfGVufDB8fDB8fHwy",
    desc: "The classic French look in long-lasting gel.",
    includes: ["French Gel Polish", "Nail Shaping", "Top Coat"],
  },
  {
    id: 4,
    name: "Luxury Spa Pedicure",
    category: "pedicure",
    tier: "luxury",
    price: 110,
    duration: "1.5 hrs",
    rating: 4.9,
    reviews: 178,
    image:
      "https://images.unsplash.com/photo-1633955726992-2b7c0d2d2a69?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5haWxzfGVufDB8fDB8fHwy",
    desc: "A deeply relaxing pedicure with foot soak, exfoliation, massage, and gel polish.",
    includes: [
      "Foot Soak",
      "Exfoliation",
      "Callus Removal",
      "Foot Massage",
      "Gel Polish",
    ],
  },
  {
    id: 5,
    name: "Classic Pedicure",
    category: "pedicure",
    tier: "essential",
    price: 50,
    duration: "1 hr",
    rating: 4.7,
    reviews: 132,
    image:
      "https://images.unsplash.com/photo-1690749072212-373daf1d58ca?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5haWxzfGVufDB8fDB8fHwy",
    desc: "Essential pedicure with regular polish, trimming, and a foot massage.",
    includes: ["Foot Soak", "Nail Trimming", "Regular Polish", "Foot Massage"],
  },
  {
    id: 6,
    name: "Acrylic Full Set",
    category: "extensions",
    tier: "premium",
    price: 120,
    duration: "2 hrs",
    rating: 4.8,
    reviews: 96,
    image:
      "https://images.unsplash.com/photo-1736434518489-0eb84070017f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5haWxzfGVufDB8fDB8fHwy",
    desc: "Durable acrylic extensions in your chosen length and shape.",
    includes: ["Full Acrylic Set", "Shape & Length Choice", "Polish Finish"],
  },
  {
    id: 7,
    name: "Gel Extensions",
    category: "extensions",
    tier: "luxury",
    price: 160,
    duration: "2.5 hrs",
    rating: 5.0,
    reviews: 73,
    image:
      "https://images.unsplash.com/photo-1602585578130-c9076e09330d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5haWxzfGVufDB8fDB8fHwy",
    desc: "Lightweight, natural-looking gel extensions with superior flexibility.",
    includes: [
      "Full Gel Extension Set",
      "Custom Shaping",
      "Gel Polish",
      "Top Coat",
    ],
  },
  {
    id: 8,
    name: "Nail Art Design",
    category: "art",
    tier: "premium",
    price: 90,
    duration: "1.5 hrs",
    rating: 4.9,
    reviews: 167,
    image:
      "https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=400&q=80",
    desc: "Intricate hand-painted nail art — florals, geometrics, ombre, or custom designs.",
    includes: [
      "Custom Design Consultation",
      "Hand-Painted Art",
      "Top Coat Seal",
    ],
  },
  {
    id: 9,
    name: "Chrome & Foil Nails",
    category: "art",
    tier: "luxury",
    price: 130,
    duration: "2 hrs",
    rating: 5.0,
    reviews: 88,
    image:
      "https://media.istockphoto.com/id/2235570657/photo/mid-adult-woman-getting-her-nails-filed-by-a-female-nail-technician-at-a-beauty-salon.webp?a=1&b=1&s=612x612&w=0&k=20&c=uLblmgaT5J82YoKObp3AUUHaLhBF15ImZusxGkOL3vI=",
    desc: "Mirror chrome powder or foil effects for a striking editorial look.",
    includes: ["Gel Base", "Chrome/Foil Application", "Top Coat"],
  },
  {
    id: 10,
    name: "Nail Repair & Fill",
    category: "treatment",
    tier: "essential",
    price: 35,
    duration: "30 min",
    rating: 4.7,
    reviews: 211,
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80",
    desc: "Quick repair for broken nails or a gel/acrylic fill.",
    includes: ["Nail Repair", "Polish Refresh"],
  },
  {
    id: 11,
    name: "Paraffin Hand Treatment",
    category: "treatment",
    tier: "premium",
    price: 55,
    duration: "45 min",
    rating: 4.8,
    reviews: 79,
    image:
      "https://images.unsplash.com/photo-1590704634609-ba8981706635?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5haWxzfGVufDB8fDB8fHwy",
    desc: "A deeply moisturizing paraffin wax treatment for silky smooth hands.",
    includes: ["Paraffin Wax Soak", "Hand Massage", "Moisturiser Application"],
  },
  {
    id: 12,
    name: "Nail Strengthening Treatment",
    category: "treatment",
    tier: "luxury",
    price: 75,
    duration: "1 hr",
    rating: 4.9,
    reviews: 54,
    image:
      "https://images.unsplash.com/photo-1588359953494-0c215e3cedc6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5haWxzfGVufDB8fDB8fHwy",
    desc: "Professional treatment to restore weak, peeling, or damaged nails.",
    includes: [
      "Nail Analysis",
      "Strengthening Polish",
      "Cuticle Oil Treatment",
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
    `<div class="booking-header"><span class="product-badge ${tierClass(s.tier)}" style="position:static;display:inline-block;margin-bottom:10px;">${tierLabel(s.tier)}</span><h2>${s.name}</h2><p>${s.desc}</p><p style="margin-bottom:0.5rem;"><strong>Includes:</strong> ${s.includes.join(" · ")}</p><p style="color:var(--text-muted);font-size:13px;">⏱ ${s.duration}</p><div class="booking-price">From $${s.price}</div></div><form class="booking-form" id="quickForm" novalidate><div><label>Your Full Name</label><input type="text" id="bName" placeholder="e.g. Sara Ahmed"/></div><div><label>Email Address</label><input type="email" id="bEmail" placeholder="you@example.com"/></div><div><label>Phone Number</label><input type="tel" id="bPhone" placeholder="+20 100 000 0000"/></div><div><label>Special Requests (optional)</label><textarea id="bNotes" placeholder="Nail inspo, length preference..."></textarea></div><button type="submit" class="btn-primary" style="width:100%;justify-content:center;">${ic ? "✓ Already in Cart — Go to Cart →" : "Add to Cart 🛒"}</button></form>`;
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
        renderServices();
      } else showGlobalToast("Already in cart!");
    }),
  );
  el.querySelectorAll(".wish-remove-btn").forEach((b) =>
    b.addEventListener("click", () => {
      wishRemove(parseInt(b.dataset.id), b.dataset.page);
      renderWishSidebar();
      renderServices();
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
    .forEach((t) => t.classList.toggle("active", t.dataset.cat === "manicure"));
  activeCategory = "manicure";
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
