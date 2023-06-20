const navEmail = document.querySelector(".navbar-email");
const menuHamMenu = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".card-container");
const productDetailContainer = document.querySelector("#productDetail");


navEmail.addEventListener("click", toggleDesktopMenu);
menuHamMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  const isProductDetailClosed =
    productDetailContainer.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");

}

function openProductDetailAside(){
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside(){

  shoppingCartContainer.classList.add("inactive");

  productDetailContainer.classList.add("inactive");
}

const productList = [];

productList.push(
  {
    nombre: "Motocicleta",
    precio: 120,
    imagen:
      "https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }
);

productList.push({
  nombre: "Motocicleta",
  precio: 120,
  imagen:
    "https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
  nombre: "Motocicleta",
  precio: 120,
  imagen:
    "https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
  nombre: "Motocicleta",
  precio: 120,
  imagen:
    "https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

function renderProducts(){

for (product of productList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  

  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.imagen);
  productImg.addEventListener("click", openProductDetailAside); 

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productInfoDiv = document.createElement("div");

  const producPrecio = document.createElement("p");
  producPrecio.innerText = "$" + product.precio;

  const productNombre = document.createElement("p");
  productNombre.innerText = product.nombre;

  productInfoDiv.appendChild(producPrecio);
  productInfoDiv.appendChild(productNombre);

  const productInfoFigure = document.createElement("figure");

  const productInfoCard = document.createElement("img");
  productInfoCard.setAttribute("src", "../4-Fusio Proyecto/bt_add_to_cart.svg");

  productInfoFigure.appendChild(productInfoCard);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);
}
}

renderProducts(productList);
