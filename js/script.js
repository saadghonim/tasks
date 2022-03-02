let userInfo = document.getElementById("user_info");
let userDom = document.getElementById("user");
let links = document.getElementById("links");

let usern = localStorage.getItem("username");

if(usern){
    links.remove();
    userInfo.style.display = "block";
    userDom.innerHTML = usern;
}

console.log(localStorage)