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
    showNotification(`${item.name} added to cart!`);
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
    const trendingGrid = document.getElementById('trending-items');
    trendingGrid.innerHTML = '';
    
    if (products[category]) {
        products[category].forEach(item => {
            const itemElement = createProductCard(item);
            trendingGrid.appendChild(itemElement);
        });
    }
}

// Find and display similar items
function findSimilarItems(category) {
    const similarSection = document.getElementById('similarItemsSection');
    const similarGrid = document.getElementById('similarItems');
    similarGrid.innerHTML = '';
    
    // Get items from other categories that might be relevant
    const similarItems = [];
    for (let cat in products) {
        if (cat !== category) {
            products[cat].forEach(item => {
                // Calculate similarity score based on tags
                const similarityScore = calculateSimilarity(item, products[category][0]);
                if (similarityScore > 0.3) { // Threshold for similarity
                    similarItems.push({...item, similarityScore});
                }
            });
        }
    }
    
    // Sort by similarity score and display top items
    similarItems
        .sort((a, b) => b.similarityScore - a.similarityScore)
        .slice(0, 4)
        .forEach(item => {
            const itemElement = createSimilarItemCard(item);
            similarGrid.appendChild(itemElement);
        });
    
    similarSection.style.display = 'block';
}

// Calculate similarity between items based on tags
function calculateSimilarity(item1, item2) {
    const tags1 = new Set(item1.tags);
    const tags2 = new Set(item2.tags);
    const intersection = new Set([...tags1].filter(x => tags2.has(x)));
    const union = new Set([...tags1, ...tags2]);
    return intersection.size / union.size;
}

// Create a product card element
function createProductCard(item, searchTerm = '') {
    const div = document.createElement('div');
    div.className = 'trending-item';
    
    // Highlight search term if present
    let highlightedName = item.name;
    if (searchTerm) {
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        highlightedName = item.name.replace(regex, '<mark>$1</mark>');
    }
    
    div.innerHTML = `
        <div class="product-image-container">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="product-overlay">
                <button class="quick-view-btn" onclick="quickView('${item.id}')">
                    <i class="fas fa-eye"></i> Quick View
                </button>
            </div>
        </div>
        <div class="item-details">
            <h3>${highlightedName}</h3>
            <p class="price">$${item.price.toFixed(2)}</p>
            <div class="tags">
                ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <button onclick='addToCart(${JSON.stringify(item)})' class="add-to-cart-btn">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
        </div>
    `;
    return div;
}

// Create a similar item card element
function createSimilarItemCard(item) {
    const div = document.createElement('div');
    div.className = 'similar-item';
    div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="similar-item-details">
            <h4>${item.name}</h4>
            <span class="similarity-score">${Math.round(item.similarityScore * 100)}% match</span>
            <p class="price">$${item.price.toFixed(2)}</p>
            <button onclick='addToCart(${JSON.stringify(item)})' class="add-to-cart-btn">
                <i class="fas fa-shopping-cart"></i> Add
            </button>
        </div>
    `;
    return div;
}

// Handle search functionality
function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();
    performSearch(searchTerm);
}

// Add event listeners for search
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    // Handle form submit (for both button click and Enter key)
    searchForm.addEventListener('submit', handleSearch);

    // Handle Enter key in search input
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch(event);
        }
    });
});

// Enhanced search functionality
function performSearch(searchTerm) {
    if (!searchTerm) {
        displayTrendingItems('all');
        return;
    }

    const results = [];
    for (let category in products) {
        products[category].forEach(item => {
            const matchesName = item.name.toLowerCase().includes(searchTerm);
            const matchesCategory = item.category.toLowerCase().includes(searchTerm);
            const matchesTags = item.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            
            if (matchesName || matchesCategory || matchesTags) {
                results.push(item);
            }
        });
    }

    const trendingGrid = document.getElementById('trending-items');
    
    if (results.length === 0) {
        trendingGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try different keywords or browse our categories</p>
            </div>
        `;
        return;
    }

    displaySearchResults(results, searchTerm);
}

