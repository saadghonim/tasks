let links = document.getElementById("links");
let user_info = document.getElementById("user_info");
let user_ = document.getElementById("user");
let  signout = document.getElementById("signout");
let cartsProuductsDom = document.querySelector(".carts_prouducts div")
let cartsProuductsMenu = document.querySelector(".carts_prouducts")
let badgeDom = document.querySelector(".badge")
let getuser = localStorage.getItem("username");
let shoppingCartIcon = document.querySelector(".shoppingCart")
if(getuser){
    links.remove();
    user_info.style.display = "flex";
    user_.innerHTML = getuser;
}

// sigin out
signout.addEventListener("click", signout_);
function signout_(e){
    e.preventDefault();
    localStorage.clear();
    setTimeout(() => {
        window.location = "register.html"
    }, 1500);
}

let prodcutsDom = document.querySelector(".products");

let products = [
  {
    id:1,
    title: "test1",
    size: "large",
    imageUrl: "images/2.jpg",
  },
  {
    id:2,
    title: "test2",
    size: "small",
    imageUrl: "images/3.jpg"
  },
  {
    id:3,
    title: "test3",
    size: "medium",
    imageUrl: "images/4.jpg"
  },
  {
    id:4,
    title: "test4",
    size: "large",
    imageUrl: "images/5.jpg"
  },
]

function drawprouductsUI (){
  let productUI = products.map((item) => {
    return`
    <div class="products-item">
      <img src="${item.imageUrl}" alt="products">
      <div class="products-item-desc">
        <h2 class="m_P_gh">${item.title}</h2>
        <p class="m_P_gh">Lorem ipsum dolor sit amet consectetur </p>
        <span>${item.size}</span>
      </div>
      <div class="products-item-desc-action">
        <button class="add-to-cart" onclick="addedToCart(${item.id})">add to cart</button>
        <i class="favorite fa fa-heart"></i>
      </div>
    </div>
    `
  })
  prodcutsDom.innerHTML = productUI;
}
drawprouductsUI();

function addedToCart(id) {
let shoosenItem = products.find((item) => item.id === id);
cartsProuductsDom.innerHTML += `<p>${shoosenItem.title}</p>`

let cartprouductsItem = document.querySelectorAll(".carts_prouducts div p");
badgeDom.style.display = "block";
badgeDom.innerHTML = cartprouductsItem.length;
}
function chickLogedUser(){
  if(localStorage.getItem("username")){
    window.location = "cartprouducts.html"
  }else{
    window.location = "login.html"
  }
}
shoppingCartIcon.addEventListener("click", openCartMenu);
function openCartMenu (){
  if(cartsProuductsDom.innerHTML != ""){
    cartsProuductsMenu.style.display = "block";
  }
}
