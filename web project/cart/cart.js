const PAGE_COLORS = {
  makeup: "var(--red-deep)",
  hair: "var(--pink-dark)",
  nails: "var(--red-mid)",
  lashes: "var(--red-dark)",
};
const PAGE_ICONS = { makeup: "💄", hair: "💇", nails: "💅", lashes: "✨" };
const TODAY = new Date().toISOString().split("T")[0];

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

/* ── DATETIME VALIDATION ─────────────────────────────────────────────────── */

/**
 * Converts a display time string like "9:00 AM" / "1:00 PM" to a 24-hour
 * { hours, minutes } object so we can compare it against Date.now().
 */
function parseDisplayTime(timeStr) {
  if (!timeStr) return null;
  const [time, meridiem] = timeStr.split(" ");
  let [hours, minutes] = time.split(":").map(Number);
  if (meridiem === "PM" && hours !== 12) hours += 12;
  if (meridiem === "AM" && hours === 12) hours = 0;
  return { hours, minutes };
}

/**
 * Returns true when the chosen date+time is strictly in the future.
 * Shows / clears an inline error message beside the schedule fields.
 *
 * @param {string} dateVal  – "YYYY-MM-DD"
 * @param {string} timeVal  – "9:00 AM" | "1:00 PM" | …
 * @param {HTMLElement} scheduleEl – the .cart-item-schedule wrapper
 */
function validateDateTime(dateVal, timeVal, scheduleEl) {
  // Remove any previous error
  const prev = scheduleEl.querySelector(".datetime-error");
  if (prev) prev.remove();

  const dateInput = scheduleEl.querySelector(".date-input");
  const timeSelect = scheduleEl.querySelector(".time-input");

  // Reset error styling
  if (dateInput) dateInput.classList.remove("input-error");
  if (timeSelect) timeSelect.classList.remove("input-error");

  // Only validate when both fields are filled
  if (!dateVal || !timeVal) return true;

  const parsed = parseDisplayTime(timeVal);
  if (!parsed) return true;

  const selected = new Date(dateVal);
  selected.setHours(parsed.hours, parsed.minutes, 0, 0);

  const now = new Date();

  if (selected <= now) {
    // Add error styling
    if (dateInput) dateInput.classList.add("input-error");
    if (timeSelect) timeSelect.classList.add("input-error");

    // Inject error message below the schedule grid
    const err = document.createElement("p");
    err.className = "datetime-error";
    err.textContent = "⚠ Please select a future date & time.";
    scheduleEl.appendChild(err);
    return false;
  }

  return true;
}

/* ── RENDER ──────────────────────────────────────────────────────────────── */

