// Expanded product database
const products = {
    electronics: [
        {
            id: 'e1',
            name: 'Wireless Earbuds Pro',
            price: 99.99,
            image: 'https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?w=500',
            category: 'electronics',
            tags: ['wireless', 'audio', 'earbuds', 'bluetooth'],
            rating: 4.5
        },
        {
            id: 'e2',
            name: 'Smart 4K TV',
            price: 699.99,
            image: 'https://images.unsplash.com/photo-1593784991095-a205069533cd?w=500',
            category: 'electronics',
            tags: ['tv', '4k', 'smart', 'entertainment'],
            rating: 4.8
        },
        {
            id: 'e3',
            name: 'Gaming Laptop',
            price: 1299.99,
            image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500',
            category: 'electronics',
            tags: ['laptop', 'gaming', 'computer'],
            rating: 4.7
        }
    ],
    fashion: [
        {
            id: 'f1',
            name: 'Classic Denim Jacket',
            price: 79.99,
            image: 'https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=500',
            category: 'fashion',
            tags: ['jacket', 'denim', 'casual'],
            rating: 4.3
        },
        {
            id: 'f2',
            name: 'Summer Dress',
            price: 49.99,
            image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500',
            category: 'fashion',
            tags: ['dress', 'summer', 'casual'],
            rating: 4.6
        },
        {
            id: 'f3',
            name: 'Leather Sneakers',
            price: 89.99,
            image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
            category: 'fashion',
            tags: ['shoes', 'sneakers', 'casual'],
            rating: 4.4
        }
    ],
    home: [
        {
            id: 'h1',
            name: 'Modern Coffee Table',
            price: 199.99,
            image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500',
            category: 'home',
            tags: ['furniture', 'table', 'modern'],
            rating: 4.5
        },
        {
            id: 'h2',
            name: 'Scented Candle Set',
            price: 29.99,
            image: 'https://images.unsplash.com/photo-1602874801007-bd36c896d22d?w=500',
            category: 'home',
            tags: ['candles', 'decor', 'scented'],
            rating: 4.2
        },
        {
            id: 'h3',
            name: 'Throw Pillows Set',
            price: 39.99,
            image: 'https://images.unsplash.com/photo-1592789705501-f9ae4278a9c9?w=500',
            category: 'home',
            tags: ['pillows', 'decor', 'comfort'],
            rating: 4.3
        }
    ],
    sports: [
        {
            id: 's1',
            name: 'Yoga Mat',
            price: 29.99,
            image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
            category: 'sports',
            tags: ['yoga', 'fitness', 'exercise'],
            rating: 4.6
        },
        {
            id: 's2',
            name: 'Dumbbells Set',
            price: 149.99,
            image: 'https://images.unsplash.com/photo-1586401100295-7a8096fd231a?w=500',
            category: 'sports',
            tags: ['weights', 'fitness', 'exercise'],
            rating: 4.7
        },
        {
            id: 's3',
            name: 'Running Shoes',
            price: 119.99,
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
            category: 'sports',
            tags: ['shoes', 'running', 'fitness'],
            rating: 4.5
        }
    ],
    beauty: [
        {
            id: 'b1',
            name: 'Skincare Set',
            price: 89.99,
            image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500',
            category: 'beauty',
            tags: ['skincare', 'beauty', 'self-care'],
            rating: 4.8
        },
        {
            id: 'b2',
            name: 'Makeup Palette',
            price: 49.99,
            image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500',
            category: 'beauty',
            tags: ['makeup', 'cosmetics', 'beauty'],
            rating: 4.4
        },
        {
            id: 'b3',
            name: 'Luxury Perfume',
            price: 129.99,
            image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500',
            category: 'beauty',
            tags: ['fragrance', 'perfume', 'luxury'],
            rating: 4.6
        }
    ],
    watches: [
        {
            id: 'w1',
            name: 'Luxury Chronograph Watch',
            price: 299.99,
            image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500',
            category: 'watches',
            tags: ['luxury', 'chronograph', 'leather', 'analog'],
            rating: 4.7
        },
        {
            id: 'w2',
            name: 'Smart Fitness Watch',
            price: 199.99,
            image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500',
            category: 'watches',
            tags: ['smart', 'fitness', 'digital', 'health'],
            rating: 4.5
        },
        {
            id: 'w3',
            name: 'Classic Gold Watch',
            price: 399.99,
            image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500',
            category: 'watches',
            tags: ['gold', 'classic', 'luxury', 'analog'],
            rating: 4.8
        },
        {
            id: 'w4',
            name: 'Sports Digital Watch',
            price: 149.99,
            image: 'https://images.unsplash.com/photo-1508685096489-7a8096fd231a?w=500',
            category: 'watches',
            tags: ['sports', 'digital', 'waterproof'],
            rating: 4.4
        }
    ]
};