// Display search results with animation
function displaySearchResults(results, searchTerm) {
    const trendingGrid = document.getElementById('trending-items');
    const fallbackImage = 'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=500';

    // Clear previous results and category description
    document.getElementById('categoryDescription').textContent = '';
    document.querySelectorAll('.category-caption').forEach(caption => caption.textContent = '');

    trendingGrid.innerHTML = results.map(item => `
        <div class="trending-item" data-category="${item.category}">
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
        </div>
    `).join('');

    // Show search results message
    document.getElementById('categoryDescription').textContent = 
        `Found ${results.length} product${results.length === 1 ? '' : 's'} matching "${searchTerm}"`;
}

// Real-time Search Implementation
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    if (searchTerm.length >= 1) { // Reduced to 1 character for faster search
        performSearch(searchTerm);
    } else {
        document.getElementById('searchResultsSection').style.display = 'none';
    }
});

function displayCategoryItems(category) {
    const trendingSection = document.getElementById('trendingSection');
    const trendingGrid = document.getElementById('trending-items');
    const sectionHeader = trendingSection.querySelector('.section-header h2');
    
    // Update section title with category name and icon
    sectionHeader.innerHTML = `<i class="fas fa-${getCategoryIcon(category)}"></i> ${category.charAt(0).toUpperCase() + category.slice(1)} Products`;
    
    // Clear existing items
    trendingGrid.innerHTML = '';
    
    if (products[category]) {
        // Add category description
        const description = document.createElement('p');
        description.className = 'category-description';
        description.textContent = getCategoryDescription(category);
        trendingGrid.parentElement.insertBefore(description, trendingGrid);
        
        // Display category items with animation
        products[category].forEach((item, index) => {
            const itemElement = createProductCard(item);
            itemElement.style.animation = `fadeIn 0.3s ease forwards ${index * 0.1}s`;
            trendingGrid.appendChild(itemElement);
        });
    }
    
    trendingSection.style.display = 'block';
}

function getCategoryIcon(category) {
    const icons = {
        electronics: 'laptop',
        fashion: 'tshirt',
        home: 'home',
        sports: 'basketball-ball',
        beauty: 'spa',
        watches: 'watch'
    };
    return icons[category] || 'tag';
}

function getCategoryDescription(category) {
    const descriptions = {
        electronics: 'Discover the latest in technology with our cutting-edge electronic devices',
        fashion: 'Express yourself with our trendy and stylish fashion collection',
        home: 'Transform your living space with our elegant home decor items',
        sports: 'Achieve your fitness goals with our high-quality sports equipment',
        beauty: 'Enhance your natural beauty with our premium skincare and cosmetics',
        watches: 'Find the perfect timepiece to elevate your style'
    };
    return descriptions[category] || '';
}

// Add animation keyframes to document
if (!document.querySelector('#animationStyles')) {
    const style = document.createElement('style');
    style.id = 'animationStyles';
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Quick View functionality
function quickView(productId) {
    // Find the product
    let product = null;
    for (let category in products) {
        const found = products[category].find(item => item.id === productId);
        if (found) {
            product = found;
            break;
        }
    }
    
    if (product) {
        const modal = document.createElement('div');
        modal.className = 'quick-view-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="close-modal"><i class="fas fa-times"></i></button>
                <div class="product-details">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <h2>${product.name}</h2>
                        <p class="price">$${product.price.toFixed(2)}</p>
                        <div class="tags">
                            ${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        <button onclick='addToCart(${JSON.stringify(product)})' class="add-to-cart-btn">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
}

// User Management
let currentUser = null;

// Check for remembered user
document.addEventListener('DOMContentLoaded', function() {
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
        currentUser = JSON.parse(rememberedUser);
        updateUIForLoggedInUser();
    }
    updateCartDisplay();
    updateCartTotal();
    updateCartCount();
});

// Login functionality
document.getElementById('loginButton').addEventListener('click', function() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // In a real app, you would validate with a backend server
    // This is just for demonstration
    currentUser = {
        name: email.split('@')[0],
        email: email
    };

    if (rememberMe) {
        localStorage.setItem('rememberedUser', JSON.stringify(currentUser));
    }

    updateUIForLoggedInUser();
});

// Register functionality
document.getElementById('registerButton').addEventListener('click', function() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // In a real app, you would send this to a backend server
    // This is just for demonstration
    currentUser = {
        name: name,
        email: email
    };

    localStorage.setItem('rememberedUser', JSON.stringify(currentUser));
    updateUIForLoggedInUser();
});

