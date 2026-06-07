# Pamper — Beauty Services Full-Stack App

Luxury beauty booking website built with **Node.js**, **Express**, **MongoDB**, **Mongoose**, and **EJS**.

## Folder Structure

```
pamper/
├── app.js                 # Express server entry point
├── package.json
├── .env                   # MongoDB URI & secrets (create from .env.example)
├── seed.js                # Populate database with sample data
├── config/
│   ├── db.js              # MongoDB connection
│   └── upload.js          # Multer image upload config
├── controllers/           # Route logic
├── models/                # Mongoose schemas
├── routes/                # Express routes
├── views/                 # EJS templates
│   ├── partials/
│   ├── services/
│   ├── account/
│   └── admin/
├── public/
│   ├── css/
│   ├── js/
│   └── images/            # Uploaded & downloaded images
└── scripts/
    └── download-images.js
```

## Installation

1. **Open terminal** in the `pamper` folder:

```bash
cd pamper
```

2. **Install dependencies:**

```bash
npm install
```

3. **Environment variables** — `.env` is already configured with your MongoDB URI. Edit if needed:

```
MONGODB_URI=your_connection_string
PORT=3000
SESSION_SECRET=your-secret
```

4. **Download images** (beauty stock photos for UI):

```bash
node scripts/download-images.js
```

5. **Seed the database:**

```bash
npm run seed
```

6. **Start the server:**

```bash
npm start
```

7. Open **http://localhost:3000**

## Pages

| URL | Description |
|-----|-------------|
| `/` | Home — hero carousel, gallery, featured services |
| `/services/hair` | Hair services grid with filters |
| `/services/nails` | Nail services |
| `/services/lashes` | Lashes page + wishlist sidebar |
| `/services/makeup` | Makeup services |
| `/cart` | My Cart — date/time, order summary |
| `/checkout` | Checkout — contact, shipping, payment |
| `/account` | User overview & recent orders |
| `/products` | Featured products |
| `/admin/services` | CRUD services (with image upload) |
| `/admin/products` | CRUD products |

## npm Packages

- `express` — web server
- `ejs` — templating
- `mongoose` — MongoDB ODM
- `dotenv` — environment variables
- `express-session` — cart & user session
- `multer` — image uploads to `public/images/`
- `method-override` — PUT/DELETE in forms

## Login Accounts (after seed)

| Role | Email | Password |
|------|-------|----------|
| Customer | magy@gmail.com | Demo1234 |
| Admin | admin@pamper.com | Admin1234 |

- **Logout** redirects to the login page.
- **Admin panel:** http://localhost:3000/admin (admin only)
- **12 products** and **10 services** seeded

## Validations

- Email format on login, signup, checkout
- Password: min 8 chars, letters + numbers
- Phone: required on checkout & profile; valid Egypt/international format
- Cart date/time: **required** before checkout; cannot be in the past
- Terms & Conditions: required on signup and checkout
- Card validation unless Cash is selected

## Email (Nodemailer)

Add to `.env` (see `.env.example`):

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your-app-password
MAIL_FROM=Pamper <noreply@pamper.com>
ADMIN_EMAIL=admin@gmail.com
```

**Triggers (backend only):**
| Event | Recipient |
|-------|-----------|
| Sign up | User — welcome email |
| Order placed | User — order confirmation |
| Order placed | `admin@gmail.com` — new order alert |

If SMTP is not configured, orders still complete; emails are skipped with a server log warning.

## Admin CRUD

- **Create/Read/Update/Delete services:** `/admin/services`
- **Create/Delete products:** `/admin/products`
- Images upload to `public/images/` via Multer

## Development

```bash
npm run dev
```

Uses Node `--watch` for auto-restart on file changes.