// Add rating property to products
Object.keys(products).forEach(category => {
    products[category].forEach(product => {
        // Add random rating between 2 and 5 if not exists
        if (!product.rating) {
            product.rating = (Math.random() * 3 + 2).toFixed(1);
        }
    });
});

// Initialize cart items from localStorage
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Update localStorage whenever cart changes
function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Cart functionality
function addToCart(item) {
    cartItems.push(item);
    saveCartToLocalStorage();
    updateCartDisplay();
    updateCartTotal();
    updateCartCount();
    
    // Create and show notification
    showNotification(`Product successfully added to your shopping cart: ${item.name}`);
}

function removeFromCart(itemId) {
    cartItems = cartItems.filter(item => item.id !== itemId);
    saveCartToLocalStorage();
    updateCartDisplay();
    updateCartTotal();
    updateCartCount();
}

// Cart button functionality
document.getElementById('cartButton').addEventListener('click', function() {
    const cartSection = document.getElementById('cartSection');
    cartSection.style.display = cartSection.style.display === 'none' ? 'block' : 'none';
});

function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    
    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        return;
    }
    
    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <button onclick="removeFromCart('${item.id}')" class="remove-btn">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartContainer.appendChild(cartItem);
    });
    
    if (cartItems.length > 0) {
        const checkoutButton = document.createElement('button');
        checkoutButton.className = 'checkout-btn';
        checkoutButton.textContent = 'Checkout';
        checkoutButton.onclick = openCheckoutModal;
        cartContainer.appendChild(checkoutButton);
    }
}

function updateCartTotal() {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cartItems.length;
}

// Home button functionality
document.querySelector('.logo').addEventListener('click', function() {
    // Hide all other sections
    document.getElementById('searchResultsSection').style.display = 'none';
    document.getElementById('similarItemsSection').style.display = 'none';
    document.getElementById('cartSection').style.display = 'none';
    document.getElementById('categoriesMenu').style.display = 'none';
    document.getElementById('accountSection').style.display = 'none';
    
    // Show trending section with all products
    const trendingSection = document.getElementById('trendingSection');
    const sectionHeader = trendingSection.querySelector('.section-header h2');
    sectionHeader.innerHTML = '<i class="fas fa-fire"></i> Trending Products';
    
    // Display all products
    displayTrendingItems('all');
    trendingSection.style.display = 'block';
});

// Notification System
function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Set icon based on type
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle'
    };
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${icons[type]}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Remove notification after delay
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Categories functionality
document.getElementById('categoriesButton').addEventListener('click', function() {
    const categoriesMenu = document.getElementById('categoriesMenu');
    categoriesMenu.style.display = categoriesMenu.style.display === 'none' ? 'block' : 'none';
});

// Account functionality
document.getElementById('accountButton').addEventListener('click', function() {
    const accountSection = document.getElementById('accountSection');
    accountSection.style.display = accountSection.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('showRegister').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'flex';
});

document.getElementById('showLogin').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'flex';
});

