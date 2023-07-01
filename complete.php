<?php
  if (isset($_POST["submit"])) {
    echo "<script>alert('Payment Successful.');</script>";
    
}else {
      echo "<script>alert('Error Please Try Again.');</script>";
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShoeX - Best Shoes Best Prices</title>

    <link rel="stylesheet" href="css/landing.css">

</head>
<body>
    
    <nav></nav>

    <!-- Hero section -->
    <section class="hero">
        <div class="hero-info">
            <h1 class="hero-title">Nike Tiempo Legend 9 Academy MG</h1>
            <p class="hero-description">
                Lightest Tiempos to date, the Nike Tiempo Legend 9 
                Academy MG lets you go on the offensive with a 
                low-profile design that's reinvented for attackers.
            </p>
            <a href="products.html" class="hero-btn">Shop Now</a>
        </div>
        <div class="hero-image">
            <img src="images/hero-image.png" alt="hero-image">
        </div>
    </section>

    <!-- Featured Products section -->
    <section class="featured">
        <h2 class="featured-title">Featured Products</h2>
        <button class="pre-btn"><img src="images/arrow.png" alt=""></button>
        <button class="nxt-btn"><img src="images/arrow.png" alt=""></button>
        <div class="product-container">
            <div class="product-card">
                <div class="product-image">
                    <img src="images/1_nike-mercurial vapor-14-academy.jpg" alt="" class="product-thumb">
                    <button class="card-btn">Add To Cart</button>
                </div>
                <div class="product-info">
                    <h3 class="product-name">Nike Mercurial Vapor 14 Academy FG/MG</h3>
                    <p class="product-price">RM 329</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img src="images/2_Nike Mercurial Superfly 8 Academy KM MG.jpg" alt="" class="product-thumb">
                    <button class="card-btn">Add To Cart</button>
                </div>
                <div class="product-info">
                    <h3 class="product-name">Nike Mercurial Superfly 8 Academy KM MG</h3>
                    <p class="product-price">RM 399</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img src="images/3_nike mercurial superfly 8 elite fg.jpg" alt="" class="product-thumb">
                    <button class="card-btn">Add To Cart</button>
                </div>
                <div class="product-info">
                    <h3 class="product-name">Nike Mercurial Superfly 8 Elite FG</h3>
                    <p class="product-price">RM 1065</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img src="images/4_Nike Phantom GT2 Elite FG.jpg" alt="" class="product-thumb">
                    <button class="card-btn">Add To Cart</button>
                </div>
                <div class="product-info">
                    <h3 class="product-name">Nike Phantom GT2 Elite FG</h3>
                    <p class="product-price">RM 1079</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img src="images/5_nike-phantom-gt2-elite-dynamic-fit-fg.jpg" alt="" class="product-thumb">
                    <button class="card-btn">Add To Cart</button>
                </div>
                <div class="product-info">
                    <h3 class="product-name">Nike Phantom GT2 Elite Dynamic Fit FG</h3>
                    <p class="product-price">RM 1209</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img src="images/6_nike-mercurial-vapor-14-academy-hg.jpg" alt="" class="product-thumb">
                    <button class="card-btn">Add To Cart</button>
                </div>
                <div class="product-info">
                    <h3 class="product-name">Nike Mercurial Vapor 14 Academy HG</h3>
                    <p class="product-price">RM 329</p>
                </div>
            </div>
        </div>
    </section>

    <section class="products-div">
        <div class="products-div-img">
            <img src="images/products-div.png">
        </div>
        <div class="products-div-content">
            <h1>Want the best football shoes for the best prices?</h1>
            <a href="products.html">Explore</a>
        </div>
    </section>

    

    <footer></footer>
    
</body>
</html>

<script src="js/nav.js"></script>
<script src="js/landing.js"></script>
<script src="js/footer.js"></script>
<script src="js/products.js"></script>