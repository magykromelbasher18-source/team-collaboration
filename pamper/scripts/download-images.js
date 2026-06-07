
const https = require("https");
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "public", "images");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const images = {
  "hero-1.jpg":
    "https://i.pinimg.com/1200x/cb/9b/a4/cb9ba48306608f283a51cc76836b1db1.jpg",
  "hero-2.jpg":
    "https://i.pinimg.com/1200x/01/90/34/01903442566db675afc339252af37d21.jpg",
  "gallery-1.jpg":
    "https://i.pinimg.com/webp/736x/11/b2/6c/11b26cbc8dcc99728496381c7fa8403c.webp",
  "gallery-2.jpg":
    "https://i.pinimg.com/webp/1200x/95/1a/ed/951aed08365ab0b097b09d7ad5eee784.webp",
  "gallery-3.jpg":
    "https://i.pinimg.com/webp/1200x/da/d5/c4/dad5c4b40e4b9fcebe6f53d5329697e6.webp",
  "gallery-4.jpg":
    "https://i.pinimg.com/736x/14/c1/38/14c1389e4cd0721e597fb57951e3d6e0.jpg",
  "manicure.jpg":
    "https://i.pinimg.com/webp/1200x/1a/c9/7b/1ac97bece29b5472ab006cc3b8030a73.webp",
  "hair-cut.jpg":
    "https://i.pinimg.com/webp/236x/c9/f0/cd/c9f0cda62e17904cd58c08508bba0056.webp",
  "lashes.jpg":
    "https://i.pinimg.com/736x/25/af/d9/25afd9a8dbd73d640cecd73b29210b78.jpg",
  "bridal-hair.jpg":
    "https://i.pinimg.com/736x/8b/84/b6/8b84b66e625fd5c238f33555b6657e00.jpg",
  "hair-color.jpg":
    "https://i.pinimg.com/webp/736x/57/fe/64/57fe640a3b0fbe2be2daf0efb2848c04.webp",
  "hair-treatment.jpg":
    "https://i.pinimg.com/webp/1200x/6a/84/b6/6a84b6a99d68780b8ec653e8a5e0b57e.webp",
  "hair-style.jpg":
    "https://i.pinimg.com/webp/736x/48/54/b3/4854b3421ef7495544a3e8c8932ad40a.webp",
  "pedicure.jpg":
    "https://i.pinimg.com/736x/ed/10/68/ed1068562556c4ed48da661e86876cac.jpg",
  "lash-lift.jpg":
    "https://i.pinimg.com/736x/14/7f/62/147f6282bfc76f38d4b5b37a5b5728c4.jpg",
  "makeup.jpg":
    "https://i.pinimg.com/736x/5b/89/e0/5b89e0b449f0b8b6acf012f2a4e580a4.jpg",
  "hair-hero.jpg":
    "https://i.pinimg.com/1200x/e8/9b/1d/e89b1d5c0022da39fd53877340d404da.jpg",
  "lashes-hero.jpg":
    "https://i.pinimg.com/736x/5a/b4/5a/5ab45a49043266a0af4ed3dd8ca9d312.jpg",
  "nails-hero.jpg":
    "https://i.pinimg.com/1200x/fc/4b/de/fc4bde29bc0627edd8eae630a97321ac.jpg",
  "makeup-hero.jpg":
    "https://i.pinimg.com/1200x/83/73/62/83736251fcabc21b82dd88ce951d4d29.jpg",
  "shampoo.jpg":
    "https://i.pinimg.com/webp/1200x/52/9d/ce/529dcef9fb09292f0de374c9a2e9b9e7.webp",
  "nail-polish.jpg":
    "https://i.pinimg.com/webp/1200x/2f/10/ed/2f10ed4bea666625cfe9deb235aaecc7.webp",
  "mascara.jpg":
    "https://i.pinimg.com/1200x/67/e8/68/67e868d53a4fd138e1f8549cba80aa12.jpg",
  "lipstick.jpg":
    "https://i.pinimg.com/736x/ec/c1/6d/ecc16d31189740ac38172bb3969676d4.jpg",
  "placeholder-service.jpg":
    "https://i.pinimg.com/webp/1200x/ce/83/e6/ce83e6a2a9544d211ca0eb43d8332e4b.webp",
  "placeholder-product.jpg":
    "https://i.pinimg.com/736x/24/e6/d8/24e6d80d98c90fe6b59b9a3d02122abc.jpg",
};

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          return download(res.headers.location, dest)
            .then(resolve)
            .catch(reject);
        }
        res.pipe(file);
        file.on("finish", () => file.close(resolve));
      })
      .on("error", reject);
  });
}

(async () => {
  for (const [name, url] of Object.entries(images)) {
    const dest = path.join(dir, name);
    if (fs.existsSync(dest)) {
      console.log("Skip (exists):", name);
      continue;
    }
    try {
      console.log("Downloading:", name);
      await download(url, dest);
    } catch (e) {
      console.error("Failed:", name, e.message);
    }
  }
  console.log("Done.");
})();
