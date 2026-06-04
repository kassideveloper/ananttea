const whatsappNumber = '919762624444'; // Replace with your WhatsApp phone number in international format without "+"
const products = [
  {
    brand: 'GreenLeaf',
    items: [
      { id: 'greenleaf-1kg', name: 'GreenLeaf Tea', uom: '1 kg', price: 420 },
      { id: 'greenleaf-500g', name: 'GreenLeaf Tea', uom: '500 g', price: 220 },
      { id: 'greenleaf-250g', name: 'GreenLeaf Tea', uom: '250 g', price: 120 },
      { id: 'greenleaf-100g', name: 'GreenLeaf Tea', uom: '100 g', price: 55 },
      { id: 'greenleaf-50g', name: 'GreenLeaf Tea', uom: '50 g', price: 30 },
      { id: 'greenleaf-tea-box', name: 'GreenLeaf Tea Pack', uom: '25 tea bags', price: 160 }
    ]
  },
  {
    brand: 'SpiceCrafters',
    items: [
      { id: 'spicecrafters-1kg', name: 'SpiceCrafters Masala', uom: '1 kg', price: 480 },
      { id: 'spicecrafters-500g', name: 'SpiceCrafters Masala', uom: '500 g', price: 260 },
      { id: 'spicecrafters-250g', name: 'SpiceCrafters Masala', uom: '250 g', price: 140 },
      { id: 'spicecrafters-100g', name: 'SpiceCrafters Masala', uom: '100 g', price: 65 },
      { id: 'spicecrafters-50g', name: 'SpiceCrafters Masala', uom: '50 g', price: 35 },
      { id: 'spicecrafters-mini', name: 'SpiceCrafters Mini Pack', uom: '10 sachets', price: 90 }
    ]
  },
  {
    brand: 'AromaBliss',
    items: [
      { id: 'aromabliss-1kg', name: 'AromaBliss Herbs', uom: '1 kg', price: 550 },
      { id: 'aromabliss-500g', name: 'AromaBliss Herbs', uom: '500 g', price: 300 },
      { id: 'aromabliss-250g', name: 'AromaBliss Herbs', uom: '250 g', price: 160 },
      { id: 'aromabliss-100g', name: 'AromaBliss Herbs', uom: '100 g', price: 85 },
      { id: 'aromabliss-50g', name: 'AromaBliss Herbs', uom: '50 g', price: 45 },
      { id: 'aromabliss-aroma', name: 'AromaBliss Aroma Pack', uom: '5 pcs', price: 180 }
    ]
  },
  {
    brand: 'TeaNest',
    items: [
      { id: 'teanest-1kg', name: 'TeaNest Premium', uom: '1 kg', price: 510 },
      { id: 'teanest-500g', name: 'TeaNest Premium', uom: '500 g', price: 280 },
      { id: 'teanest-250g', name: 'TeaNest Premium', uom: '250 g', price: 150 },
      { id: 'teanest-100g', name: 'TeaNest Premium', uom: '100 g', price: 75 },
      { id: 'teanest-50g', name: 'TeaNest Premium', uom: '50 g', price: 40 },
      { id: 'teanest-pack', name: 'TeaNest Gift Pack', uom: '20 tea bags', price: 210 }
    ]
  },
  {
    brand: 'HerbHarvest',
    items: [
      { id: 'herbharvest-1kg', name: 'HerbHarvest Mix', uom: '1 kg', price: 495 },
      { id: 'herbharvest-500g', name: 'HerbHarvest Mix', uom: '500 g', price: 250 },
      { id: 'herbharvest-250g', name: 'HerbHarvest Mix', uom: '250 g', price: 135 },
      { id: 'herbharvest-100g', name: 'HerbHarvest Mix', uom: '100 g', price: 70 },
      { id: 'herbharvest-50g', name: 'HerbHarvest Mix', uom: '50 g', price: 38 },
      { id: 'herbharvest-sampler', name: 'HerbHarvest Sampler', uom: '4 x 25 g', price: 120 }
    ]
  },
  {
    brand: 'CurryCorner',
    items: [
      { id: 'currycorner-1kg', name: 'CurryCorner Curry', uom: '1 kg', price: 520 },
      { id: 'currycorner-500g', name: 'CurryCorner Curry', uom: '500 g', price: 270 },
      { id: 'currycorner-250g', name: 'CurryCorner Curry', uom: '250 g', price: 145 },
      { id: 'currycorner-100g', name: 'CurryCorner Curry', uom: '100 g', price: 75 },
      { id: 'currycorner-50g', name: 'CurryCorner Curry', uom: '50 g', price: 42 },
      { id: 'currycorner-mini', name: 'CurryCorner Mini Pack', uom: '6 sachets', price: 110 }
    ]
  },
  {
    brand: 'VitaGrain',
    items: [
      { id: 'vitagrain-1kg', name: 'VitaGrain Mix', uom: '1 kg', price: 460 },
      { id: 'vitagrain-500g', name: 'VitaGrain Mix', uom: '500 g', price: 240 },
      { id: 'vitagrain-250g', name: 'VitaGrain Mix', uom: '250 g', price: 130 },
      { id: 'vitagrain-100g', name: 'VitaGrain Mix', uom: '100 g', price: 65 },
      { id: 'vitagrain-50g', name: 'VitaGrain Mix', uom: '50 g', price: 35 },
      { id: 'vitagrain-blend', name: 'VitaGrain Blend', uom: '125 g', price: 75 }
    ]
  },
  {
    brand: 'FreshFarm',
    items: [
      { id: 'freshfarm-1kg', name: 'FreshFarm Spice', uom: '1 kg', price: 540 },
      { id: 'freshfarm-500g', name: 'FreshFarm Spice', uom: '500 g', price: 285 },
      { id: 'freshfarm-250g', name: 'FreshFarm Spice', uom: '250 g', price: 150 },
      { id: 'freshfarm-100g', name: 'FreshFarm Spice', uom: '100 g', price: 80 },
      { id: 'freshfarm-50g', name: 'FreshFarm Spice', uom: '50 g', price: 45 },
      { id: 'freshfarm-sample', name: 'FreshFarm Sample', uom: '30 g', price: 28 }
    ]
  },
  {
    brand: 'PureDrops',
    items: [
      { id: 'puredrops-1kg', name: 'PureDrops Extract', uom: '1 kg', price: 580 },
      { id: 'puredrops-500g', name: 'PureDrops Extract', uom: '500 g', price: 310 },
      { id: 'puredrops-250g', name: 'PureDrops Extract', uom: '250 g', price: 170 },
      { id: 'puredrops-100g', name: 'PureDrops Extract', uom: '100 g', price: 90 },
      { id: 'puredrops-50g', name: 'PureDrops Extract', uom: '50 g', price: 50 },
      { id: 'puredrops-pack', name: 'PureDrops Gift Pack', uom: '10 x 10 g', price: 140 }
    ]
  },
  {
    brand: 'UrbanHerb',
    items: [
      { id: 'urbanherb-1kg', name: 'UrbanHerb Blend', uom: '1 kg', price: 500 },
      { id: 'urbanherb-500g', name: 'UrbanHerb Blend', uom: '500 g', price: 265 },
      { id: 'urbanherb-250g', name: 'UrbanHerb Blend', uom: '250 g', price: 145 },
      { id: 'urbanherb-100g', name: 'UrbanHerb Blend', uom: '100 g', price: 78 },
      { id: 'urbanherb-50g', name: 'UrbanHerb Blend', uom: '50 g', price: 42 },
      { id: 'urbanherb-pouch', name: 'UrbanHerb Pouch', uom: '15 sachets', price: 130 }
    ]
  }
];

