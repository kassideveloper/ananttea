# AnantTea Website

A simple static website for AnantTea with:

- Home page displaying 10 brands, each with 6 SKUs
- Add to cart and cart summary functionality
- Checkout via WhatsApp with a prefilled order message
- About Us page
- Contact Us page

## Files

- `index.html` — Home page with products and cart
- `about.html` — About Us page
- `contact.html` — Contact Us page
- `styles.css` — Shared styling
- `script.js` — Cart and checkout logic

## Run locally

Open `index.html` in your browser or use a simple local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Configure WhatsApp checkout

Update the phone number in `script.js`:

```js
const whatsappNumber = '919762624444';
```

Use your WhatsApp number in international format without the leading `+`.
