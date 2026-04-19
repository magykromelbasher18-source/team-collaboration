const checkoutCart = cartGet();
const orderItemsEl = document.getElementById("orderItems");
const emptyCartEl = document.querySelector(".empty-cart");
const itemCountEl = document.querySelector(".item-count");
const subtotalValueEl = document.getElementById("subtotalValue");
const shippingLabelEl = document.getElementById("shippingLabel");
const grandTotalEl = document.getElementById("grandTotal");

function parsePrice(value) {
  return Number(value.replace(/[^\d.]/g, "")) || 0;
}

function formatCurrency(amount) {
  return `EGP ${amount.toFixed(2)}`;
}

function getShippingCost() {
  return 0;
}

function renderOrderItems() {
  if (!orderItemsEl) return;
  orderItemsEl.innerHTML = checkoutCart
    .map(function (item) {
      return (
        '<div class="order-item">' +
        "<span>" +
        item.name +
        "</span>" +
        "<span>" +
        (typeof item.price === "number"
          ? formatCurrency(item.price)
          : item.price) +
        "</span>" +
        "</div>"
      );
    })
    .join("");
}

function updateCheckoutSummary() {
  if (!itemCountEl || !subtotalValueEl || !shippingLabelEl || !grandTotalEl)
    return;

  itemCountEl.textContent =
    checkoutCart.length + (checkoutCart.length === 1 ? " item" : " items");
  if (checkoutCart.length === 0) {
    if (emptyCartEl) emptyCartEl.style.display = "block";
    if (orderItemsEl) orderItemsEl.style.display = "none";
  } else {
    if (emptyCartEl) emptyCartEl.style.display = "none";
    if (orderItemsEl) orderItemsEl.style.display = "block";
    renderOrderItems();
  }

  var subtotal = checkoutCart.reduce(function (sum, item) {
    return (
      sum +
      (typeof item.price === "number" ? item.price : parsePrice(item.price))
    );
  }, 0);
  var shippingCost = getShippingCost();
  var total = subtotal + shippingCost;

  subtotalValueEl.textContent = formatCurrency(subtotal);
  shippingLabelEl.textContent =
    shippingCost === 0 ? "Free" : formatCurrency(shippingCost);
  grandTotalEl.textContent = formatCurrency(total);
}

window.addEventListener("load", function () {
  updateCheckoutSummary();
});

function formatCard(input) {
  let v = input.value.replace(/\D/g, "").substring(0, 16);
  input.value = v.match(/.{1,4}/g)?.join(" ") || v;
  const icon = document.getElementById("cardTypeIcon");
  icon.textContent = "💳";
}

function formatExpiry(input) {
  let v = input.value.replace(/\D/g, "");
  if (v.length >= 2) v = v.slice(0, 2) + " / " + v.slice(2, 4);
  input.value = v;
}

let selectedPaymentMethod = "card";

function toggleCashOnDelivery(checkbox) {
  const paymentMsg = document.getElementById("paymentMsg");
  const paymentIcons = document.querySelector(".payment-icons");
  const cardField = document.querySelector(".card-field");
  const cardNameGroup = document.querySelector(".card-name-group");
  const cardNumber = document.getElementById("cardNumber");
  const expiryInput = document.getElementById("expiryInput");
  const cvvInput = document.getElementById("cvvInput");
  const cardName = document.getElementById("cardName");

  if (checkbox.checked) {
    selectedPaymentMethod = "cod";
    paymentIcons.style.display = "none";
    cardField.style.display = "none";
    cardNameGroup.style.display = "none";
    cardNumber.disabled = true;
    expiryInput.disabled = true;
    cvvInput.disabled = true;
    cardName.disabled = true;
    paymentMsg.style.color = "var(--accent)";
    paymentMsg.textContent =
      "Cash on Delivery selected. Card details are hidden and not required.";
  } else {
    selectedPaymentMethod = "card";
    paymentIcons.style.display = "flex";
    cardField.style.display = "block";
    cardNameGroup.style.display = "block";
    cardNumber.disabled = false;
    expiryInput.disabled = false;
    cvvInput.disabled = false;
    cardName.disabled = false;
    paymentMsg.style.color = "var(--text-muted)";
    paymentMsg.textContent =
      "Pay by card or select Cash on Delivery to pay when your order arrives.";
  }
}