const cartKey = 'ananttea_cart_v1';
let cart = [];

function loadCart() {
  const stored = localStorage.getItem(cartKey);
  cart = stored ? JSON.parse(stored) : [];
}

function saveCart() {
  localStorage.setItem(cartKey, JSON.stringify(cart));
}

function findProductById(productId) {
  for (const brand of products) {
    const item = brand.items.find((product) => product.id === productId);
    if (item) {
      return { brand: brand.brand, ...item };
    }
  }
  return null;
}

function updateCartCount() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('#cart-count').forEach((el) => {
    el.textContent = totalCount;
  });
}

function renderProducts() {
  const productList = document.getElementById('product-list');
  if (!productList) return;

  productList.innerHTML = '';

  products.forEach((brand) => {
    brand.items.forEach((product) => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.innerHTML = `
        <h3>${product.name}</h3>
        <p class="meta">Brand: ${brand.brand}</p>
        <p>${product.uom}</p>
        <p><strong>₹${product.price}</strong></p>
        <div class="actions">
          <select aria-label="Quantity for ${product.name}" data-product-id="${product.id}">
            <option value="1">Qty 1</option>
            <option value="2">Qty 2</option>
            <option value="3">Qty 3</option>
            <option value="4">Qty 4</option>
            <option value="5">Qty 5</option>
          </select>
          <button data-product-id="${product.id}">Add to Cart</button>
        </div>
      `;

      const button = card.querySelector('button');
      const select = card.querySelector('select');

      button.addEventListener('click', () => {
        addToCart(product.id, Number(select.value));
      });

      productList.appendChild(card);
    });
  });
}

