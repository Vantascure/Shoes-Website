const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
        <div class="navbar">
            <a href="index.html"><img src="images/logo.svg" alt="company logo" class="company-logo"></a>
            <ul class="links-container" id="Menu">
                <li><a href="index.html" class="link">Home</a></li>
                <li><a href="about.html" class="link">About</a></li>
                <li><a href="products.html" class="link">Products</a></li>
                <li><a href="contact.html" class="link">Contact</a></li>
            </ul>
            <div class="navbar-items">
                
                <a href="cart.html"><img src="images/shopping-cart.png" alt="shopping-cart"></a>
                <img src="images/menu-icon.svg" class="menu-icon" onclick="menuToggle()">
            </div>
        </div>
    `;
}

createNav();

var menuContainer = document.getElementById("Menu");

menuContainer.style.maxHeight = "0px";

function menuToggle() {
    if(menuContainer.style.maxHeight == "0px") {
        menuContainer.style.maxHeight = "300px";
    } else {
        menuContainer.style.maxHeight = "0px";
    }
}

/*<a href="#"><img src="images/user-icon.png" alt="user-icon"></a>*/