// Logout functionality
document.getElementById('logoutButton').addEventListener('click', function() {
    currentUser = null;
    localStorage.removeItem('rememberedUser');
    updateUIForLoggedOutUser();
});

function updateUIForLoggedInUser() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('userProfile').style.display = 'block';
    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('userEmail').textContent = currentUser.email;
    document.getElementById('accountTitle').textContent = 'My Account';
}

function updateUIForLoggedOutUser() {
    document.getElementById('loginForm').style.display = 'flex';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('userProfile').style.display = 'none';
    document.getElementById('accountTitle').textContent = 'Login';
}

// Close account section when clicking outside
document.addEventListener('click', function(e) {
    const accountSection = document.getElementById('accountSection');
    const accountButton = document.getElementById('accountButton');
    
    if (!accountSection.contains(e.target) && e.target !== accountButton) {
        accountSection.style.display = 'none';
    }
});

// Close button functionality
document.getElementById('closeAccount').addEventListener('click', function() {
    document.getElementById('accountSection').style.display = 'none';
});

// Utility function for debouncing search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Checkout functionality
function openCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    modal.style.display = 'block';
    
    // Display cart items in checkout
    const checkoutItemsList = document.getElementById('checkoutItemsList');
    checkoutItemsList.innerHTML = cartItems.map(item => `
        <div class="checkout-item">
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        </div>
    `).join('');
    
    // Update total
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('checkoutTotal').textContent = `$${total.toFixed(2)}`;
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').style.display = 'none';
}

function processCheckout(event) {
    event.preventDefault();
    
    // Validate form
    const formData = {
        fullName: document.getElementById('fullName').value,
        streetAddress: document.getElementById('streetAddress').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zipCode: document.getElementById('zipCode').value,
        cardNumber: document.getElementById('cardNumber').value,
        expiryDate: document.getElementById('expiryDate').value,
        cvv: document.getElementById('cvv').value
    };
    
    // Show success message
    showNotification('Order placed successfully! Thank you for shopping with us.');
    
    // Clear cart and localStorage
    cartItems = [];
    saveCartToLocalStorage();
    updateCartDisplay();
    updateCartCount();
    closeCheckoutModal();
    
    // Reset form
    event.target.reset();
}

document.getElementById('checkoutForm').addEventListener('submit', processCheckout);

// Filter functionality
let activeFilters = {
    price: 'all',
    rating: 'all',
    category: 'all'
};

function toggleFilterMenu() {
    const filterMenu = document.getElementById('filterMenu');
    const filterButton = document.getElementById('filterButton');
    const isVisible = filterMenu.style.display === 'block';
    
    filterMenu.style.display = isVisible ? 'none' : 'block';
    filterButton.classList.toggle('active', !isVisible);
}