// Category filtering
const categoryTabs = document.querySelectorAll('.tab-btn');
categoryTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        categoryTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        this.classList.add('active');
        
        const category = this.dataset.category;
        displayTrendingItems(category);
    });
});

// Display trending items with category filter
function displayTrendingItems(category = 'all') {
    const trendingGrid = document.getElementById('trending-items');
    const fallbackImage = 'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=500';
    let items = [];

    // Get products based on category
    if (category === 'all') {
        Object.values(products).forEach(categoryProducts => {
            items = items.concat(categoryProducts);
        });
    } else {
        items = products[category] || [];
    }

    // Clear previous items and category description
    trendingGrid.innerHTML = '';
    document.getElementById('categoryDescription').textContent = 
        category !== 'all' ? `Showing ${category} products` : '';

    // Display products
    items.forEach(item => {
        const productCard = document.createElement('div');
        productCard.className = 'trending-item';
        productCard.setAttribute('data-category', item.category);
        
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${item.image}" 
                     alt="${item.name}"
                     onerror="this.onerror=null; this.src='${fallbackImage}';">
                <div class="product-overlay">
                    <button onclick="addToCart(${JSON.stringify(item).replace(/"/g, '&quot;')})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
            <div class="item-details">
                <h3>${item.name}</h3>
                <div class="rating">
                    <span class="stars">${'★'.repeat(Math.floor(item.rating || 4))}${(item.rating || 4) % 1 >= 0.5 ? '½' : ''}</span>
                    <span class="rating-number">(${item.rating || 4.0})</span>
                </div>
                <p class="price">$${item.price.toFixed(2)}</p>
                <div class="tags">
                    ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        trendingGrid.appendChild(productCard);
    });
}

function applyFilters() {
    const priceFilter = document.getElementById('priceFilter').value;
    const ratingFilter = parseFloat(document.getElementById('ratingFilter').value);
    const categoryFilter = document.getElementById('categoryFilter').value;
    
    const trendingGrid = document.getElementById('trending-items');
    let filteredItems = [];
    
    // Get all products
    Object.values(products).forEach(categoryProducts => {
        filteredItems = filteredItems.concat(categoryProducts);
    });
    
    // Apply filters
    filteredItems = filteredItems.filter(item => {
        const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
        const matchesRating = ratingFilter === 'all' || (item.rating || 4) >= ratingFilter;
        
        let matchesPrice = true;
        if (priceFilter !== 'all') {
            const [min, max] = priceFilter.split('-').map(Number);
            if (max) {
                matchesPrice = item.price >= min && item.price <= max;
            } else {
                matchesPrice = item.price >= min;
            }
        }
        
        return matchesCategory && matchesRating && matchesPrice;
    });
    
    // Update display
    displayFilteredProducts(filteredItems);
}

function displayFilteredProducts(items) {
    const trendingGrid = document.getElementById('trending-items');
    const description = document.getElementById('categoryDescription');
    
    description.textContent = `Found ${items.length} product${items.length === 1 ? '' : 's'}`;
    
    if (items.length === 0) {
        trendingGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your filters</p>
            </div>
        `;
        return;
    }
    
    displayTrendingItems('all', items);
}

function clearFilters() {
    document.getElementById('priceFilter').value = 'all';
    document.getElementById('ratingFilter').value = 'all';
    document.getElementById('categoryFilter').value = 'all';
    displayTrendingItems('all');
}

// Display all products when page loads
document.addEventListener('DOMContentLoaded', () => {
    displayTrendingItems('all');
});

// Handle category click
document.querySelectorAll('#categoryList li').forEach(category => {
    category.addEventListener('click', function() {
        const categoryName = this.dataset.category;
        displayCategoryItems(categoryName);
        findSimilarItems(categoryName);
    });
});

// Display items from a specific category
function displayCategoryItems(category) {
    const trendingGrid = document.getElementById('trending-items
