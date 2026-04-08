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

function applyCoupon() {
  const code = document
    .getElementById("couponInput")
    .value.trim()
    .toUpperCase();
  const msg = document.getElementById("couponMsg");
  if (code === "") {
    msg.style.color = "var(--text-muted)";
    msg.textContent =
      "Discount code is optional. Leave blank to continue without it.";
    return;
  }

  if (code === "BEAUTY10" || code === "SAVE10") {
    msg.style.color = "var(--success)";
    msg.textContent = "✓ Coupon applied! 10% discount added.";
  } else {
    msg.style.color = "var(--error)";
    msg.textContent = "✗ Invalid or expired code. Try BEAUTY10";
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

  const termsAccept = document.getElementById("termsAccept");
  if (!termsAccept.checked) {
    termsAccept.classList.add("invalid-field");
    termsAccept.focus();
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
  setTimeout(() => {
    btn.textContent = "✓ Order Placed!";
    btn.style.background = "var(--success)";
    btn.style.boxShadow = "0 4px 16px rgba(45,122,79,0.3)";
    btn.style.opacity = "1";
  }, 2000);
}

document.getElementById("couponInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") applyCoupon();
});
