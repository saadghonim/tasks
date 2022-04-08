let links = document.getElementById("links");
let user_info = document.getElementById("user_info");
let user_ = document.getElementById("user");
let  signout = document.getElementById("signout");

let getuser = localStorage.getItem("username");
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
console.log(shoosenItem)


}
function chickLogedUser(){
  if(localStorage.getItem("username")){
    window.location = "cartprouducts.html"
  }else{
    window.location = "login.html"
  }
}


let produtctsN = [
  {
    id: 11,
    href: "#",
    imageUrl2: "images/new/1.png",
    btn: "أضف للسلة",
    price:"500 ريال",
    priceOff:"300 ريال",
    ancNew: "فلتر منزلي 5 مراحل"
  },
  {
    id: 12,
    href: "#",
    imageUrl2: "images/new/1.png",
    btn: "أضف للسلة",
    price:"500 ريال",
    priceOff:"300 ريال",
    ancNew: "فلتر منزلي 5 مراحل"

  },
  {
    id: 13,
    href: "#",
    imageUrl2: "images/new/1.png",
    btn: "أضف للسلة",
    price:"500 ريال",
    priceOff:"300 ريال",
    ancNew: "فلتر منزلي 5 مراحل"

  },
  {
    id: 14,
    href: "#",
    imageUrl2: "images/new/1.png",
    btn: "أضف للسلة",
    price:"500 ريال",
    priceOff:"300 ريال",
    ancNew: "فلتر منزلي 5 مراحل"

  },
  {
    id: 15,
    href: "#",
    imageUrl2: "images/new/1.png",
    btn: "أضف للسلة",
    price:"500 ريال",
    priceOff:"300 ريال",
    ancNew: "فلتر منزلي 5 مراحل"

  },
  {
    id: 16,
    href: "#",
    imageUrl2: "images/new/1.png",
    btn: "أضف للسلة",
    price:"500 ريال",
    priceOff:"300 ريال",
    ancNew: "فلتر منزلي 5 مراحل"

  },
  {
    id: 17,
    href: "#",
    imageUrl2: "images/new/1.png",
    btn: "أضف للسلة",
    price:"500 ريال",
    priceOff:"300 ريال",
    ancNew: "فلتر منزلي 5 مراحل"

  },
  {
    id: 18,
    href: "#",
    imageUrl2: "images/new/1.png",
    btn: "أضف للسلة",
    price:"500 ريال",
    priceOff:"300 ريال",
    ancNew: "فلتر منزلي 5 مراحل"

  },
]

let newDom = document.querySelector(".new");

function nowProudctsUi (){
  let NewUi = produtctsN.map((el) => {
    return`
    <div class="div_item">
    <a href="${el.href}" class="anc_new anc_gh">
      <img src="${el.imageUrl2}">
      <button class="btn_gh bt_new">
        <i class="fas fa-shopping-basket"></i>
        ${el.btn}
      </button>
    </a>
    <a href="#" class="anc_new_name anc_gh">${el.ancNew}</a>
    <div class="price">
      <span>${el.price}</span>
      <p class="m_p_gh">${el.priceOff}</p>
    </div>
  </div>
    `
  })
  newDom.innerHTML = NewUi;
}
nowProudctsUi();