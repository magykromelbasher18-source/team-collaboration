
function showToast(id, message, duration = 3000) {
  const toast = document.getElementById(id);
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}
function openModal(id)  { const m = document.getElementById(id); if (m) m.classList.add('open'); }
function closeModal(id) { const m = document.getElementById(id); if (m) m.classList.remove('open'); }

const isLoginPage  = document.body.classList.contains('login-page');
const isMakeupPage = document.body.classList.contains('makeup-page');


if (isLoginPage) {

  
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('loginForm').classList.remove('active-form');
      document.getElementById('registerForm').classList.remove('active-form');
      document.getElementById(tab.dataset.tab === 'login' ? 'loginForm' : 'registerForm').classList.add('active-form');
    });
  });

  
  function setupToggle(btnId, inputId) {
    const btn = document.getElementById(btnId);
    const inp = document.getElementById(inputId);
    if (!btn || !inp) return;
    btn.addEventListener('click', () => {
      const show = inp.type === 'password';
      inp.type = show ? 'text' : 'password';
      btn.textContent = show ? '🙈' : '👁';
    });
  }
  setupToggle('togglePass',    'password');
  setupToggle('toggleRegPass', 'regPass');

  
  function setError(fieldId, errId, msg) {
    const el  = document.getElementById(fieldId);
    const err = document.getElementById(errId);
    if (el)  { el.classList.toggle('error', !!msg); el.classList.toggle('success', !msg && el.value.length > 0); }
    if (err) err.textContent = msg;
    return !!msg;
  }
  function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

  
  document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    let err = false;
    const email = document.getElementById('email').value.trim();
    const pass  = document.getElementById('password').value;
    if (!email)             err = setError('email',    'emailError', 'Email is required.') || err;
    else if (!validEmail(email)) err = setError('email', 'emailError', 'Enter a valid email.') || err;
    else setError('email', 'emailError', '');
    if (!pass)              err = setError('password', 'passError',  'Password is required.') || err;
    else if (pass.length<6) err = setError('password', 'passError',  'At least 6 characters.') || err;
    else setError('password', 'passError', '');
    if (err) return;

    const btn = document.getElementById('loginBtn');
    btn.innerHTML = '<span class="btn-text">Signing in…</span>';
    btn.disabled = true;
    setTimeout(() => {
      showToast('toast', '✦ Signed in! Redirecting…');
      setTimeout(() => { window.location.href = 'makeup.html'; }, 1400);
    }, 1100);
  });

  
  document.getElementById('registerForm').addEventListener('submit', e => {
    e.preventDefault();
    let err = false;
    const name    = document.getElementById('regName').value.trim();
    const email   = document.getElementById('regEmail').value.trim();
    const pass    = document.getElementById('regPass').value;
    const confirm = document.getElementById('regConfirm').value;
    if (!name)                    err = setError('regName',    'regNameError',    'Name is required.') || err;
    else setError('regName', 'regNameError', '');
    if (!email||!validEmail(email)) err = setError('regEmail',  'regEmailError',   'Enter a valid email.') || err;
    else setError('regEmail', 'regEmailError', '');
    if (pass.length < 6)          err = setError('regPass',    'regPassError',    'At least 6 characters.') || err;
    else setError('regPass', 'regPassError', '');
    if (confirm !== pass)         err = setError('regConfirm', 'regConfirmError', 'Passwords do not match.') || err;
    else setError('regConfirm', 'regConfirmError', '');
    if (err) return;
    showToast('toast', '✦ Account created! Welcome to Beauty911.');
    setTimeout(() => document.querySelector('.tab[data-tab="login"]').click(), 2000);
  });

  
  const regPass = document.getElementById('regPass');
  if (regPass) {
    regPass.addEventListener('input', () => {
      const v = regPass.value;
      let s = 0;
      if (v.length >= 6)           s++;
      if (v.length >= 10)          s++;
      if (/[A-Z]/.test(v))         s++;
      if (/[0-9]/.test(v))         s++;
      if (/[^A-Za-z0-9]/.test(v)) s++;
      const lvls = [
        { p:0,   c:'#e0e0e0', t:'' },
        { p:20,  c:'#e53e3e', t:'Weak' },
        { p:40,  c:'#dd6b20', t:'Fair' },
        { p:60,  c:'#d69e2e', t:'Good' },
        { p:80,  c:'#38a169', t:'Strong' },
        { p:100, c:'#276749', t:'Very Strong' },
      ];
      const l = lvls[s] || lvls[0];
      document.getElementById('strengthFill').style.cssText = `width:${l.p}%;background:${l.c}`;
      document.getElementById('strengthLabel').textContent = l.t;
    });
  }


  document.getElementById('forgotLink').addEventListener('click', e => { e.preventDefault(); openModal('forgotModal'); });
  document.getElementById('closeModal').addEventListener('click', () => closeModal('forgotModal'));
  document.getElementById('forgotModal').addEventListener('click', e => { if (e.target===e.currentTarget) closeModal('forgotModal'); });
  document.getElementById('sendResetBtn').addEventListener('click', () => {
    const v = document.getElementById('resetEmail').value.trim();
    if (!validEmail(v)) { alert('Please enter a valid email.'); return; }
    closeModal('forgotModal');
    showToast('toast', '✦ Reset link sent! Check your inbox.');
  });

  
  document.getElementById('googleBtn').addEventListener('click', () => showToast('toast', '✦ Redirecting to Google…'));
  document.getElementById('fbBtn').addEventListener('click',     () => showToast('toast', '✦ Redirecting to Facebook…'));
}