function renderCart() {
  const cart = cartGet();
  const listEl = document.getElementById("cartItemsList");
  const summaryRowsEl = document.getElementById("summaryRows");
  const totalEl = document.getElementById("summaryTotal");
  const itemCountEl = document.getElementById("itemCountBadge");
  const summaryEl = document.getElementById("cartSummary");

  itemCountEl.textContent = cart.length
    ? `(${cart.length} service${cart.length > 1 ? "s" : ""})`
    : "";

  if (!cart.length) {
    listEl.innerHTML = `<div class="cart-empty-state">
      <div class="cart-empty-icon">🛒</div>
      <h3>Your cart is empty</h3>
      <p>You haven't added any services yet.<br/>Browse our beauty services and add something beautiful.</p>
      <div class="empty-links">
        <a href="../makeup/makeup.html" class="btn-primary" style="text-decoration:none;">💄 Makeup</a>
        <a href="../hair/hair.html" class="btn-primary" style="text-decoration:none;">💇 Hair</a>
        <a href="../nails/nails.html" class="btn-primary" style="text-decoration:none;">💅 Nails</a>
        <a href="../lashes/lashes.html" class="btn-primary" style="text-decoration:none;">✨ Lashes</a>
      </div>
    </div>`;
    summaryEl.style.display = "none";
    return;
  }
  summaryEl.style.display = "block";

  listEl.innerHTML = cart
    .map(
      (item, i) => `
    <div class="cart-item-card" id="card-${i}">
      <div class="cart-item-top">
        <img class="cart-item-thumb" src="${item.image}" alt="${item.name}"/>
        <div class="cart-item-details">
          <div>
            <span class="cart-item-badge ${tierClass(item.tier)}">${tierLabel(item.tier)}</span>
            <span class="cart-item-page-tag" style="margin-left:6px;">${PAGE_ICONS[item.page] || ""} ${item.page}</span>
          </div>
          <h3 class="cart-item-name">${item.name}</h3>
          <p class="cart-item-dur">⏱ ${item.duration}</p>
          <p class="cart-item-includes"><strong>Includes:</strong> ${item.includes.join(" · ")}</p>
          <div class="cart-item-price-row">
            <span class="cart-item-price">From $${item.price}</span>
            <button class="cart-item-remove" data-idx="${i}" aria-label="Remove">✕</button>
          </div>
        </div>
      </div>
      <div class="cart-item-schedule">
        <div class="schedule-field">
          <label>📅 Preferred Date</label>
          <input type="date" class="date-input ${item.date ? "filled" : ""}" data-idx="${i}" min="${TODAY}" value="${item.date || ""}"/>
        </div>
        <div class="schedule-field">
          <label>🕐 Preferred Time</label>
          <select class="time-input ${item.time ? "filled" : ""}" data-idx="${i}">
            <option value="">Select a time</option>
            ${["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"].map((t) => `<option value="${t}" ${item.time === t ? "selected" : ""}>${t}</option>`).join("")}
          </select>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  /* Remove buttons */
  listEl.querySelectorAll(".cart-item-remove").forEach((btn) =>
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.idx);
      const c = cartGet();
      cartRemove(c[idx].id, c[idx].page);
      showGlobalToast("✕ Service removed from cart");
      renderCart();
    }),
  );

  /* Date inputs */
  listEl.querySelectorAll(".date-input").forEach((inp) =>
    inp.addEventListener("change", () => {
      const idx = parseInt(inp.dataset.idx);
      const c = cartGet();
      const scheduleEl = inp.closest(".cart-item-schedule");
      const timeVal = c[idx].time || "";

      // Validate before saving
      const valid = validateDateTime(inp.value, timeVal, scheduleEl);

      if (valid) {
        c[idx].date = inp.value;
        cartSave(c);
        inp.classList.toggle("filled", !!inp.value);
        renderSummary();
      } else {
        // Clear the saved date so checkout is blocked
        c[idx].date = "";
        cartSave(c);
        inp.classList.remove("filled");
        renderSummary();
      }
    }),
  );

  /* Time selects */
  listEl.querySelectorAll(".time-input").forEach((sel) =>
    sel.addEventListener("change", () => {
      const idx = parseInt(sel.dataset.idx);
      const c = cartGet();
      const scheduleEl = sel.closest(".cart-item-schedule");
      const dateVal = c[idx].date || "";

      // Validate before saving
      const valid = validateDateTime(dateVal, sel.value, scheduleEl);

      if (valid) {
        c[idx].time = sel.value;
        cartSave(c);
        sel.classList.toggle("filled", !!sel.value);
        renderSummary();
      } else {
        // Clear the saved time so checkout is blocked
        c[idx].time = "";
        cartSave(c);
        sel.classList.remove("filled");
        renderSummary();
      }
    }),
  );

  renderSummary();
}

function renderSummary() {
  const cart = cartGet();
  const rows = document.getElementById("summaryRows");
  const totalEl = document.getElementById("summaryTotal");
  let total = 0;
  rows.innerHTML = cart
    .map((item) => {
      total += item.price;
      return `<div class="summary-row service-name"><span>${PAGE_ICONS[item.page] || ""} ${item.name}</span><span>$${item.price}</span></div>${item.date && item.time ? `<div class="summary-row" style="font-size:12px;padding-left:16px;opacity:0.8;"><span>📅 ${item.date} at ${item.time}</span></div>` : ""}`;
    })
    .join("");
  totalEl.textContent = `$${total}`;
}

/* Clear all */
document.getElementById("clearCartBtn").addEventListener("click", () => {
  if (!cartGet().length) return;
  cartSave([]);
  updateAllBadges();
  showGlobalToast("Cart cleared");
  renderCart();
});

/* Checkout */
document.getElementById("checkoutBtn").addEventListener("click", () => {
  const cart = cartGet();
  if (!cart.length) {
    showGlobalToast("Your cart is empty!");
    return;
  }

  // Check for missing date/time
  const missing = cart.filter((i) => !i.date || !i.time);
  if (missing.length) {
    const warn = document.getElementById("scheduleWarning");
    warn.classList.add("visible");
    warn.scrollIntoView({ behavior: "smooth", block: "nearest" });
    showGlobalToast("⚠ Please set date & time for all services.");
    return;
  }

  // Re-validate all date+time pairs are still in the future
  let hasPastDateTime = false;
  document.querySelectorAll(".cart-item-schedule").forEach((scheduleEl, i) => {
    const dateVal = cart[i]?.date || "";
    const timeVal = cart[i]?.time || "";
    const valid = validateDateTime(dateVal, timeVal, scheduleEl);
    if (!valid) hasPastDateTime = true;
  });

  if (hasPastDateTime) {
    showGlobalToast("⚠ Some appointments are in the past. Please update them.");
    document
      .querySelector(".datetime-error")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  // All good — proceed
  window.location.href = "../CheckOut/CheckOut.html";
});

document
  .getElementById("closeSuccess")
  .addEventListener("click", () =>
    document.getElementById("successModal").classList.remove("open"),
  );
document.getElementById("successModal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget)
    document.getElementById("successModal").classList.remove("open");
});

/* Wishlist sidebar */
function renderWishSidebar() {
  const el = document.getElementById("wishItems"),
    footer = document.getElementById("wishFooter"),
    list = wishGet();
  if (!list.length) {
    el.innerHTML = '<p class="sidebar-empty">No saved services yet.</p>';
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
        showGlobalToast(`🛒 "${w.name}" added to cart!`);
        renderCart();
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
document.getElementById("addAllToCart").addEventListener("click", () => {
  let added = 0;
  wishGet().forEach((w) => {
    if (!cartHas(w.id, w.page)) {
      cartAdd(w);
      added++;
    }
  });
  if (added > 0) {
    showGlobalToast(
      `🛒 ${added} service${added > 1 ? "s" : ""} added to cart!`,
    );
    renderCart();
  } else showGlobalToast("All wishlist items already in cart!");
  document.getElementById("wishSidebar").classList.remove("open");
  document.getElementById("wishOverlay").classList.remove("open");
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

/* Newsletter */
document.getElementById("newsletterBtn").addEventListener("click", () => {
  const v = document.getElementById("newsletterEmail").value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
    showGlobalToast("⚠ Please enter a valid email.");
    return;
  }
  document.getElementById("newsletterEmail").value = "";
  showGlobalToast("✦ Subscribed!");
});

/* Init */
renderCart();