function addToCart(productId, quantity) {
  const existing = cart.find((item) => item.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
  saveCart();
  renderCart();
  updateCartCount();
}

function setCartItemQuantity(productId, quantity) {
  const item = cart.find((entry) => entry.productId === productId);
  if (!item) return;
  item.quantity = quantity;
  if (item.quantity <= 0) {
    cart = cart.filter((entry) => entry.productId !== productId);
  }
  saveCart();
  renderCart();
  updateCartCount();
}

function removeCartItem(productId) {
  cart = cart.filter((item) => item.productId !== productId);
  saveCart();
  renderCart();
  updateCartCount();
}

function clearCart() {
  cart = [];
  saveCart();
  renderCart();
  updateCartCount();
}

function renderCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalItemsEl = document.getElementById('cart-total-items');
  const totalPriceEl = document.getElementById('cart-total-price');

  if (!cartItemsContainer || !totalItemsEl || !totalPriceEl) return;

  cartItemsContainer.innerHTML = '';
  let totalQuantity = 0;
  let totalPrice = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty. Add products from Home.</p>';
    totalItemsEl.textContent = '0';
    totalPriceEl.textContent = '₹0';
    return;
  }

  cart.forEach((item) => {
    const product = findProductById(item.productId);
    if (!product) return;

    const itemTotal = item.quantity * product.price;
    totalQuantity += item.quantity;
    totalPrice += itemTotal;

    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <h4>${product.name}</h4>
      <p class="meta">${product.brand} • ${product.uom}</p>
      <p>Price: ₹${product.price} x ${item.quantity} = ₹${itemTotal}</p>
      <div class="item-actions">
        <label>
          Qty:
          <select data-product-id="${item.productId}">
            <option value="1" ${item.quantity === 1 ? 'selected' : ''}>1</option>
            <option value="2" ${item.quantity === 2 ? 'selected' : ''}>2</option>
            <option value="3" ${item.quantity === 3 ? 'selected' : ''}>3</option>
            <option value="4" ${item.quantity === 4 ? 'selected' : ''}>4</option>
            <option value="5" ${item.quantity === 5 ? 'selected' : ''}>5</option>
          </select>
        </label>
        <button class="secondary-button" data-remove-id="${item.productId}">Remove</button>
      </div>
    `;

    const quantitySelect = cartItem.querySelector('select');
    const removeButton = cartItem.querySelector('button');

    quantitySelect.addEventListener('change', () => {
      setCartItemQuantity(item.productId, Number(quantitySelect.value));
    });

    removeButton.addEventListener('click', () => {
      removeCartItem(item.productId);
    });

    cartItemsContainer.appendChild(cartItem);
  });

  totalItemsEl.textContent = totalQuantity;
  totalPriceEl.textContent = `₹${totalPrice}`;
}

function buildCheckoutMessage() {
  if (cart.length === 0) {
    return '';
  }

  const orderLines = cart.map((item) => {
    const product = findProductById(item.productId);
    if (!product) return '';
    return `${product.brand} - ${product.name} (${product.uom}) x ${item.quantity} = ₹${product.price * item.quantity}`;
  });

  const totalPrice = cart.reduce((sum, item) => {
    const product = findProductById(item.productId);
    return product ? sum + product.price * item.quantity : sum;
  }, 0);

  return `Hello, I would like to place an order:%0A%0A${orderLines.join('%0A')}%0A%0ATotal: ₹${totalPrice}%0A%0APlease confirm.`;
}

function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert('Your cart is empty. Add products before checkout.');
    return;
  }

  const message = buildCheckoutMessage();
  const url = `https://wa.me/${whatsappNumber}?text=${message}`;
  window.open(url, '_blank');
}

function bindEvents() {
  const checkoutButton = document.getElementById('checkoutButton');
  const clearCartButton = document.getElementById('clearCartButton');

  if (checkoutButton) {
    checkoutButton.addEventListener('click', checkoutWhatsApp);
  }

  if (clearCartButton) {
    clearCartButton.addEventListener('click', clearCart);
  }
}

function init() {
  loadCart();
  renderProducts();
  renderCart();
  updateCartCount();
  bindEvents();
}

init();
