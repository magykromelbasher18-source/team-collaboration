require('dotenv').config();

const express = require('express');
const path = require('path');
const session = require('express-session');
const methodOverride = require('method-override');
const connectDB = require('./config/db');

// Import route files
const indexRoutes = require('./routes/index');
const serviceRoutes = require('./routes/services');
const cartRoutes = require('./routes/cart');
const checkoutRoutes = require('./routes/checkout');
const accountRoutes = require('./routes/account');
const productRoutes = require('./routes/products');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');

const app = express();

// Connect to MongoDB
connectDB();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// Session — stores cart and logged-in user id
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'pamper-secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 hours
  })
);

// Make session data available in every EJS template
app.use(async (req, res, next) => {
  res.locals.cartCount = req.session.cart ? req.session.cart.length : 0;
  res.locals.wishlistCount = req.session.wishlist ? req.session.wishlist.length : 0;
  res.locals.currentPath = req.path;
  res.locals.user = null;
  if (req.session.userId) {
    try {
      const User = require('./models/User');
      const u = await User.findById(req.session.userId).select('-password');
      res.locals.user = u;
      res.locals.isAdmin = u && u.role === 'admin';
    } catch (e) {
    }
  }
  res.locals.isAdmin = res.locals.isAdmin || false;
  next();
});

// Auth routes (login/signup — no auth required)
app.use('/auth', authRoutes);

// Routes
app.use('/', indexRoutes);
app.use('/services', serviceRoutes);
app.use('/cart', cartRoutes);
app.use('/checkout', checkoutRoutes);
app.use('/account', accountRoutes);
app.use('/products', productRoutes);
app.use('/admin', adminRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).render('error', { title: 'Page Not Found', message: 'Page not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { title: 'Error', message: err.message || 'Something went wrong' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Pamper server running at http://localhost:${PORT}`);
});
