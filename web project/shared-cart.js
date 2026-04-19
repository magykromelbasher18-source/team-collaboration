const CART_KEY = "b911_cart";
const WISH_KEY = "b911_wishlist";

/* ── CART ── */
function cartGet() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}
function cartSave(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
function cartAdd(item) {
  const cart = cartGet();
  const exists = cart.find((c) => c.id === item.id && c.page === item.page);
  if (!exists) {
    cart.push(item);
    cartSave(cart);
  }
  updateCartBadge();
}
function cartRemove(id, page) {
  const cart = cartGet().filter((c) => !(c.id === id && c.page === page));
  cartSave(cart);
  updateCartBadge();
}
function cartHas(id, page) {
  return cartGet().some((c) => c.id === id && c.page === page);
}
function cartCount() {
  return cartGet().length;
}

/* ── WISHLIST ── */
function wishGet() {
  try {
    return JSON.parse(localStorage.getItem(WISH_KEY)) || [];
  } catch {
    return [];
  }
}
function wishSave(w) {
  localStorage.setItem(WISH_KEY, JSON.stringify(w));
}
function wishAdd(item) {
  const w = wishGet();
  if (!w.find((x) => x.id === item.id && x.page === item.page)) {
    w.push(item);
    wishSave(w);
  }
  updateWishBadge();
}
function wishRemove(id, page) {
  wishSave(wishGet().filter((x) => !(x.id === id && x.page === page)));
  updateWishBadge();
}
function wishToggle(item) {
  if (wishGet().find((x) => x.id === item.id && x.page === item.page)) {
    wishRemove(item.id, item.page);
    return false;
  } else {
    wishAdd(item);
    return true;
  }
}
function wishHas(id, page) {
  return wishGet().some((x) => x.id === id && x.page === page);
}
function wishCount() {
  return wishGet().length;
}

/* ── BADGE UPDATES ── */
function updateCartBadge() {
  document
    .querySelectorAll(".cart-nav-count")
    .forEach((el) => (el.textContent = cartCount()));
}
function updateWishBadge() {
  document
    .querySelectorAll(".wish-nav-count")
    .forEach((el) => (el.textContent = wishCount()));
}
function updateAllBadges() {
  updateCartBadge();
  updateWishBadge();
}

/* ── TOAST ── */
function showGlobalToast(msg) {
  const t = document.getElementById("globalToast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 3000);
}

/* Init badges on load */
document.addEventListener("DOMContentLoaded", updateAllBadges);
