const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-logo-container">
                <img src="images/logo-1.svg" alt="">
                <div class="footer-description">
                </div>
            </div>
            <ul class="pages-list">
                <li class="pages-list-title">Pages</li>
                <li><a href="index.html" class="pages-list-link">Home</a></li>
                <li><a href="about.html" class="pages-list-link">About Us</a></li>
                <li><a href="products.html" class="pages-list-link">Products</a></li>
                <li><a href="contact.html" class="pages-list-link">Contact Us</a></li>
            </ul>
        </div>
    `;
}

createFooter();