function applyFilters() {
    const priceFilter = document.getElementById('priceFilter').value;
    const ratingFilter = document.getElementById('ratingFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;
    
    activeFilters = {
        price: priceFilter,
        rating: ratingFilter,
        category: categoryFilter
    };
    
    displayFilteredProducts();
    toggleFilterMenu();
}

function clearFilters() {
    document.getElementById('priceFilter').value = 'all';
    document.getElementById('ratingFilter').value = 'all';
    document.getElementById('categoryFilter').value = 'all';
    
    activeFilters = {
        price: 'all',
        rating: 'all',
        category: 'all'
    };
    
    displayFilteredProducts();
    toggleFilterMenu();
}

function displayFilteredProducts() {
    let filteredProducts = [];
    
    // Get all products in a single array
    Object.keys(products).forEach(category => {
        filteredProducts = filteredProducts.concat(products[category]);
    });
    
    // Apply category filter
    if (activeFilters.category !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.category === activeFilters.category
        );
    }
    
    // Apply price filter
    if (activeFilters.price !== 'all') {
        const [min, max] = activeFilters.price.split('-').map(Number);
        filteredProducts = filteredProducts.filter(product => {
            if (activeFilters.price === '200+') {
                return product.price >= 200;
            }
            return product.price >= min && product.price <= max;
        });
    }
    
    // Apply rating filter
    if (activeFilters.rating !== 'all') {
        const minRating = parseFloat(activeFilters.rating);
        filteredProducts = filteredProducts.filter(product => 
            parseFloat(product.rating) >= minRating
        );
    }
    
    // Display filtered products
    const trendingGrid = document.getElementById('trending-items');
    trendingGrid.innerHTML = filteredProducts.map(product => `
        <div class="trending-item">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-overlay">
                    <button onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
            <div class="item-details">
                <h3>${product.name}</h3>
                <div class="rating">
                    <span class="stars">${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 >= 0.5 ? '½' : ''}</span>
                    <span class="rating-number">(${product.rating})</span>
                </div>
                <p class="price">$${product.price.toFixed(2)}</p>
                <div class="tags">
                    ${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Event listeners for filter functionality
document.getElementById('filterButton').addEventListener('click', toggleFilterMenu);
document.getElementById('applyFilters').addEventListener('click', applyFilters);
document.getElementById('clearFilters').addEventListener('click', clearFilters);

// Close filter menu when clicking outside
document.addEventListener('click', function(event) {
    const filterMenu = document.getElementById('filterMenu');
    const filterButton = document.getElementById('filterButton');
    
    if (!filterMenu.contains(event.target) && !filterButton.contains(event.target)) {
        filterMenu.style.display = 'none';
        filterButton.classList.remove('active');
    }
});

// Update initial display
window.addEventListener('DOMContentLoaded', () => {
    displayFilteredProducts();
});

// Newsletter subscription handling
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput.value.trim();
    const messageContainer = document.getElementById('subscription-message');

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showSubscriptionMessage('Please enter a valid email address 📧', 'error');
        return;
    }

    // Store email in localStorage
    const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
    if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('subscribers', JSON.stringify(subscribers));
        showSubscriptionMessage('🎉 Successfully subscribed! Welcome to our newsletter family! 🎉', 'success');
        emailInput.value = ''; // Clear input
        
        // Add confetti effect
        createConfetti();
    } else {
        showSubscriptionMessage('You\'re already part of our newsletter family! 😊', 'error');
    }
});

function showSubscriptionMessage(message, type) {
    const messageContainer = document.getElementById('subscription-message');
    messageContainer.textContent = message;
    messageContainer.className = 'subscription-message ' + type + ' show';
    
    // Hide message after 4 seconds
    setTimeout(() => {
        messageContainer.className = 'subscription-message';
    }, 4000);
}

// Confetti effect
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Modal Functions
function showHelpModal() {
    const modal = document.getElementById('helpModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function showFAQModal() {
    const modal = document.getElementById('faqModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function toggleFAQ(element) {
    element.classList.toggle('active');
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Help and FAQ functionality
document.getElementById('helpButton').addEventListener('click', () => {
    document.getElementById('helpModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
});

document.getElementById('faqButton').addEventListener('click', () => {
    document.getElementById('faqModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
});

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

function toggleFAQ(element) {
    // Close all other FAQs
    const allQuestions = document.querySelectorAll('.faq-question');
    allQuestions.forEach(question => {
        if (question !== element && question.classList.contains('active')) {
            question.classList.remove('active');
            const icon = question.querySelector('i');
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
            question.nextElementSibling.style.display = 'none';
        }
    });

    // Toggle current FAQ
    element.classList.toggle('active');
    const answer = element.nextElementSibling;
    const icon = element.querySelector('i');
    
    if (element.classList.contains('active')) {
        answer.style.display = 'block';
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
    } else {
        answer.style.display = 'none';
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
    }
}

// Close modals when clicking outside
window.addEventListener('click', (event) => {
    const helpModal = document.getElementById('helpModal');
    const faqModal = document.getElementById('faqModal');
    
    if (event.target === helpModal) {
        closeModal('helpModal');
    }
    if (event.target === faqModal) {
        closeModal('faqModal');
    }
});

// Close modals with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const modals = ['helpModal', 'faqModal'];
        modals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            if (modal.style.display === 'block') {
                closeModal(modalId);
            }
        });
    }
});