if (isMakeupPage) {

  
  const services = [
    {
      id: 1,
      name: 'Full Bridal Glam',
      category: 'bridal',
      tier: 'luxury',
      price: 350,
      duration: '3–4 hrs',
      rating: 5.0, reviews: 142,
      image: 'https://i.pinimg.com/736x/23/73/1d/23731da4dbe39a55a65b7bb3884e7f32.jpg',
      desc: 'Complete bridal makeup with a full trial session, luxury products, and a touch-up kit included.',
      includes: ['Trial Session', 'Day-of Application', 'Touch-up Kit', 'Lash Application'],
    },
    {
      id: 2,
      name: 'Bridal Trial Session',
      category: 'bridal',
      tier: 'premium',
      price: 150,
      duration: '2 hrs',
      rating: 4.9, reviews: 98,
      image: 'https://static.showit.co/800/Mo0YNtuLF77HnTd6ezPZ-g/301451/keira_edit_3.jpg',
      desc: 'A dedicated trial run to perfect your bridal look before the big day.',
      includes: ['Full Makeup Application', 'Style Consultation', 'Photo Session'],
    },
    {
      id: 3,
      name: 'Engagement Shoot Makeup',
      category: 'bridal',
      tier: 'premium',
      price: 180,
      duration: '1.5 hrs',
      rating: 4.8, reviews: 74,
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&q=80',
      desc: 'Camera-ready makeup designed to look stunning in photos for your engagement shoot.',
      includes: ['Full Face Makeup', 'Lash Application', 'Setting Spray'],
    },
    {
      id: 4,
      name: 'Event Glam Package',
      category: 'event',
      tier: 'luxury',
      price: 220,
      duration: '2 hrs',
      rating: 4.9, reviews: 211,
      image: 'https://themakeupevents.pl/lib/tf1ce0/209A7173-min-mc634axv.jpg',
      desc: 'Full glam for galas, charity events, awards nights, or any special occasion.',
      includes: ['Full Face Makeup', 'Contouring', 'Lash Application', 'Setting Spray'],
    },
    {
      id: 5,
      name: 'Partying',
      category: 'event',
      tier: 'essential',
      price: 90,
      duration: '1 hr',
      rating: 4.7, reviews: 183,
      image: 'https://assets.teenvogue.com/photos/69332d189bf1f98889da7d47/1:1/w_3648,h_3648,c_limit/zara88.jpg',
      desc: 'Bold and beautiful makeup for a night out, birthday party, or casual celebration.',
      includes: ['Full Face Makeup', 'Lash Application'],
    },
    {
      id: 6,
      name: 'Graduation Makeup',
      category: 'event',
      tier: 'essential',
      price: 80,
      duration: '45 min',
      rating: 4.8, reviews: 97,
      image: 'https://images.squarespace-cdn.com/content/v1/63b9c5a2f6ac1158c5a60078/f7e1cf54-cdd3-40bb-b69b-45e28c842abb/graduation%2Bmakeup%2Band%2Bhairstyling%2Bwith%2BRuth%2BB%2BMedrano%2BBeauty.JPG',
      desc: 'Polished, camera-ready makeup to celebrate your big achievement.',
      includes: ['Full Face Makeup', 'Finishing Spray'],
    },
    {
      id: 7,
      name: 'Editorial Shoot',
      category: 'editorial',
      tier: 'luxury',
      price: 400,
      duration: '3–5 hrs',
      rating: 5.0, reviews: 56,
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqiEv9HnEscuvAEg3gFfUFevTl69XtTGYpYAcNiTnY1a9o4piGoJdGE45uMaZIuUwGpGwMC4KDhCt8q_U4WQ6ahVSXv-AlcWyAYnYZAsP01tq-AEWwdaaHOOUQUn24DdEyew_iJi5_QNAGoI4epYI-gK57zJgPZmx2Pu49tBb1VM6sRLirqAh0x6cy71I/s6490/ABC_1635_RTCH.jpg',
      desc: 'High-fashion, creative makeup for magazine shoots, campaigns, and fashion editorials.',
      includes: ['Concept Consultation', 'Multiple Looks', 'On-set Touch-ups', 'Luxury Products'],
    },
    {
      id: 8,
      name: 'Creative / SFX Makeup',
      category: 'editorial',
      tier: 'premium',
      price: 250,
      duration: '2–3 hrs',
      rating: 4.9, reviews: 45,
      image: 'data:image/jpeg;base64,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',
      desc: 'Avant-garde and special effects makeup for artistic projects, performances, or themed events.',
      includes: ['Concept Design', 'Full Application', 'On-site Adjustments'],
    },
    {
      id: 9,
      name: '1-on-1 Makeup Lesson',
      category: 'lesson',
      tier: 'premium',
      price: 130,
      duration: '2 hrs',
      rating: 4.9, reviews: 120,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRby-I7A93PCcyIRFqvRg-TzrJmKi6kl7t2sg&s',
      desc: 'A personalized lesson tailored to your skill level and goals — learn techniques that work for your face.',
      includes: ['Personalized Lesson Plan', 'Product Recommendations', 'Practice Time'],
    },
    {
      id: 10,
      name: 'Beginner Basics Class',
      category: 'lesson',
      tier: 'essential',
      price: 70,
      duration: '1.5 hrs',
      rating: 4.8, reviews: 88,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP1lsrzEi1poNurcZjvdr-FahPWMFlWZoI-Q&s',
      desc: 'Foundation, concealer, brows, and a simple eye look — perfect for makeup beginners.',
      includes: ['Step-by-step Tutorial', 'Product Guide'],
    },
    {
      id: 11,
      name: 'Glow Facial + Makeup',
      category: 'skincare',
      tier: 'luxury',
      price: 280,
      duration: '2.5 hrs',
      rating: 4.9, reviews: 67,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuOEO3BxyUFGzkAi0hmvfrLB7fzRGKyXsB4g&s',
      desc: 'A relaxing facial followed by a dewy, skin-first makeup look that lets your natural glow shine.',
      includes: ['Mini Facial', 'Skin Prep', 'Dewy Makeup Application', 'Skincare Consultation'],
    },
    
    {
      id: 12,
      name: 'Clean Girl Makeup',
      category: 'skincare',
      tier: 'essential',
      price: 95,
      duration: '1 hr',
      rating: 4.9, reviews: 143,
      image: 'https://usercontent.one/wp/www.thesundaysnug.com/wp-content/uploads/2024/04/Picture_of_clean_makeup_on_dark_skin.jpg?media=1694892413',
      desc: 'Minimal, skin-focused makeup that celebrates your natural complexion with dewy, fresh-faced radiance.',
      includes: ['Skin Prep', 'Minimal Makeup Application', 'Natural Finish Spray'],
    },
  ];

  
  let wishlist      = [];
  let activeCategory = 'all';
  let activeTier     = 'all';
  let searchQuery    = '';
  let sortBy         = 'default';

  
  function renderStars(r) {
    return '★'.repeat(Math.floor(r)) + (r % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.floor(r) - (r%1>=0.5?1:0));
  }

  function tierLabel(tier) {
    if (tier === 'luxury')   return '✦ Luxury';
    if (tier === 'premium')  return 'Premium';
    return 'Essential';
  }

  function tierClass(tier) {
    return 'badge-' + tier;
  }

  function getFiltered() {
    let list = [...services];
    if (activeCategory !== 'all') list = list.filter(s => s.category === activeCategory);
    if (activeTier !== 'all')     list = list.filter(s => s.tier === activeTier);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(s => s.name.toLowerCase().includes(q) || s.category.includes(q) || s.desc.toLowerCase().includes(q));
    }
    if (sortBy === 'price-asc')  list.sort((a,b) => a.price - b.price);
    if (sortBy === 'price-desc') list.sort((a,b) => b.price - a.price);
    if (sortBy === 'rating')     list.sort((a,b) => b.rating - a.rating);
    if (sortBy === 'name')       list.sort((a,b) => a.name.localeCompare(b.name));
    return list;
  }


  function renderServices() {
    const grid  = document.getElementById('productsGrid');
    const noRes = document.getElementById('noResults');
    const list  = getFiltered();

    if (!list.length) {
      grid.innerHTML = '';
      noRes.style.display = 'block';
      return;
    }
    noRes.style.display = 'none';

    grid.innerHTML = list.map(s => `
      <div class="product-card" data-id="${s.id}">
        <div class="product-img-wrap">
          <img src="${s.image}" alt="${s.name}" loading="lazy"/>
          <span class="product-badge ${tierClass(s.tier)}">${tierLabel(s.tier)}</span>
          <div class="product-actions">
            <button class="action-btn wishlist-btn ${wishlist.includes(s.id) ? 'wishlisted' : ''}"
              data-id="${s.id}" title="${wishlist.includes(s.id) ? 'Saved' : 'Save'}" aria-label="Wishlist">
              ${wishlist.includes(s.id) ? '♥' : '♡'}
            </button>
            <button class="action-btn quickview-btn" data-id="${s.id}" title="Quick View" aria-label="Quick view">🔍</button>
          </div>
        </div>
        <div class="product-info">
          <p class="product-brand">${s.category.charAt(0).toUpperCase() + s.category.slice(1)}</p>
          <h3 class="product-name">${s.name}</h3>
          <p class="product-duration">⏱ ${s.duration}</p>
          <div class="product-stars">${renderStars(s.rating)} <span>(${s.reviews})</span></div>
          <div class="product-bottom">
            <div class="product-price">From $${s.price}</div>
            <button class="add-to-cart" data-id="${s.id}">Book →</button>
          </div>
        </div>
      </div>
    `).join('');

    
    grid.querySelectorAll('.add-to-cart').forEach(btn =>
      btn.addEventListener('click', e => { e.stopPropagation(); openBooking(parseInt(btn.dataset.id)); })
    );
    grid.querySelectorAll('.wishlist-btn').forEach(btn =>
      btn.addEventListener('click', e => { e.stopPropagation(); toggleWishlist(parseInt(btn.dataset.id)); })
    );
    grid.querySelectorAll('.quickview-btn').forEach(btn =>
      btn.addEventListener('click', e => { e.stopPropagation(); openBooking(parseInt(btn.dataset.id)); })
    );
    grid.querySelectorAll('.product-card').forEach(card =>
      card.addEventListener('click', () => openBooking(parseInt(card.dataset.id)))
    );
  }


  function toggleWishlist(id) {
    const svc = services.find(s => s.id === id);
    if (!svc) return;
    if (wishlist.includes(id)) {
      wishlist = wishlist.filter(w => w !== id);
      showToast('makeupToast', `♡ Removed from wishlist`);
    } else {
      wishlist.push(id);
      showToast('makeupToast', `♥ "${svc.name}" saved to wishlist!`);
    }
    document.getElementById('wishCount').textContent = wishlist.length;
    renderServices();
    renderWishlistSidebar();
  }

  function renderWishlistSidebar() {
    const itemsEl  = document.getElementById('wishlistItems');
    const footerEl = document.getElementById('wishlistFooter');
    if (!itemsEl) return;

    if (wishlist.length === 0) {
      itemsEl.innerHTML = '<p class="cart-empty">No saved services yet.<br/>Click ♡ on a service to save it!</p>';
      if (footerEl) footerEl.style.display = 'none';
      return;
    }

    itemsEl.innerHTML = wishlist.map(id => {
      const s = services.find(sv => sv.id === id);
      if (!s) return '';
      return `
        <div class="cart-item">
          <img class="cart-item-img" src="${s.image}" alt="${s.name}"/>
          <div class="cart-item-info">
            <p class="cart-item-name">${s.name}</p>
            <p class="cart-item-tier">${tierLabel(s.tier)}</p>
            <p class="cart-item-price">From $${s.price}</p>
          </div>
          <button class="cart-item-remove" data-id="${s.id}" aria-label="Remove">✕</button>
        </div>
      `;
    }).join('');

    itemsEl.querySelectorAll('.cart-item-remove').forEach(btn =>
      btn.addEventListener('click', () => toggleWishlist(parseInt(btn.dataset.id)))
    );

    if (footerEl) footerEl.style.display = 'block';
  }

  
  function openBooking(id) {
    const s = services.find(sv => sv.id === id);
    if (!s) return;

    document.getElementById('bookingContent').innerHTML = `
      <div class="booking-header">
        <span class="product-badge ${tierClass(s.tier)}" style="position:static;display:inline-block;margin-bottom:10px;">${tierLabel(s.tier)}</span>
        <h2>${s.name}</h2>
        <p>${s.desc}</p>
        <p style="margin-bottom:0.5rem;"><strong>Includes:</strong> ${s.includes.join(' · ')}</p>
        <p style="margin-bottom:0;color:var(--text-muted);font-size:13px;">⏱ ${s.duration}</p>
        <div class="booking-price">From $${s.price}</div>
      </div>
      <form class="booking-form" id="bookingForm" novalidate>
        <div>
          <label for="bName">Your Full Name</label>
          <input type="text" id="bName" placeholder="e.g. Sara Ahmed"/>
        </div>
        <div>
          <label for="bEmail">Email Address</label>
          <input type="email" id="bEmail" placeholder="you@example.com"/>
        </div>
        <div>
          <label for="bPhone">Phone Number</label>
          <input type="tel" id="bPhone" placeholder="+20 100 000 0000"/>
        </div>
        <div>
          <label for="bDate">Preferred Date</label>
          <input type="date" id="bDate" min="${new Date().toISOString().split('T')[0]}"/>
        </div>
        <div>
          <label for="bTime">Preferred Time</label>
          <select id="bTime">
            <option value="">Select a time slot</option>
            <option>9:00 AM</option><option>10:00 AM</option><option>11:00 AM</option>
            <option>12:00 PM</option><option>1:00 PM</option><option>2:00 PM</option>
            <option>3:00 PM</option><option>4:00 PM</option><option>5:00 PM</option>
          </select>
        </div>
        <div>
          <label for="bNotes">Special Requests (optional)</label>
          <textarea id="bNotes" placeholder="Any notes, allergies, or specific requests..."></textarea>
        </div>
        <button type="submit" class="btn-primary" style="width:100%;justify-content:center;">Confirm Booking →</button>
      </form>
    `;

    document.getElementById('bookingForm').addEventListener('submit', e => {
      e.preventDefault();
      const name  = document.getElementById('bName').value.trim();
      const email = document.getElementById('bEmail').value.trim();
      const date  = document.getElementById('bDate').value;
      const time  = document.getElementById('bTime').value;
      if (!name || !email || !date || !time) {
        showToast('makeupToast', '⚠ Please fill in all required fields.');
        return;
      }
      closeModal('bookingModal');
      showToast('makeupToast', `✦ Booking confirmed for "${s.name}"! We'll contact you shortly.`);
    });

    openModal('bookingModal');
  }

  
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.dataset.cat;
      renderServices();
    });
  });

  document.querySelectorAll('.tier-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tier-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeTier = tab.dataset.tier;
      renderServices();
    });
  });

  document.getElementById('searchInput').addEventListener('input', e => {
    searchQuery = e.target.value.trim();
    renderServices();
  });

  document.getElementById('sortSelect').addEventListener('change', e => {
    sortBy = e.target.value;
    renderServices();
  });

  
  const wishlistSidebar  = document.getElementById('wishlistSidebar');
  const wishlistOverlay  = document.getElementById('wishlistOverlay');

  document.getElementById('wishlistNavBtn').addEventListener('click', () => {
    renderWishlistSidebar();
    wishlistSidebar.classList.add('open');
    wishlistOverlay.classList.add('open');
  });

  document.getElementById('closeWishlist').addEventListener('click', () => {
    wishlistSidebar.classList.remove('open');
    wishlistOverlay.classList.remove('open');
  });

  wishlistOverlay.addEventListener('click', () => {
    wishlistSidebar.classList.remove('open');
    wishlistOverlay.classList.remove('open');
  });

  const bookAllBtn = document.getElementById('bookAllBtn');
  if (bookAllBtn) {
    bookAllBtn.addEventListener('click', () => {
      if (wishlist.length === 0) return;
      wishlistSidebar.classList.remove('open');
      wishlistOverlay.classList.remove('open');
      openBooking(wishlist[0]);
    });
  }

  
  document.getElementById('closeBooking').addEventListener('click', () => closeModal('bookingModal'));
  document.getElementById('bookingModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal('bookingModal'); });

  
  document.getElementById('shopNowBtn').addEventListener('click', () =>
    document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' })
  );
  document.getElementById('lookbookBtn').addEventListener('click', () =>
    document.querySelector('.looks-section').scrollIntoView({ behavior: 'smooth' })
  );
  document.getElementById('featureShopBtn').addEventListener('click', () => {
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === 'bridal'));
    activeCategory = 'bridal';
    renderServices();
    document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('bookNavBtn').addEventListener('click', () =>
    document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' })
  );

  
  window.showLook = function(cat) {
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === cat));
    activeCategory = cat;
    renderServices();
    document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
    showToast('makeupToast', `✦ Showing ${cat} services`);
  };

  
  document.getElementById('newsletterBtn').addEventListener('click', () => {
    const val = document.getElementById('newsletterEmail').value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      showToast('makeupToast', '⚠ Please enter a valid email address.');
      return;
    }
    document.getElementById('newsletterEmail').value = '';
    showToast('makeupToast', '✦ Subscribed! Welcome to the Beauty911 family.');
  });

  
  renderServices();
}