function validateEmail(input) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(input.value)) input.classList.add("valid");
  else input.classList.remove("valid");
}

function showFormError(message) {
  const error = document.getElementById("formErrorMsg");
  error.textContent = message;
}

function clearFormErrors() {
  showFormError("");
  document.querySelectorAll(".invalid-field").forEach((field) => {
    field.classList.remove("invalid-field");
  });
}

function handleSubmit() {
  clearFormErrors();

  if (cartGet().length === 0) {
    showFormError(
      "Your cart is empty. Please add items before placing an order.",
    );
    return;
  }

  const isCod = document.getElementById("cashOnDelivery").checked;
  const emailInput = document.getElementById("emailInput");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const addressInput = document.getElementById("addressInput");
  const cityInput = document.getElementById("cityInput");
  const governorateSelect = document.getElementById("governorateSelect");
  const phoneInput = document.getElementById("phoneInput");
  const cardNumber = document.getElementById("cardNumber");
  const expiryInput = document.getElementById("expiryInput");
  const cvvInput = document.getElementById("cvvInput");
  const cardName = document.getElementById("cardName");
  const termsAccept = document.getElementById("termsAccept");

  const fields = [
    { field: emailInput, name: "Email address" },
    { field: firstName, name: "First name" },
    { field: lastName, name: "Last name" },
    { field: addressInput, name: "Address" },
    { field: cityInput, name: "City" },
    { field: governorateSelect, name: "Governorate" },
    { field: phoneInput, name: "Phone" },
  ];

  for (const item of fields) {
    if (!item.field.value.trim()) {
      item.field.classList.add("invalid-field");
      item.field.focus();
      showFormError(`Please enter your ${item.name}.`);
      return;
    }
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailInput.classList.add("invalid-field");
    emailInput.focus();
    showFormError("Please enter a valid email address.");
    return;
  }

  const phonePattern = /^\+20\s?1[0-9]{2}\s?[0-9]{3}\s?[0-9]{4}$/;
  if (!phonePattern.test(phoneInput.value.trim())) {
    phoneInput.classList.add("invalid-field");
    phoneInput.focus();
    showFormError(
      "Please enter a valid Egyptian phone number (+20 1xx xxx xxxx).",
    );
    return;
  }

  if (!termsAccept.checked) {
    termsAccept.classList.add("invalid-field");
    showFormError(
      "Please accept the terms and conditions for home beauty services.",
    );
    return;
  }

  if (!isCod) {
    const cardFields = [
      { field: cardNumber, name: "Card number" },
      { field: expiryInput, name: "Expiry date" },
      { field: cvvInput, name: "CVV" },
      { field: cardName, name: "Name on card" },
    ];

    for (const item of cardFields) {
      if (!item.field.value.trim()) {
        item.field.classList.add("invalid-field");
        item.field.focus();
        showFormError(`Please enter your ${item.name}.`);
        return;
      }
    }
  }

  const btn = document.querySelector(".btn-submit");
  btn.textContent = "⏳ Processing...";
  btn.style.opacity = "0.8";
  btn.disabled = true;

  setTimeout(function () {
    btn.textContent = "✓ Order Placed!";
    btn.style.background = "var(--success)";
    btn.style.boxShadow = "0 4px 16px rgba(45,122,79,0.3)";
    btn.style.opacity = "1";
    cartSave([]);

    setTimeout(function () {
      window.location.href = "../HomePage/home.html";
    }, 1400);
  }, 2000);
}
