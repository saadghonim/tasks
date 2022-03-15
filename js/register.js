let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let btnSignUp = document.querySelector("#sign_Up");

btnSignUp.addEventListener("click", function(e){
  e.preventDefault();
  if(username.value === ""){
    username.focus();
  }else if (email.value === ""){
    email.focus();
  }else if (password.value === ""){
    password.focus();
  }else{
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    setTimeout(() => {
      window.location = "login.html";
    });
  }
})

let eye = document.querySelector("#eyes_");
let eyse_s = document.querySelector("#eyse_s");

eye.addEventListener("click", function(){
  password.setAttribute("type", "text");
  this.style.display = "none";
  eyse_s.style.display = "block";
})
eyse_s.addEventListener("click", function(){
  password.setAttribute("type", "password");
  this.style.display = "none";
  eye.style.display = "block";
})
