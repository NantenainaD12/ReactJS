import React from 'react';

function App() {
    return (
        <div>
            <header>
                <h1>Header</h1>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <div class="left-grid">
                    <h2>Left Grid</h2>
                    <p>Some content here...</p>
                </div>
                <div class="main-content">
                    <h2>Main Content</h2>
                    <div class="product-grid">
                        <div class="product-card">
                            <img src="product1.jpg" alt="Product 1" />
                            <h3>Product 1</h3>
                            <p>Description of product 1...</p>
                            <p>Price: $100</p>
                        </div>
                        <div class="product-card">
                            <img src="product2.jpg" alt="Product 2" />
                            <h3>Product 2</h3>
                            <p>Description of product 2...</p>
                            <p>Price: $200</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    );
}

export default App;
