const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamicon = document.querySelector('.menu')
const mobilemenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamicon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toglgleAsideMenu)

function toggleDesktopMenu() {
    const asideMenuOpen = aside.classList.contains("inactive")

    if(!asideMenuOpen) {
        aside.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
    const asideMenuOpen = aside.classList.contains("inactive")

    if (!asideMenuOpen){
        aside.classList.add("inactive")
    }
    mobilemenu.classList.toggle("inactive")
}

function toglgleAsideMenu() {
    const mobileMenuOpen = mobilemenu.classList.contains("inactive")
    const DesktopMenuOpen = desktopMenu.classList.contains("inactive")

    if (!mobileMenuOpen) {
        mobilemenu.classList.add("inactive")
    }

    if(!DesktopMenuOpen){
        desktopMenu.classList.add("inactive")
    }
    aside.classList.toggle("inactive")
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    img: "./logos/celular.jpeg"
})
productList.push({
    name: "Celular",
    price: 400,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Pantalla",
    price: 350,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function RenderProducts(arr) {
    for(product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', productList.img);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);

    // const productCard = document.createElement('div');
    // productCard.classList.add("product-card");

    // const img = document.createElement("img");
    // img.setAttribute("src", product.img);

    // const productInfo = document.createElement('div')
    // productInfo.classList.add("product-info")

    // const productInfoDiv = document.createElement('div');

    // const productPrice = document.createElement('p');
    // productPrice.innerText(product.price);
    // const productName = document.createElement('p');
    // productName.innerText = product.name;

    // productInfoDiv.appendChild(productPrice);
    // productInfoDiv.appendChild(productName);

    // const productInfoFigure = document.createElement("figure");;
    // const productImgCart = document.createElement("img");
    // productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    // productInfoFigure.appendChild(productImgCart);

    // productInfo.appendChild(productInfoDiv)
    // productInfo.appendChild(productInfoFigure)

    // productCard.appendChild(img)
    // productCard.appendChild(productInfo)

    // cardsContainer.appendChild(productCard)
}
}

RenderProducts(productList);