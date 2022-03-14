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
    imageUrl: "images/2.jpg"
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
  let proudctUI = products.map((item) => {
    return`
    
    `
  })
}