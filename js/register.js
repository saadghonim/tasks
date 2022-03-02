// register 
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let register_btn = document.getElementById("sign_up");
let form_ = document.querySelector(".form_");

// username.addEventListener('focus', function(event){

//     console.log(event.target.value);
// }
// )
register_btn.addEventListener("click", function(e){
    e.preventDefault();
    if(username.value === "" || email.value === "" || password.value === ""){
        alert("please fill data")
    }else{
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);

        setTimeout(() => {
            window.location = 'index.html';
        }, 1500);
    }
})

username.addEventListener("change", function(e){
console.log(e)

});